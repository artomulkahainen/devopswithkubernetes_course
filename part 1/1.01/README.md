# Answer:

arto@arto $ kubectl create deployment logoutput --image=artomulkahainen/log_output

deployment.apps/logoutput created

----

arto@arto $ kubectl logs -f logoutput-bc9f4c45d-qchkp

> log_output@1.0.0 start
> node index.js

Wed Nov 16 2022 07:36:31 GMT+0000 (Coordinated Universal Time): 57ef56e8-5729-424b-9aa4-2b90140cc93f

Wed Nov 16 2022 07:36:36 GMT+0000 (Coordinated Universal Time): 57ef56e8-5729-424b-9aa4-2b90140cc93f

Wed Nov 16 2022 07:36:41 GMT+0000 (Coordinated Universal Time): 57ef56e8-5729-424b-9aa4-2b90140cc93f
