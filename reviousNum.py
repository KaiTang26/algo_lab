def reverseNum(num):

  digit_1 = num%10

  digit_3 = num // 100

  digit_2 = (num%100) //10

  result = digit_1*100 + digit_2 *10 +digit_3

  print(result)

def isLeapYear(yr):
  print(yr % 100)

  if((not(yr % 100 ==0) and (yr%400==0)) or (yr % 4 == 0 ) ):
    return True
  
  return False


print(list(range(10,0,-2)))

  



