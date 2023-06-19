import { Worker, workerData } from 'node:worker_threads'

const createWorkerThread = (workerData) => {
  return new Promise((resolve, reject) => {
      const worker = new Worker('./src/wt/worker.js', { workerData });

      worker.on('message', (mes) => {
          resolve(mes);
      });

      worker.on('error', (mes) => {
          reject(mes);
      });
  });
};

const performCalculations = async () => {
  if (isMainThread) {
      const cp = os.cpus().length;
      const arrayData = Array.from({ length: cp }, (_, index) => index + 10);
      const promise = arrayData.map((workerData) => createWorkerThread(workerData));
      const result = await Promise.all(promise);
      console.log(result);
  }
};
await performCalculations();