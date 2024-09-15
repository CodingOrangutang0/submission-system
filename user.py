import socket 
import requests
import time
import os
def clear():# Clears the python terminal of visual junk.
  os.system('cls' if os.name == 'nt' else 'clear')
def command_mangaer():
  online = True
  while online:
    currentcommand = input("Press ? if your new:")
    if currentcommand == "":
      print("you seem not to have entered anything this could be an error")
    if currentcommand == "?":
      print("These are the currently working commands")
      print("1. ?, You just used this commannd gongrats")
      print("2. clear:Should be used to clear the command line when things get a little cramped.")
      print("3. getserver: Logs you on by sending a fetch request to the host server of the submission system network")
    if currentcommand == "clear":
      clear()

      
