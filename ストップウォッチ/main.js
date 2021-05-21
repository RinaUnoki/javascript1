         const timeElement = document.getElementById('times');
         const start = document.getElementById('start');
         const stop = document.getElementById('stop');
         const reset = document.getElementById('reset');
         
         let elapsed = 0;
         let intervalId = null;
         
         function updateTime() {
           const ms = elapsed  % 10;
           const s = Math.floor(elapsed / 1000) % 60;
           const m = Math.floor(elapsed / (1000*60)) % 60;
           const h = Math.floor(elapsed / (1000*60*60));
           
           const msStr =ms.toString().padStart(1, '0');
           const sStr =s.toString().padStart(1, '0');
           const mStr =m.toString().padStart(1, '0');
           const hStr =h.toString().padStart(1, '0');
           
           timeElement.innerHTML = `${hStr}:${mStr}:${sStr}:${msStr}`;
         }
         
         start.addEventListener('click', function(e) {
           let pre = new Date();
           intervalId = setInterval(function() {
             const now = new Date();
             elapsed += now - pre;
             pre = now;
             updateTime(elapsed);
             console.log(elapsed);
           }, 10);
         });
         
         reset.addEventListener('click', function(e) {
           elapsed = 0;
           updateTime(elapsed);
         });
         
         stop.addEventListener('click', function(e) {
           clearInterval(intervalId);
         });
         