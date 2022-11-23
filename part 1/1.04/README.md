# Answer:

$ kubectl apply -f deployment.yaml

deployment.apps/todos created

---

$ kubectl logs -f todos-56c4c54777-x99wb

> project_v0.1@1.0.0 start
> node app.js

Server started on port 3001
