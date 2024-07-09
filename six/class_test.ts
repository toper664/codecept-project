Feature('class schedule');

BeforeSuite(({ login }) => {
    login('six');
});

Scenario('open class schedule',  ({ I }) => {
    I.click(locate('a').withText('Kelas').last());
    I.waitForText('Jadwal Perkuliahan Mahasiswa', longWait);
});