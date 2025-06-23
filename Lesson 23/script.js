var programming_languages = ['JavaScript', 'Python', 'Java', 'C#',
    'C++'
];

document.getElementById("show_array").innerHTML = programming_languages;

document.writeln(programming_languages[0] + '<br>');
document.writeln(programming_languages[1] + '<br>');
document.writeln(programming_languages[2] + '<br>');
document.writeln(programming_languages[3] + '<br>');
document.writeln(programming_languages[4] + '<br>');

programming_languages.push('Ruby');
document.getElementById("updated_array").innerHTML = programming_languages;

document.writeln(programming_languages.join(" - "));

document.writeln("<br><br>");
programming_languages.pop();
programming_languages.pop();
programming_languages.pop();
document.writeln(programming_languages);

document.writeln("<br><br>");

for (var index = 0; index < programming_languages.length; index++) { document.writeln(programming_languages[index] + "<br>") }

function funcA() {
    document.writeln('Function A has started.<br>');
    funcB();
    document.writeln('Function A has ended.<br>');
}

function funcB() {
    document.writeln('Function B has started.<br>');
    funcC();
    document.writeln('Function B has ended.<br>');
}

function funcC() {
    document.writeln('Function C has started.<br>');
    document.writeln('Function C has ended.<br>');
}

funcA();