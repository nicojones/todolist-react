import { randArray } from '../functions/randArray';

const dateToday = new Date().toISOString().slice(0, 10);

export const text = {
  gotoApp: 'Open app',
  loading: 'Loading app...',
  noListName: 'New Project ' + dateToday,

  task: {
    name: 'Name of the task',
    delete: 'Delete task and its subtasks? Can\'t be undone',
    addTaskPh: () => {
      const phs = [
        'e.g. Buy carrots',
        'e.g. Clean apartment in the morning',
        'e.g. Do some exercise',
        'Add a new task ...',
        'Create a task ...',
        'e.g. Call family',
        'e.g. Schedule interview'
      ];
      return randArray(phs);
    },
    subtasks: 'Subtasks',
    save: 'Save',
    discard: 'Cancel changes',
    notes: 'Notes',
    prio: {
      _: 'Priority',
      low: 'Low priority',
      high: 'High priority',
      urgent: 'Urgent'
    }
  },

  drawer: {
    inbox: {
      _: 'Inbox',
      tooltip: 'Your open tasks'
    },
    priority: {
      _: 'Priority',
      tooltip: 'High priority stuff'
    },
    invalidDrawer: 'Invalid URL (not an actual project)'
  },
  // addSubtaskBtn: 'Add a subtask',
  // subtasks: 'Subtasks',
  sharedProject: 'This project is shared',
  subtaskStatus: '( Pending / Completed )',
  // btn: 'Add task',
  // title: 'MyTodo List',
  // uncompleted: 'My tasks',
  allTasksCompleted: () => {
    const incomplete = [
      '😁 All tasks completed!',
      'Now that\'s what I call a clean list 🥳',
      'Wow, such empty 👏',
      'Finitto? Go for a cappuccino ☕️',
      'All tasks done, time for a break 🏖',
      'So productive. I\'m impressed 😎',
      'Make a Todolist: Done ✅',
      'I am Finnish 🇫🇮 with all tasks.'
    ];
    return randArray(incomplete);
  },
  completed: 'Completed',
  completedNo: 'No completed tasks',
  showCompleted: 'Show completed tasks',
  hideCompleted: 'Hide completed tasks',

  project: {
    s: 'Projects',
    noSelected: 'Select a project or create a new one.',
    inspire: 'What will you accomplish?',
    share: 'Share Project',
    delete: {
      _: 'Delete Project',
      tasks: 'Delete all tasks',
      long: 'Delete this project and all the tasks? (cannot be undone)'
    },
    add: {
      // _: 'Add a new project',
      ph: 'Enter a name for a new project'
    }
  },

  genericError: 'An error occurred. Please see console for details',

  loggedInAs: (name) => `Logged in as ${ name }.`,

  login: {
    login: 'Log in',
    signup: 'Sign up',
    logout: 'Log out',
    noAccount: 'Don\'t have an account?',
    yesAccount: 'Already a user?',
    error: 'Invalid credentials',
    success: 'Welcome Back!',
    signupSuccess: 'Account created! Logging you in...',
    invalidPass: 'Invalid Login credentials',
    invalidUser: 'No user exists for this email'
  },

};
