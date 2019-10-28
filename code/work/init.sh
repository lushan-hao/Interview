#!/bin/sh
apt -y update
apt install -y git openssh-server curl wget samba 
systemctl start sshd
sh -c "echo '10.237.39.4 sgp.shopapi.t.n.b2c.srv' >> /etc/hosts"
sh -c "echo '10.237.39.4 i18n.cms.be.t.n.mi.com' >> /etc/hosts"
sh -c "echo '
[work]
    comment = Woke User
    path = /home/work
    browseable = yes
    valid users = work
    read only = no
    guest = no
    public = no
' >> /etc/samba/smb.conf"
smbpasswd -a work
systemctl start smbd
git config --global core.filemode false