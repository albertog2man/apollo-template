import faker from "faker";
import models from "../../models";

const data = async (props = {}) => {
  const defaultProps = {
    email: faker.internet.email(),
    passwordDigest: faker.random.uuid(),
    status: "A",
    token: faker.random.uuid()
  };
  return Object.assign({}, defaultProps, props);
};

export default async (props = {}) => models.User.create(await data(props));
