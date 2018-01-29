function service() {
  return new Promise(resolve => setTimeout(() => resolve('end'), 2000));
}

async function exec() {
  console.log(await service());
  console.log('sure ?');
}

exec();

//testkj