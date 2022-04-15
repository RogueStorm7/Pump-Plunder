const { Schema, model } = require('mongoose')
const dateFormat = require('../utils/dateFormat.js')

const reviewSchema = new Schema(
    {
        StationId: {
          type: String,
          required: true,
          unique: true
        },
        reviewText: {
            type: String,
            minLength: 1,
            maxLength: 280
        },
        createdAt: {
            type: Date,
            default: Date.now,
            get: timestamp => dateFormat(timestamp)
        },
        username: {
            type: String,
            required: true,
        }
    },
    {
        toJSON: {
          getters: true
        }
      }
    );

const Review = model('Review', reviewSchema)

module.exports = Review;