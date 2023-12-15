//requiring path and fs modules
const path = require('path');
const fs = require('fs');

const directoryPath = '../public/content'

const update = async () => {
    let courses;
    let pattern = '.json';
    await fs.readdir(directoryPath, async (err, files) => {
        if (err) return console.log('Unable to scan directory: ' + err);
        courses = files.filter((str) => str.indexOf(pattern) === -1);
        courses = courses.filter((str) => str.indexOf('courses.md') === -1);
        await fs.writeFile(directoryPath + '/courses.json', JSON.stringify(courses), (err) => {
            if (err) throw err;
            console.log('courses updated');
        });
        courses.forEach(async (course) => {
            let tempPath = directoryPath + '/' + course;
            await fs.readdir(tempPath, async (err, files) => {
                if (err) return console.log('Unable to scan directory: ' + err);
                // select only md files
                let contents = files.filter((str) => /\.md$/.test(str));
                contents = contents.filter((str) => str.indexOf(course+'.md') === -1);

                await fs.writeFile(tempPath + '/'+ course + '.json', JSON.stringify(contents), (err) => {
                    if (err) throw err;
                    console.log(course + ' : content updated');
                });
            });
        });
    });
}

update();