export interface SummonData {
  name: string;
  fatherName: string;
  address: string;
  section: string;
  date: string;
}

export const generateSummonHtml = (data: SummonData) => {
  const { name, fatherName, address, section, date } = data;
  const year = date.split("-")[2] || "";

  return `
<!DOCTYPE html>
<html lang="bn">
<head>
  <meta charset="UTF-8">
  <meta name="pdf:width" content="16.5cm">
  <meta name="pdf:height" content="21cm">
  <title>আসামীর প্রতি সমন</title>
  <style>
    /* Google Fonts Tiro Bangla */
    @import url('https://fonts.googleapis.com/css2?family=Tiro+Bangla:ital@0;1&display=swap');

    body, p, div, span, table, td {
      font-family: 'Tiro Bangla', serif;
      font-size: 14px;
      line-height: 1.8;
      margin: 0;
      padding: 5mm;
      background: #fff;
    }
  </style>
</head>
<body style="margin: 0; padding: 5mm; line-height: 1.8; background: #fff;">
  <!-- Summon Section -->
  <div style="page-break-after: always;">
    <div style="text-align: left; font-size: 18px; margin-bottom: 1rem;">
      <p>বাংলাদেশ ফরম নং ৩৯০৩ <br> হাইকোর্ট ফৌজদারী কার্যবিধি ফরম নং ১বি</p>
    </div>
    <div style="text-align: center; font-size: 32px; font-weight:800; margin-bottom: 2.5px;">আসামীর প্রতি সমন</div>
    <div style="text-align: center; font-size: 14px;">
      (১৮৯৮ সালের ৫ নং আইন এর ৫ নং তফসিল, ১ নম্বর ফরম)<br>[ফৌজদারী কার্যবিধির ৬৮ ধারা]
    </div>
    <div style="max-width: 650px; line-height: 2; width: 100%;">
      <div style="font-size: 18px; font-weight: 500; margin-top: 30px;">প্রাপকঃ</div>
      <div style="display: flex; gap: 10px; margin-top: 10px; align-items: flex-end;">
        <!-- নামঃ -->
        <div style="position: relative; display: inline-block; margin-left:36px">
          <div style="position: absolute; top: -10px; left: 45px; font-size: 18px;">
            ${name}
          </div>
          <div style="font-size: 18px;">
            নাম:<span style="margin-left: 3px;">.................................................</span>
          </div>
        </div>
        <!-- পিতা -->
        <div style="position: relative; display: inline-block;">
          <div style="position: absolute; top: -10px; left: 45px; font-size: 18px;">
            ${fatherName}
          </div>
          <div style="font-size: 18px;">
            পিতা:<span style="margin-left: 3px;">......................................................</span>
          </div>
        </div>
      </div>
      <div style="position: relative; display: inline-block; margin-top: 5px;">
        <div style="position: absolute; top: -10px; left: 60px; font-size: 18px;">
          ${address}
        </div>
        <div style="font-size: 18px;">
          ঠিকানা:<span style="margin-left: 3px;">....................................................................................................................</span>
        </div>
      </div>
      .................................................................................................................................
      <p style="font-size: 18px; margin-top: 20px;">
        <span style="margin-left:32px;">যেহেতু আপনার বিরুদ্ধে</span>
        <span style="position: relative; display: inline-block;">
          <span style="position: absolute; top: -10px; left: 10px; font-size: 18px;">${section}</span>
          <span>...............................</span>
        </span>
        ধারা অপরাধের অভিযোগ আসিয়াছে, সেহেতু উহার উত্তর প্রদানের জন্য আপনি
        <span style="position: relative; display: inline-block;">
          <span style="position: absolute; top: -10px; left: 10px; font-size: 18px;">${date}</span>
          <span>...............................</span>
        </span>
        তারিখে স্বয়ং অথবা উকিলের মাধ্যমে আমার সমক্ষে হাজির হইবেন। ইহার যেনো অন্যথায় না হয়।
      </p>
      <p style="font-size: 18px; margin-top: 20px;">
        অদ্য ২০
        <span style="position: relative; display: inline-block;">
          <span style="position: absolute; top: -10px; left: 8px; font-size: 18px;">${year}</span>
          <span>....................</span>
        </span>
        সালের
        <span style="position: relative; display: inline-block;">
          <span style="position: absolute; top: -10px; left: 8px; font-size: 18px;">${date}</span>
          <span>....................</span>
        </span>
        তারিখে আমার স্বাক্ষর ও আদালতের সীলমোহর প্রদান করা গেল।
      </p>
      <table style="width: 100%; margin-top: 70px; font-size: 18px;">
        <tr>
          <!-- আদালতের সীলমোহর -->
          <td style="text-align: left; vertical-align: top; position: relative;">
            <!-- সীলমোহর ডাটা -->
            <div style="position: absolute; top: 20px; left: 0; font-size: 18px;">
              ${name}
            </div>
            আদালতের সীলমোহর<br>
          </td>
          <!-- ম্যাজিস্ট্রেট -->
          <td style="text-align: right; vertical-align: top; position: relative;">
            <!-- ম্যাজিস্ট্রেট নাম -->
            <div style="position: absolute; top: 20px; right: 0; font-size: 18px;">
              ${fatherName}
            </div>
            ম্যাজিস্ট্রেট<br>
          </td>
        </tr>
      </table>
    </div>
  </div>
  <!-- Affidavit Section -->
  <div>
    <div style="text-align: center; padding: 2mm; font-size: 32px; margin-bottom: 2px;">অ্যাফিডেভিট</div>
    <p style="font-size: 16px; line-height: 2;">
      <span style="min-width: 100px; display: inline-block;">....................................................</span> এর পুত্র আমি ধর্মতঃ
      প্রতিজ্ঞাপূর্বক এতদ্বারা ব্যাক্ত করিতেছি যে,আমি ২০ <span style="min-width: 80px; display: inline-block;">...............</span>
      সালের
      <span style="min-width: 80px; display: inline-block;">....................</span>
      মাসের
      <span style="min-width: 80px; display: inline-block;">...................</span>
      তারিখে <span style="min-width: 80px; display: inline-block;">
      .....................</span> বারে <span style="min-width: 150px; display: inline-block;">.......................................................................</span> স্থানে
      <span style="min-width: 150px; display: inline-block;">..........................................</span>এর পুত্র <span style="min-width: 150px; display: inline-block;">............................................</span> এর নামের প্রদত্ব
      পর পৃষ্ঠায় লিখিত সমনের একখানি নকল খোদ উক্তত ব্যাক্তিকে সমর্পণ করিয়া অথবা
      <span style="min-width: 150px; display: inline-block;">
      .................................................................</span> নামক
      <span style="min-width: 150px; display: inline-block;">
      ....................................................</span>
      তাহার পরিবারভুক্ত যে পূর্নবয়স্ক ব্যাক্তির
      নিকট রাখিয়া আসিয়া অথবা তাঁহার বাটী বা বাসস্থান কোন সুপ্রকাশ্য স্থলে লটকাইয়া দিয়া ঐ নকল তাঁহার উপর জারী করিয়াছি।
    </p>
    <p style="font-size: 16px;">
      সন ২০<span style="min-width: 80px; display: inline-block;">
      .........................</span>
      সাল <span style="min-width: 80px; display: inline-block;">
      ........................</span>
      তারিখ
      <span style="min-width: 80px; display: inline-block;">
      ........................</span>
    </p>
    <div style="margin-top: 35px; font-size: 16px; text-align: right;">
      <div style="width: 100%; text-align: right;">
        উপরোক্ত <br> বিষয় সত্য বলিয়া আমার নিকট শপথবদ্ধ বা ধর্মগত <br> প্রতিজ্ঞাবদ্ধ করিলেন।
      </div>
      <div style="margin-top: 30px; font-weight: bold; font-size: 18px;">ম্যাজিস্ট্রেট</div>
      <div style="margin-top: 10px;">
        সন ২০ <span style="min-width: 80px; display: inline-block;">................</span> সাল তাং
        <span style="min-width: 80px; display: inline-block;">.........................</span>
      </div>
    </div>
    <div style="margin-top: 60px; font-size: 10px;">
      [নং সম ( বাঃ বাঃ কোঃ) ভেটিং/ফ-৪/ ৮৬-৩৯৪২, তারিখ: ২০-০৫-২০২৫] <br>
      [মুদ্রণদেশ নং: সি -৬৫/২০১৪-২০২৫, তাং ২০-১২-২০২১ খ্রিঃ ] <br>
      গভর্ণমেন্ট প্রিন্টিং প্রেস - প্রসেস শাখা (সিরিপি/ইমেজ) - ১৬৩৬/২০২১-২০২২/লঃ - ২৫-০১-২০২২ - ৫,০০,০০০ (পাঁচ লক্ষ) কপি।
    </div>
  </div>
</body>
</html>
`;
};