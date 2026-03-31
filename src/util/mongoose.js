//es6 -- ?
export const mutipleMongooseToObject = (mongooses) => {
    return mongooses.map((mongoose) => mongoose.toObject());
};

export const mongooseToObject = (mongoose) => {
    return mongoose ? mongoose.toObject() : mongoose;
};
// const mongoose = {
//     mongooseToObject: (mongoose) => {
//         return mongooses.map((mongoose) => mongoose.toObject());
//     },
//     mutipleMongooseToObject: (mongooses) => {
//         return mongoose ? mongoose.toObject() : mongoose;
//     },
// };
// export default mongoose;
