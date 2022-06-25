let done = true;
let prom = new Promise((resolve, rejected) => {

  setTimeout(() => {
    if (done) {
      const workdone = "i am complete this work ";
      resolve(workdone);
    } else {
      const why = "work failed";
      rejected(why);
    }
  }, 5000)
  if (done) {
    const workdone = "i am complete this work ";
    resolve(workdone);
  } else {
    const why = "work failed";
    rejected(why);
  }
})
  .then((rejult) => {
    console.log(rejult);
  })
  .catch((err) => {
    console.log(err);
  });
