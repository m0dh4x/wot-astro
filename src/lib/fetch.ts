const generalTankData = async () => {
  const res = await fetch(
    `https://api.worldoftanks.eu/wot/encyclopedia/vehicles/?application_id=4274a110928ea9a5040c6187f8c2c1dc`
  );
  const { data } = await res.json();
  return data;
};

const getPlayerData = async (id: string) => {
  const res = await fetch(
    `https://api.worldoftanks.eu/wot/account/info/?application_id=4274a110928ea9a5040c6187f8c2c1dc&account_id=${id}`
  );

  const { data } = await res.json();

  return data[id];
};

const getPlayerTankData = async (id: string) => {
  const res = await fetch(
    `https://api.worldoftanks.eu/wot/tanks/stats/?application_id=4274a110928ea9a5040c6187f8c2c1dc&account_id=${id}`
  );

  const { data } = await res.json();

  return data[id];
};
