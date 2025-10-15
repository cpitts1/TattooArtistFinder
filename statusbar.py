import time
import sys
import requests
from tqdm import tqdm
from threading import Thread

def check_network_status(url="http://www.google.com", timeout=5):
    """
    Checks if a network connection is available by trying to access a URL.
    Returns True if online, False otherwise.
    """
    try:
        requests.get(url, timeout=timeout)
        return True
    except (requests.ConnectionError, requests.Timeout):
        return False

def network_status_bar():
    """
    Creates a continuously updating network status bar in the terminal.
    """
    while True:
        status = "Online" if check_network_status() else "Offline"
        
        # ANSI escape codes for coloring
        color = "\033[92m" if status == "Online" else "\033[91m"
        reset_color = "\033[0m"
        
        # Use tqdm to create the progress-bar effect
        for i in tqdm(range(10), bar_format=f"Network Status: {color}{status}{reset_color} | {{bar}} | Checking again in 10s"):
            time.sleep(1)

if __name__ == "__main__":
    try:
        network_status_bar()
    except KeyboardInterrupt:
        print("\nNetwork status monitor stopped.")
        sys.exit()