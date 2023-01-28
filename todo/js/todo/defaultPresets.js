// deafultPresets is rooted in this constructor that is why it comes very first thing 
var deafultPresets;

{
    deafultPresets = {
        appId: 'app',
        appContainerClass: 'todo-container',
        taskViewContainerClass: 'todo',
        taskIdPrefix: 'todo-task-',
        newTaskInputPlaceHolder: '+ Add task...',
        newTaskClassPrefix: 'new-task-',
        taskElementClassPrefix: 'task-element-',
        taskElementClassEditPrefix: 'task-edit-element-',
        taskOnEditClass: 'onedit',
        taskDoneClass: 'done'
    };

    deafultPresets.newTaskClass = {
            form: `${deafultPresets.newTaskClassPrefix}form`,
            text: `${deafultPresets.newTaskClassPrefix}text`,
            submit: `${deafultPresets.newTaskClassPrefix}submit`
    };

    deafultPresets.taskElementClass = {
        text: `${deafultPresets.taskElementClassPrefix}text`,
        toggleIsDone: `${deafultPresets.taskElementClassPrefix}toggleIsDone`,
        edit: `${deafultPresets.taskElementClassPrefix}edit`,
        remove: `${deafultPresets.taskElementClassPrefix}remove`
    };
    
    deafultPresets.taskElementClassEdit = {
        form : `${deafultPresets.taskElementClassEditPrefix}form`,
        text : `${deafultPresets.taskElementClassEditPrefix}text`,
        submit : `${deafultPresets.taskElementClassEditPrefix}submit`,
        cancel : `${deafultPresets.taskElementClassEditPrefix}cancel`
    };
    
    deafultPresets.taskElementClassEdit = {
        form : `${deafultPresets.taskElementClassEditPrefix}form`,
        text : `${deafultPresets.taskElementClassEditPrefix}text`,
        submit : `${deafultPresets.taskElementClassEditPrefix}submit`,
        cancel : `${deafultPresets.taskElementClassEditPrefix}cancel`
    };
}

export default deafultPresets;
