# Answer:

arto@arto-Z370-AORUS-Gaming-K3:~/Koodaukset/devopswithkubernetes_course/1.03/manifests (main)
deployment.apps/logoutput created
arto@arto-Z370-AORUS-Gaming-K3:~/Koodaukset/devopswithkubernetes_course/1.03/manifests (main)$ kubectl get pods
NAME READY STATUS RESTARTS AGE
logoutput-6849c6c4f7-5ljps 0/1 ContainerCreating 0 6s
arto@arto-Z370-AORUS-Gaming-K3:~/Koodaukset/devopswithkubernetes_course/1.03/manifests (main)$ kubectl get pods
NAME READY STATUS RESTARTS AGE
logoutput-6849c6c4f7-5ljps 1/1 Running 0 12s
arto@arto-Z370-AORUS-Gaming-K3:~/Koodaukset/devopswithkubernetes_course/1.03/manifests (main)$ kubectl logs -f logoutput-6849c6c4f7-5ljps

> log_output@1.0.0 start
> node index.js

Wed Nov 16 2022 10:51:37 GMT+0000 (Coordinated Universal Time): 9c47aaee-e656-42ce-9087-ea0d38de0e5f
Wed Nov 16 2022 10:51:42 GMT+0000 (Coordinated Universal Time): 9c47aaee-e656-42ce-9087-ea0d38de0e5f
Wed Nov 16 2022 10:51:47 GMT+0000 (Coordinated Universal Time): 9c47aaee-e656-42ce-9087-ea0d38de0e5f
Wed Nov 16 2022 10:51:52 GMT+0000 (Coordinated Universal Time): 9c47aaee-e656-42ce-9087-ea0d38de0e5f
Wed Nov 16 2022 10:51:57 GMT+0000 (Coordinated Universal Time): 9c47aaee-e656-42ce-9087-ea0d38de0e5f
Wed Nov 16 2022 10:52:02 GMT+0000 (Coordinated Universal Time): 9c47aaee-e656-42ce-9087-ea0d38de0e5f
Wed Nov 16 2022 10:52:07 GMT+0000 (Coordinated Universal Time): 9c47aaee-e656-42ce-9087-ea0d38de0e5f
Wed Nov 16 2022 10:52:12 GMT+0000 (Coordinated Universal Time): 9c47aaee-e656-42ce-9087-ea0d38de0e5f

$ kubectl apply -f deployment.yaml

deployment.apps/logoutput created

---

$ kubectl logs -f logoutput-6849c6c4f7-5ljps

> log_output@1.0.0 start
> node index.js

Wed Nov 16 2022 10:51:37 GMT+0000 (Coordinated Universal Time): 9c47aaee-e656-42ce-9087-ea0d38de0e5f

Wed Nov 16 2022 10:51:42 GMT+0000 (Coordinated Universal Time): 9c47aaee-e656-42ce-9087-ea0d38de0e5f

Wed Nov 16 2022 10:51:47 GMT+0000 (Coordinated Universal Time): 9c47aaee-e656-42ce-9087-ea0d38de0e5f
