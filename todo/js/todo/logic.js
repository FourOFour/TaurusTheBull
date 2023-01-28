import TodoRender from "./render.js";
import deafultPresets from "./defaultPresets.js";

export default function TodoLogic({id, shouldInit = true, presets = {}} = {}) {
    // example of default values
    /*
        defult: {
            id: 'app', // this will load by default from deafultPresets / deafultPresets.appId
            shouldInit: true,
            presets = {}
        }
    */

    // Using var because they will be used through the enitre scope
    // + Private variables (execpt app)
    /*
        In case someone wants to only make changes or edit
        presets.newTaskClass.form ( for example )
        they don't need to pass all properties
        (if not it will be overwriten)
        A bit seems too much code but gives us too much flexbility
    */
    presets.newTaskClass = Object.assign({}, deafultPresets.newTaskClass, presets.newTaskClass);
    presets.taskElementClass = Object.assign({}, deafultPresets.taskElementClass, presets.taskElementClass);
    presets.taskElementClassEdit = Object.assign({}, deafultPresets.taskElementClassEdit, presets.taskElementClassEdit);

    // so we can over-write any preset we want
    presets = Object.assign({}, deafultPresets, presets);

    if (id) presets.appId = id;

    var state = {
        newTaskContainer: null,
        taskViewContainer: null,
        tasksList: [],
        counter: 0,
        localStorage: window.localStorage,
        render: null
    };

    /*
        tasks[] example
        [
            {
                id: Number,
                value: String,
                isDone: Boolean
            }
        ]
    */

    /*
        {addTaskSubmit: function 'addTaskSubmit'}
        to avoid any anonymous function error in future development
    */
    var eventsHandler = {
        addTaskSubmit: function addTaskSubmit(event) {
            var input, value;
    
            {
                let parent = event.currentTarget.closest(`.${presets.newTaskClass.form}`);
                input = parent.querySelector(`.${presets.newTaskClass.text}`);
    
                value = input.value;
            }
    
            addTask({value});
            input.value = '';
    
            event.preventDefault();
        },
        setTaskToEditBtnClick: function setTaskToEditBtnClick(event) {
            var taskElement;

            {
                taskElement = event.currentTarget.closest('li');
            }

            state.render.setTaskToEdit({taskElement});
            
            event.preventDefault();
        },
        removeTaskBtnClick: function removeTaskBtnClick(event) {
            var id;

            {
                let taskElement = event.currentTarget.closest('li');

                id = clarifyElementId(taskElement.id);
            }

            removeTask(id);

            event.preventDefault();
        },
        taskTextClick: function taskTextClick(event) {
            var toggleIsDone;

            {
                let taskElement = event.currentTarget.closest('li');
                toggleIsDone = taskElement.querySelector(`.${presets.taskElementClass.toggleIsDone}`);
            }

            toggleIsDone.click();

            event.preventDefault();
        },
        taskEditSubmitBtnClick: function taskEditSubmitBtnClick(event) {
            var taskElement, id, value, input;

            {
                taskElement = event.currentTarget.closest('li');

                id = clarifyElementId(taskElement.id);

                input = taskElement.querySelector(`.${presets.taskElementClassEdit.text}`);
                value = input.value;
            }

            updateTask({id, value});
            
            state.render.resetTaskToEdit({taskElement});

            event.preventDefault();
        },
        taskEditCancelBtnClick: function taskEditCancelBtnClick(event) {
            var taskElement;

            {
                taskElement = event.currentTarget.closest('li');
            }

            state.render.resetTaskToEdit({taskElement});
            
            event.preventDefault();
        },
        toggleIsDoneClick: function toggleIsDoneClick(event) {
            var taskElement, toggleIsDone, isDone, index, taskObject, id;

            {
                taskElement = event.currentTarget.closest('li');
                toggleIsDone = taskElement.querySelector(`.${presets.taskElementClass.toggleIsDone}`);
                
                id = clarifyElementId(taskElement.id);

                ({index, taskObject} = findTaskObjectWithId(id));

                isDone = !taskObject.isDone;
            }

            updateTask({id, isDone});

            // if the checkbox's state is changed, this content attribute does not reflect the change. 
            // https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/checkbox#attr-checked
            // need the event default to change it's state
            // event.preventDefault();
        }
    }
    
    var app = {};

    function checkLocalStorage() {
        var tasksList = JSON.parse(state.localStorage.getItem(`${presets.appId}TasksList`));

        if (tasksList) {
            tasksList.forEach(function({value, isDone}, i) {
                addTask({value, isDone, storage: false});
            });
        }

        updateView();
    }

    function updateLocalStorage() {
        // Only keeping the 'value' and 'isDone'
        var tasksList = [];

        {
            state.tasksList.forEach(function({value, isDone}, i) {
                tasksList.push({
                    value,
                    isDone
                })
            });
        }

        state.localStorage.setItem(`${presets.appId}TasksList`, JSON.stringify(tasksList));
    }

    // Have a function to call on load for initialization or anywhere we want.
    function init() {
        state.render = new TodoRender({
            eventsHandler,
            presets
        });
        // addTask({value: 'salam1'});
        // addTask({value: 'salam2'});
        // addTask({value: 'salam3'});
        // addTask({value: 'salam4'});
        // addTask({value: 'salam5'});
        // addTask({value: 'salam6'});
        // addTask({value: 'salam7'});
        // addTask({value: 'salam8'});
        // addTask({value: 'salam9'});
        // addTask({value: 'salam10'});
        // addTask({value: 'salam11'});
        // addTask({value: 'salam12'});
        // addTask({value: 'salam13'});
        // removeTask(4,5);
        // updateTask({id:2, value:'bye'}, {id:3, isDone: true});
        checkLocalStorage();
    }

    function createTaskObject({value, id, isDone}) {
        var task = {
            id,
            value,
            isDone
        };

        return task;
    }

    function generateNewId() {
        return state.counter++;
    }

    function clarifyElementId(id) {
        const reg = new RegExp(`${presets.taskIdPrefix}(\\d+)`);

        // the id that comes here is string
        return parseInt(id.match(reg)[1]);
    }

    // Incase we need to check
    function isDuplicate(value) {
        return state.tasksList.some(function(v) {
            if (value == v.value) return true;
        })
    }

    function addTask({value, isDone = false, storage = true}) {
        var taskObject, id;
    
        {
            id = generateNewId();
            taskObject = createTaskObject({value, id, isDone});
        }

        state.tasksList.push(taskObject);

        if (storage) {
            updateLocalStorage();
            updateView();
        }
    }

    function findTaskObjectWithId(id) {
        var index, taskObject;

        {
            taskObject = state.tasksList.find(function stateTasksListFind(item, i) {
                if (item.id == id) {
                    index = i;
                    return true
                };
            });
        }

        return {index, taskObject};
    }

    function removeTask(...id) {
        // Since its more favorite to use shallow copy :)
        state.tasksList = state.tasksList.filter(function tasklistFilter(item) {
            return !id.some(i => i == item.id);
        });

        updateLocalStorage();
        updateView();
    }

    function updateTask(...updatedTasks) {
        updatedTasks.forEach(function updatedTasksForEach(item) {
            if (typeof item.id == 'string') item.id = parseInt(item.id);

            var {index, taskObject} = findTaskObjectWithId(item.id);

            state.tasksList.splice(index, 1, Object.assign({} , taskObject, item))
        });

        updateLocalStorage();
        updateView();
    }

    // shouldInit will only be Boolean
    if (shouldInit) init();

    function updateView() {
        state.render.updateView(state.tasksList);
    }

    Object.assign(app, {
        init,
        addTask,
        removeTask,
        updateTask,
        updateView,
        state
    });
   
    // We chose what do we expose to app object instead of returning 'this'
    return app;
}
