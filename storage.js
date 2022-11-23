const debounce = (func, timeout = 400) => {
  let timer;
  return (...args) => {
    clearTimeout(timer);
    timer = setTimeout(() => {
      func.apply(this, args);
    }, timeout);
  };
};

const saveInput = async ev => {
  if (navigator.storage && navigator.storage.estimate) {
    // const quota = await navigator.storage.estimate();
    // // quota.usage -> Número de bytes usados.
    // // quota.quota -> Número máximo de bytes disponível.
    // const percentageUsed = (quota.usage / quota.quota) * 100;
    // const remaining = quota.quota - quota.usage;

    // console.clear();
    // console.info(`Você usou ${percentageUsed}% do armazenamento disponível.`);
    // console.info(`Você pode gravar até ${remaining} bytes mais.`);

    // if (percentageUsed > 100)
    //   return console.alert(
    //     `Você usou ${percentageUsed}% do armazenamento disponível.`
    //   );

    localStorage.setItem('innerHTML', ev.target.innerHTML);
  }
};

document.body.innerHTML = localStorage.getItem('innerHTML');
document.body.addEventListener(
  'input',
  debounce(ev => saveInput(ev), 500)
);
document.body.contentEditable = true;
