
let config = {};

switch (process.env.NODE_ENV) {
    case 'development':
    config = {
        CLIENT_SECRET : 'devSecret'
    };
        break;
     case 'test':
     config = {
         CLIENT_SECRET : 'qaSecret'
    };
        break;

    default:
        break;
}

export default config;