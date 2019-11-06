const SLEEP_FOR = 5000;
const users = {
  testA: {
    id: 1,
    username: 'testA'
  },
  testB: {
    id: 2,
    username: 'testB'
  }
};
const messages = {
  1: ['Hello testA', 'How are you doing today?'],
  2: []
};

function sleep(time) {
  return new Promise(res => setTimeout(res, time));
}

const fetchUserCount = async () => {
  await sleep(SLEEP_FOR);
  return Object.keys(users).length;
};

const fetchUser = async username => {
  await sleep(SLEEP_FOR);
  return users[username];
};

const fetchMessages = async userId => {
  await sleep(SLEEP_FOR);
  return messages[userId];
};

export { fetchUserCount, fetchUser, fetchMessages };
