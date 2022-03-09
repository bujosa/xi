import {
  findAllApplications,
  createApplication,
  findApplication,
  updateApplication,
  deleteApplication,
  cancelApplication,
  payApplication,
  acceptApplication,
  rejectApplication
} from '../controllers/applicationController.js';

export const applicationRoutes = (app) => {
  app.route('/v1/applications').get(findAllApplications).post(createApplication);
  app.route('/v1/applications/:applicationId').get(findApplication).put(updateApplication).delete(deleteApplication);
  app.route('/v1/applications/:applicationId/cancel').patch(cancelApplication);
  app.route('/v1/applications/:applicationId/pay').patch(payApplication);
  app.route('/v1/applications/:applicationId/accept').patch(acceptApplication);
  app.route('/v1/applications/:applicationId/reject').patch(rejectApplication);
};
