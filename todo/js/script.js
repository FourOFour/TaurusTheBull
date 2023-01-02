function Todo({id = 'app', shouldInit = true} = {}) {
    /*
        Defult: {
            id: 'app,
            shouldInit: true
        }
    */

    // Using var cause they will be used through the enitre scope
    // + Private variables (execpt app)
    var app = {},
        newTaskContainer = null,
        taskViewContainer = null,
        tasks = [],
        counter = 0;
    
    /*
        tasks[] example
        [
            {
                id: Number,
                value: String,
                state: Boolean,
                el: DOM-element
            }
        ]
    */

    // So we can change id or class from here if need to
    var presets = {
            appId: id,
            appContainerClass: 'todo-container',
            taskViewContainerClass: 'todo',
            taskIdPrefix: 'todo-task-',
            newTaskContainerClass: 'todo-new-task',
            newTaskInputPlaceHolder: 'Enter your new task here...',
            newTaskClassPrefix: 'new-task-',
            taskElementClassPrefix: 'task-element-',
            taskElementClassEditPrefix: 'task-edit-element-',
            taskOnEditClass: 'onedit',
            taskDoneClass: 'done'
        };
    
    Object.assign(presets, {
        newTaskClass: {
            form: `${presets.newTaskClassPrefix}form`,
            text: `${presets.newTaskClassPrefix}text`,
            submit: `${presets.newTaskClassPrefix}submit`
        },
        taskElementClass: {
            text: `${presets.taskElementClassPrefix}text`,
            toggleState: `${presets.taskElementClassPrefix}toggleState`,
            edit: `${presets.taskElementClassPrefix}edit`,
            remove: `${presets.taskElementClassPrefix}remove`
        },
        taskElementClassEdit: {
            form : `${presets.taskElementClassEditPrefix}form`,
            text : `${presets.taskElementClassEditPrefix}text`,
            submit : `${presets.taskElementClassEditPrefix}submit`,
            cancel : `${presets.taskElementClassEditPrefix}cancel`
        }
    });

    // Have a function to call on load for initialization or anywhere we want.
    function init() {
        var app = document.querySelector(`#${presets.appId}`),
            ul, form;

        {            
            form = document.createElement('form');
            newTaskContainer = form;
            form.classList.add(`${presets.newTaskClass.form}`, presets.newTaskContainerClass);

            let input = document.createElement('input');
            input.value = '';
            input.setAttribute('type', 'text');
            input.setAttribute('placeholder', `${presets.newTaskInputPlaceHolder}`);
            input.classList.add(`${presets.newTaskClass.text}`);

            let submit = document.createElement('input');
            submit.value = 'add';
            submit.setAttribute('type', 'submit');
            submit.addEventListener('click', function IIFE(e) {
                addTask(input.value);
                input.value = '';

                e.preventDefault();
            });
            submit.classList.add(`${presets.newTaskClass.submit}`);

            newTaskContainer.append(input, submit);
        }
        
        {
            ul = document.createElement('ul')
            ul.classList.add(presets.taskViewContainerClass);
            taskViewContainer = ul;
        }

        app.classList.add(`${presets.appContainerClass}`);
        app.append(newTaskContainer, taskViewContainer);

        // Test Values
        addTask('test1');
        addTask('test2');
        addTask('test3');
        addTask('test4');
        updateTask({id:1, value: 'Why?'});
        updateTask({id:2, state: true});
    }

    Object.assign(app, {init});

    function createTaskElement({str, id}) {
        var li = document.createElement('li');

        {
            let span = document.createElement('span');
            let txt = document.createTextNode(str);
            let remove = document.createElement('input');
            let edit = document.createElement('input');
            let toggleState = document.createElement('input');

            edit.value = 'edit';
            edit.classList.add(presets.taskElementClass.edit);
            edit.setAttribute('type', 'button');
            edit.addEventListener('click', function IIFE(e) {
                setTaskToEdit({id, li, remove, edit, span});

                e.preventDefault();
            });

            remove.value = 'del';
            remove.setAttribute('type', 'button');
            remove.addEventListener('click', function IIFE(e) {
                removeTask(id);

                e.preventDefault();
            });
            remove.classList.add(presets.taskElementClass.remove);

            span.classList.add(presets.taskElementClass.text);
            span.append(txt);

            toggleState.value = 'toggle';
            toggleState.setAttribute('type', 'button');
            toggleState.addEventListener('click', function IIFE(e) {
                var {task, index} = findTaskWithId(id);

                task.state = !task.state;
                
                updateTask({id, state: task.state});

                e.preventDefault();
            });
            toggleState.classList.add(presets.taskElementClass.toggleState);

            li.append(toggleState, span, edit, remove);
            li.id = `${presets.taskIdPrefix}${id}`;
        }

        return li;
    }

    function generateNewId() {
        return counter++;
    }

    function addTask(str) {
        var task, id;
        
        {
            id = generateNewId();
            task = createTaskElement({str, id});
        }

        taskViewContainer.append(task);

        tasks.push({
            id,
            value: str,
            state: false,
            el: task
        });
    }

    Object.assign(app, {addTask});

    function findTaskWithId(id) {
        var index, task;

        {
            task = tasks.find(function IIFE(v, i) {
                if (v.id == id) {
                    index = i;
                    return true
                };
            });
        }

        return {index, task};
    }

    function removeTask(id) {
        var {index, task} = findTaskWithId(id);
        
        // Using a method that doesn't returns a shallow copy of the array insted modifies the existing array (for example not using filter)
        tasks.splice(index, 1);
        task.el.remove();
    }

    Object.assign(app, {removeTask});

    function updateTask({id, value, state}) {
        var task, span;
        
        {
            ({task, index} = findTaskWithId(id));

            span = task.el.querySelector(`.${presets.taskElementClass.text}`);
        }

        // in case we just want to update only value or state not both at the same time
        // since undefined is primitive type we don't have to worry about type coercion
        if (value != undefined) {
            task.value = value;

            span.childNodes[0].nodeValue = value;
        }

        if (state != undefined) {
            task.state = state;
            

            // It will only be Boolean
            if (state) {
                // No need to worry about duplicate class
                task.el.classList.add(`${presets.taskDoneClass}`);
            } else {
                task.el.classList.remove(`${presets.taskDoneClass}`);
            }
        }
    }

    Object.assign(app, {updateTask});

    function setTaskToEdit({id, li, remove, edit, span}) {
        var form, input, submit, cancel, task, index;
        
        {
            ({index, task} = findTaskWithId(id));

            form = document.createElement('form');
            form.classList.add(presets.taskElementClassEdit.form);

            input = document.createElement('input');
            input.setAttribute('type', 'text');
            input.value = task.value;
            input.classList.add(presets.taskElementClassEdit.text);

            submit = document.createElement('input');
            submit.setAttribute('type', 'submit');
            submit.value = 'Finish';
            submit.addEventListener('click', function IIFE(e) {
                var value = input.value ? input.value : 'empty';

                updateTask({id, value});
                
                resetTaskToEdit({li, remove, edit, span, form});
                e.preventDefault();
            });
            submit.classList.add(presets.taskElementClassEdit.submit);

            cancel = document.createElement('input');
            cancel.setAttribute('type', 'button');
            cancel.value = 'cancel';
            cancel.addEventListener('click', function IIFE(e) {
                resetTaskToEdit({li, remove, edit, span, form});

                e.preventDefault();
            });
            cancel.classList.add(presets.taskElementClassEdit.cancel);

            span.hidden = true;
            remove.hidden = true;
            edit.hidden = true;

            form.append(input, cancel, submit);
            li.append(form);
            li.classList.add(`${presets.taskOnEditClass}`);
        }
    }

    Object.assign(app, {setTaskToEdit});

    function resetTaskToEdit({li, remove, edit, span, form}) {
        form.remove();

        span.hidden = false;
        remove.hidden = false;
        edit.hidden = false;

        li.classList.remove(`${presets.taskOnEditClass}`);
    }

    Object.assign(app, {resetTaskToEdit});
   
    // shouldInit will only be Boolean
    if (shouldInit) init();

    // We chose what do we expose to app object instead of 'this'
    return app;
}

var app = new Todo();
var app2 = new Todo({id: 'app2', shouldInit: false});
app2.init();
