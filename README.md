```bash
kubectl create -f kubernetes.json
kubectl get rc
kubectl get pods
kubectl describe rc pomodoro-xx8z4
kubectl describe pod pomodoro-xx8z4-ch9cw
kubectl expose rc pomodoro-xx8z4 --type="LoadBalancer"
kubectl get services pomodoro-xx8z4
```
