import sessions from "../data/sessions.json" assert { type: "json" };
import { DataSource } from "apollo-datasource";
import _ from "lodash";

class SessionAPI extends DataSource {
  constructor() {
    super();
  }

  initialize(config) {}

  getSessions() {
    return sessions;
  }
  getSessionById(id) {
    const session = _.filter(sessions, { id: parseInt(id) });
    return session[0];
  }
}

export default SessionAPI;
