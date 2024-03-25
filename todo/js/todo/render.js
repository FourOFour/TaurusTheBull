export default function TodoRender({
        id = 'app',
        shouldInit = true,
        eventsHandler = {
            // addTaskSubmit
            // setTaskToEditBtnClick
            // removeTaskBtnClick
            // taskTextClick
            // taskEditSubmitBtnClick
            // taskEditCancelBtnClick
            // toggleIsDoneClick
        },
        presets
    } = {}) {

    // Public API
    var app = {}
    
    var state = {
        newTaskContainer: null,
        taskViewContainer: null,
        liveTasksList: []
    }

    function init() {
        createBasicStructure();
    }

    function createBasicStructure() {
        var app = document.querySelector(`#${presets.appId}`),
            ul, form;

        {            
            form = document.createElement('form');
            state.newTaskContainer = form;
            form.classList.add(`${presets.newTaskClass.form}`);

            let input = document.createElement('input');
            input.value = '';
            input.setAttribute('type', 'text');
            input.setAttribute('placeholder', `${presets.newTaskInputPlaceHolder}`);
            input.classList.add(`${presets.newTaskClass.text}`);

            let submit = document.createElement('input');
            submit.value = '+';
            submit.setAttribute('type', 'submit');
            submit.classList.add(`${presets.newTaskClass.submit}`);
            submit.addEventListener('click', eventsHandler.addTaskSubmit);

            state.newTaskContainer.append(input, submit);
        }
        
        {
            ul = document.createElement('ul')
            ul.classList.add(presets.taskViewContainerClass);
            state.taskViewContainer = ul;
        }

        app.classList.add(`${presets.appContainerClass}`);
        app.append(state.newTaskContainer, state.taskViewContainer);
    }

    function createTaskElement({value, id, isDone}) {
        var li = document.createElement('li');

        {
            let span = document.createElement('span');
            let txt = document.createTextNode(value);
            let remove = document.createElement('input');
            let edit = document.createElement('input');
            let toggleIsDone = document.createElement('input');

            edit.value = 'edit';
            edit.classList.add(presets.taskElementClass.edit);
            edit.setAttribute('type', 'button');
            edit.addEventListener('click', eventsHandler.setTaskToEditBtnClick);

            remove.value = 'x';
            remove.setAttribute('type', 'button');
            remove.addEventListener('click', eventsHandler.removeTaskBtnClick);
            
            remove.classList.add(presets.taskElementClass.remove);

            span.classList.add(presets.taskElementClass.text);
            span.append(txt);
            span.addEventListener('click', eventsHandler.taskTextClick);

            toggleIsDone.checked = isDone;
            toggleIsDone.setAttribute('type', 'checkbox');
            toggleIsDone.classList.add(presets.taskElementClass.toggleIsDone);
            toggleIsDone.addEventListener('click', eventsHandler.toggleIsDoneClick);

            if (isDone) li.classList.add(presets.taskDoneClass);

            li.classList.add('animate-flipinx');
            li.append(toggleIsDone, span, edit, remove);
            li.id = `${presets.taskIdPrefix}${id}`;
        }

        return li;
    }

    function updateView(tasksList = []) {
        state.liveTasksList.forEach(function stateLiveTasksListForEach(item, index) {
            if (!tasksList.some(sItem => item.id == sItem.id)) {
                removeTask(item.id);
            }
        });
        
        tasksList.forEach(function taskListForEach(item, index) {
            let isLive = state.liveTasksList.some(function stateLiveTasksListSome(sItem) {
                if (sItem.id == item.id) {
                    // console.log({iNew: item, iOld: sItem});
                    if (isChanged({iNew: item, iOld: sItem})) {
                        updateTask(item);
                    }

                    return true;
                }
            });
            if (!isLive) {
                addTask(item);
            }
        });

        /*
            Since state.liveTasksList just acts as temp history so we can
            compare new tasksList to live one with out any extra code
            and have to use Array.prototype.concat() for example to create new array or return a
            new shallowcopy of it so tasksList and state.liveTasksList both don't point toward one point
            in memory (since we use method in logic to call the render to act and detect the changes)
            we can't let prev or live state lose its active or live value by passing the value of tasksList
            directly, might be too much to info but that's the reason we can't asign them both to same value.
        */
        state.liveTasksList = tasksList.concat([]);
    }

    function isChanged({iNew, iOld} = {}) {
        // if the points amount is lower then max ( 2 atm ) means it has changed
        // that is why no break at the switch
        var point = 0, reg;

        // reg = new RegExp(`^${iNew.value}$`);

        if (Object.is(iNew.value, iOld.value)) point++;
        if (Object.is(iNew.isDone, iOld.isDone)) point++;

        return point < 2;
    }
    
    function addTask({value, id, isDone}) {
        var task = createTaskElement({value, id, isDone});

        state.taskViewContainer.append(task);
    }
    
    function removeTask(id) {
        var task = state.taskViewContainer.querySelector(`#${presets.taskIdPrefix}${id}`);
        
        {
            task.classList.add('animate-flipoux');

            setTimeout(function IIFE() {
                task.remove();
            }, 1000);
        }
    }
    
    function updateTask({value, id, isDone} = {}) {
        var taskElement, span, txt, toggleIsDone;

        {
            taskElement = state.taskViewContainer.querySelector(`#${presets.taskIdPrefix}${id}`);
        }
        
        if (value) {
            span = taskElement.querySelector(`.${presets.taskElementClass.text}`);
            txt = span.firstChild;
            txt.nodeValue = value;
        }

        // isDone can be falsy, since is update function,
        // we don't wana run this section when only value is going to change
        if (isDone != undefined) {
            toggleIsDone = taskElement.querySelector(`.${presets.taskElementClass.toggleIsDone}`);
            toggleIsDone.checked = isDone
            
            // now we check for boolean value
            if (isDone) taskElement.classList.add(presets.taskDoneClass);
            else taskElement.classList.remove(presets.taskDoneClass);
        };
    }
    
    function setTaskToEdit({taskElement}) {
        var form, input, submit, cancel, remove, edit, span, toggleIsDone, txtNode;
        
        {
            remove = taskElement.querySelector(`.${presets.taskElementClass.remove}`);
            edit = taskElement.querySelector(`.${presets.taskElementClass.edit}`);
            span = taskElement.querySelector(`.${presets.taskElementClass.text}`);
            toggleIsDone = taskElement.querySelector(`.${presets.taskElementClass.toggleIsDone}`);
            txtNode = span.firstChild;

            form = document.createElement('form');
            form.classList.add(presets.taskElementClassEdit.form);

            input = document.createElement('input');
            input.setAttribute('type', 'text');
            input.value = txtNode.nodeValue;
            input.classList.add(presets.taskElementClassEdit.text);

            submit = document.createElement('input');
            submit.setAttribute('type', 'submit');
            submit.value = 'done';
            submit.addEventListener('click', eventsHandler.taskEditSubmitBtnClick);
            submit.classList.add(presets.taskElementClassEdit.submit);

            cancel = document.createElement('input');
            cancel.setAttribute('type', 'button');
            cancel.value = 'cancel';
            cancel.addEventListener('click', eventsHandler.taskEditCancelBtnClick);
            cancel.classList.add(presets.taskElementClassEdit.cancel);

            span.hidden = true;
            remove.hidden = true;
            edit.hidden = true;
            toggleIsDone.hidden = true;

            form.append(input, cancel, submit);
            taskElement.append(form);
            taskElement.classList.add(`${presets.taskOnEditClass}`);
        }
    }

    function resetTaskToEdit({taskElement}) {
        var remove, edit, span, toggleIsDone, form;
        
        {
            remove = taskElement.querySelector(`.${presets.taskElementClass.remove}`);
            edit = taskElement.querySelector(`.${presets.taskElementClass.edit}`);
            span = taskElement.querySelector(`.${presets.taskElementClass.text}`);
            toggleIsDone = taskElement.querySelector(`.${presets.taskElementClass.toggleIsDone}`);
            form = taskElement.querySelector(`.${presets.taskElementClassEdit.form}`);
        }

        form.remove();

        span.hidden = false;
        remove.hidden = false;
        edit.hidden = false;
        toggleIsDone.hidden = false;

        taskElement.classList.remove(`${presets.taskOnEditClass}`);
    }

    if (shouldInit) init();

    Object.assign(app, {
        init,
        updateTask,
        removeTask,
        addTask,
        setTaskToEdit,
        resetTaskToEdit,
        updateView,
        state
    });

    return app;
}
