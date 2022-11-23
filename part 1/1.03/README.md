# Answer:

$ kubectl apply -f deployment.yaml

deployment.apps/logoutput created

---

$ kubectl logs -f logoutput-6849c6c4f7-5ljps

> log_output@1.0.0 start
> node index.js

Wed Nov 16 2022 10:51:37 GMT+0000 (Coordinated Universal Time): 9c47aaee-e656-42ce-9087-ea0d38de0e5f

Wed Nov 16 2022 10:51:42 GMT+0000 (Coordinated Universal Time): 9c47aaee-e656-42ce-9087-ea0d38de0e5f

Wed Nov 16 2022 10:51:47 GMT+0000 (Coordinated Universal Time): 9c47aaee-e656-42ce-9087-ea0d38de0e5f
