# AccurateTime

This is a library to implement the time class.

As you know, the current time class of programming languages such as Java or JavaScript, they either have a very complicated time class or they just don't have any at all.

So this library uses 6 integers to separatly store the time, and provides various actions such as "add", "biggerThan", etc.

**Notice: This library is published in the hope that helps the beginners who wants to temperarly avoid using the complicated time class or implement the time class again. If you need them in production environment, please consider seriously!**

## Supported languages

The current version of AccurateTime only supports the following languages:

- JavaScript

In short terms the support for Java and PHP will also be added.

If you want to contribute this library, feel free to make pull requests.

## Get started

To get started, just simply import the appropriate file in your project and you are ready to use the AccurateTime!

### JavaScript

`<script type="text/javascript" src="lib/js/AccurateTime.js" ></script>`

## Usages

### JavaScript

#### Constructive method

The constructive method creates a AccurateTime object. If there is a String paramater passed in, then the object will be set to the time in the String.

The String should be the form of this: `yyyy-MM-dd HH-mm-ss`, which means "year-month-day hour:minute:second".

If you don't pass a parameter in, the object will be assigned the System Time.

**Note: If the parameter is invalid (such as 2018-12-29 22:58:62), the system will correct it automatically (In this case, 2018-12-29 22:59:02).**

#### Function "isLeapYear"

This funtion is used to judge if a number is leap year or not.

Please pass in a Integer that is larger than 0.

By the way, this system doesn't support the law of 1752, whose September has 11 days gone. That means the date before 1752 might not be what you expected as the Linux calender.

#### Function "getMonthDay"

This function is used to calculate the days of a month in a specific year.

This system doesn't support the law of 1752 either. So if you put 1752 and 9 in it, it will just output a 30.

#### Function "reconstruct"

This function is used to reconstruct a faulty AccurateTime object (This is also how the constructive method implements).

#### Function "assignStr", "assignInt"

These functions will accept parameters and modify the object.

The "assignStr" function is the same as the constructive function.

The "assignInt" function needs 6 parameters to run, which indicates year, month, day, hour, minute and second.

#### Function "add"

This function is used to make calculations of adding or substracting a few days or something.

The function needs four parameters: day, hour, minute and second.

If you want to make substractions, just simply pass in the negitive parameters.

#### Function "addOneYear", "minusOneYear", "addOneMonth", "minusOneMonth"

These are the functions that used to modify month and year.

The usage are as their names.

**Note: Why don't I write them into one function? When you make additions (or substractions) to the year, it changes the days of a year. If you modify the year and the day at the same time, it may cause collision. So as for safety, I divided them.**

#### Function "compareTo"

This is a function used to compare two AccurateTime objects. 
- If the object in the parameter is the history of "this", then it will return 1
- If the object in the parameter equals to "this", then it will return 0
- If the object in the parameter is the future of "this", then it will return 1

#### Function "toString"

This is used to convert AccurateTime object into a String. The format is `yyyy-MM-dd HH-mm-ss`.

#### get and set functions such as "getYear", "setMonth"

These functions are used to modify the object directly.

These functions also contains protection, if you modify the month into 13, the system will make an addition of 1 on the year and change month into 1.

## About coding

This code represented doesn't contain much of the comments, which will be resolved later.

If you fond any bugs, please post an "issue" or directly submit a "pull request".

## Tiping Author

My Alipay account is `15553142784`. If you like this library, you are more than welcomed to make a donation. Your support is of gteat importance.

## License

This library is under the lincense of GPL3.0.

The details are in the `license` file.
