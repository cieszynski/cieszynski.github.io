self.addEventListener('push', event => {
    //const notification = event.data.json();
    //self.registration.showNotification(notification.title, notification);
    console.log(event.data.text())
  });
