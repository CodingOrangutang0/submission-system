import socket 
import requests
import time
import os
def command_mangaer():
  online = True
  while online:
    currentcommand = input("Press ? if your new:")
    if currentcommand == "":
      print("you seem not to have entered anything this could be an error")
      
