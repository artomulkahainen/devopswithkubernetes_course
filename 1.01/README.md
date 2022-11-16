Answer:

arto@arto-Z370-AORUS-Gaming-K3:~/Koodaukset/devopswithkubernetes_course/1.01 $ kubectl create deployment logoutput --image=artomulkahainen/log_output
deployment.apps/logoutput created
arto@arto-Z370-AORUS-Gaming-K3:~/Koodaukset/devopswithkubernetes_course/1.01 $ kubectl get pods
NAME                        READY   STATUS    RESTARTS   AGE
logoutput-bc9f4c45d-qchkp   1/1     Running   0          21s
arto@arto-Z370-AORUS-Gaming-K3:~/Koodaukset/devopswithkubernetes_course/1.01 $ kubectl logs -f logoutput-bc9f4c45d-qchkp

> log_output@1.0.0 start
> node index.js

Wed Nov 16 2022 07:36:31 GMT+0000 (Coordinated Universal Time): 57ef56e8-5729-424b-9aa4-2b90140cc93f
Wed Nov 16 2022 07:36:36 GMT+0000 (Coordinated Universal Time): 57ef56e8-5729-424b-9aa4-2b90140cc93f
Wed Nov 16 2022 07:36:41 GMT+0000 (Coordinated Universal Time): 57ef56e8-5729-424b-9aa4-2b90140cc93f
Wed Nov 16 2022 07:36:46 GMT+0000 (Coordinated Universal Time): 57ef56e8-5729-424b-9aa4-2b90140cc93f
Wed Nov 16 2022 07:36:51 GMT+0000 (Coordinated Universal Time): 57ef56e8-5729-424b-9aa4-2b90140cc93f
Wed Nov 16 2022 07:36:56 GMT+0000 (Coordinated Universal Time): 57ef56e8-5729-424b-9aa4-2b90140cc93f
Wed Nov 16 2022 07:37:01 GMT+0000 (Coordinated Universal Time): 57ef56e8-5729-424b-9aa4-2b90140cc93f
Wed Nov 16 2022 07:37:06 GMT+0000 (Coordinated Universal Time): 57ef56e8-5729-424b-9aa4-2b90140cc93f
^C
arto@arto-Z370-AORUS-Gaming-K3:~/Koodaukset/devopswithkubernetes_course/1.01 $ 

