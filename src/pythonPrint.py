import socket

mysocket = socket.socket(socket.AF_INET, socket.SOCK_STREAM)
host = "192.168.0.17"
port = 9100
cmd = "^XA^CF0,17^FO145,20^FD"
+"PN-2256555"
+"^FS^FO345,25^FD"
+"PN-1212555"
+"^FS^FO545,25^FD"
+"PN-8556555"
+"^FS^MMC^XZ"
try:
    mysocket.connect((host, port))  # connectingtohost
    mysocket.send(cmd)  # usingbytes
    mysocket.close()  # closingconnection
    print("Success!")
except:
    print("Errorwiththeconnection")
