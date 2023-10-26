function searchTeachers() {
    // 選択された値を取得する
    var gender = document.getElementById("gender").value;
    var academic = document.getElementById("academic").value;
    var subject = document.getElementById("subject").value;

    // 検索結果を取得する
    var result = getTeachers(gender, academic, subject);

    // 検索結果を表示する
    var resultDiv = document.getElementById("result");
    resultDiv.innerHTML = result;
}

function getTeachers(gender, academic, subject) {
    // 適当なデータ
    var teachers = [
        { name: "山田太郎", gender: "male", academic: "tokyo", subject: "math" },
        { name: "鈴木花子", gender: "female", academic: "kyoto", subject: "english" },
        { name: "田中次郎", gender: "male", academic: "tokyotech", subject: "japanese" },
        { name: "佐藤三郎", gender: "male", academic: "tsukuba", subject: "science" },
        { name: "木村芳子", gender: "female", academic: "tokyo", subject: "social" }
    ];

    // 検索条件に合致するデータを抽出する
    var filteredTeachers = teachers.filter(function (teacher) {
        if (gender !== "all" && teacher.gender !== gender) {
            return false;
        }
        if (academic !== "all" && teacher.academic !== academic) {
            return false;
        }
        if (subject !== "all" && teacher.subject !== subject) {
            return false;
        }
        return true;
    });

    //　初期化する
    var result = "";
    
    // 検索結果を日本語に戻して表示したい
    if (filteredTeachers.length > 0) {
        result += "<ul>";
        filteredTeachers.forEach(function (teacher) {
            result += "<li>" + teacher.name + " - " + teacher.gender + " - " + teacher.academic + " - " + teacher.subject + "</li>";
        });
        result += "</ul>";
    } else {
        result = "該当する講師はいませんでした。";
    }
    return result;
}   