var languages = ['English', 'French', 'Spanish', 'German',
    'Hindi'
];

document.getElementById("show_array").innerHTML = languages;

document.writeln(languages[0] + '<br>');
document.writeln(languages[1] + '<br>');
document.writeln(languages[2] + '<br>');
document.writeln(languages[3] + '<br>');
document.writeln(languages[4] + '<br>');

languages.push('Mandarin');
document.getElementById("updated_array").innerHTML = languages;

document.writeln(languages.join(" - "));

document.writeln("<br><br>");
languages.pop();
languages.pop();
document.writeln(languages);

document.writeln("<br><br>");



