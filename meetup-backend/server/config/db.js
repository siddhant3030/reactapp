import mongoose from 'mongoose';

export default () => {
    mongoose.Promise = global.Promise;
    mongoose.connect('mongodb://localhost/meetup');
    mongoose.connection
            .once('open', () => console.log('mongodb running'))
            .on('error', err => console.error(err));
};
