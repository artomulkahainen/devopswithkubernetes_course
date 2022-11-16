# Answer:

arto@arto $ kubectl create deployment todos --image=artomulkahainen/todos

deployment.apps/todos created

---

kubectl logs -f todos-f99bc4b6c-ttrgj

> project_v0.1@1.0.0 start
> node app.js

Project v0.1 listening on port 3001
