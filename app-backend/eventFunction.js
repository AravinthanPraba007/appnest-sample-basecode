const { AppnestFunctions, ResultData } = require('appnest-sdk-utils');

const onSubmissionComplete = async ({ payload }) => {
    console.log('🚀 ~ onSubmissionComplete ~ payload:', payload);
    await AppnestFunctions.sampleFunction();
    // return {
    //     id: '123',
    //     email: 'test@test.com'
    // };
    return new ResultData({
        body: { message: 'Submission completed..!!@@@@!!.' },
        statusCode: 401,
    });
};

const onSubmissionComplete1 = async ({ payload }) => {
  console.log('Submission completed with data:', payload);
  return {
    responseCode: 200,
    responseBody: {
      message: 'Submission complete event handled successfully',
    },
  };
};

const onContactCreate = async ({ payload }) => {
  console.log('Contact created with data:', payload);
  return {
    responseCode: 200,
    responseBody: {
      message: 'Contact create event handled successfully',
    },
  };
};

module.exports = { onSubmissionComplete, onContactCreate, onSubmissionComplete1 };

