<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Title</title>
</head>
<body>
    <div>
        Enter your date of birth(month-day-year): <input type="text" id="date-of-birth">
    </div>
    <div>
        <input type="radio" id="male" name="gender" value="male">
        <label for="male">Male</label><br>
        <input type="radio" id="female" name="gender" value="female">
        <label for="female">Female</label><br>
    </div>
    <div>
        <input type="submit" value="submit" onclick="formdata()">
    </div>

    <div id="results"></div>
    <script src="index.js"></script>
</body>
</html>
