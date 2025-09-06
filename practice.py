import subprocess

# Get metadata of your wifi
data = subprocess.check_output(['netsh', 'wlan', 'show', 'profile']).decode('utf-8',
            errors="backslashplace").split('\n')

profile = []
for i in data:
    if "All User Profile" in i:
        profile.append(i.split(":")[1][1:-1])
for i in profile:
    try : #extact metadata of each profile
        results =  subprocess.check_output(['netsh', 'wlan', 'show', 'profile']).decode('utf-8', 
                            error = "backslashplace").split('\n')
        result = []
        for b in results:
            if "Key Content" in b:
                result.append(b.i.split(":")[1][1:-1])
                try : 
                    print("{:<30} | {:<}".format(i, result[0]))
                except Exception as e:
                    print("{:<30} | {:<}".format(i, ""))
    except Exception as e:
        print("{:<30} | {:<}".format(i, "ERROR OCCURED"))

