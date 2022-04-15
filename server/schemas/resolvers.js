const { User, Review } = require('../models');
const { AuthenticationError } = require('apollo-server-express');
const { signToken } = require('../utils/auth')

const resolvers = {
    Query: {
        me: async (parent, args, context) => {
            if (context.user) {
                const userData = await User.findOne({})
                    .select('-__v -password')
                    .populate('Book')

                return userData;
            }
            throw new AuthenticationError('Not Logged in')
        },
    },
    Mutation: {
        addUser: async (parent, args) => {
            const user = await User.create(args);
            const token = signToken(user);

            return { token, user }
        },
        login: async (parent, { email, password }) => {
            const user = await User.findOne({ email });

            if (!user) {
                throw new AuthenticationError('Incorrect credentials');
            }

            const correctPw = await user.isCorrectPassword(password);

            if (!correctPw) {
                throw new AuthenticationError('Bad crednetials')
            }
            const token = signToken(user);
            return { token, user }
        },
        addReview: async (parent, args, context) => {
            if (context.user) {
                const review = await Review.create({...args, usernmane: context.user.username})

                await User.findByIdAndUpdate(
                    {_id: context.user._id},
                    { $push: { review: review._id} },
                    { new: true }
                );

                return review
            }
        }
    }
};


module.exports = resolvers;