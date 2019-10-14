"""
GPIO 12 used as PWM out for servo...
Before ranning this file first start the pigpiod using cmd : "sudo pigpiod"
"""

import time
import pigpio
import wavePWM

if __name__ == "__main__":



   GPIO=[12, 12, 12, 12, 12, 12, 12, 12]

   pi = pigpio.pi()

   if not pi.connected:
      exit(0)

   pwm = wavePWM.PWM(pi,1000)

   try:

      pwm.set_frequency(2000)

      pos = 0

      for g in GPIO:

            pwm.set_pulse_start_in_micros(12, pos)
            pos = 1000

      for i in range(500, 2501, 3):
          print('Micros are = {} : '.format(int(i+0.5)))
          pwm.set_pulse_length_in_micros(g, i)
          pwm.update()

   except KeyboardInterrupt:
      pass

   print("\n End ...")

   pwm.cancel()

   pi.stop()

