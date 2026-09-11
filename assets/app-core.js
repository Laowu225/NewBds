/* ===== main app script (from index.html main <script>) ===== */
// ══════════ I18N ══════════
let currentLang='en';
const NAV_ICONS={schedule:'📅',students:'👤',payments:'💳',teachers:'🎓',attendance:'✅','my-schedule':'📅','my-students':'👤','my-salary':'💰','my-fees':'💳','my-classes':'📅','all-classes':'🏫','my-attendance':'✅',reports:'📈',accounts:'🔑',rewards:'🎁',intro:'🖼️','my-profile':'🪪'};
const I18N={
  en:{
    // nav
    'nav.schedule':'Schedule','nav.students':'Students','nav.payments':'Payments','nav.teachers':'Teachers',
    'nav.attendance':'Attendance','nav.reports':'Reports','nav.my-schedule':'My Schedule','nav.my-students':'My Students',
    'nav.my-salary':'My Salary','nav.my-profile':'My Profile','nav.my-fees':'My Fees','nav.my-classes':'My Classes','nav.all-classes':'All Classes',
    'nav.my-attendance':'My Attendance','nav.accounts':'Accounts','nav.rewards':'Rewards','title.rewards':'Rewards','grade.bronze':'Bronze','grade.silver':'Silver','grade.gold':'Gold','grade.diamond':'Diamond','grade.crown':'Crown','page.gradeWord':'Grade','page.gradeNote':'Keep dancing to level up your grade!','page.gradesByStyle':'Grades by Dance Style','page.highest':'Highest','page.highestGradeNote':'Your points are earned at your highest grade — Grade {g}.','page.noGradesYet':'No grades set yet','page.points':'Points','page.pts':'pts','page.pointsEarnedNote':'Earn {p} points for every class you attend (your Grade rate), then redeem them for rewards below.','page.birthday':'Birthday','page.birthdayToday':'🎉 Happy Birthday!','page.birthdayBonusNote':'Claim your birthday gift — 100 bonus points!','page.birthdayCountdown':'{d} days until your birthday 🎈','page.claimBirthday':'Claim Birthday Reward','page.birthdayClaimedBtn':'Birthday Reward Claimed','page.birthdayNone':'No birthday on file — ask the front desk to add it.','page.redeemRewards':'Redeem Rewards','page.redeem':'Redeem','page.reward':'Reward','page.redemptionHistory':'Redemption History','page.noRedemptions':'No rewards redeemed yet','reward.water':'Bottled Water','reward.drink':'Drink Voucher','reward.sticker':'Sticker Pack','reward.wristband':'Studio Wristband','reward.tote':'Canvas Tote Bag','reward.freeclass':'Free Single Class','reward.tshirt':'Studio T-Shirt','reward.monthfree':'1 Month Free (1 class)','msg.redeemed':'🎁 Redeemed {r}!','msg.notEnoughPoints':'Not enough points yet','msg.birthdayBonus':'🎉 Birthday bonus — 100 points added!','msg.notBirthday':'It’s not your birthday today','msg.birthdayClaimed':'Birthday reward already claimed this year',
    // common
    'common.signOut':'Sign out','common.edit':'Edit','common.delete':'Del','common.save':'Save','common.cancel':'Cancel',
    'common.add':'Add','common.search':'Search','common.status':'Status','common.active':'Active','common.onLeave':'On Leave',
    'common.partTime':'Part-time','common.paid':'Paid','common.unpaid':'Unpaid','common.present':'Present','common.absent':'Absent',
    'common.classCancelled':'Class Cancelled','common.notMarked':'Not Marked','common.all':'All','common.franchise':'Branch',
    'common.teacher':'Teacher','common.allTeachers':'All Teachers','common.student':'Student','common.class':'Class',
    'common.month':'Month','common.amount':'Amount','common.date':'Date','common.method':'Method','common.notes':'Notes',
    'common.total':'Total','common.name':'Name','common.age':'Age','common.day':'Day','common.time':'Time','common.danceStyle':'Dance Style','page.sortBy':'Sort by','common.room':'Room',
    'common.phone':'Phone','common.email':'Email','common.parent':'Parent','common.from':'From','common.to':'To',
    'common.clearFilter':'✕ Clear date filter','common.noRecords':'No records found',
    'common.days.Monday':'Monday','common.days.Tuesday':'Tuesday','common.days.Wednesday':'Wednesday','common.days.Thursday':'Thursday','common.days.Friday':'Friday','common.days.Saturday':'Saturday','common.days.Sunday':'Sunday',
    'common.allDays':'— All Days —','common.filterByDay':'Filter by Day','common.allFranchises':'All','common.filterByFranchise':'Filter by Branch','common.filterByTeacher':'Filter by Teacher','common.filterByStatus':'Filter by Status','common.filterByStyle':'Filter by Style',
    'common.sortBy':'Sort by','page.sortName':'Name (A–Z)','page.sortId':'Student ID','page.sortDay':'Class Day','page.sortTeacher':'Teacher (A–Z)',
    'page.switchDate':'Switch Date',
    'common.addStudent':'+ Add Student','common.addClass':'+ Add Class','common.addTeacher':'+ Add Teacher','common.recordPayment':'+ Record Payment','common.downloadCSV':'Download CSV',
    'common.classes':'Classes','common.contact':'Contact','common.feeMonth':'Fee/Month','common.actions':'','common.byFranchise':'By Branch',
    'common.totalCollected':'Total Collected','common.totalUnpaid':'Unpaid','common.searchPlaceholder':'🔍 Search name, parent or ID...','common.searchByNameOrId':'Search name or ID...',
    'common.myClasses':'My Class(es)','common.students':'Students','common.spots':'Spots','common.full':'Full','common.open':'open',
    'common.noClasses':'No classes','common.noRecordsFound':'No records match filters','common.close':'Close','common.confirm':'Confirm',
    'common.franchise2':'Branch','common.dateEarned':'Date Earned','common.markPresent':'✓ Present','common.markAbsent':'✗ Absent','common.markCancelled':'Class Cancelled',
    'page.adminPanel':'Admin Panel','page.franchiseView':'Branch view','page.fullAccess':'Full access',
    'page.statStudents':'Students','page.statClasses':'Classes','page.statTeachers':'Teachers','page.statExpected':'Expected/Month',
    'page.statCollected':'Collected ({month})','page.statUnpaid':'Unpaid Records','page.allClasses':'All Classes',
    'page.sortedBy':'(sorted by branch → teacher → time)','page.noClassesOn':'No classes on',
    'page.recordsMatchFilters':'No records match filters','page.classesMatchFilters':'No classes match these filters',
    'page.noClasses2':'No classes','page.groupedByFranchise':'Grouped by branch · a student can be enrolled in more than one class',
    'page.noStudentsFound':'No students found',
    'msg.dupeStudentName':'A student with this name already exists:','page.enrollHereInstead':'Enroll in a class here instead',
    'page.unpaidRecords':'unpaid record','page.unpaidRecordsPl':'unpaid records',
    'page.billedSeparately':'💡 Each class a student takes is billed separately — finishing one teacher\'s class doesn\'t require paying for another teacher\'s class at the same time, but you can tick multiple unpaid bills below and pay them together in one go.',
    'page.billsSelected':'bills selected','page.paySelected':'✓ Pay Selected Together',
    'page.teacherHintCounter':'Showing {f} data only — RM160/RM130 = students paid on that rate · Single Class = paid drop-in records',
    'page.teacherHintAdmin':'Total Student = studio-wide headcount · each branch has its own column · RM160/RM130 = students paid on that rate · Single Class = paid drop-in records','page.orderNo':'Order (1 = first)','msg.orderSaved':'✅ Instructor order updated','page.arrangeOrder':'Arrange Order','page.arrangeTeachersTitle':'Arrange Instructor Order','page.arrangeTeachersIntro':'Use the arrows to set the order instructors appear in — 1st is shown first on the public page. Tap Save when the order looks right.',
    'page.totalStudent':'Total Student','page.paidQty':'paid qty','page.noTeachers':'No teachers',
    'page.extraSession':'➕ Extra / Replacement Session','page.classesEveryDay':'— every day','page.classesOn':'on',
    'page.previous':'◀ Previous','page.next':'Next','page.normallyRuns':'This class normally runs','page.jumpToA':'📅 Jump to a',
    'page.noStudentsEnrolled':'No students enrolled in this class','page.mark':'Mark','page.extra':'Extra',
    'page.cncl':'cncl','page.extraReplacementNotUsual':"🔁 Extra / Replacement Session — not this class's usual day",
    'page.presentCount':'present','page.absentCount':'absent','page.cancelledCount':'cancelled','page.unmarkedCount':'unmarked',
    'page.previousRecordsFor':'📜 Previous Records for','page.tapToJump':'(tap a date to jump)','page.noRecordsInRange':'No records in this date range',
    'page.noRecordsYet':'No records yet','page.selectClassAndDate':'Select a class and date','page.extraSessionReady':'Extra / replacement session ready — mark attendance below',
    'page.extraSessionDesc':"Add attendance for a class replacement, makeup session, or extra practice hour on any date — not limited to the class's usual day.",
    'page.sessionDate':'Session Date','page.openAttendance':'Open Attendance','page.usually':'usually',
    'page.reportsTitle':'📈 Reports & Analytics','page.revenueByMonth':'Revenue by Month (Paid)','page.enrollByStyle':'Enrollment by Dance Style',
    'page.studentsPerTeacher':'Total Students per Teacher','page.exclSingleClass':'(excl. Single Class)','page.noData':'No data',
    'page.summary':'Summary','page.totalRevenue':'Total Revenue (All Time, Paid)','page.allFranchiseTotal':'All Branch Total Student',
    'page.acrossFranchises':'across','page.franchisesWord':'branches','page.totalStudentByFranchise':'Total Student by Branch',
    'page.studentWord':'student','page.studentsWord':'students',
    'page.classThisWeek':'class','page.classesThisWeek':'classes','page.thisWeek':'this week','page.addNewClass':'+ Add New Class',
    'page.noClassesOnDay':'No classes on','page.myClassesTitle':'My Classes','page.sortedByFranchiseTime':'(sorted by branch → time)',
    'page.noClassesYet':'No classes assigned yet — click "Add New Class" to create one',
    'page.myStudentsCount':'student','page.myStudentsCountPl':'students','page.acrossYourClasses':'across your classes',
    'page.manageEnrollment':'➕ Manage Enrollment','page.billedSeparatelyTeacher':"💡 Each class is billed separately — the fee status below is only for YOUR class with this student, not any other teacher's class they may also take.",
    'page.feeStatusMyClass':'Fee Status (my class)','page.noRecord':'No Record','page.payment':'+ Payment',
    'page.enrollmentNote':"💡 You can mark your students' payments as Paid/Unpaid or record a new payment directly. Use \"Manage Enrollment\" to add or remove students from your own classes — students can belong to more than one class, but only admins and teachers can change enrollment.",
    'page.autoCalculated':'— auto-calculated by the system','page.filterByMonth':'Filter by Month','page.monthActuallyTaught':'(month the classes were actually taught)',
    'page.allMonths':'All Months','page.singleClassRateRM160':'Single-class Rate (RM160)','page.multiClassRateRM130':'Multi-class Rate (RM130)',
    'page.singleClassPayments':'Single Class Payments','page.totalSalary':'Total Salary','page.monthSalary':'Salary','page.allMonthsWord':'all months','page.thisMonthOnly':'this month only',
    'page.studentCountBonus':'Your Rate Tier by Month','page.studentCountBonusMonth':'Month','page.studentCountBonusHeadcount':'Monthly Class Count','page.studentCountBonusAmount':'Rate Applied',
    'page.studentCountBonusExplain':'💡 Your monthly-fee class rate depends on your total monthly-fee class-contributions each month (across all your classes — one student taking 4 classes with you counts as 4, not 1): <b style="color:var(--gold)">RM70/class</b> for 1–20, <b style="color:var(--gold)">RM75/class</b> for 21–40, and <b style="color:var(--gold)">RM80/class</b> for 41 and above.',
    'page.salaryExplain':'💡 Salary is calculated <b>month by month</b>, based on when the classes were actually taught — e.g. if a student\'s 4th attendance for the month happens on July 1st, that earning counts as <b style="color:var(--gold)">July</b> salary, even though the resulting fee bill is for August. Each monthly-fee class-contribution earns your <b style="color:var(--gold)">tiered rate</b> for that month (see below), and each paid "Single Class" drop-in earns <b style="color:var(--gold)">RM{r2}</b>. Only <b>Paid</b> records count.',
    'page.earningRecords':'Earning Records','page.earnedMonth':'Earned Month','page.category':'Category','page.amountPaid':'Amount Paid',
    'page.dateEarnedCol':'Date Earned','page.myEarning':'My Earning','page.noPaidRecords':'No paid records','page.forMonth':'for',
    'page.singleClassRateLabel':'Monthly Fee · single-class rate (RM160)','page.multiClassRateLabel':'Monthly Fee · multi-class rate (RM130)','page.singleClassLabel':'Single Class','page.trialClassLabel':'Trial Class',
    'page.monthlyFee':'Monthly Fee','page.unpaidRecordWord':'record','page.unpaidRecordsWord':'records',
    'page.outstandingPayments':'⚠️ Outstanding Payments','page.noteLabel':'Note','page.paymentHistory':'Payment History',
    'page.noPaymentsInRange':'No payments in this date range','page.noPaymentRecords':'No payment records','page.receipt':'🧾 Receipt',
    'page.howToPay':'How to Pay','page.bankTransfer':'Bank Transfer','page.bankName':'Bank','page.accountName':'Account Name','page.accountNumber':'Account No.','page.tngEwallet':"Touch 'n Go eWallet",'page.scanToPay':'Scan to pay','page.payNote':'After paying, please show or send your receipt to the front desk so your payment can be recorded.',
    'page.enrolledSince':'Enrolled since','page.editMyProfile':'✏️ Edit My Profile','page.myProfile':'My Profile',
    'page.enrollmentChangeNote':"💡 Class enrollment can only be changed by the studio admin or your teacher.",
    'page.notEnrolled':'Not enrolled in any class yet.','page.classmates':'Classmates','page.noOtherStudents':'No other students',
    'page.browseAllClasses':'Browse every class across all branches —','page.totalWord':'total','page.allStyles':'All Styles',
    'page.viewOnlyCycle':'View-only ·','page.classesAttendedCycle':'classes attended this cycle',
    'page.attendanceChangeNote':"💡 Attendance can only be marked or changed by your teacher, the front desk, or the studio admin.",
    'page.cycleProgress':'Cycle progress (4 classes = 1 month)','page.noAttendanceInRange':'No attendance in this date range','page.noAttendanceYet':'No attendance recorded yet',
    'page.searchStudent':'🔍 Search Student','page.noMatchingStudents':'No matching students','page.attendanceFor':'Attendance —','page.acrossAllClasses':'across all classes',
    // titles
    'title.schedule':'Class Schedule','title.students':'Students','title.payments':'Payment Records','title.teachers':'Teachers','title.accounts':'Account Management',
    'title.attendance':'Attendance','title.reports':'Reports','title.my-schedule':'My Schedule','title.my-students':'My Students',
    'title.my-salary':'My Salary','title.my-profile':'My Profile','title.my-fees':'Payment History','title.my-classes':'My Classes',
    'title.all-classes':'All Studio Classes','title.my-attendance':'My Attendance',
    // site / marketing page
    'site.signIn':'Staff & Student Sign In','site.signInShort':'Sign In','site.eventEyebrow':'Upcoming Event','site.eventsTitle':'Upcoming Events','site.eventLead':'Our biggest K-pop dance showcase yet — solo, battle, group cover and random play dance. Come compete, or come cheer your crew on.','site.shopsEyebrow':'Collaborated Shops','site.shopsTitle':'Perks For Our Students','site.shopsLead':'Show your student ID at any of these partner shops to enjoy a 10% discount. Tap a shop to see what they offer.','site.shopDiscount':'10% student discount','site.shopDiscountShort':'10% OFF','site.shopOffers':'What they offer','site.shopNoItems':'Ask in store for details.','site.shopVisit':'Visit shop \u2192','site.eventDateL':'Date','site.eventTimeL':'Time','site.eventVenueL':'Venue','site.eventCatsL':'Categories','site.eventBtn':'Sign In To Register →','site.eventBtnLink':'Register Now →','site.heroEyebrow':'Hip-hop · K-pop · Street Jazz · Popping',
    'site.heroLine1':'Move Like','site.heroLine2':'You Mean It',
    'site.heroLead':"B Dance Studio trains beginners through competition crews across 8 street styles — from your first count of 8 to your first time on stage. Four branches across Malaysia, one standard of teaching.",
    'site.findStudio':'Find a Studio Near You','site.meetInstructors':'Meet the Instructors',
    'site.statFranchises':'Branches','site.statStyles':'Dance Styles','site.statInstructors':'Instructors','site.statFounded':'Founded',
    'site.aboutEyebrow':'About Us','site.aboutTitle1':'Built By Dancers,','site.aboutTitle2':'Not A Branch Playbook',
    'site.aboutLead':"B Dance Studio started as a single Adda Height studio teaching hip-hop fundamentals to kids who'd only ever seen the moves online. Today we run four branches across Malaysia — teaching everything from beginner hip-hop to competition-level choreography, K-pop cover dance, popping, waacking, and dancehall — taught by instructors who still perform. Every class runs on the same standard no matter which branch you walk into.",
    'site.instructorsEyebrow':'Our Instructors','site.instructorsTitle1':'Learn From People','site.instructorsTitle2':'Who Still Train',
    'site.instructorsLead':'Ten resident instructors across our four branches, each bringing real specialities rather than a little of everything.','site.showAllTeachers':'Show all {n} instructors','site.showLessTeachers':'Show fewer instructors',
    'site.locationsEyebrow':'Locations','site.locationsTitle1':'Four Branches,','site.locationsTitle2':'One Studio',
    'site.locationsLead':"Same styles, same teaching standard, different neighborhoods. Pick whichever's closest.",
    'site.getDirections':'📍 Get Directions →','site.ctaTitle':'Ready To Start?','site.ctaLead':'Staff, teachers, and enrolled students sign in below.',
    'site.ctaBtn':'Staff & Student Sign In →','site.contactBtn':'Contact Us →','site.contactTitle':'Contact Us',
    // login
    'login.who':"Who's signing in?",'login.admin':'Admin','login.counter':'Counter','login.teacher':'Teacher','login.student':'Student',
    'login.chooseFranchise':'🏢 Which location are you working at?','login.back':'← Back','login.studioSite':'← Studio Site',
    'login.signIn':'Sign In \u2192','login.username':'Username','login.password':'Password',
    // filters
    'common.filterByClass':'Filter by Class','common.allClasses':'— All Classes —','common.filterByDate':'Filter by Paid Date','common.searchByReceipt':'Search by Receipt No. or Student ID','common.searchByReceiptPh':'e.g. RCP-00020, 00020, or S0042',
    'common.filterByMonth':'Filter by Month','common.allMonths':'\u2014 All Months \u2014','common.rental':'Rental','common.username':'Username','common.password':'Password',
    'common.filterByCategory':'Filter by Category','common.allCategories':'\u2014 All Categories \u2014','common.filterByMethod':'Filter by Method','common.allMethods':'\u2014 All Methods \u2014',
    'page.adminOnly':'Admin only','page.counterAccounts':'Counter Accounts','page.accountsIntro':'Edit the username and password for each branch front-desk login. Only admin can change these.','page.studentAccounts':'Student Logins','page.showAllStudentAccounts':'Show all student accounts','page.moreStudentAccounts':'+{n} more — open to search & filter all accounts','page.allStudentAccountsShown':'{n} student account(s) total','page.studentAccountsModalIntro':'Search by name or ID, and filter by franchise or class day. Edit a password and Save, or Delete an account.','page.studentAccountsIntro':'All student login IDs and passwords (view only).','page.adminManaged':'Admin-managed','page.accountsBar':'All Accounts','page.accountsBarIntro':'View, edit and delete every counter, teacher and student login. Passwords are visible; a student\u2019s password-changed date appears here whenever they update it.','page.teacherAccounts':'Teacher Accounts','page.passwordChanged':'Password Changed','page.addToClass':'Add Student','page.payDetailsTitle':'Payment / Bank Details','page.payDetailsIntro':'Edit the bank transfer and e-wallet details students see on the How to Pay screen.','page.tngName':'eWallet Name','page.tngNumber':'eWallet Number','page.qrUpload':'Payment QR Code','page.qrUploadNote':'Upload the QR code image from your Touch \u2019n Go / DuitNow app. Students scan this to pay, so upload the real one \u2014 screenshot it from your app, then choose the file here.','page.qrNone':'No QR yet','page.savePayDetails':'Save Payment Details','msg.payDetailsSaved':'Payment details saved','page.rewardsManageTitle':'Manage Rewards','page.rewardsManageIntro':'Edit or delete the rewards students can redeem with points. Changes apply to everyone.','page.rewardIcon':'Icon','page.rewardName':'Reward Name','page.addReward':'Add Reward','msg.rewardSaved':'Reward saved','msg.rewardDeleted':'Reward deleted','msg.rewardAdded':'Reward added','msg.confirmDeleteReward':'Delete this reward? Students will no longer be able to redeem it.','page.stylesTitle':'Dance Styles','page.stylesIntro':'Add, rename or remove the dance styles used across classes, teacher specialities and student grades. Changes apply everywhere.','page.styleName':'Style Name','page.styleInUse':'In Use','page.styleUnused':'Not used','page.addStyle':'Add Style','page.classesWord':'classes','msg.styleNameNeeded':'⚠️ Type a style name first','msg.styleExists':'⚠️ That style already exists','msg.styleAdded':'💃 Style added','msg.styleSaved':'💃 Style saved','msg.styleDeleted':'💃 Style removed','msg.styleInUse':'⚠️ Can’t remove — {n} class(es) still use this style. Change or delete those classes first.','msg.confirmDeleteStyle':'Remove the “{s}” style? It will be taken off teacher specialities and student grades. Classes are unaffected because none use it.','page.database':'Database','page.dbTitle':'Database ↔ CSV','page.dbIntro':'Import or export the whole database as database_all.csv. Working data is auto-saved in this browser.','page.dbExport':'Export database_all.csv','page.dbImport':'Import database_all.csv','page.dbReset':'Reset to Default Data','page.dbAutosave':'Changes are saved automatically to this browser and restored on reload.','page.dbCloudError':'Cloud sync error','page.dbCloud':'Connected to the shared cloud database (Supabase) — changes sync for everyone, and the screen refreshes with others’ latest edits automatically every so often. Use 🔄 Refresh (top right) any time you want the newest data right now.','page.dbRefresh':'Refresh from cloud','msg.cloudRefreshed':'✅ Refreshed from the shared database','page.dbFixDifficulty':'🩺 Fix Class Difficulty','page.dbFixBilling':'🩺 Fix Advance Billing','msg.billingFixing':'Re-checking every student\u2019s billing history…','msg.billingFixDone':'✅ Fixed {n} student(s) — {b} missing bill(s) created, {c} wrongly-matched payment(s) corrected, {r} stale bill(s) removed','msg.billingFixNone':'✅ Nothing to fix — every completed cycle already has the right bill','msg.billingFixFail':'⚠️ Could not run the repair — check your connection and try again','msg.confirmFixBilling':'This re-checks every student\u2019s attendance against their payment history and raises any bill that should have auto-billed but didn\u2019t (an older bug could let one advance payment silently cover the wrong month, leaving a later cycle unbilled). Paid payments are never changed \u2014 only which cycle an already-paid record is credited against, and any missing Unpaid bill that gets created. Continue?','msg.difficultyFixing':'Fixing class difficulty…','msg.difficultyFixDone':'✅ Fixed {n} class(es) — every device will now show the correct difficulty','msg.difficultyFixNone':'✅ Nothing to fix — every class already has a real difficulty stored','msg.difficultyFixFail':'⚠️ Could not run the repair — check your connection and try again','msg.dbExported':'💾 Database exported to database_all.csv','msg.reportExported':'Report downloaded','msg.dbImported':'✅ Database imported from CSV','msg.dbImportFail':'Could not read that CSV — make sure it’s database_all.csv','msg.confirmReset':'Reset to the built-in default data? Your current data in this browser will be cleared.','msg.offlineBanner':'No internet connection — please check your connection.','msg.offlineBlocked':'⚠️ No internet connection (or the network is too slow) — please check your connection and try again. Nothing was saved.','msg.offlineWarning':'⚠️ No internet connection — please check your connection. Changes are saved on this device and will sync automatically once you’re back online.','msg.backOnline':'✅ Back online — syncing your changes now','msg.saveNeedsConnection':'⚠️ Could not save — no internet connection or the network is too slow. Please check your connection and try again.','page.uploadVideo':'Upload video','att.bonusBtn':'Bonus','att.repAdd':'Record Replacement','att.repEdit':'Edit Replacement','page.repTitle':'📝 Record Replacement','page.repFor':'Where did {s} do the replacement for their absence on {d}?','page.repTeacher':'Teacher','page.repClass':'Class','page.repDate':'Date','page.repDay':'Day','page.repDayAuto':'From the date','msg.repSaved':'📝 Replacement recorded','msg.repCleared':'Replacement record cleared','msg.repNeedClass':'⚠️ Choose the class the replacement was done in','msg.repNeedDate':'⚠️ Choose the date of the replacement','att.bonusTag':'🎁 Bonus Class','page.bonusClassLabel':'Bonus Class','page.danceShowLabel':'Dance Show','page.dsAllOwn':'All Our Own Students (7:3)','page.dsSomeOutside':'Some From Outside (6:4)','page.dsQualityNote':'Keep the quality high, and prioritise the studio\u2019s own students when picking dancers.','page.dsIncludedNote':'Includes a 3\u20135 min show and 3 rehearsals. The studio arranges the invoice/quotation, and the room can be used for practice.','page.dsTotal':'Total','page.dsWage':'Dancer Wage','page.dsStudioKeeps':'Studio Keeps','msg.dsWageExceedsTotal':'Dancer wage is more than the total \u2014 nothing left to split','page.bonusClass':'Bonus Class','page.bonusNone':'None available','page.replacementCard':'Replacement','page.replaceExpires':'Replace by {d}','page.replaceNone':'None pending','page.replaceDaysLeft':'Makeup needed — {n} day(s) left (by {d})','page.replaceNoExpiry':'Makeup needed — no deadline (private class)','page.pvFixedByClass':'fixed by the selected private class','page.bonusExpires':'Expires {d}','page.bonusHowTo':'Ask the front desk to use it in a class you’re not enrolled in','msg.bonusExpired':'🎁 That bonus class has expired — it lapses 30 days after payment','msg.replaceLate':'⚠️ Added — but no absence in the last {n} days to replace','att.bonusTip':'Free monthly bonus class — this teacher still earns RM{n}','msg.bonusUsed':'🎁 Bonus class used · {t} earns {n}','msg.bonusOwnClass':'🎁 The bonus class must be used in a class they’re not already enrolled in','msg.bonusNotPaid':'🎁 No bonus yet — {m} monthly fee is not paid','msg.bonusUsedUp':'🎁 The {m} bonus class has already been used','msg.bonusCreditOnly':'🎁 Bonus classes are for monthly students only','page.filterStudent':'🔍 Type to filter students…','page.filterClass':'🔍 Type to filter classes…','msg.busySaving':'Saving…','msg.busySigningIn':'Signing in…','msg.busyLoading':'Loading…','page.igImport':'Import from Instagram','msg.igImporting':'Fetching from Instagram… this can take a few seconds','msg.igNeedLink':'⚠️ Put an Instagram reel link in the field first, then press Import.','msg.igFailed':'⚠️ Instagram import failed','msg.uploading':'Uploading…','msg.uploadDone':'✅ Video uploaded','msg.uploadFailed':'⚠️ Upload failed','msg.videoTooBig':'⚠️ That video is too large — the limit is 50 MB. Trim it or export it smaller.','msg.uploadNoBucket':'⚠️ Storage is not set up yet — run the media bucket section of supabase_setup.sql in Supabase.',
    // modal titles
    'modal.addTeacher':'\ud83c\udf93 Add Teacher','modal.editTeacher':'\u270f\ufe0f Edit Teacher','modal.addStudent':'\ud83d\udc64 Add Student','modal.editStudent':'\u270f\ufe0f Edit Student','modal.addClass':'\u2795 Add Class','modal.editClass':'\u270f\ufe0f Edit Class','modal.editMyClass':'\u270f\ufe0f Edit My Class','modal.addNewClass':'\u2795 Add New Class',
    // extra / replacement attendance
    'att.extraBtn':'\ud83d\udd01 Extra Replacement','att.extraTitle':'\ud83d\udd01 Extra / Replacement','att.extraDesc':'How long was this extra / replacement session? It is paid with credits — one hour = 1 credit, half hour = 0.5 credit.','att.halfHour':'Half Hour','att.oneHour':'One Hour','att.extraTag':'Extra Replacement','att.extraCount':'extra',
    'att.remarkPh':'Replacement remark — visible to the student (e.g. did replacement in Ms Pam’s class)','att.remarkDisabled':'Mark absent to add a remark','common.remark':'Remark','page.duration':'Duration','page.replacementRecords':'Replacement Records','page.replacementRecordsIntro':'Remarks added when a student is marked absent (e.g. they did a replacement elsewhere) — the front desk’s record.','page.noReplacements':'No replacement sessions yet','msg.remarkSaved':'Remark saved','msg.confirmDeleteStudent':'Delete this student? Their login, attendance and unpaid bills will also be removed. Past payment records stay on file.','msg.confirmDeleteSelected':'Delete the {n} selected students? Their logins, attendance and unpaid bills will also be removed. Past payment records stay on file. This cannot be undone.','msg.selectedDeleted':'🗑️ {n} students deleted','page.deleteSelected':'Delete selected','page.deleteSelectedNote':'Tick students above, then delete them all at once.','page.tickTshirtSelected':'Tick T-shirt collected','page.tickTshirtSelectedNote':'Tick students above, then mark their free t-shirt as collected all at once.','page.tshirtAlreadyCollectedTip':'Free t-shirt already collected — no need to tick again','page.tshirtCollectedTag':'👕 Collected','msg.confirmTickTshirtSelected':'Mark the free t-shirt as collected for the {n} selected student(s)?','msg.selectedTshirtTicked':'👕 T-shirt marked collected for {n} student(s)','msg.studentDeleted':'Student deleted — login, attendance and unpaid bills removed; past payment records kept on file','msg.confirmClearAtt':'Delete this attendance record?','msg.attCleared':'Attendance record deleted','att.clearTip':'Delete this attendance record','page.code':'Code','page.collected':'Collected','page.redemptionHistory':'Redemption History','page.redemptionHistoryNote':'All rewards redeemed by students in your branch. Points are deducted only when a code is claimed here. Deleting a still-pending reward returns its points; deleting a claimed one keeps them deducted.','page.noRedemptions':'No redemptions yet','page.pending':'Pending','msg.confirmDeleteRedemption':'Delete this redemption record? A pending (unclaimed) reward returns its points to the student; a claimed reward stays deducted.','msg.redemptionDeleted':'Redemption record deleted','page.pendingCollect':'Show code to counter','page.rewardCodeTitle':'🎁 Your Redemption Code','page.rewardCodeNote':'Show this code to the counter to collect your reward. You can also find it in your redemption history below.','page.verifyReward':'Verify Reward Code','page.enterCode':'Enter code','page.verifyCollect':'Verify & Collect','page.verifyRewardNote':'Enter the code a student shows you to hand over their reward.','msg.codeOk':'✅ Valid — {r} for {s}. Reward collected.','msg.codeInvalid':'Invalid code — no pending reward found','msg.codeUsed':'This code was already collected','nav.intro':'Intro Page','modal.noPhoto':'No photo','page.introTitle':'Edit Intro Page','page.introIntro':'Customise the public intro page shown before sign in — the event details and an optional highlight video. Changes save to the shared database and appear for everyone.','page.introEventSection':'Event Section','page.introShopSection':'Collaborated Shops','page.introShopsNote':'Add partner shops where your students get a 10% discount. Each appears as a 500\u00d7500 icon on the intro page; tapping it opens a popup with the shop\u2019s photo, name and items.','page.introAddShop':'Add another shop','page.introRemoveShop':'Remove','page.introShopN':'Shop {n}','page.introShopName':'Shop name','page.introShopItems':'Items / what they offer','page.introShopItemsPh':'One item per line, e.g.\nDance shoes\nActivewear\nAccessories','page.introShopItemsNote':'One item per line \u2014 each shows as a row in the popup.','page.introShopUrl':'Shop link (optional)','page.introShopUrlNote':'A website, Instagram or WhatsApp link opened by the \u201cVisit shop\u201d button. Leave blank to hide the button.','page.introShopPhoto':'Shop photo / logo','page.introShopPhotoNote':'Square works best \u2014 it\u2019s cropped to a 500\u00d7500 icon.','page.introEventsNote':'Add one or more events. When there are several, the intro page shows them as a slider that auto-advances — visitors can also swipe or tap to move between them.','page.introAddEvent':'Add another event','page.introRemoveEvent':'Remove','page.introEventN':'Event {n}','page.introBadge':'Poster badge','page.introEventTitle':'Event title','page.introEventLead':'Event description','page.introDate':'Date line','page.introTime':'Time line','page.introVenue':'Venue line','page.introCats':'Categories (comma separated)','page.introRegUrl':'Register button link','page.introRegUrlNote':'Paste the link the Register button should open — a Google Form, ticket page, WhatsApp chat, anything. Leave blank and the button goes back to sending visitors to the sign-in screen.','page.introPoster':'Event poster','page.introVideoSection':'Highlight Video','page.introVideoNote':'Paste a YouTube, Vimeo, Instagram Reel or direct .mp4 link. Leave blank to hide the video section.','page.introVideoEyebrow':'Small label','page.introVideoTitle':'Video title','page.introVideoUrl':'Video link (URL)','page.reelSection':'Studio Reel (top of page)','page.reelNote':'A second video shown near the top of the intro page. Paste a YouTube, Vimeo, Instagram Reel or direct .mp4 link. Leave blank to hide it.','page.introLocSection':'Location Address','page.heroImageSection':'Hero Background Image','page.heroImageNote':'A photo behind the headline at the top of the page. It slowly zooms and drifts the whole time, so the hero never sits still. A wide action shot works best \u2014 the text sits over the left side.','page.introLocNote':'The address shown on each branch\\u2019s card in the Locations section of the public intro page, and used for its map and directions link.','page.introBranchLinkPh':'https://wa.me/60... or any link','page.introBranchLinkNote':'Where this branch goes when a visitor picks it from the “Contact Us” list — a WhatsApp chat, booking link, anything. Leave blank and it opens a Google Maps search on the address above instead.','page.addBranch':'Add Branch','page.addBranchPrompt':'New branch name:','msg.branchAdded':'🏢 Branch added — fill in its address below and save','msg.branchExists':'⚠️ A branch with that name already exists','msg.branchInUse':'⚠️ Can’t remove — {n} class(es) are still at this branch. Move or delete those classes first.','msg.confirmDeleteBranch':'Remove the “{s}” branch? Its front-desk login will be removed too. Past payment records stay on file.','msg.branchDeleted':'🏢 Branch removed','page.introVideoUpload':'Upload a video clip','page.introVideoRemove':'Remove upload','page.introVideoUploaded':'✅ An uploaded clip is currently in use. Choose a file to replace it, or Remove upload to clear it.','page.introVideoReading':'Reading video…','page.introVideoReady':'✅ Ready ({mb} MB) — press Save Intro Page to publish.','page.introVideoError':'Could not read that video file.','page.introVideoTooBig':'That video is too large (over {mb} MB). Please upload a shorter clip or paste a link instead.','page.introVideoStoreFail':'Sorry — that clip is too large for the studio database to store. Please use a shorter clip or paste a video link instead.','page.profileIntro':'Update the profile picture and social links that appear on your card on the public intro page. Changes are saved to the shared database and visible to everyone.','page.profilePhotoTitle':'Profile Picture','page.profilePhotoNote':'This is the photo shown on your card on the intro page.','page.profileSocialTitle':'Social Links','page.profileSocialNote':'Add your Instagram and Xiaohongshu (RED) links. Visitors can tap your card on the intro page to open them.','page.profileInstagram':'📸 Instagram','page.profileXiaohongshu':'📕 Xiaohongshu','page.profileIgPlaceholder':'@handle or full link','page.profileXhsPlaceholder':'Paste your profile / share link','page.profileSpecs':'Specialities','page.profileSpecsNote':'Your specialities are managed by the studio admin.','page.profileSave':'Save Profile','page.profileSaved':'Profile updated','page.profilePreview':'How you appear on the intro page','page.socialNone':'No social links added yet.','page.openInstagram':'Open Instagram','page.openXiaohongshu':'Open Xiaohongshu','page.followTeacher':'Follow {name}','page.introSave':'Save Intro Page','page.footerSection':'Footer & Contact','page.footerNote':'These details appear in the footer of the public intro page and at the bottom of every signed-in page (students included). Leave a field blank to hide it.','page.footTagline':'Footer blurb','page.footAddress':'Address','page.footHours':'Opening hours','page.footPhone':'Contact number','page.footEmail':'Email','page.footWhatsapp':'WhatsApp number','page.footInstagram':'Instagram','page.footFacebook':'Facebook','page.footTiktok':'TikTok','page.footXhs':'Xiaohongshu (RED)','page.footYoutube':'YouTube','page.footCopy':'Copyright line','page.footContactH':'Get in touch','page.footFollowH':'Follow us','page.footVisitH':'Visit us','page.contentSection':'Page Content','page.contentNote':'The wording on the public intro page. Leave a field blank to keep the built-in EN / 中文 text. Press Enter inside a heading to split it across two lines.','page.cHeroEyebrow':'Hero eyebrow (styles line)','page.cHeroTitle':'Hero heading','page.cHeroLead':'Hero paragraph','page.cFindBtn':'Left button','page.cMeetBtn':'Right button','page.cAboutEyebrow':'About eyebrow','page.cAboutTitle':'About heading','page.cAboutLead':'About paragraph','page.cInstrEyebrow':'Instructors eyebrow','page.cInstrTitle':'Instructors heading','page.cInstrLead':'Instructors paragraph','page.cLocEyebrow':'Locations eyebrow','page.cLocTitle':'Locations heading','page.cLocLead':'Locations paragraph','page.cCtaTitle':'Closing heading','page.cCtaLead':'Closing paragraph','page.cDefaultHint':'Blank = built-in text','page.tchVideo':'🎬 Highlight Video','page.tchVideoNote':'Shown as a slide on your intro-page card. Paste a YouTube, Vimeo, Instagram Reel or .mp4 link.','page.tchQuote':'📁 Portfolio','page.tchQuoteNote':'Teaching experience, achievements or performances — shown as its own slide on your intro-page card.','page.slidePhoto':'Photo','page.slideVideo':'Video','page.slideQuote':'Portfolio','page.slidePrev':'Previous slide','page.slideNext':'Next slide','page.translate':'Translate','msg.saveFirst':'Save your changes first — nothing was sent to the studio database yet.','page.introReset':'Reset to default','page.introSaved':'Intro page saved','page.introResetConfirm':'Reset the intro page back to its default content?','page.introReset2':'Intro page reset to default','att.useCredit':'Use Credit','att.creditUsed':'Credit Used','att.creditTag':'Paid by Credit','att.useCreditTip':'Deduct 1 pre-paid class credit','page.creditClasses':'Class Credit','page.creditUsedShort':'Credit Used','page.creditClassLabel':'Credit Class','page.classCredits':'Class Credits','page.creditsLeft':'credits left','msg.noCredits':'No class credits left — sell a credit package first','msg.noCreditsExtra':'Not enough credits for this extra / replacement session — sell a credit package first',"msg.creditOnlyNoAbsent":"Credit-package students can't be marked absent — they attend using credits",'msg.creditOnlyNoMark':'Credit-package student — attends by credit. Use “Use Credit” or “Extra / Replacement” instead.','msg.creditUsed':'🎫 1 credit used · {n} left','msg.creditUsedBillRemoved':'🎫 1 credit used · next-month bill cancelled · {n} left','att.singleClassTag':'Single Class','att.dropinBtn':'Single-Class Drop-in','att.dropinHint':'Let any branch student attend this class as a single class','att.dropinAdded':'Added','page.noFranchiseStudents':'No other students in this branch','page.selectClassFirst':'Select a class first','msg.dropinAdded':'🎫 {s} added as a single-class drop-in','msg.creditRefunded':'Credit refunded · {n} left','msg.creditsSold':'🎫 Sold {n}-class credit to {s} · balance {b}','msg.selectStudent':'Please select a student','msg.typeTrialName':'Please type the trial student\u2019s name','msg.typePrivateName':'Please type the student\u2019s name','msg.selectTeacher':'Please select a teacher','msg.dsEarnExceedsTotal':'⚠️ Over budget — Teacher Earns leaves the studio RM0 or less. Check the person count, amount per person and total.','page.privateClassLabel':'Private Class',
    // toasts & prompts
    'page.welcomeTitle':'Student Added','page.welcomeSub':'{n} is registered. Let them scan this now \u2014 it opens the app already signed in.','page.welcomeEditTitle':'Student Updated','page.welcomeEditSub':'{n}\u2019s details were updated. Scan this to log back in, or send it below.','page.welcomeQrNote':'\uD83D\uDCF1 Ask the student to scan with their phone camera. No app to install. If they have already left, send it on WhatsApp instead.','page.welcomePhoneInvalid':'That phone number isn\u2019t a valid Malaysian or Singapore mobile. Please rewrite it (e.g. 012-345 6789 or +65 8123 4567) to send the WhatsApp.','page.welcomeDone':'Done','page.welcomeCopy':'Copy','page.welcomeCopied':'Copied','page.welcomeSend':'WhatsApp',
    'msg.signedOut':'Signed out','msg.idleLogout':'Signed out — 5 minutes with no activity','msg.idleWarn':'Signing out in 1 minute — touch the screen to stay signed in','msg.accountUpdated':'Account updated','msg.changePasswordPrompt':'🔐 Please set your own password to finish setting up your account','msg.passwordSameAsBefore':'⚠️ That’s the same password — please choose a new one','page.firstLoginNote':'🔐 You’re still using the password the studio gave you. Please set your own password now — anyone who knows it could sign in as you. Type a new one below and press Save Changes.','msg.nameUserEmpty':'Name and username cannot be empty','msg.userTaken':'Username already taken',
    'msg.markedUnpaid':'Payment marked as Unpaid','msg.paymentUpdated':'Payment record updated','msg.dateEditAdminOnly':'Only an admin can change the paid date','msg.markedAbsent':'Marked absent','msg.markedCancelled':'Marked class cancelled for this student',
    'msg.enterClassName':'Enter a class name','msg.enterRoomName':'Enter a custom room name','msg.classGone':'\u26A0\uFE0F That class no longer exists \u2014 someone else deleted it. The list has been refreshed.','msg.classUpdated':'Class updated','msg.classAdded':'Class added','msg.newClassAdded':'New class added','msg.studentGone':'\u26A0\uFE0F That student no longer exists.',
    'msg.enterStudentName':'Enter student name','msg.selectClass':'Select at least one class','msg.selectClassOrCredit':'Select at least one class, or sell a credit package','msg.selectSingleClassClass':'⚠️ Pick which class this single class is for — otherwise no teacher can be credited for it','msg.enterPrivatePrice':'⚠️ Enter the private class price','msg.studentUpdated':'Student updated \u00b7 monthly fee recalculated to ',
    'msg.enterTeacherName':'Enter teacher name','msg.selectSpec':'Select at least one speciality','msg.teacherUpdated':'Teacher updated','msg.teacherAdded':'Teacher added','msg.confirmDeleteTeacher':'Delete this teacher? Their login account will also be removed.','msg.teacherDeleted':'Teacher deleted — login account removed',
    'msg.profileUpdated':'Profile updated','msg.paymentRecorded':'Payment recorded','msg.deleted':'Deleted','msg.confirmDelete':'Delete this record? This cannot be undone.','msg.confirmDeleteAccount':'Delete this login account? This cannot be undone.','msg.accountDeleted':'Account deleted','msg.profileLocked':'Only your password can be changed here.',
    'msg.addedToClass':'added to class','msg.removedFromClass':'removed from class','msg.enrollFeeUpdated':' · Monthly Fee now {f}','msg.enrollBillCreated':' · {r} unpaid bill created for the new class','msg.paidVia':'Payment marked as Paid via ','msg.billsPaidVia':'bills marked as Paid via ',
    'msg.extraAdded':'Extra / replacement session added \u2014 attendance +1','msg.extraRemoved':'Extra / replacement session removed',
    'msg.remind3of4':'\ud83d\udce2 {s} has attended 3/4 of {c} \u2014 remind them to bring {m}\'s fee ({a}) next class',
    'msg.autoBilled':'\ud83d\udcb3 {s} completed 4/4 {c} classes \u2014 {m} fee {a} billed. Remind them to pay at the next class.','msg.remindPayNow':'\ud83d\udcb0 {s} is starting a new cycle of {c} \u2014 {m} fee {a} is due by this class',
    'msg.autoBilledPrepaid':'\ud83d\udcb3 {s} completed 4/4 {c} classes \u2014 {m} fee {a} was already paid in advance, so no new bill was raised.',
    // floating windows
    'float.paymentReminder':'\ud83d\udd14 Payment Reminder','float.feeReminder':'\ud83d\udce2 Fee Reminder',
    // free t-shirt for new student — a redeem record: staff tick it in the student's edit form, student views it in Rewards
    'promo.freeTshirt':'Free T-shirt for New Student',
    'promo.counterNote':'Tick once this new student has collected their free t-shirt.',
    'promo.rewardTitle':'New Student Free T-shirt',
    'promo.studentOn':'Collected — enjoy your free new-student t-shirt! 🎉',
    'promo.studentOff':'Not collected yet — visit the front desk to claim your free t-shirt.',
  },
  zh:{
    'nav.schedule':'排课表','nav.students':'学生','nav.payments':'缴费记录','nav.teachers':'导师',
    'nav.attendance':'出席记录','nav.reports':'报表','nav.my-schedule':'我的课表','nav.my-students':'我的学生',
    'nav.my-salary':'我的薪资','nav.my-profile':'我的资料','nav.my-fees':'我的缴费','nav.my-classes':'我的课程','nav.all-classes':'所有课程',
    'nav.my-attendance':'我的出席记录','nav.accounts':'账号管理','nav.rewards':'奖励','title.rewards':'奖励','grade.bronze':'青铜','grade.silver':'白银','grade.gold':'黄金','grade.diamond':'钻石','grade.crown':'皇冠','page.gradeWord':'等级','page.gradeNote':'继续跳舞，提升你的等级！','page.gradesByStyle':'各舞种等级','page.highest':'最高','page.highestGradeNote':'你的积分按你的最高等级计算 —— 等级 {g}。','page.noGradesYet':'尚未设置等级','page.points':'积分','page.pts':'分','page.pointsEarnedNote':'每上一节课可获得 {p} 积分（按你的等级计算），可在下方兑换奖励。','page.birthday':'生日','page.birthdayToday':'🎉 生日快乐！','page.birthdayBonusNote':'领取你的生日礼物 —— 100 积分奖励！','page.birthdayCountdown':'距离你的生日还有 {d} 天 🎈','page.claimBirthday':'领取生日奖励','page.birthdayClaimedBtn':'生日奖励已领取','page.birthdayNone':'尚未登记生日 —— 请前台帮忙添加。','page.redeemRewards':'兑换奖励','page.redeem':'兑换','page.reward':'奖励','page.redemptionHistory':'兑换记录','page.noRedemptions':'暂无兑换记录','reward.water':'瓶装水','reward.drink':'饮料券','reward.sticker':'贴纸包','reward.wristband':'工作室手环','reward.tote':'帆布袋','reward.freeclass':'免费单堂课','reward.tshirt':'工作室T恤','reward.monthfree':'免费一个月（一门课）','msg.redeemed':'🎁 已兑换 {r}！','msg.notEnoughPoints':'积分不足','msg.birthdayBonus':'🎉 生日奖励 —— 已添加 100 积分！','msg.notBirthday':'今天不是你的生日','msg.birthdayClaimed':'今年的生日奖励已领取',
    'common.signOut':'登出','common.edit':'编辑','common.delete':'删除','common.save':'保存','common.cancel':'取消',
    'common.add':'新增','common.search':'搜索','common.status':'状态','common.active':'在职','common.onLeave':'休假中',
    'common.partTime':'兼职','common.paid':'已付款','common.unpaid':'未付款','common.present':'出席','common.absent':'缺席',
    'common.classCancelled':'课程取消','common.notMarked':'未记录','common.all':'全部','common.franchise':'分店',
    'common.teacher':'导师','common.allTeachers':'所有导师','common.student':'学生','common.class':'课程',
    'common.month':'月份','common.amount':'金额','common.date':'日期','common.method':'付款方式','common.notes':'备注',
    'common.total':'总计','common.name':'姓名','common.age':'年龄','common.day':'星期','common.time':'时间','common.danceStyle':'舞蹈风格','page.sortBy':'排序方式','common.room':'教室',
    'common.phone':'电话','common.email':'电邮','common.parent':'家长','common.from':'从','common.to':'至',
    'common.clearFilter':'✕ 清除日期筛选','common.noRecords':'暂无记录',
    'common.days.Monday':'星期一','common.days.Tuesday':'星期二','common.days.Wednesday':'星期三','common.days.Thursday':'星期四','common.days.Friday':'星期五','common.days.Saturday':'星期六','common.days.Sunday':'星期日',
    'common.allDays':'— 所有日期 —','common.filterByDay':'按星期筛选','common.allFranchises':'全部','common.filterByFranchise':'按分店筛选','common.filterByTeacher':'按导师筛选','common.filterByStatus':'按状态筛选','common.filterByStyle':'按舞种筛选',
    'common.sortBy':'排序方式','page.sortName':'姓名（A–Z）','page.sortId':'学生编号','page.sortDay':'上课日','page.sortTeacher':'导师（A–Z）',
    'page.switchDate':'切换日期',
    'common.addStudent':'+ 新增学生','common.addClass':'+ 新增课程','common.addTeacher':'+ 新增导师','common.recordPayment':'+ 记录缴费','common.downloadCSV':'\u4e0b\u8f7d CSV',
    'common.classes':'课程','common.contact':'联络方式','common.feeMonth':'每月学费','common.actions':'','common.byFranchise':'按分店',
    'common.totalCollected':'已收总额','common.totalUnpaid':'未付款','common.searchPlaceholder':'🔍 搜索姓名、家长或编号...','common.searchByNameOrId':'搜索姓名或编号...',
    'common.myClasses':'我的课程','common.students':'学生','common.spots':'名额','common.full':'已满','common.open':'个名额',
    'common.noClasses':'暂无课程','common.noRecordsFound':'没有符合条件的记录','common.close':'关闭','common.confirm':'确认',
    'common.franchise2':'分店','common.dateEarned':'实际上课日期','common.markPresent':'✓ 出席','common.markAbsent':'✗ 缺席','common.markCancelled':'课程取消',
    'page.adminPanel':'管理员面板','page.franchiseView':'分店视角','page.fullAccess':'完整权限',
    'page.statStudents':'学生','page.statClasses':'课程','page.statTeachers':'导师','page.statExpected':'预计月收入',
    'page.statCollected':'已收（{month}）','page.statUnpaid':'未付款记录','page.allClasses':'所有课程',
    'page.sortedBy':'（按分店 → 导师 → 时间排序）','page.noClassesOn':'当天没有课程：',
    'page.recordsMatchFilters':'没有符合筛选条件的记录','page.classesMatchFilters':'没有符合筛选条件的课程',
    'page.noClasses2':'暂无课程','page.groupedByFranchise':'按分店分组 · 一位学生可以报读多于一门课程',
    'page.noStudentsFound':'找不到学生',
    'msg.dupeStudentName':'已经有一位同名学生：','page.enrollHereInstead':'改为在此加入课程',
    'page.unpaidRecords':'笔未付款记录','page.unpaidRecordsPl':'笔未付款记录',
    'page.billedSeparately':'💡 学生的每门课程都是独立计费的——完成一位导师的课程不需要同时支付另一位导师的课程费用，但您可以勾选下方多笔未付款账单，一次性合并支付。',
    'page.billsSelected':'笔账单已选择','page.paySelected':'✓ 合并支付所选账单',
    'page.teacherHintCounter':'仅显示{f}的数据 — RM160/RM130 = 以该费率付款的学生 · 单堂课 = 已付款的单次记录',
    'page.teacherHintAdmin':'学生总数 = 全店总人数 · 每家分店各占一栏 · RM160/RM130 = 以该费率付款的学生 · 单堂课 = 已付款的单次记录','page.orderNo':'排序（1 = 第一位）','msg.orderSaved':'✅ 导师顺序已更新','page.arrangeOrder':'排列顺序','page.arrangeTeachersTitle':'排列导师顺序','page.arrangeTeachersIntro':'使用箭头调整导师顺序——排在第一位的会显示在公开页面最前面。顺序调整好后点击保存。',
    'page.totalStudent':'学生总数','page.paidQty':'已付数量','page.noTeachers':'暂无导师',
    'page.extraSession':'➕ 额外/补课场次','page.classesEveryDay':'— 每天 —','page.classesOn':'于',
    'page.previous':'◀ 上一个','page.next':'下一个','page.normallyRuns':'此课程通常在','page.jumpToA':'📅 跳转至',
    'page.noStudentsEnrolled':'此课程暂无学生报读','page.mark':'记录','page.extra':'额外',
    'page.cncl':'取消','page.extraReplacementNotUsual':'🔁 额外/补课场次 — 非此课程的常规上课日',
    'page.presentCount':'出席','page.absentCount':'缺席','page.cancelledCount':'取消','page.unmarkedCount':'未记录',
    'page.previousRecordsFor':'📜 以下课程的历史记录：','page.tapToJump':'（点击日期可跳转）','page.noRecordsInRange':'此日期范围内没有记录',
    'page.noRecordsYet':'暂无记录','page.selectClassAndDate':'请选择课程与日期','page.extraSessionReady':'额外/补课场次已准备好 — 请在下方记录出席',
    'page.extraSessionDesc':'为课程替补、补课或额外练习时段添加任意日期的出席记录——不限于该课程的常规上课日。',
    'page.sessionDate':'场次日期','page.openAttendance':'打开出席记录','page.usually':'通常为',
    'page.reportsTitle':'📈 报表与分析','page.revenueByMonth':'每月收入（已付款）','page.enrollByStyle':'按舞蹈风格统计报读人数',
    'page.studentsPerTeacher':'每位导师的学生总数','page.exclSingleClass':'（不含单堂课）','page.noData':'暂无数据',
    'page.summary':'总览','page.totalRevenue':'总收入（历来，已付款）','page.allFranchiseTotal':'全店学生总数',
    'page.acrossFranchises':'共','page.franchisesWord':'家分店','page.totalStudentByFranchise':'按分店统计学生总数',
    'page.studentWord':'位学生','page.studentsWord':'位学生',
    'page.classThisWeek':'堂课','page.classesThisWeek':'堂课','page.thisWeek':'本周','page.addNewClass':'+ 新增课程',
    'page.noClassesOnDay':'当天没有课程：','page.myClassesTitle':'我的课程','page.sortedByFranchiseTime':'（按分店 → 时间排序）',
    'page.noClassesYet':'尚未分配课程 — 点击"新增课程"来创建',
    'page.myStudentsCount':'位学生','page.myStudentsCountPl':'位学生','page.acrossYourClasses':'分布在您的课程中',
    'page.manageEnrollment':'➕ 管理报读','page.billedSeparatelyTeacher':'💡 每门课程都是独立计费的 — 下方的付款状态仅代表该学生在您课程中的状态，不包含该学生可能报读的其他导师课程。',
    'page.feeStatusMyClass':'付款状态（我的课程）','page.noRecord':'暂无记录','page.payment':'+ 缴费',
    'page.enrollmentNote':'💡 您可以将学生的付款标记为已付款/未付款，或直接记录新的缴费。使用"管理报读"来新增或移除您自己课程中的学生 — 学生可以报读多于一门课程，但只有管理员与导师可以更改报读。',
    'page.autoCalculated':'— 系统自动计算','page.filterByMonth':'按月份筛选','page.monthActuallyTaught':'（实际授课的月份）',
    'page.allMonths':'所有月份','page.singleClassRateRM160':'单堂课费率（RM160）','page.multiClassRateRM130':'多课程费率（RM130）',
    'page.singleClassPayments':'单堂课付款','page.totalSalary':'总薪资','page.monthSalary':'薪资','page.allMonthsWord':'所有月份','page.thisMonthOnly':'仅本月',
    'page.studentCountBonus':'各月适用费率','page.studentCountBonusMonth':'月份','page.studentCountBonusHeadcount':'月费课程数','page.studentCountBonusAmount':'适用费率',
    'page.studentCountBonusExplain':'💡 您的月费课程费率取决于每月月费课程贡献总数（涵盖您所有课程——同一学生上您4堂课就算4，不是1）：1至20为<b style="color:var(--gold)">RM70/堂</b>，21至40为<b style="color:var(--gold)">RM75/堂</b>，41及以上为<b style="color:var(--gold)">RM80/堂</b>。',
    'page.salaryExplain':'💡 薪资按<b>月份逐月计算</b>，依据实际授课日期——例如，若学生当月第4次出席落在7月1日，该笔收入就算作<b style="color:var(--gold)">7月</b>薪资，即使产生的账单是8月的学费。每笔月费的课程贡献都按您当月的<b style="color:var(--gold)">阶梯费率</b>计算（见下表），每笔已付款的"单堂课"记录赚取<b style="color:var(--gold)">RM{r2}</b>。只有<b>已付款</b>的记录才计入。',
    'page.earningRecords':'收入记录','page.earnedMonth':'所属月份','page.category':'类别','page.amountPaid':'已付金额',
    'page.dateEarnedCol':'实际上课日期','page.myEarning':'我的收入','page.noPaidRecords':'暂无已付款记录','page.forMonth':'于',
    'page.singleClassRateLabel':'月费 · 单堂课费率（RM160）','page.multiClassRateLabel':'月费 · 多课程费率（RM130）','page.singleClassLabel':'单堂课','page.trialClassLabel':'体验课',
    'page.monthlyFee':'每月学费','page.unpaidRecordWord':'笔记录','page.unpaidRecordsWord':'笔记录',
    'page.outstandingPayments':'⚠️ 未付款项','page.noteLabel':'备注','page.paymentHistory':'缴费记录',
    'page.noPaymentsInRange':'此日期范围内没有缴费记录','page.noPaymentRecords':'暂无缴费记录','page.receipt':'🧾 收据',
    'page.howToPay':'如何缴费','page.bankTransfer':'银行转账','page.bankName':'银行','page.accountName':'账户名称','page.accountNumber':'账号','page.tngEwallet':'Touch ’n Go 电子钱包','page.scanToPay':'扫码付款','page.payNote':'付款后，请将收据出示或发送给前台，以便记录您的缴费。',
    'page.enrolledSince':'报读日期','page.editMyProfile':'✏️ 编辑我的资料','page.myProfile':'我的资料',
    'page.enrollmentChangeNote':'💡 课程报读只能由舞室管理员或您的导师更改。',
    'page.notEnrolled':'尚未报读任何课程。','page.classmates':'同学','page.noOtherStudents':'暂无其他学生',
    'page.browseAllClasses':'浏览所有分店的课程 — 共','page.totalWord':'门','page.allStyles':'所有风格',
    'page.viewOnlyCycle':'仅供查看 ·','page.classesAttendedCycle':'堂课已出席（本周期）',
    'page.attendanceChangeNote':'💡 出席记录只能由您的导师、前台或舞室管理员标记或更改。',
    'page.cycleProgress':'周期进度（4堂课 = 1个月）','page.noAttendanceInRange':'此日期范围内没有出席记录','page.noAttendanceYet':'暂无出席记录',
    'page.searchStudent':'🔍 搜索学生','page.noMatchingStudents':'没有匹配的学生','page.attendanceFor':'出席记录 —','page.acrossAllClasses':'所有课程',
    'title.schedule':'排课表','title.students':'学生管理','title.payments':'缴费记录','title.teachers':'导师管理','title.accounts':'账号管理',
    'title.attendance':'出席记录','title.reports':'报表','title.my-schedule':'我的课表','title.my-students':'我的学生',
    'title.my-salary':'我的薪资','title.my-profile':'我的资料','title.my-fees':'缴费记录','title.my-classes':'我的课程',
    'title.all-classes':'所有课程','title.my-attendance':'我的出席记录',
    'site.signIn':'员工与学生登录','site.signInShort':'登录','site.eventEyebrow':'近期活动','site.eventsTitle':'近期活动','site.eventLead':'我们规模最大的 K-pop 舞蹈盛会 —— 个人赛、对战、团体翻跳与随机舞。来参赛，或来为你的队伍加油！','site.shopsEyebrow':'\u5408\u4f5c\u5546\u5e97','site.shopsTitle':'\u5b66\u5458\u4e13\u5c5e\u4f18\u60e0','site.shopsLead':'\u5728\u4ee5\u4e0b\u4efb\u4e00\u5408\u4f5c\u5546\u5e97\u51fa\u793a\u5b66\u5458\u8bc1\uff0c\u5373\u53ef\u4eab 9 \u6298\u4f18\u60e0\u3002\u70b9\u51fb\u5546\u5e97\u67e5\u770b\u5176\u4f18\u60e0\u3002','site.shopDiscount':'\u5b66\u5458 9 \u6298\u4f18\u60e0','site.shopDiscountShort':'9 \u6298','site.shopOffers':'\u4f18\u60e0\u5185\u5bb9','site.shopNoItems':'\u8be6\u60c5\u8bf7\u5230\u5e97\u8be2\u95ee\u3002','site.shopVisit':'\u524d\u5f80\u5546\u5e97 \u2192','site.eventDateL':'日期','site.eventTimeL':'时间','site.eventVenueL':'地点','site.eventCatsL':'比赛项目','site.eventBtn':'登录报名 →','site.eventBtnLink':'立即报名 →','site.heroEyebrow':'Hip-hop · K-pop · Street Jazz · Popping',
    'site.heroLine1':'舞出','site.heroLine2':'真心态度',
    'site.heroLead':'B Dance Studio 培训从初学者到竞技团队，涵盖8种街舞风格——从第一个八拍到第一次登台。马来西亚四家分店，同一套教学标准。',
    'site.findStudio':'寻找附近的分店','site.meetInstructors':'认识我们的导师',
    'site.statFranchises':'分店','site.statStyles':'舞蹈风格','site.statInstructors':'导师','site.statFounded':'成立于',
    'site.aboutEyebrow':'关于我们','site.aboutTitle1':'由舞者创立，','site.aboutTitle2':'而非连锁模板',
    'site.aboutLead':'B Dance Studio 最初只是Adda Height的一家小工作室，教孩子们从网络上看到的hip-hop基本功。如今我们在马来西亚经营四家分店——教授从初学hip-hop到竞技级编舞、K-pop翻跳、popping、waacking和dancehall的一切课程——导师们至今仍在表演。无论走进哪一家分店，教学标准始终如一。',
    'site.instructorsEyebrow':'我们的导师','site.instructorsTitle1':'向真正在教学的人','site.instructorsTitle2':'学习舞蹈',
    'site.instructorsLead':'十位驻店导师分布在我们的四家分店，各自拥有真正的专长，而非样样略懂。','site.showAllTeachers':'\u67e5\u770b\u5168\u90e8 {n} \u4f4d\u5bfc\u5e08','site.showLessTeachers':'\u6536\u8d77\u5bfc\u5e08\u5217\u8868',
    'site.locationsEyebrow':'分店地点','site.locationsTitle1':'四家分店，','site.locationsTitle2':'同一间舞室',
    'site.locationsLead':'相同的风格，相同的教学标准，不同的社区。选择离你最近的一家。',
    'site.getDirections':'📍 获取路线 →','site.ctaTitle':'准备好开始了吗？','site.ctaLead':'员工、导师与在籍学生请在下方登录。',
    'site.ctaBtn':'员工与学生登录 →','site.contactBtn':'联系我们 →','site.contactTitle':'联系我们',
    'login.who':'请选择登录身份','login.admin':'管理员','login.counter':'前台','login.teacher':'导师','login.student':'学生',
    'login.chooseFranchise':'🏢 请选择您所在的分店','login.back':'← 返回','login.studioSite':'← 舞室官网',
    'login.signIn':'\u767b\u5f55 \u2192','login.username':'\u7528\u6237\u540d','login.password':'\u5bc6\u7801',
    'common.filterByClass':'按课程筛选','common.allClasses':'— 所有课程 —','common.filterByDate':'按付款日期筛选','common.searchByReceipt':'按收据编号或学生编号搜索','common.searchByReceiptPh':'例如 RCP-00020、00020 或 S0042',
    'common.filterByMonth':'按月份筛选','common.allMonths':'— 所有月份 —','common.rental':'租借','common.username':'用户名','common.password':'密码',
    'common.filterByCategory':'按类别筛选','common.allCategories':'— 所有类别 —','common.filterByMethod':'按付款方式筛选','common.allMethods':'— 所有付款方式 —',
    'page.adminOnly':'仅限管理员','page.counterAccounts':'前台账号','page.accountsIntro':'编辑每个分店前台账号的用户名与密码。只有管理员可以修改。','page.studentAccounts':'学生登录信息','page.showAllStudentAccounts':'查看全部学生账号','page.moreStudentAccounts':'还有 {n} 个 —— 打开可搜索并筛选全部账号','page.allStudentAccountsShown':'共 {n} 个学生账号','page.studentAccountsModalIntro':'按姓名或学号搜索，并可按分店或上课日筛选。修改密码后点击保存，或删除账号。','page.studentAccountsIntro':'所有学生的登录账号与密码（仅供查看）。','page.adminManaged':'由管理员管理','page.accountsBar':'所有账号','page.accountsBarIntro':'查看、编辑并删除所有前台、导师与学生的登录账号。密码可见；学生每次修改密码后，其修改日期都会显示在此。','page.teacherAccounts':'导师账号','page.passwordChanged':'密码修改日期','page.addToClass':'添加学生','page.payDetailsTitle':'缴费 / 银行信息','page.payDetailsIntro':'编辑学生在「如何缴费」页面看到的银行转账与电子钱包信息。','page.tngName':'电子钱包名称','page.tngNumber':'电子钱包号码','page.qrUpload':'\u4ed8\u6b3e\u4e8c\u7ef4\u7801','page.qrUploadNote':'\u4e0a\u4f20\u60a8 Touch \u2019n Go / DuitNow \u5e94\u7528\u4e2d\u7684\u4e8c\u7ef4\u7801\u56fe\u7247\u3002\u5b66\u5458\u626b\u63cf\u5b83\u6765\u4ed8\u6b3e\uff0c\u8bf7\u4e0a\u4f20\u771f\u5b9e\u7684\u4e8c\u7ef4\u7801 \u2014\u2014 \u5148\u5728\u5e94\u7528\u4e2d\u622a\u56fe\uff0c\u518d\u5728\u6b64\u9009\u62e9\u6587\u4ef6\u3002','page.qrNone':'\u5c1a\u672a\u4e0a\u4f20','page.savePayDetails':'保存缴费信息','msg.payDetailsSaved':'缴费信息已保存','page.rewardsManageTitle':'奖励管理','page.rewardsManageIntro':'编辑或删除学生可用积分兑换的奖励。更改对所有人生效。','page.rewardIcon':'图标','page.rewardName':'奖励名称','page.addReward':'添加奖励','msg.rewardSaved':'奖励已保存','msg.rewardDeleted':'奖励已删除','msg.rewardAdded':'奖励已添加','msg.confirmDeleteReward':'删除此奖励？学生将无法再兑换它。','page.stylesTitle':'舞蹈风格','page.stylesIntro':'添加、重命名或删除用于课程、导师专长与学生等级的舞蹈风格。更改将应用于所有地方。','page.styleName':'风格名称','page.styleInUse':'使用中','page.styleUnused':'未使用','page.addStyle':'添加风格','page.classesWord':'门课','msg.styleNameNeeded':'⚠️ 请先输入风格名称','msg.styleExists':'⚠️ 该风格已存在','msg.styleAdded':'💃 已添加风格','msg.styleSaved':'💃 已保存风格','msg.styleDeleted':'💃 已删除风格','msg.styleInUse':'⚠️ 无法删除 —— 仍有 {n} 门课使用此风格。请先修改或删除这些课程。','msg.confirmDeleteStyle':'删除「{s}」风格？它将从导师专长与学生等级中移除。由于没有课程使用它，课程不受影响。','page.database':'数据库','page.dbTitle':'数据库 ↔ CSV','page.dbIntro':'将整个数据库导入或导出为 database_all.csv。当前数据会自动保存在此浏览器中。','page.dbExport':'导出 database_all.csv','page.dbImport':'导入 database_all.csv','page.dbReset':'恢复默认数据','page.dbAutosave':'更改会自动保存到此浏览器，并在重新加载时恢复。','page.dbCloudError':'云同步错误','page.dbCloud':'已连接到共享云数据库（Supabase）—— 更改会为所有人同步，屏幕也会每隔一段时间自动刷新以显示他人的最新修改。若想立即获取最新数据，可随时点击右上角的 🔄 刷新。','page.dbRefresh':'从云端刷新','msg.cloudRefreshed':'✅ 已从共享数据库刷新','page.dbFixDifficulty':'🩺 修复课程难度','page.dbFixBilling':'🩺 修复预缴账单','msg.billingFixing':'正在重新核对每位学生的账单记录…','msg.billingFixDone':'✅ 已修复 {n} 位学生 —— 新增 {b} 笔遗漏账单，修正 {c} 笔配对错误的缴费记录，移除 {r} 笔错误账单','msg.billingFixNone':'✅ 无需修复 —— 每个已完成周期都已有正确账单','msg.billingFixFail':'⚠️ 无法执行修复 —— 请检查网络连接后重试','msg.confirmFixBilling':'此操作会重新核对每位学生的出席记录与缴费记录，并补开任何本应自动开出但未开出的账单（旧版本的漏洞可能让一笔预缴款项错误地抵扣了错误的月份，导致后一个周期没有账单）。已缴费的记录金额不会被更改 —— 只会调整它被归属到哪个周期，以及补开缺失的未缴账单。是否继续？','msg.difficultyFixing':'正在修复课程难度…','msg.difficultyFixDone':'✅ 已修复 {n} 门课程 —— 所有设备现在都会显示正确的难度','msg.difficultyFixNone':'✅ 无需修复 —— 每门课程都已存有真实的难度值','msg.difficultyFixFail':'⚠️ 无法执行修复 —— 请检查网络连接后重试','msg.dbExported':'💾 数据库已导出为 database_all.csv','msg.reportExported':'\u62a5\u544a\u5df2\u4e0b\u8f7d','msg.dbImported':'✅ 已从 CSV 导入数据库','msg.dbImportFail':'无法读取该 CSV —— 请确认是 database_all.csv','msg.confirmReset':'恢复为内置默认数据？此浏览器中的当前数据将被清除。','msg.offlineBanner':'没有网络连接 —— 请检查您的网络。','msg.offlineBlocked':'⚠️ 没有网络连接（或网络太慢）—— 请检查您的网络后重试。尚未保存任何内容。','msg.offlineWarning':'⚠️ 没有网络连接 —— 请检查您的网络。更改已保存在此设备上，恢复网络后将自动同步。','msg.backOnline':'✅ 网络已恢复 —— 正在同步您的更改','msg.saveNeedsConnection':'⚠️ 无法保存 —— 没有网络连接或网络速度过慢。请检查您的网络后重试。','page.uploadVideo':'上传视频','att.bonusBtn':'赠送','att.repAdd':'记录补课','att.repEdit':'编辑补课','page.repTitle':'📝 记录补课','page.repFor':'{s} 在 {d} 缺席，补课在哪一节？','page.repTeacher':'老师','page.repClass':'课程','page.repDate':'日期','page.repDay':'星期','page.repDayAuto':'根据日期自动得出','msg.repSaved':'📝 补课已记录','msg.repCleared':'补课记录已清除','msg.repNeedClass':'⚠️ 请选择补课的课程','msg.repNeedDate':'⚠️ 请选择补课日期','att.bonusTag':'🎁 赠送课','page.bonusClassLabel':'赠送课','page.danceShowLabel':'舞蹈表演','page.dsAllOwn':'\u5168\u90e8\u662f\u6211\u4eec\u5b66\u9662\u5b66\u751f (7:3)','page.dsSomeOutside':'\u6709\u5916\u90e8\u821e\u8005 (6:4)','page.dsQualityNote':'\u5e0c\u671b show \u7684\u8d28\u91cf\u9ad8\uff0c\u6311\u9009\u821e\u8005\u65f6\u4f18\u5148\u8003\u8651\u5b66\u9662\u81ea\u5df1\u7684\u5b66\u751f\u3002','page.dsIncludedNote':'\u5305\u542b\u4e00\u573a 3-5 \u5206\u949f\u7684\u8868\u6f14\u548c 3 \u6b21\u6392\u7ec3\u3002invoice \u548c quotation \u7531\u5b66\u9662\u5b89\u6392\uff0c\u8bfe\u5ba4\u4e5f\u53ef\u7528\u4e8e\u7ec3\u4e60\u3002','page.dsTotal':'\u603b\u989d','page.dsWage':'\u821e\u8005\u5de5\u94b1','page.dsStudioKeeps':'\u5b66\u9662\u62ff','msg.dsWageExceedsTotal':'\u821e\u8005\u5de5\u94b1\u8d85\u8fc7\u603b\u989d \u2014\u2014 \u6ca1\u6709\u5269\u4f59\u53ef\u5206\u914d','page.bonusClass':'赠送课','page.bonusNone':'暂无','page.replacementCard':'补课','page.replaceExpires':'请在 {d} 前补课','page.replaceNone':'暂无待补','page.replaceDaysLeft':'需补课 —— 剩 {n} 天（{d} 前）','page.replaceNoExpiry':'需补课 —— 无到期日（私人课）','page.pvFixedByClass':'由所选私人课固定','page.bonusExpires':'{d} 到期','page.bonusHowTo':'请前台帮你用于尚未报读的课程','msg.bonusExpired':'🎁 赠送课已过期 —— 缴费后 30 天失效','msg.replaceLate':'⚠️ 已添加 —— 但过去 {n} 天内没有可补的缺席','att.bonusTip':'每月免费赠送课 —— 老师仍可获得 RM{n}','msg.bonusUsed':'🎁 已使用赠送课 · {t} 获得 {n}','msg.bonusOwnClass':'🎁 赠送课只能用于尚未报读的课程','msg.bonusNotPaid':'🎁 尚无赠送课 —— {m} 月费尚未缴付','msg.bonusUsedUp':'🎁 {m} 的赠送课已使用','msg.bonusCreditOnly':'🎁 赠送课仅适用于月费学员','page.filterStudent':'🔍 输入以筛选学员…','page.filterClass':'🔍 输入以筛选课程…','msg.busySaving':'保存中…','msg.busySigningIn':'登录中…','msg.busyLoading':'加载中…','page.igImport':'从 Instagram 导入','msg.igImporting':'正在从 Instagram 获取… 可能需要几秒钟','msg.igNeedLink':'⚠️ 请先在输入框中粘贴 Instagram Reel 链接，再点击导入。','msg.igFailed':'⚠️ Instagram 导入失败','msg.uploading':'上传中…','msg.uploadDone':'✅ 视频已上传','msg.uploadFailed':'⚠️ 上传失败','msg.videoTooBig':'⚠️ 视频太大 —— 上限为 50 MB。请剪短或导出更小的文件。','msg.uploadNoBucket':'⚠️ 存储尚未设置 —— 请在 Supabase 中运行 supabase_setup.sql 的 media bucket 部分。',
    'modal.addTeacher':'\ud83c\udf93 \u65b0\u589e\u5bfc\u5e08','modal.editTeacher':'\u270f\ufe0f \u7f16\u8f91\u5bfc\u5e08','modal.addStudent':'\ud83d\udc64 \u65b0\u589e\u5b66\u751f','modal.editStudent':'\u270f\ufe0f \u7f16\u8f91\u5b66\u751f','modal.addClass':'\u2795 \u65b0\u589e\u8bfe\u7a0b','modal.editClass':'\u270f\ufe0f \u7f16\u8f91\u8bfe\u7a0b','modal.editMyClass':'\u270f\ufe0f \u7f16\u8f91\u6211\u7684\u8bfe\u7a0b','modal.addNewClass':'\u2795 \u65b0\u589e\u8bfe\u7a0b',
    'att.extraBtn':'\ud83d\udd01 \u989d\u5916\u8865\u8bfe','att.extraTitle':'\ud83d\udd01 \u989d\u5916 / \u8865\u8bfe','att.extraDesc':'这次额外/补课的时长是多久？以课时支付——一小时 = 1 课时，半小时 = 0.5 课时。','att.halfHour':'\u534a\u5c0f\u65f6','att.oneHour':'\u4e00\u5c0f\u65f6','att.extraTag':'\u989d\u5916\u8865\u8bfe','att.extraCount':'\u8865\u8bfe',
    'att.remarkPh':'缺席备注 — 学生可查看（例：在 Pam 老师的课补课）','att.remarkDisabled':'标记缺席后可填写备注','common.remark':'备注','page.duration':'时长','page.replacementRecords':'补课记录','page.replacementRecordsIntro':'学生被标记缺席时填写的备注（例如去别处补课）—— 供前台存档查看。','page.noReplacements':'暂无补课记录','msg.remarkSaved':'备注已保存','msg.confirmDeleteStudent':'删除此学生？其登录账号、出席记录和未缴账单也会一并删除。以往的缴费记录仍保留。','msg.confirmDeleteSelected':'删除选中的 {n} 名学生？其登录账号、出席记录和未缴账单也会一并删除。以往的缴费记录仍保留。此操作无法撤销。','msg.selectedDeleted':'🗑️ 已删除 {n} 名学生','page.deleteSelected':'删除选中','page.deleteSelectedNote':'勾选上方学生，即可一次性全部删除。','page.tickTshirtSelected':'勾选为已领取T恤','page.tickTshirtSelectedNote':'勾选上方学生，即可一次性将其免费T恤标记为已领取。','page.tshirtAlreadyCollectedTip':'已领取免费T恤 — 无需再次勾选','page.tshirtCollectedTag':'👕 已领取','msg.confirmTickTshirtSelected':'将选中的 {n} 名学生的免费T恤标记为已领取？','msg.selectedTshirtTicked':'👕 已为 {n} 名学生标记T恤已领取','msg.studentDeleted':'已删除学生 · 登录账号、出席记录与未缴账单已一并删除，以往缴费记录保留','msg.confirmClearAtt':'删除此出席记录？','msg.attCleared':'已删除出席记录','att.clearTip':'删除此出席记录','page.code':'代码','page.collected':'已领取','page.redemptionHistory':'兑换记录','page.redemptionHistoryNote':'本分店学生的所有兑换记录。积分仅在前台核对代码领取时才扣除。删除待领取的奖励会退回积分；删除已领取的奖励则不退。','page.noRedemptions':'暂无兑换记录','page.pending':'待领取','msg.confirmDeleteRedemption':'删除此兑换记录？待领取（未核对）的奖励会退回积分；已领取的奖励则不退回。','msg.redemptionDeleted':'兑换记录已删除','page.pendingCollect':'向前台出示代码','page.rewardCodeTitle':'🎁 你的兑换代码','page.rewardCodeNote':'向前台出示此代码即可领取奖励。你也可以在下方兑换记录中找到它。','page.verifyReward':'核对奖励代码','page.enterCode':'输入代码','page.verifyCollect':'核对并领取','page.verifyRewardNote':'输入学生出示的代码即可发放奖励。','msg.codeOk':'✅ 有效 — {s} 的 {r}，已领取。','msg.codeInvalid':'代码无效 — 未找到待领取的奖励','msg.codeUsed':'此代码已领取过','nav.intro':'介绍页','modal.noPhoto':'无照片','page.introTitle':'编辑介绍页','page.introIntro':'自定义登录前显示的公开介绍页——活动详情以及可选的精彩视频。更改会保存到共享数据库，并对所有人生效。','page.introEventSection':'活动部分','page.introShopSection':'合作商店','page.introShopsNote':'\u6dfb\u52a0\u4e3a\u5b66\u5458\u63d0\u4f9b 9 \u6298\u4f18\u60e0\u7684\u5408\u4f5c\u5546\u5e97\u3002\u6bcf\u5bb6\u5546\u5e97\u5728\u4ecb\u7ecd\u9875\u4e0a\u663e\u793a\u4e3a 500\u00d7500 \u56fe\u6807\uff1b\u70b9\u51fb\u5373\u53ef\u5f39\u51fa\u5546\u5e97\u7684\u7167\u7247\u3001\u540d\u79f0\u4e0e\u5546\u54c1\u3002','page.introAddShop':'\u6dfb\u52a0\u5546\u5e97','page.introRemoveShop':'\u5220\u9664','page.introShopN':'\u5546\u5e97 {n}','page.introShopName':'\u5546\u5e97\u540d\u79f0','page.introShopItems':'\u5546\u54c1 / \u4f18\u60e0\u5185\u5bb9','page.introShopItemsPh':'\u6bcf\u884c\u4e00\u9879\uff0c\u4f8b\u5982\uff1a\n\u821e\u8e48\u978b\n\u8fd0\u52a8\u670d\n\u914d\u9970','page.introShopItemsNote':'\u6bcf\u884c\u4e00\u9879 \u2014 \u5728\u5f39\u7a97\u4e2d\u5404\u663e\u793a\u4e3a\u4e00\u884c\u3002','page.introShopUrl':'\u5546\u5e97\u94fe\u63a5\uff08\u53ef\u9009\uff09','page.introShopUrlNote':'\u7f51\u7ad9\u3001Instagram \u6216 WhatsApp \u94fe\u63a5\uff0c\u7531\u201c\u524d\u5f80\u5546\u5e97\u201d\u6309\u94ae\u6253\u5f00\u3002\u7559\u7a7a\u5219\u9690\u85cf\u6309\u94ae\u3002','page.introShopPhoto':'\u5546\u5e97\u7167\u7247 / \u6807\u5fd7','page.introShopPhotoNote':'\u65b9\u5f62\u6700\u4f73 \u2014 \u4f1a\u88c1\u526a\u4e3a 500\u00d7500 \u56fe\u6807\u3002','page.introEventsNote':'添加一个或多个活动。当有多个活动时，介绍页会以轮播形式显示并自动切换 —— 访客也可左右滑动或点击切换。','page.introAddEvent':'添加活动','page.introRemoveEvent':'删除','page.introEventN':'活动 {n}','page.introBadge':'海报标签','page.introEventTitle':'活动标题','page.introEventLead':'活动描述','page.introDate':'日期','page.introTime':'时间','page.introVenue':'地点','page.introCats':'类别（逗号分隔）','page.introRegUrl':'报名按钮链接','page.introRegUrlNote':'粘贴「报名」按钮要打开的链接——Google 表单、售票页、WhatsApp 对话皆可。留空则按钮恢复为引导访客前往登录页。','page.introPoster':'活动海报','page.introVideoSection':'精彩视频','page.introVideoNote':'粘贴 YouTube、Vimeo、Instagram Reel 或直接的 .mp4 链接。留空则隐藏视频部分。','page.introVideoEyebrow':'小标签','page.introVideoTitle':'视频标题','page.introVideoUrl':'视频链接（URL）','page.reelSection':'工作室短片（页面顶部）','page.reelNote':'显示在介绍页顶部附近的第二个视频。粘贴 YouTube、Vimeo、Instagram Reel 或直接的 .mp4 链接。留空则隐藏。','page.introLocSection':'分店地址','page.heroImageSection':'首页背景图片','page.heroImageNote':'显示在页面顶部标题后方的照片。它会持续缓慢地放大与移动，让首屏保持动感。建议使用横向的舞蹈照片 —— 文字会显示在左侧。','page.introLocNote':'显示在公开介绍页「分店」部分每个分店卡片上的地址，也用于生成地图与导航链接。','page.introBranchLinkPh':'https://wa.me/60... 或任意链接','page.introBranchLinkNote':'访客在「联系我们」列表中点选此分店时要打开的链接——WhatsApp 对话、预约链接皆可。留空则改为打开以上地址的 Google 地图搜索。','page.addBranch':'添加分店','page.addBranchPrompt':'新分店名称：','msg.branchAdded':'🏢 分店已添加 —— 请在下方填写地址后保存','msg.branchExists':'⚠️ 已存在同名分店','msg.branchInUse':'⚠️ 无法删除 —— 仍有 {n} 门课属于此分店。请先移动或删除这些课程。','msg.confirmDeleteBranch':'删除「{s}」分店？其前台登录账号也将一并删除。以往的缴费记录仍保留。','msg.branchDeleted':'🏢 分店已删除','page.introVideoUpload':'上传视频','page.introVideoRemove':'移除上传','page.introVideoUploaded':'✅ 当前正在使用已上传的视频。选择文件可替换，或点击「移除上传」清除。','page.introVideoReading':'正在读取视频……','page.introVideoReady':'✅ 已就绪（{mb} MB）—— 请点击「保存介绍页」以发布。','page.introVideoError':'无法读取该视频文件。','page.introVideoTooBig':'该视频过大（超过 {mb} MB）。请上传更短的片段，或改用链接。','page.introVideoStoreFail':'抱歉——该视频太大，工作室数据库无法存储。请使用更短的片段，或改用视频链接。','page.profileIntro':'更新在公开介绍页你的卡片上显示的头像和社交链接。更改会保存到共享数据库，并对所有人生效。','page.profilePhotoTitle':'头像','page.profilePhotoNote':'这是在介绍页你的卡片上显示的照片。','page.profileSocialTitle':'社交链接','page.profileSocialNote':'添加你的 Instagram 和小红书链接。访客可在介绍页点击你的卡片打开。','page.profileInstagram':'📸 Instagram','page.profileXiaohongshu':'📕 小红书','page.profileIgPlaceholder':'@用户名 或完整链接','page.profileXhsPlaceholder':'粘贴你的主页 / 分享链接','page.profileSpecs':'专长','page.profileSpecsNote':'你的专长由工作室管理员管理。','page.profileSave':'保存资料','page.profileSaved':'资料已更新','page.profilePreview':'你在介绍页的显示效果','page.socialNone':'尚未添加社交链接。','page.openInstagram':'打开 Instagram','page.openXiaohongshu':'打开小红书','page.followTeacher':'关注 {name}','page.introSave':'保存介绍页','page.footerSection':'页脚与联系方式','page.footerNote':'这些信息会显示在公开介绍页的页脚，以及所有登录后页面（包括学生）的底部。留空则不显示该项。','page.footTagline':'页脚简介','page.footAddress':'地址','page.footHours':'营业时间','page.footPhone':'联系电话','page.footEmail':'电邮','page.footWhatsapp':'WhatsApp 号码','page.footInstagram':'Instagram','page.footFacebook':'Facebook','page.footTiktok':'TikTok','page.footXhs':'小红书','page.footYoutube':'YouTube','page.footCopy':'版权信息','page.footContactH':'联系我们','page.footFollowH':'关注我们','page.footVisitH':'到访我们','page.contentSection':'页面内容','page.contentNote':'公开介绍页上的文字。留空则使用内置的 EN / 中文 文案。在标题中按 Enter 可分成两行。','page.cHeroEyebrow':'首屏小标题（舞种）','page.cHeroTitle':'首屏大标题','page.cHeroLead':'首屏段落','page.cFindBtn':'左侧按钮','page.cMeetBtn':'右侧按钮','page.cAboutEyebrow':'关于我们 小标题','page.cAboutTitle':'关于我们 标题','page.cAboutLead':'关于我们 段落','page.cInstrEyebrow':'导师 小标题','page.cInstrTitle':'导师 标题','page.cInstrLead':'导师 段落','page.cLocEyebrow':'分店 小标题','page.cLocTitle':'分店 标题','page.cLocLead':'分店 段落','page.cCtaTitle':'结尾标题','page.cCtaLead':'结尾段落','page.cDefaultHint':'留空 = 内置文案','page.tchVideo':'🎬 精彩视频','page.tchVideoNote':'显示为你在介绍页卡片上的一张滑片。粘贴 YouTube、Vimeo、Instagram Reel 或 .mp4 链接。','page.tchQuote':'📁 作品集','page.tchQuoteNote':'教学经历、成就或演出经历 —— 会单独显示为介绍页卡片上的一张滑片。','page.slidePhoto':'照片','page.slideVideo':'视频','page.slideQuote':'作品集','page.slidePrev':'上一张','page.slideNext':'下一张','page.translate':'翻译','msg.saveFirst':'请先保存更改 —— 尚未发送到工作室数据库。','page.introReset':'恢复默认','page.introSaved':'介绍页已保存','page.introResetConfirm':'将介绍页恢复为默认内容？','page.introReset2':'介绍页已恢复默认','att.useCredit':'使用课时','att.creditUsed':'已用课时','att.creditTag':'课时支付','att.useCreditTip':'扣除 1 个预付课时','page.creditClasses':'课时','page.creditUsedShort':'已用课时','page.creditClassLabel':'课时课程','page.classCredits':'课时','page.creditsLeft':'剩余课时','msg.noCredits':'没有可用课时 —— 请先售卖课时配套','msg.noCreditsExtra':'课时不足，无法进行此额外/补课 —— 请先售卖课时配套','msg.creditOnlyNoAbsent':'课时配套学生不能标记缺席 —— 他们凭课时出席','msg.creditOnlyNoMark':'课时配套学生 —— 凭课时出席。请改用「使用课时」或「额外/补课」。','msg.creditUsed':'🎫 已使用 1 课时 · 剩余 {n}','msg.creditUsedBillRemoved':'🎫 已使用 1 课时 · 已取消下月账单 · 剩余 {n}','att.singleClassTag':'单堂课','att.dropinBtn':'单堂课临时参加','att.dropinHint':'让本分店的任何学生以单堂课形式参加这节课','att.dropinAdded':'已添加','page.noFranchiseStudents':'本分店没有其他学生','page.selectClassFirst':'请先选择课程','msg.dropinAdded':'🎫 已将 {s} 添加为单堂课临时参加','msg.creditRefunded':'已退回 1 课时 · 剩余 {n}','msg.creditsSold':'🎫 已为 {s} 售出 {n} 堂课时 · 余额 {b}','msg.selectStudent':'请选择学生','msg.typeTrialName':'请输入体验课学生姓名','msg.typePrivateName':'请输入学生姓名','msg.selectTeacher':'请选择导师','msg.dsEarnExceedsTotal':'⚠️ 超出预算 —— 导师所得使工作室收入为 RM0 或更少。请检查人数、每人金额与总收款。','page.privateClassLabel':'私人课',
    'page.welcomeTitle':'\u5df2\u65b0\u589e\u5b66\u751f','page.welcomeSub':'{n} \u5df2\u6ce8\u518c\u3002\u8bf7\u5b66\u751f\u73b0\u5728\u626b\u63cf \u2014 \u626b\u63cf\u540e\u76f4\u63a5\u767b\u5165\u5e94\u7528\u3002','page.welcomeEditTitle':'\u5b66\u751f\u8d44\u6599\u5df2\u66f4\u65b0','page.welcomeEditSub':'{n} \u7684\u8d44\u6599\u5df2\u66f4\u65b0\u3002\u53ef\u73b0\u5728\u626b\u7801\u91cd\u65b0\u767b\u5165\uff0c\u6216\u5728\u4e0b\u65b9\u53d1\u9001\u3002','page.welcomeQrNote':'\uD83D\uDCF1 \u8bf7\u5b66\u751f\u7528\u624b\u673a\u76f8\u673a\u626b\u63cf\uff0c\u65e0\u9700\u5b89\u88c5\u4efb\u4f55\u5e94\u7528\u3002\u82e5\u5b66\u751f\u5df2\u79bb\u5f00\uff0c\u53ef\u901a\u8fc7 WhatsApp \u53d1\u9001\u3002','page.welcomePhoneInvalid':'\u8be5\u7535\u8bdd\u53f7\u7801\u4e0d\u662f\u6709\u6548\u7684\u9a6c\u6765\u897f\u4e9a\u6216\u65b0\u52a0\u5761\u624b\u673a\u53f7\u3002\u8bf7\u91cd\u65b0\u8f93\u5165\uff08\u4f8b\u5982 012-345 6789 \u6216 +65 8123 4567\uff09\u4ee5\u53d1\u9001 WhatsApp\u3002','page.welcomeDone':'\u5b8c\u6210','page.welcomeCopy':'\u590d\u5236','page.welcomeCopied':'\u5df2\u590d\u5236','page.welcomeSend':'WhatsApp',
    'msg.signedOut':'\u5df2\u767b\u51fa','msg.idleLogout':'\u5df2\u767b\u51fa \u2014 5 \u5206\u949f\u65e0\u64cd\u4f5c','msg.idleWarn':'1 \u5206\u949f\u540e\u5c06\u81ea\u52a8\u767b\u51fa \u2014 \u89e6\u78b0\u5c4f\u5e55\u53ef\u7ee7\u7eed','msg.accountUpdated':'\u8d26\u53f7\u5df2\u66f4\u65b0','msg.changePasswordPrompt':'\ud83d\udd10 \u8bf7\u8bbe\u7f6e\u60a8\u81ea\u5df1\u7684\u5bc6\u7801\u4ee5\u5b8c\u6210\u8d26\u53f7\u8bbe\u7f6e','msg.passwordSameAsBefore':'\u26a0\ufe0f \u4e0e\u539f\u5bc6\u7801\u76f8\u540c \u2014\u2014 \u8bf7\u9009\u62e9\u4e00\u4e2a\u65b0\u5bc6\u7801','page.firstLoginNote':'\ud83d\udd10 \u60a8\u4ecd\u5728\u4f7f\u7528\u5b66\u9662\u53d1\u7ed9\u60a8\u7684\u5bc6\u7801\u3002\u8bf7\u73b0\u5728\u8bbe\u7f6e\u60a8\u81ea\u5df1\u7684\u5bc6\u7801 \u2014\u2014 \u77e5\u9053\u8be5\u5bc6\u7801\u7684\u4eba\u90fd\u53ef\u80fd\u4ee5\u60a8\u7684\u8eab\u4efd\u767b\u5f55\u3002\u8bf7\u5728\u4e0b\u65b9\u8f93\u5165\u65b0\u5bc6\u7801\u5e76\u70b9\u51fb\u4fdd\u5b58\u3002','msg.nameUserEmpty':'\u59d3\u540d\u4e0e\u7528\u6237\u540d\u4e0d\u80fd\u4e3a\u7a7a','msg.userTaken':'\u7528\u6237\u540d\u5df2\u88ab\u4f7f\u7528',
    'msg.markedUnpaid':'\u7f34\u8d39\u5df2\u6807\u8bb0\u4e3a\u672a\u4ed8\u6b3e','msg.paymentUpdated':'\u4ed8\u6b3e\u8bb0\u5f55\u5df2\u66f4\u65b0','msg.dateEditAdminOnly':'\u53ea\u6709\u7ba1\u7406\u5458\u53ef\u4ee5\u4fee\u6539\u4ed8\u6b3e\u65e5\u671f','msg.markedAbsent':'\u5df2\u6807\u8bb0\u7f3a\u5e2d','msg.markedCancelled':'\u5df2\u4e3a\u8be5\u5b66\u751f\u6807\u8bb0\u8bfe\u7a0b\u53d6\u6d88',
    'msg.enterClassName':'\u8bf7\u8f93\u5165\u8bfe\u7a0b\u540d\u79f0','msg.enterRoomName':'\u8bf7\u8f93\u5165\u81ea\u5b9a\u4e49\u623f\u95f4\u540d\u79f0','msg.classGone':'\u26A0\uFE0F \u8be5\u8bfe\u7a0b\u5df2\u4e0d\u5b58\u5728 \u2014 \u5df2\u88ab\u5176\u4ed6\u4eba\u5220\u9664\u3002\u5217\u8868\u5df2\u5237\u65b0\u3002','msg.classUpdated':'\u8bfe\u7a0b\u5df2\u66f4\u65b0','msg.classAdded':'\u8bfe\u7a0b\u5df2\u65b0\u589e','msg.newClassAdded':'\u65b0\u8bfe\u7a0b\u5df2\u65b0\u589e','msg.studentGone':'\u26A0\uFE0F \u8be5\u5b66\u751f\u5df2\u4e0d\u5b58\u5728\u3002',
    'msg.enterStudentName':'\u8bf7\u8f93\u5165\u5b66\u751f\u59d3\u540d','msg.selectClass':'\u8bf7\u81f3\u5c11\u9009\u62e9\u4e00\u95e8\u8bfe\u7a0b','msg.selectClassOrCredit':'\u8bf7\u81f3\u5c11\u9009\u62e9\u4e00\u95e8\u8bfe\u7a0b\uff0c\u6216\u552e\u5356\u4e00\u4e2a\u8bfe\u65f6\u914d\u5957','msg.selectSingleClassClass':'⚠️ 请选择此单堂课所属的课程 —— 否则无法记入任何导师的收入','msg.enterPrivatePrice':'⚠️ 请输入私教课的价格','msg.studentUpdated':'\u5b66\u751f\u5df2\u66f4\u65b0 \u00b7 \u6bcf\u6708\u5b66\u8d39\u91cd\u65b0\u8ba1\u7b97\u4e3a ',
    'msg.enterTeacherName':'\u8bf7\u8f93\u5165\u5bfc\u5e08\u59d3\u540d','msg.selectSpec':'\u8bf7\u81f3\u5c11\u9009\u62e9\u4e00\u9879\u4e13\u957f','msg.teacherUpdated':'\u5bfc\u5e08\u5df2\u66f4\u65b0','msg.teacherAdded':'\u5bfc\u5e08\u5df2\u65b0\u589e','msg.confirmDeleteTeacher':'删除此导师？其登录账号也会一并删除。','msg.teacherDeleted':'已删除导师 · 登录账号已一并删除',
    'msg.profileUpdated':'\u8d44\u6599\u5df2\u66f4\u65b0','msg.paymentRecorded':'\u7f34\u8d39\u5df2\u8bb0\u5f55','msg.deleted':'\u5df2\u5220\u9664','msg.confirmDelete':'\u786e\u5b9a\u5220\u9664\u6b64\u8bb0\u5f55\uff1f\u6b64\u64cd\u4f5c\u65e0\u6cd5\u64a4\u9500\u3002','msg.confirmDeleteAccount':'确定删除此登录账号？此操作无法撤销。','msg.accountDeleted':'账号已删除','msg.profileLocked':'此处仅可修改密码。',
    'msg.addedToClass':'\u5df2\u52a0\u5165\u8bfe\u7a0b','msg.removedFromClass':'\u5df2\u4ece\u8bfe\u7a0b\u79fb\u9664','msg.enrollFeeUpdated':' \u00b7 \u6708\u8d39\u73b0\u4e3a {f}','msg.enrollBillCreated':' \u00b7 \u5df2\u4e3a\u65b0\u8bfe\u7a0b\u5efa\u7acb {r} \u672a\u4ed8\u6b3e\u8d26\u5355','msg.paidVia':'\u7f34\u8d39\u5df2\u6807\u8bb0\u4e3a\u5df2\u4ed8\u6b3e \u00b7 \u65b9\u5f0f\uff1a','msg.billsPaidVia':'\u7b14\u8d26\u5355\u5df2\u6807\u8bb0\u4e3a\u5df2\u4ed8\u6b3e \u00b7 \u65b9\u5f0f\uff1a',
    'msg.extraAdded':'\u5df2\u6dfb\u52a0\u989d\u5916/\u8865\u8bfe\u573a\u6b21 \u2014 \u51fa\u5e2d\u6b21\u6570 +1','msg.extraRemoved':'\u5df2\u79fb\u9664\u989d\u5916/\u8865\u8bfe\u573a\u6b21',
    'msg.remind3of4':'\ud83d\udce2 {s} \u5df2\u51fa\u5e2d {c} \u7684 3/4 \u5802\u8bfe \u2014 \u8bf7\u63d0\u9192\u5b66\u751f\u4e0b\u6b21\u4e0a\u8bfe\u643a\u5e26{m}\u5b66\u8d39\uff08{a}\uff09',
    'msg.autoBilled':'\ud83d\udcb3 {s} \u5df2\u5b8c\u6210 {c} \u7684 4/4 \u5802\u8bfe \u2014 {m}\u5b66\u8d39 {a} \u5df2\u81ea\u52a8\u8bb0\u4e3a\u672a\u4ed8\u6b3e','msg.remindPayNow':'💰 {s} 开始 {c} 的新一轮课程 —— {m}学费（{a}）需在本堂课缴付',
    'msg.autoBilledPrepaid':'💳 {s} 已完成 {c} 的 4/4 堂课 — {m}学费 {a} 已提前缴清，无需再开新账单。',
    'float.paymentReminder':'\ud83d\udd14 \u7f34\u8d39\u63d0\u9192','float.feeReminder':'\ud83d\udce2 \u5b66\u8d39\u63d0\u9192',
    'promo.freeTshirt':'新学生免费T恤',
    'promo.counterNote':'该新学生领取免费T恤后，勾选此项。',
    'promo.rewardTitle':'新学生免费T恤',
    'promo.studentOn':'已领取 —— 祝你穿上新学生免费T恤开心！🎉',
    'promo.studentOff':'尚未领取 —— 请到前台领取你的免费T恤。',
  }
};
function tr(key){ return (I18N[currentLang]&&I18N[currentLang][key])||I18N.en[key]||key; }
const MONTHS_ZH={January:'一月',February:'二月',March:'三月',April:'四月',May:'五月',June:'六月',July:'七月',August:'八月',September:'九月',October:'十月',November:'十一月',December:'十二月','Single Class':'单堂课','Trial Class':'体验课','Private Class':'私人课','Rental':'租借','Dance Show':'舞蹈表演','Credit Package':'课时配套'};
function monthLabel(m){ return currentLang==='zh'?(MONTHS_ZH[m]||m):m; }
// ── static UI dictionary: translates hard-coded modal / login text (labels, buttons, options,
// placeholders). Option elements get a value attribute pinned to the ENGLISH original first, so
// the underlying data saved by the app never changes no matter which language is displayed. ──
const STATIC_ZH={'🎫 Credit Package (optional) — pre-paid class credits':'🎫 课时配套（可选）—— 预付课时','Package':'配套','— None —':'— 无 —',
 'Class Name':'课程名称','Style':'风格','Branch':'分店','Teacher':'导师','Day':'星期','Room':'教室','Start':'开始','End':'结束','Max Students':'人数上限',
 'Cancel':'取消','Save':'保存','Save Changes':'保存更改','Done':'完成','Close':'关闭','Delete':'删除','🖨️ Print':'🖨️ 打印',
 'Monday':'星期一','Tuesday':'星期二','Wednesday':'星期三','Thursday':'星期四','Friday':'星期五','Saturday':'星期六','Sunday':'星期日',
 'Big Room':'大教室','Small Room':'小教室','Private Room':'私人教室',
 '✏️ Edit My Profile':'✏️ 编辑我的资料','✏️ Edit My Class':'✏️ 编辑我的课程','➕ Add Class':'➕ 新增课程','👤 Add Student':'👤 新增学生','🎓 Add Teacher':'🎓 新增导师','💳 Record Payment':'💳 记录缴费','➕ Manage Class Enrollment':'➕ 管理课程报读','⚠️ Please Confirm':'⚠️ 请确认','✓ Confirm Payment':'✓ 确认付款','👤 My Account':'👤 我的账号','🔁 Extra / Replacement':'🔁 额外 / 补课',
 'Full Name':'姓名','Age':'年龄','Parent Name':'家长姓名','Phone':'电话','Email':'电邮','Display Name':'显示名称','Username':'用户名','Password':'密码','Role':'身份','New Password':'新密码','(leave blank to keep current)':'（留空则保持不变）',
 '📚 Class Enrollment — students can join more than one class':'📚 课程报读 — 学生可以报读多于一门课程','— All —':'— 全部 —','Dance Style':'舞蹈风格','Selected Classes':'已选课程','Available Classes — tap to add or remove':'可选课程 — 点击添加或移除','Monthly Fee (RM) — auto-calculated':'每月学费 (RM) — 系统自动计算','Join Date':'入学日期','Notes':'备注','Status':'状态','Specialities':'专长','(select one or more)':'（选择一项或多项）',
 'Active':'在职','On Leave':'休假中','Part-time':'兼职',
 'Student':'学生','Class':'课程','(which class this bill is for)':'（此账单所属课程）','Month / Type':'月份 / 类型','Single Class':'单堂课','Trial Class':'体验课',
 'January':'一月','February':'二月','March':'三月','April':'四月','May':'五月','June':'六月','July':'七月','August':'八月','September':'九月','October':'十月','November':'十一月','December':'十二月',
 'Amount (RM)':'金额 (RM)','Method':'付款方式','Cash':'现金','Bank Transfer':'银行转账','Online Banking':'网上银行','Credit/Debit Card':'信用卡/借记卡','QR Pay':'扫码支付','Card':'银行卡','Paid':'已付款','Unpaid':'未付款','Date':'日期',
 'Add or remove students from your own classes. Students can belong to more than one class — only admins and teachers can change enrollment.':'从您自己的课程中添加或移除学生。学生可以报读多于一门课程 — 只有管理员与导师可以更改报读。',
 'Your Class':'您的课程','Students':'学生','(tap to add / remove)':'（点击添加 / 移除）',
 'Are you sure?':'您确定吗？','Record how this payment was received.':'记录此笔付款的收款方式。','Payment Method':'付款方式','Date Paid':'付款日期','✓ Confirm Paid':'✓ 确认已付款',
 '🏢 Which location are you working at?':'🏢 请选择您所在的分店','← Back':'← 返回','← Studio Site':'← 舞室官网','Sign in':'登录','Sign In →':'登录 →','Studio Management System':'舞室管理系统',
 'Half Hour':'半小时','One Hour':'一小时','How long was this extra / replacement session? One hour counts as +1, half hour as +0.5 toward the billing cycle.':'这次额外/补课的时长是多久？该学生的出席次数将 +1。',
 '🔍 Search students...':'🔍 搜索学生...','🔍 Search students or ID...':'🔍 搜索学生姓名或编号...','Receipt no., remarks...':'收据编号、备注...','Full name':'姓名','Hip-hop Beginner':'例：Hip-hop 初级',
 'Payment For':'付款类型','Rental':'租借','From Time':'开始时间','Till Time':'结束时间','Which Room':'教室',
 'Grade Level':'等级','Birthday':'生日','Grade 1 · Bronze':'等级 1 · 青铜','Grade 2 · Silver':'等级 2 · 白银','Grade 3 · Gold':'等级 3 · 黄金','Grade 4 · Diamond':'等级 4 · 钻石','Grade 5 · Crown':'等级 5 · 皇冠','Credit Package':'课时配套','10 Classes':'10 堂课','20 Classes':'20 堂课','Grades by Dance Style':'各舞种等级','(points follow the highest grade)':'（积分按最高等级计算）',
 '👕 Free T-shirt for New Student — tick once collected':'👕 新学生免费T恤 — 领取后勾选',
 '✎ Edit Payment':'✎ 编辑付款','🗑 Delete':'🗑 删除','Cancel':'取消','Save':'保存',
 '🎫 Single-Class Drop-in':'🎫 单堂课临时参加',
 "Type the trial student's name…":'输入体验课学生姓名…',
 'Private Class':'私人课','Dance Show':'舞蹈表演','Teacher Earns (RM)':'导师所得 (RM)',
 "Type the student's name…":'输入学生姓名…','Not on the roster — type the name':'不在名单内 —— 手动输入姓名',
 'Add a credit-package student or a student eligible for a free bonus class to this class as a one-off single class. It earns points and gives the teacher a single-class salary. A credit-package student uses 1 pre-paid credit; a bonus-eligible student uses their free monthly bonus class instead.':'为课时配套学生或有资格使用免费赠送课的学生，将其添加到本节课，作为一次性单堂课。可获得积分，并给导师单堂课薪资。课时配套学生使用 1 个预付课时；有赠送课资格的学生则使用其每月免费赠送课。',
};
const _txNodes=new WeakMap();
function translateStatic(){
  document.querySelectorAll('.mbg, #cred-screen, #branch-screen, #login-screen').forEach(root=>{
    root.querySelectorAll('*').forEach(el=>{
      if(el.tagName==='OPTION'&&!el.hasAttribute('value')) el.setAttribute('value',el.textContent);
      el.childNodes.forEach(n=>{
        if(n.nodeType!==3) return;
        if(!n.nodeValue.trim()) return;
        if(!_txNodes.has(n)) _txNodes.set(n,n.nodeValue);
        const orig=_txNodes.get(n), key=orig.trim();
        n.nodeValue=(currentLang==='zh'&&STATIC_ZH[key])?orig.replace(key,STATIC_ZH[key]):orig;
      });
      if(el.placeholder!==undefined&&el.placeholder){
        if(!el.dataset.enPh) el.dataset.enPh=el.placeholder;
        el.placeholder=currentLang==='zh'?(STATIC_ZH[el.dataset.enPh]||el.dataset.enPh):el.dataset.enPh;
      }
    });
  });
}
function translateLoginScreens(){
  const el=id=>document.getElementById(id);
  if(el('login-sub-main')) el('login-sub-main').textContent=currentLang==='zh'?'舞室管理系统':'Studio Management System';
  if(el('role-picker-title')) el('role-picker-title').textContent=tr('login.who');
  if(el('role-label-admin')) el('role-label-admin').textContent=tr('login.admin');
  if(el('role-label-counter')) el('role-label-counter').textContent=tr('login.counter');
  if(el('role-label-teacher')) el('role-label-teacher').textContent=tr('login.teacher');
  if(el('role-label-student')) el('role-label-student').textContent=tr('login.student');
  if(el('branch-sub')) el('branch-sub').textContent=currentLang==='zh'?'选择您的分店':'Choose Your Branch';
  if(el('branch-list')&&el('branch-list').innerHTML) renderFranchisePicker();
  if(el('cred-screen')&&el('cred-screen').style.display!=='none') showCredScreen();
}
function setLang(lang){
  if(currentLang===lang) return;
  currentLang=lang;
  document.querySelectorAll('.lang-btn').forEach(b=>b.classList.toggle('active',b.dataset.lang===lang));
  translateStatic();
  const so1=document.getElementById('signout-btn-1'), so2=document.getElementById('signout-btn-2');
  if(so1) so1.textContent=tr('common.signOut');
  if(so2) so2.textContent=tr('common.signOut');
  const rf1=document.getElementById('refresh-btn-1'), rf2=document.getElementById('refresh-btn-2');
  if(rf1) rf1.title=tr('page.dbRefresh');
  if(rf2) rf2.textContent='🔄 '+tr('page.dbRefresh');
  const siteBtn=document.getElementById('site-signin-btn');
  if(siteBtn) siteBtn.textContent=(window.innerWidth<=680?tr('site.signInShort'):tr('site.signIn'));
  if(document.getElementById('site-screen').style.display!=='none') renderSiteScreen();
  translateLoginScreens();
  if(session){
    renderNavLabels();
    if(currentPageId) showPage(currentPageId);
  }
}

// ══════════ DATA ══════════
const DB = {
  // ── Seed skeleton ──────────────────────────────────────────────────
  // This block used to carry the studio's real starting data: every account with its password in
  // plain text (admin/counter/teacher/student), plus teacher names, phones, emails and salaries.
  // index.html is served to every visitor, so all of that was readable with View Source or the
  // Sources tab in devtools — completely independently of the API gating, which only ever governed
  // what the /db endpoint returned.
  //
  // None of it is needed any more. Sign-in is checked on the server against Supabase, and every
  // real record arrives from the cloud on load, so these arrays are replaced within a second of the
  // app starting. They exist now only so the shapes are defined before the first fetch lands.
  places:[
    // branch names and addresses are on the public website anyway, and give the intro page
    // something correct to draw before the cloud responds
    {id:1,name:'Adda Height',address:'Adda Height, Kajang, Selangor'},
    {id:2,name:'Horizon Square',address:'Horizon Square, Johor Bahru, Johor'},
    {id:3,name:'Tasek',address:'Tasek, Ipoh, Perak'},
    {id:4,name:'Kulai',address:'Kulai, Johor'},
  ],
  accounts:[],   // never seeded — the server holds the only copy of any credential
  paymentInfo:{ bankName:'', accountName:'', accountNumber:'', tngName:'', tngNumber:'', duitnow:'', qrImage:'' },
  teachers:[],
  classes:[],
  students:[],
  payments:[],
  attendance:[],
};
let nid={teachers:11,classes:9,students:10,payments:14,attendance:6,creditUsages:1};
DB.creditUsages=DB.creditUsages||[]; // log of credit-paid classes (for the counter's record + teacher salary)

// ══════════ LOCAL DATABASE (persistence) ══════════
// The whole DB (every table) is saved to the browser's local storage and reloaded on startup, so the
// website keeps its data between sessions. All access is wrapped in try/catch so the app still runs
// (in-memory only) in environments where storage is blocked.
// saveDB()/loadDB() are defined once, further down, next to the localStorage key they actually use.
// This early call restores whatever was last backed up on this device before the cloud pull runs, so
// there's something on screen immediately rather than the bare seed. It does nothing on a brand-new
// device (no local backup yet) and is harmless to call again once the real functions are defined,
// since function declarations are available throughout the whole script regardless of source order.
loadDB();

let session=null;
// Signed proof from the server that this sign-in was genuine. Not enforced yet — the data endpoint
// still serves everyone — but it's issued and carried now so locking that endpoint down is a small,
// self-contained follow-up rather than another change to the login path.
let sessionToken='';
// True while the only data we hold is the signed-out landing-page slice. Nothing in that state may
// ever be pushed — it isn't the whole database, and saving it would look like mass deletion.
let dbIsPublicOnly=false;
// Every write carries the signed proof from sign-in. The server refuses saves without it, so nobody
// who simply knows the URL can overwrite the studio database.
function authHeaders(){
  const h={'Content-Type':'application/json'};
  if(sessionToken) h['Authorization']='Bearer '+sessionToken;
  return h;
}
// A 401 means the token has expired (they last 12 hours) or was never issued. Local data is safe —
// it's still on this device — but nothing more can reach the cloud until they sign in again, so say
// so plainly instead of letting saves fail silently in the background.
function handleAuthExpiry(status){
  if(!session) return;   // signed-out visitor: there's no session to expire, so say nothing
  // 401 = the token is missing or past its 12 hours; signing in again fixes it.
  // 403 = the token is fine but this account isn't allowed to do that — telling them to sign in
  // again would just send them round in a circle, so say what's actually wrong.
  const expired=(status!==403);
  lastCloudError=expired?'Session expired — please sign in again.':'This account is not allowed to make that change.';
  if(expired) setConnectionState(false);
  try{ toast(expired
    ?(currentLang==='zh'?'登录已过期，请重新登录':'Session expired — please sign in again')
    :(currentLang==='zh'?'此账号无权进行该操作':'This account is not allowed to make that change'),false); }catch(e){}
}
let loginRole='admin';
let payFilter='all';
let franchiseScope=null; // set when a Counter account picks a branch; null = see everything (admin)

// ══════════ FRANCHISE SCOPE HELPERS (used by Counter role) ══════════
function scopedClasses(){ return franchiseScope?DB.classes.filter(c=>c.placeId===franchiseScope):DB.classes; }
function scopedTeachers(){ if(!franchiseScope) return DB.teachers; const ids=new Set(scopedClasses().map(c=>c.teacherId)); return DB.teachers.filter(t=>ids.has(t.id)); }
function scopedStudents(){ if(!franchiseScope) return DB.students; const clsIds=new Set(scopedClasses().map(c=>c.id)); return DB.students.filter(s=>{ if(s.classIds&&s.classIds.some(id=>clsIds.has(id))) return true; const pid=studentPlaceId(s); return pid===franchiseScope||pid===null; }); }
// A student's home branch: their own recorded placeId (set at registration, mainly for credit-only
// students who have no class yet) — falling back to their first class's branch for older records.
function studentPlaceId(s){ if(!s) return null; if(s.placeId) return s.placeId; const cs=SC(s); return cs.length?cs[0].placeId:null; }
function scopedPlaces(){ return franchiseScope?DB.places.filter(p=>p.id===franchiseScope):DB.places; }
// A payment's OWN branch — not the student's overall branch footprint. A student can take classes
// at two different branches; each payment is for ONE specific class (or, for rental/dance-show/
// private/credit records, stamped with its own placeId or the student's full multi-branch set as a
// last resort). Getting this right matters: scopedPayments() below uses it to decide which payments
// a branch's own counter can see, and the branch summary cards use it to total each branch's own
// collections — get it wrong (as the old student-wide check did) and a counter at Branch A sees, and
// a branch's totals include, a payment for a class that only ever happened at Branch B.
function paymentBranchIds(p){
  if(p.classId){ const c=C(p.classId); return c&&c.placeId!=null?[c.placeId]:[]; }
  if(p.placeId!=null) return [p.placeId];
  if(p.studentId) return studentPlaceIds(S(p.studentId)); // credit-package purchases etc. — no single class to pin down, so any branch the student is affiliated with counts
  return [];
}
function paymentMatchesPlace(p,placeId){ return paymentBranchIds(p).includes(placeId); }
function scopedPayments(){ if(!franchiseScope) return DB.payments; return DB.payments.filter(p=>paymentMatchesPlace(p,franchiseScope)); }

// ══════════ HELPERS ══════════
const T=id=>DB.teachers.find(t=>t.id===id)||{name:'—'};
const C=id=>DB.classes.find(c=>c.id===id)||{name:'—'};
const S=id=>DB.students.find(s=>s.id===id)||{name:'—'};
const Pl=id=>DB.places.find(p=>p.id===id)||{name:'—'};
// Some payments have no student record — a trial student isn't on the roster yet, and a private
// class can be booked by an outsider. Those carry a typed name (trialName / privateName) instead of
// a studentId. Everything that shows "who paid" goes through here, so a typed name reads as a normal
// name instead of S()'s "—" fallback.
const payStudent=p=>{ const typed=p.trialName||p.privateName; return typed?{name:typed,id:null,classIds:[],typed:true}:S(p.studentId); };
const SC=s=>(s.classIds||[]).map(id=>C(id)).filter(c=>c&&c.id);
const TEACHER_PALETTE=['#ff7a29','#4ade80','#60a5fa','#f472b6','#facc15','#a78bfa','#2dd4bf','#fb7185'];
const TCOLOR=id=>{const t=DB.teachers.find(x=>x.id===id);const idx=t?DB.teachers.indexOf(t):0;return TEACHER_PALETTE[idx%TEACHER_PALETTE.length];};
function teacherFeeBreakdown(teacherId,classIdScope){
  const myClassIds=classIdScope||DB.classes.filter(c=>c.teacherId===teacherId).map(c=>c.id);
  const myStudents=DB.students.filter(s=>(s.classIds||[]).some(cid=>myClassIds.includes(cid)));
  // a payment counts as "Single Class" only if its record is labeled "single class" (any case) in month/type or notes
  const isSingleLabel=p=>{const t=((p.month||'')+' '+(p.notes||'')).toLowerCase();return t.includes('single class')||t.includes('trial class');};
  let rm150Qty=0, rm120Qty=0, singleQty=0;
  myStudents.forEach(s=>{
    const paidRecs=DB.payments.filter(p=>p.studentId===s.id&&p.status==='Paid'&&p.classId&&myClassIds.includes(p.classId));
    const paidMonthly=paidRecs.some(p=>!isSingleLabel(p));   // regular monthly fee paid for one of MY classes
    const paidSingle=paidRecs.some(p=>isSingleLabel(p));      // drop-in payment labeled "Single Class" for one of MY classes
    if(paidMonthly){ if((s.classIds||[]).length<=1) rm150Qty++; else rm120Qty++; }
    if(paidSingle) singleQty++;
  });
  return {totalStudents:myStudents.length,rm150Qty,rm120Qty,singleQty};
}
// Per-branch student breakdown for one teacher (used by admin's "every branch" view and Reports)
function teacherBreakdownByFranchise(teacherId){
  return DB.places.map(pl=>{
    const classIds=DB.classes.filter(c=>c.teacherId===teacherId&&c.placeId===pl.id).map(c=>c.id);
    if(classIds.length===0) return null;
    const count=DB.students.filter(s=>(s.classIds||[]).some(cid=>classIds.includes(cid))).length;
    return count>0?{place:pl,count}:null;
  }).filter(Boolean);
}
// Same branch-resolution rule everywhere: the student's own placeId first, then their first class's
// branch as a fallback. studentPlace() used to have its own, narrower copy of this logic that only
// ever looked at classes — so a credit-only student (real placeId, no classes yet) displayed as "—"
// even though their branch was correctly on file. Both now go through the one correct source.
const studentPlace=s=>Pl(studentPlaceId(s));
const studentPlaceIds=s=>[...new Set(SC(s).map(c=>c.placeId))];
const studentTeacherIds=s=>[...new Set(SC(s).map(c=>c.teacherId))];
const fmt=n=>'RM '+Number(n).toLocaleString();
const ini=n=>(n||'').trim().split(/\s+/).map(w=>w[0]||'').join('').toUpperCase().slice(0,2);   // tolerant of a hand-typed trial name (stray/double spaces)
let selectedClassIds=[];

function toast(msg,ok=true,variant){
  const t=document.getElementById('toast');
  const isWarn=variant==='warn';
  t.textContent=(isWarn?'⚠️ ':ok?'✅ ':'❌ ')+msg;
  t.classList.toggle('toast-err',!ok&&!isWarn);
  t.classList.toggle('toast-warn',isWarn);
  t.classList.add('show');
  clearTimeout(t.__hideTimer); // a toast already mid-display shouldn't get cut short by this new one's own timer later colliding with it
  t.__hideTimer=setTimeout(()=>t.classList.remove('show'),isWarn?4500:ok?2500:5000); // errors and warnings stay up longer — both have content worth actually reading
}
function openM(id){populateSel();document.getElementById(id).classList.add('open')}
// Kills any player inside a modal that's being closed. Scoped to the instructor card on purpose:
// openTeacherSocial() rebuilds that body from scratch on every open, so emptying it is safe and takes
// out <video> and the YouTube/Instagram iframes (which ignore pause()) in one go. Other modals hold
// static HTML that is NOT rebuilt on open, so they must never be emptied like this.
function stopModalMedia(id){
  if(id!=='m-teacher-social') return;
  const b=document.getElementById('m-teacher-social-body'); if(!b) return;
  b.querySelectorAll('video').forEach(v=>{ try{ v.pause(); }catch(e){} });
  b.innerHTML='';
}
function closeM(id){ stopModalMedia(id); document.getElementById(id).classList.remove('open'); }
// tapping the dark backdrop closes the modal without going through closeM(), so it needs the same cleanup
document.querySelectorAll('.mbg').forEach(m=>m.addEventListener('click',e=>{if(e.target===m){ stopModalMedia(m.id); m.classList.remove('open'); }}));

function populateSel(){
  // Dance-style dropdowns are driven by the admin-managed list (DB.styles), not a fixed set — so a style
  // added or renamed in the Styles manager shows up here immediately. Keep the current pick if it survives.
  ['cls-style','tcls-style'].forEach(id=>{
    const sel=document.getElementById(id); if(!sel) return;
    const keep=sel.value, esc=v=>String(v).replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/"/g,'&quot;');
    const list=styleList();
    sel.innerHTML=list.map(s=>`<option value="${esc(s)}">${esc(s)}</option>`).join('');
    if(keep&&list.includes(keep)) sel.value=keep;
  });
  const ct=document.getElementById('cls-teacher');
  // ALL teachers are assignable to a class (a teacher can work across branches) — counters see every teacher too
  if(ct) ct.innerHTML=DB.teachers.map(t=>`<option value="${t.id}">${t.name}</option>`).join('');
  const ps=document.getElementById('pay-student');
  if(ps){
    const payStudentList=session&&session.role==='teacher'
      ? DB.students.filter(s=>s.classIds&&s.classIds.some(cid=>DB.classes.some(c=>c.id===cid&&c.teacherId===session.ref)))
      : scopedStudents();
    // ID in the label does double duty: it separates same-named students, and because the filter
    // matches on label text, it makes the dropdown searchable by ID for free.
    ps.innerHTML=payStudentList.map(s=>`<option value="${s.id}">${s.name} \u00b7 ID ${studentIdOf(s)}</option>`).join('');
    cacheSelectOptions('pay-student');
    onPayStudentChange();
  }
  const pd=document.getElementById('pay-date');
  if(pd&&!pd.value) pd.value=toLocalISODate(new Date());
  const pm=document.getElementById('pay-month');
  if(pm&&pm.value==='Single Class'&&!pm.dataset.touched){pm.value=new Date().toLocaleDateString('en-US',{month:'long'});
    // ADDS a one-time listener instead of overwriting pm.onchange — the inline onchange="onPayMonthChange()"
    // from the HTML must stay intact, or every Month/Type change (including picking Trial Class, which is
    // what actually swaps the Student field to a name box) silently stops reacting for the rest of the session.
    pm.addEventListener('change',()=>{ pm.dataset.touched='1'; },{once:true});}
  syncTrialStudentField(); // Month/Type may have just decided which "Student" field should be showing
  const sj=document.getElementById('stu-join');
  if(sj&&!sj.value) sj.value=toLocalISODate(new Date());
  const clsPlace=document.getElementById('cls-place');
  if(clsPlace){
    // A counter signs in against ONE branch and everything else they touch is scoped to it. Offering
    // every branch here was the single place they could file a class under someone else's — and the
    // easiest kind of mistake to make, because their own branch is already preselected, so the picker
    // looks like it is merely confirming rather than offering. Admin still picks freely.
    const placeList=(session&&session.role==='counter'&&franchiseScope)
      ? DB.places.filter(p=>p.id===franchiseScope)
      : DB.places;
    clsPlace.innerHTML=placeList.map(p=>`<option value="${p.id}">${p.name}</option>`).join('');
  }
  const tclsPlace=document.getElementById('tcls-place');
  if(tclsPlace) tclsPlace.innerHTML=DB.places.map(p=>`<option value="${p.id}">${p.name}</option>`).join('');
  // populate student cascade filters — all branches, so a counter can enrol / filter across branches
  const sfp=document.getElementById('stu-f-place');
  if(sfp) sfp.innerHTML=`<option value="">— All —</option>`+DB.places.map(p=>`<option value="${p.id}">${p.name}</option>`).join('');
  const sft=document.getElementById('stu-f-teacher');
  if(sft) sft.innerHTML=`<option value="">— All —</option>`+DB.teachers.map(t=>`<option value="${t.id}">${t.name}</option>`).join('');
  const sfs=document.getElementById('stu-f-style');
  // Was deriving options from whichever styles happen to already have a class (DB.classes) — a style
  // added in the admin Styles manager but with no class created yet just silently never appeared here.
  // Use styleList() like every other style picker in the app so this follows the live studio style list.
  if(sfs) sfs.innerHTML=`<option value="">— All —</option>`+styleList().map(s=>`<option value="${s}">${s}</option>`).join('');
  filterStudentClass();
}

function filterStudentClass(){ renderClassPickers(); }

// ── AUTO FEE: 1 class = RM160 · 2+ classes = RM130 each · new student pays a one-time RM90 registration fee
const REG_FEE=90;
const SINGLE_FEE=50; // drop-in / single-class fee
const TRIAL_FEE=60; // trial-class fee (a prospective student trying one class)
// 配套四 RM450 (10 classes @ RM45, use within 28×3 days) · 配套五 RM750 (20 @ RM37.50, use within 28×5 days)
const CREDIT_PACKAGES=[{classes:10,price:450},{classes:20,price:750}];
const CREDIT_PKG_DAYS={10:28*3,20:28*5};
// Private-class billing: the counter/admin sets one all-in price per 4-attendance cycle when the slot
// is created (or edited) — the studio always keeps a flat RM160 off that, the rest goes to the teacher.
// Stored on the DB.classes row itself (difficulty:'Private') as `rate`, since (per the booking flow
// below) a private slot is always tied to one student's own price, not the shared 160/130 monthly tiers.
const PRIVATE_STUDIO_CUT=160;
function privateTeacherEarnFor(cls){ return Math.max(0,(cls&&cls.rate||0)-PRIVATE_STUDIO_CUT); }
function creditExpiryOf(s){ return (s&&s.creditExpiry)||''; }
function creditsExpired(s){ const e=creditExpiryOf(s); return !!e && e<toLocalISODate(new Date()); }
function creditsOf(s){ return creditsExpired(s)?0:((s&&s.credits)||0); }
function studentPaidMonthly(s){
  // true once the student has ANY monthly-class fee on record — excludes credit packages, credit-use and single-class drop-ins
  if(!s) return false;
  const isSingleLabel=p=>{const t=((p.month||'')+' '+(p.notes||'')).toLowerCase();return t.includes('single class')||t.includes('trial class');};
  return DB.payments.some(p=> p.studentId===s.id && p.classId && p.kind!=='credit' && p.kind!=='credit-use' && !isSingleLabel(p));
}
function isCreditOnlyStudent(s){
  // "credit-only" = attends purely on pre-paid credits: has bought a credit package (or still holds
  // credits) AND has never been billed a monthly-class fee. For these students only "Use Credit" and
  // "Extra / Replacement" apply — Present / Absent / Cancel are locked.
  if(!s) return false;
  const boughtCredit=DB.payments.some(p=>p.studentId===s.id && p.kind==='credit');
  const hasCredit=creditsOf(s)>0 || boughtCredit;
  return hasCredit && !studentPaidMonthly(s);
}
function creditPkgPrice(n){ const p=CREDIT_PACKAGES.find(x=>x.classes===n); return p?p.price:n*SINGLE_FEE; }
// 1 class = RM160. 2+ classes = RM130 each, counted per class (no separate package tiers).
function calcMonthlyFee(n){ return n===0?0 : n===1?160 : n*130; }
function updateAutoFee(){
  const feeEl=document.getElementById('stu-fee');
  const bd=document.getElementById('stu-fee-breakdown');
  if(!feeEl||!bd) return;
  // Private classes are billed per-session at payment time, not through the recurring monthly fee —
  // same exclusion classRateFor() already applies, kept in sync here so this preview never disagrees
  // with what the student is actually billed.
  const n=selectedClassIds.filter(id=>C(id)?.difficulty!=='Private').length;
  const monthly=calcMonthlyFee(n);
  feeEl.value=monthly;
  const isNew=!document.getElementById('stu-id').value;
  let lines='';
  if(n===0) lines=`Select classes above — the fee is calculated automatically.`;
  else if(n===1) lines=`🧮 1 class × <b style="color:var(--gold)">RM160</b> = <b>RM ${monthly}</b>/month`;
  else lines=`🧮 ${n} classes × <b style="color:var(--gold)">RM130</b> = <b>RM ${monthly}</b>/month <span style="color:var(--success)">(multi-class rate)</span>`;
  const skipReg=document.getElementById('stu-returning')&&document.getElementById('stu-returning').checked;
  if(isNew&&n>0&&!skipReg) lines+=`<br>🆕 New student registration fee: <b style="color:var(--gold)">+RM${REG_FEE}</b> (one-time) → first payment <b>RM ${monthly+REG_FEE}</b>`;
  else if(isNew&&n>0&&skipReg) lines+=`<br>🔁 Returning student — <b style="color:var(--success)">no registration fee</b> → first payment <b>RM ${monthly}</b>`;
  // only show the returning-student option for NEW students
  const rr=document.getElementById('stu-returning-row'); if(rr) rr.style.display=isNew?'flex':'none';
  bd.innerHTML=lines;
  updateStuCreditRegFeeVisibility();
}

function toggleClassSelect(id){
  id=parseInt(id);
  const idx=selectedClassIds.indexOf(id);
  if(idx===-1) selectedClassIds.push(id); else selectedClassIds.splice(idx,1);
  renderClassPickers();
}
function removeSelectedClass(id){
  selectedClassIds=selectedClassIds.filter(x=>x!==id);
  renderClassPickers();
}
function renderClassPickers(){
  const chipWrap=document.getElementById('stu-selected-classes');
  const listWrap=document.getElementById('stu-class-list');
  if(!chipWrap||!listWrap) return;
  chipWrap.innerHTML = selectedClassIds.length===0
    ? `<span style="color:var(--muted);font-size:12px">No classes selected yet</span>`
    : selectedClassIds.map(id=>{const c=C(id);
        return `<span class="tag" style="display:inline-flex;align-items:center;gap:6px;padding:4px 8px">${c.name} · ${Pl(c.placeId).name}<span style="cursor:pointer;font-weight:700" onclick="removeSelectedClass(${id})">✕</span></span>`;
      }).join('');
  const fp=document.getElementById('stu-f-place'), ft=document.getElementById('stu-f-teacher'), fs=document.getElementById('stu-f-style');
  // a teacher enrols the new student into their OWN classes; a counter sees only their branch's classes; admin sees every branch (narrowed by the filters below)
  let list=(session&&session.role==='teacher')?DB.classes.filter(c=>c.teacherId===session.ref)
          :franchiseScope?DB.classes.filter(c=>c.placeId===franchiseScope):DB.classes;
  if(fp&&fp.value) list=list.filter(c=>c.placeId===parseInt(fp.value));
  if(ft&&ft.value) list=list.filter(c=>c.teacherId===parseInt(ft.value));
  if(fs&&fs.value) list=list.filter(c=>c.style===fs.value);
  listWrap.innerHTML = list.length===0 ? `<div style="color:var(--muted);font-size:12px;padding:6px">No classes match filters</div>` :
    list.map(c=>{
      const checked=selectedClassIds.includes(c.id);
      return `<label style="display:flex;align-items:center;gap:8px;font-size:12px;padding:6px 7px;border-radius:4px;cursor:pointer;background:${checked?'rgba(255,122,41,.12)':'transparent'}">
        <input type="checkbox" ${checked?'checked':''} onchange="toggleClassSelect(${c.id})" style="width:auto;accent-color:var(--gold)"/>
        <span>${c.name} <span style="color:var(--muted)">· ${T(c.teacherId).name} · ${Pl(c.placeId).name}</span></span>
      </label>`;
    }).join('');
  updateAutoFee();
}

// ── EDIT OPENERS ──
function filterClassTeachers(keepId){
  const sel=document.getElementById('cls-teacher'); if(!sel) return;
  const styleEl=document.getElementById('cls-style'); const style=styleEl?styleEl.value:'';
  const keep=keepId!=null?String(keepId):null; // only preserve a teacher when editing (explicit id)
  // Show EVERY teacher so a counter or admin can assign anyone to the class. Teachers who specialise
  // in the chosen dance style are listed first for convenience, the rest follow.
  const match=DB.teachers.filter(t=>(t.specs||[]).includes(style));
  const rest=DB.teachers.filter(t=>!(t.specs||[]).includes(style));
  const list=[...match,...rest];
  sel.innerHTML=list.map(t=>`<option value="${t.id}">${t.name}</option>`).join('');
  if(keep && list.some(t=>String(t.id)===keep)) sel.value=keep;
}
// Setting <select>.value to something that doesn't EXACTLY match any <option>'s text silently
// falls back to whatever's already selected (normally the first option) — no error, no warning.
// difficulty's five options ('All Levels'/'Beginner'/'Intermediate'/'Advanced'/'Private') have no
// explicit value="" attributes, so this match is on their literal text content: any stray
// whitespace or casing difference in a stored class's difficulty — from a bulk import, a paste, or
// any future entry path other than this exact dropdown — would silently show "All Levels" here,
// looking completely normal, right up until the next save WRITES "All Levels" back over the class's
// real difficulty. For a Private class specifically, that silently kills its per-session billing
// treatment (see difficulty==='Private' checks elsewhere) with no error at any point in the process.
// This tries an exact match first (the normal case), falls back to a trimmed/case-insensitive match
// (recovers from formatting drift without losing the real value), and only gives up to the provided
// default if truly nothing matches — logging that case so a future instance of this isn't invisible.
function setSelectValueSafe(selectEl,rawValue,fallback){
  if(!selectEl) return;
  const want=(rawValue==null?'':String(rawValue));
  // Remember exactly what was stored and reset the "did the person touch this dropdown" flag, so a
  // save later this same modal session can tell a genuine fallback (the value never matched anything,
  // so the dropdown silently showed the default) apart from the person actually picking that option.
  // See readSelectSafe() below — this is the other half of the fix.
  selectEl.dataset.origRaw=want;
  selectEl.dataset.touched='';
  selectEl.value=want;
  if(selectEl.value===want && want!=='') return; // exact match applied — the normal case
  const loose=[...selectEl.options].find(o=>o.value.trim().toLowerCase()===want.trim().toLowerCase());
  if(loose){ selectEl.value=loose.value; return; }
  if(want) console.warn('[class-difficulty] stored value "'+rawValue+'" doesn\'t match any option on #'+selectEl.id+' — falling back to "'+fallback+'". Worth checking this class\'s real difficulty (and re-saving it) directly.');
  selectEl.value=fallback;
}
// Reads a <select> populated via setSelectValueSafe() the way a save should actually use it. If the
// stored value never matched any option, the dropdown is silently showing the fallback — reading
// .value directly and saving it would PERMANENTLY overwrite the class's real (just differently
// formatted, or from an older option set) difficulty with that fallback, on literally any save,
// even one that has nothing to do with difficulty. Only trust the dropdown's value once the person
// has actually interacted with it during this modal session; otherwise keep exactly what was there.
function readSelectSafe(selectEl,fallback){
  if(!selectEl) return fallback;
  const cur=selectEl.value;
  const orig=selectEl.dataset.origRaw;
  const touched=selectEl.dataset.touched==='1';
  if(!touched && cur===fallback && orig && orig.trim().toLowerCase()!==fallback.trim().toLowerCase()) return orig;
  return cur;
}
// Room dropdowns only offer the 3 fixed rooms (Big/Small/Private), plus a "Custom" option that
// reveals a free-text sibling field (wrapper div id = <selectId>+'-custom-fg', input id =
// <selectId>+'-custom') for a one-off or unusual room name. setRoomValue() is the single place that
// decides what the dropdown+input should show for a given stored room string — including a room
// saved earlier as custom text that doesn't match any fixed option, which it renders as Custom + that
// text rather than silently snapping to the first option (same "don't lose an unrecognized stored
// value" principle as setSelectValueSafe() above). readRoomValue() is the matching read side used by
// every save path.
function toggleRoomCustom(selectId){
  const sel=document.getElementById(selectId);
  const fg=document.getElementById(selectId+'-custom-fg');
  if(!sel||!fg) return;
  fg.style.display=(sel.value==='Custom')?'':'none';
}
function setRoomValue(selectId,room){
  const sel=document.getElementById(selectId);
  if(!sel) return;
  const inp=document.getElementById(selectId+'-custom');
  const val=(room==null?'':String(room));
  const isFixedOption=[...sel.options].some(o=>o.value===val&&o.value!=='Custom');
  if(val&&!isFixedOption){
    sel.value='Custom';
    if(inp) inp.value=val;
  }else{
    sel.value=val;
    if(inp) inp.value='';
  }
  toggleRoomCustom(selectId);
}
function readRoomValue(selectId,fallback){
  const sel=document.getElementById(selectId);
  if(!sel) return fallback;
  if(sel.value==='Custom'){
    const inp=document.getElementById(selectId+'-custom');
    const v=(inp&&inp.value||'').trim();
    return v||fallback;
  }
  return sel.value||fallback;
}
// Shows the Private Class Price field only when Difficulty is set to Private — that price is what
// checkAttendanceBilling() reads to auto-bill the class every 4 attendances (see savePayment's removed
// Private Class flow, now folded into Add Student + this field, for the history here).
function toggleClsRateField(){
  const d=document.getElementById('cls-diff'); const fg=document.getElementById('cls-rate-fg');
  if(fg) fg.style.display=(d&&d.value==='Private')?'':'none';
}
function toggleTclsRateField(){
  const d=document.getElementById('tcls-diff'); const fg=document.getElementById('tcls-rate-fg');
  if(fg) fg.style.display=(d&&d.value==='Private')?'':'none';
}
function openAddClass(){
  populateSel();
  document.getElementById('m-class-title').textContent=tr('modal.addClass');
  document.getElementById('cls-id').value='';
  document.getElementById('cls-name').value='';
  document.getElementById('cls-style').selectedIndex=0;
  document.getElementById('cls-diff').value='All Levels';
  document.getElementById('cls-diff').dataset.origRaw=''; document.getElementById('cls-diff').dataset.touched=''; // brand-new class — no stored value to protect
  const _clsRate=document.getElementById('cls-rate'); if(_clsRate) _clsRate.value='';
  toggleClsRateField();
  // counters default the new class to their own branch; admin defaults to the first branch
  document.getElementById('cls-place').value=(session&&session.role==='counter'&&franchiseScope)?franchiseScope:DB.places[0].id;
  setRoomValue('cls-room','Big Room');
  document.getElementById('cls-start').value='09:00';
  document.getElementById('cls-end').value='10:00';
  document.getElementById('cls-max').value='15';
  openM('m-class');
  filterClassTeachers(); // AFTER openM — openM re-runs populateSel(), so fill the teacher list last
}
function openEditClass(id){
  populateSel();
  const c=DB.classes.find(x=>x.id===id);
  document.getElementById('m-class-title').textContent=tr('modal.editClass');
  document.getElementById('cls-id').value=c.id;
  document.getElementById('cls-name').value=c.name;
  document.getElementById('cls-style').value=c.style;
  setSelectValueSafe(document.getElementById('cls-diff'),c.difficulty,'All Levels');
  document.getElementById('cls-place').value=c.placeId;
  document.getElementById('cls-day').value=c.day;
  document.getElementById('cls-start').value=c.start;
  document.getElementById('cls-end').value=c.end;
  setRoomValue('cls-room',c.room);
  document.getElementById('cls-max').value=c.max;
  const _clsRate=document.getElementById('cls-rate'); if(_clsRate) _clsRate.value=c.rate||'';
  toggleClsRateField();
  openM('m-class');
  filterClassTeachers(c.teacherId); // AFTER openM so the teacher list + selection aren't overwritten
  document.getElementById('cls-teacher').value=c.teacherId;
}
function applyStudentFranchiseVisibility(){
  // Only admin picks a branch. A counter's class list is already limited to their own branch
  // (via franchiseScope), so any student they add is automatically recorded under that branch.
  const fg=document.getElementById('stu-fplace-fg');
  if(fg) fg.style.display=(session&&session.role==='admin')?'':'none';
  // a teacher only adds into their own classes, so the teacher class-filter is meaningless for them
  const tfg=document.getElementById('stu-fteacher-fg');
  if(tfg) tfg.style.display=(session&&session.role==='teacher')?'none':'';
}
// Same scoping the Class Enrollment section above already uses: a teacher only sees their own
// classes, a counter only their branch's, admin sees everything. Needed here so a single-class
// payment can carry a real classId — that's what lets renderTeacherSalary() find and credit the
// right teacher RM25 for it later, exactly as it already does for attendance-based single classes.
function populateSingleClassSelect(){
  const sel=document.getElementById('stu-credit-single-class');
  if(!sel) return;
  let list=(session&&session.role==='teacher')?DB.classes.filter(c=>c.teacherId===session.ref)
          :franchiseScope?DB.classes.filter(c=>c.placeId===franchiseScope):DB.classes;
  const cur=sel.value;
  sel.innerHTML='<option value="">— Select a class —</option>'+list.map(c=>`<option value="${c.id}">${c.name} · ${T(c.teacherId).name} (${Pl(c.placeId).name})</option>`).join('');
  if(cur && list.some(c=>String(c.id)===cur)) sel.value=cur;
}
function onStuCreditPkgChange(){
  const raw=document.getElementById('stu-credit-pkg').value;
  const isSingle=raw==='single';
  const isPrivate=raw==='private';
  const pkg=(isSingle||isPrivate)?0:(parseInt(raw)||0);
  const box=document.getElementById('stu-credit-fields');
  if(!box) return;
  box.style.display=(pkg>0||isSingle||isPrivate)?'':'none';
  const scFg=document.getElementById('stu-single-class-fg');
  if(scFg) scFg.style.display=isSingle?'':'none';
  const pvFg=document.getElementById('stu-pv-fields');
  if(pvFg) pvFg.style.display=isPrivate?'':'none';
  const amtL=document.getElementById('stu-credit-amount-l');
  if(amtL) amtL.textContent=isPrivate?'Price (RM) — billed every 4 attendances, like a monthly class':'Amount (RM)';
  if(isSingle) populateSingleClassSelect();
  if(isPrivate) renderStuPvClassOptions();
  if(pkg>0||isSingle){
    const amt=document.getElementById('stu-credit-amount');
    if(amt && !amt.dataset.touched) amt.value=isSingle?SINGLE_FEE:creditPkgPrice(pkg); // auto-fill the price
    const d=document.getElementById('stu-credit-date'); if(d && !d.value) d.value=toLocalISODate(new Date());
  }else if(isPrivate){
    // no sensible default price to pre-fill — the counter types the agreed rate fresh each time
    const d=document.getElementById('stu-credit-date'); if(d && !d.value) d.value=toLocalISODate(new Date());
  }
  updateStuCreditRegFeeVisibility();
}
// The RM90 registration fee for a credit-package student only makes sense for a brand-new student who
// ISN'T also enrolling in a monthly class (that path already has its own registration-fee handling via
// the "returning student" checkbox above) — so only show this option when isNew && no classes selected.
function updateStuCreditRegFeeVisibility(){
  const row=document.getElementById('stu-credit-regfee-row');
  if(!row) return;
  const isNew=!document.getElementById('stu-id').value;
  const raw=document.getElementById('stu-credit-pkg').value;
  const isSingle=raw==='single';
  const isPrivate=raw==='private';
  const pkg=(isSingle||isPrivate)?0:(parseInt(raw)||0);
  const show=isNew && (pkg>0||isSingle||isPrivate) && selectedClassIds.length===0;
  row.style.display=show?'flex':'none';
  if(!show){ const cb=document.getElementById('stu-credit-regfee'); if(cb) cb.checked=false; }
  updateStuCreditFeeCalc();
}
// Live preview of the credit-package total — same idea as the monthly-fee breakdown above, so the
// counter sees exactly what's being charged (package price, plus the RM90 registration fee if that
// box is ticked) BEFORE saving, not just in the toast message afterwards. For a private class this also
// previews the studio/teacher split (flat RM160 to the studio, the rest to the teacher) so the counter
// sees it before saving, not just after.
function updateStuCreditFeeCalc(){
  const bd=document.getElementById('stu-credit-fee-breakdown');
  if(!bd) return;
  const raw=document.getElementById('stu-credit-pkg').value;
  const isSingle=raw==='single';
  const isPrivate=raw==='private';
  const pkg=(isSingle||isPrivate)?0:(parseInt(raw)||0);
  if(pkg<=0 && !isSingle && !isPrivate){ bd.innerHTML=''; return; }
  const amtEl=document.getElementById('stu-credit-amount');
  const base=parseFloat(amtEl&&amtEl.value)||(isSingle?SINGLE_FEE:isPrivate?0:creditPkgPrice(pkg)); // same fallback rule used when the payment is actually saved
  const regRow=document.getElementById('stu-credit-regfee-row');
  const regShown=!!(regRow&&regRow.style.display!=='none');
  const addReg=regShown&&!!(document.getElementById('stu-credit-regfee')&&document.getElementById('stu-credit-regfee').checked);
  const total=base+(addReg?REG_FEE:0);
  let lines;
  if(isPrivate){
    const studioCut=Math.min(base,PRIVATE_STUDIO_CUT);
    const teacherEarn=Math.max(0,base-PRIVATE_STUDIO_CUT);
    lines=`🧮 Private class price = <b style="color:var(--gold)">RM ${base}</b> per 4-attendance cycle<br>💰 Studio keeps <b style="color:var(--gold)">RM${studioCut}</b>, teacher earns <b style="color:var(--gold)">RM${teacherEarn}</b>`;
    if(base>0 && base<PRIVATE_STUDIO_CUT) lines+=`<br>⚠️ Below the RM${PRIVATE_STUDIO_CUT} studio cut — the teacher will earn RM0 on this`;
  }else{
    lines=isSingle?`🧮 ${tr('page.singleClassLabel')} = <b style="color:var(--gold)">RM ${base}</b>`:`🧮 ${pkg} classes credit package = <b style="color:var(--gold)">RM ${base}</b>`;
  }
  if(addReg) lines+=`<br>🆕 New student registration fee: <b style="color:var(--gold)">+RM${REG_FEE}</b> (one-time) → total <b>RM ${total}</b>`;
  if(isSingle){
    const scId=parseInt(document.getElementById('stu-credit-single-class')?.value)||0;
    const scCls=scId?C(scId):null;
    lines+=scCls?`<br>👤 ${T(scCls.teacherId).name} earns <b style="color:var(--gold)">RM${SALARY_PER_SINGLE}</b> once this is marked Paid`:`<br>⚠️ Pick a class above so a teacher gets credited for it`;
  }
  bd.innerHTML=lines;
}
// The "Private Class" picker inside Add/Edit Student: an existing recurring private slot (a DB.classes
// row with difficulty==='Private'), scoped to branch the same way the old Record Payment picker was.
// Picking one reuses its teacher/day/room/time and bills at that slot's own rate going forward; leaving
// it on "New" creates a fresh recurring slot for this student.
function stuPvPlaceId(){ return franchiseScope||null; }
function renderStuPvClassOptions(){
  const sel=document.getElementById('stu-pv-class'); if(!sel) return;
  const pid=stuPvPlaceId();
  const list=DB.classes.filter(c=>c.difficulty==='Private'&&(pid==null||c.placeId==null||c.placeId===pid))
    .sort((a,b)=>DAYS.indexOf(a.day)-DAYS.indexOf(b.day)||(a.start||'').localeCompare(b.start||''));
  sel.innerHTML=`<option value="">— New Private Class —</option>`+
    list.map(c=>`<option value="${c.id}">${H(c.name)} · ${T(c.teacherId).name} · ${tr(c.day)} ${c.start||''}</option>`).join('');
  sel.value='';
  const t=document.getElementById('stu-pv-teacher');
  if(t) t.innerHTML=[...DB.teachers].sort((a,b)=>a.name.localeCompare(b.name))
    .map(x=>`<option value="${x.id}">${H(x.name)}</option>`).join('')||'<option value="">No teachers yet</option>';
  onStuPvClassChange();
}
function onStuPvClassChange(){
  const sel=document.getElementById('stu-pv-class');
  const cid=sel&&sel.value?parseInt(sel.value):null;
  const cls=cid?C(cid):null;
  // fixed fields — locked to the class's own slot once one is picked; free to set when it's "New"
  ['stu-pv-teacher','stu-pv-day','stu-pv-room','stu-pv-room-custom','stu-pv-start','stu-pv-end'].forEach(id=>{
    const el=document.getElementById(id); if(el) el.disabled=!!cls;
  });
  if(cls){
    document.getElementById('stu-pv-teacher').value=cls.teacherId;
    document.getElementById('stu-pv-day').value=cls.day||'Monday';
    setRoomValue('stu-pv-room',cls.room||'Private Room');
    document.getElementById('stu-pv-start').value=cls.start||'';
    document.getElementById('stu-pv-end').value=cls.end||'';
    const amt=document.getElementById('stu-credit-amount');
    if(amt && !amt.dataset.touched && cls.rate>0) amt.value=cls.rate; // start from the slot's current price — the counter can still change it
  }
  const lbl=document.getElementById('stu-pv-teacher-l');
  if(lbl) lbl.innerHTML=`Teacher <span style="font-weight:400;color:var(--muted)">${cls?tr('page.pvFixedByClass'):'(all branches)'}</span>`;
  updateStuCreditFeeCalc();
}
function resetStuCredit(){
  const pk=document.getElementById('stu-credit-pkg'); if(pk) pk.value='0';
  const amt=document.getElementById('stu-credit-amount'); if(amt){ amt.value=''; delete amt.dataset.touched; }
  const d=document.getElementById('stu-credit-date'); if(d) d.value='';
  const st=document.getElementById('stu-credit-status'); if(st) st.value='Paid';
  const box=document.getElementById('stu-credit-fields'); if(box) box.style.display='none';
  const cb=document.getElementById('stu-credit-regfee'); if(cb) cb.checked=false;
  const row=document.getElementById('stu-credit-regfee-row'); if(row) row.style.display='none';
  const bd=document.getElementById('stu-credit-fee-breakdown'); if(bd) bd.innerHTML='';
  const pvFg=document.getElementById('stu-pv-fields'); if(pvFg) pvFg.style.display='none';
  const amtL=document.getElementById('stu-credit-amount-l'); if(amtL) amtL.textContent='Amount (RM)';
  renderStuPvClassOptions(); // keep the dropdown/teacher list current even while hidden, same as populateSel() does for the other pickers
}
function openAddStudent(){
  selectedClassIds=[];
  populateSel();
  applyStudentFranchiseVisibility();
  document.getElementById('m-student-title').textContent=tr('modal.addStudent');
  document.getElementById('stu-id').value='';
  ['stu-name','stu-parent','stu-phone','stu-email','stu-fee','stu-notes','stu-join','stu-birthday'].forEach(id=>document.getElementById(id).value='');
  { const dw=document.getElementById('stu-name-dupe-warning'); if(dw){ dw.style.display='none'; dw.innerHTML=''; } }
  document.getElementById('stu-grade')&&(document.getElementById('stu-grade').value='1');
  renderStudentGradeInputs({});
  { const rb=document.getElementById('stu-returning'); if(rb) rb.checked=false; }
  const fp=document.getElementById('stu-f-place'); if(fp) fp.value=(session&&session.role==='admin'&&DB.places[0])?String(DB.places[0].id):'';
  { const ts=document.getElementById('stu-tshirt'); if(ts) ts.checked=false; }
  { const ps=document.getElementById('stu-points-sec'); if(ps) ps.style.display='none'; const pi=document.getElementById('stu-points'); if(pi) pi.value=''; }
  resetStuCredit();
  renderClassPickers();
  openM('m-student');
}
function openEditStudent(id){
  const s=DB.students.find(x=>x.id===id);
  selectedClassIds=[...(s.classIds||[])];
  populateSel();
  applyStudentFranchiseVisibility();
  document.getElementById('m-student-title').textContent=tr('modal.editStudent');
  document.getElementById('stu-id').value=s.id;
  document.getElementById('stu-name').value=s.name;
  { const dw=document.getElementById('stu-name-dupe-warning'); if(dw){ dw.style.display='none'; dw.innerHTML=''; } }
  document.getElementById('stu-parent').value=s.parent;
  document.getElementById('stu-phone').value=s.phone;
  document.getElementById('stu-email').value=s.email;
  document.getElementById('stu-fee').value=s.fee;
  document.getElementById('stu-join').value=s.join;
  document.getElementById('stu-grade')&&(document.getElementById('stu-grade').value=String(gradeOf(s)));
  renderStudentGradeInputs(styleGradesOf(s));
  { const rb=document.getElementById('stu-returning'); if(rb) rb.checked=false; }
  document.getElementById('stu-birthday').value=s.birthday||'';
  document.getElementById('stu-notes').value=s.notes;
  { const ts=document.getElementById('stu-tshirt'); if(ts) ts.checked=!!s.tshirtRedeemed; }
  { const ps=document.getElementById('stu-points-sec'); if(ps) ps.style.display='';
    const pi=document.getElementById('stu-points'); if(pi) pi.value='';
    setPointsOp('add');       // start on Add each time the form opens
    renderPointsBox(s.id); }  // fills the "Current balance" line and the breakdown note
  { const fp=document.getElementById('stu-f-place'); if(fp){ const pid=(SC(s)[0]&&SC(s)[0].placeId)||(DB.places[0]&&DB.places[0].id); fp.value=(session&&session.role==='admin')?String(pid||''):''; } }
  resetStuCredit();
  renderClassPickers();
  openM('m-student');
}
// Warns when the name typed into the NEW-student form already belongs to a real student elsewhere —
// e.g. a Tasek counter typing "Shell" for a student who's actually already registered at Adda Height.
// Creating a second record here wouldn't be linked to her existing profile, fees, or attendance, so
// this offers the enrollment tool (openEnrollManager) instead, carrying her name across so there's no
// need to type it a second time. Only fires while adding a NEW student — editing an existing one
// always matches itself by name, so that case is skipped entirely.
function checkDuplicateStudentName(){
  const dw=document.getElementById('stu-name-dupe-warning');
  if(!dw) return;
  const isNew=!document.getElementById('stu-id').value;
  const typed=(document.getElementById('stu-name').value||'').trim().toLowerCase();
  const hits=(isNew&&typed)?DB.students.filter(s=>s.name.trim().toLowerCase()===typed):[];
  if(!hits.length){ dw.style.display='none'; dw.innerHTML=''; return; }
  dw.style.display='block';
  dw.innerHTML=`⚠️ ${tr('msg.dupeStudentName')}<br>`+hits.map(s=>
    `${s.name} · ${studentPlace(s).name} · ID ${studentIdOf(s)} `+
    `<button type="button" class="btn btn-o btn-s" style="margin-left:6px" onclick="closeM('m-student');openEnrollManager(null,'${s.name.replace(/'/g,"\\'")}')">${tr('page.enrollHereInstead')}</button>`
  ).join('<br>');
}
const ALL_STYLES=['Hip-hop','K-pop','Street Jazz','Popping','Kid Dance','Waacking','Dancehall','Choreography'];
// The LIVE studio style list is admin-editable and stored in DB.styles. ALL_STYLES above is only the
// built-in default used to seed a fresh database. Everything that shows dance styles (class modals,
// teacher specialities, student grades) reads styleList() so a change in the admin Styles manager
// flows everywhere at once.
function ensureStyles(){ if(!Array.isArray(DB.styles)||DB.styles.length===0) DB.styles=ALL_STYLES.slice(); return DB.styles; }
function styleList(){ return (Array.isArray(DB.styles)&&DB.styles.length)?DB.styles.slice():ALL_STYLES.slice(); }
// Class difficulty is a simple preset label shown as a coloured badge in class listings.
function diffOf(c){ return (c&&c.difficulty)||'All Levels'; }
function diffTag(c){ const d=diffOf(c);
  const col=d==='Advanced'?'var(--rose)':d==='Intermediate'?'var(--gold)':d==='Beginner'?'var(--success)':d==='Private'?'var(--blue)':'var(--muted)';
  return `<span class="tag" style="background:transparent;border-color:${col};color:${col}">${d}</span>`; }
let selectedTeacherSpecs=[];
function toggleTeacherSpec(style){
  const idx=selectedTeacherSpecs.indexOf(style);
  if(idx===-1) selectedTeacherSpecs.push(style); else selectedTeacherSpecs.splice(idx,1);
  renderTeacherSpecList();
}
function renderTeacherSpecList(){
  const wrap=document.getElementById('tch-spec-list');
  if(!wrap) return;
  wrap.innerHTML=styleList().map(style=>{
    const checked=selectedTeacherSpecs.includes(style);
    return `<label style="display:flex;align-items:center;gap:7px;font-size:13px;padding:6px 7px;border-radius:4px;cursor:pointer;background:${checked?'rgba(255,122,41,.12)':'transparent'}">
      <input type="checkbox" ${checked?'checked':''} onchange="toggleTeacherSpec('${style}')" style="width:auto;accent-color:var(--gold)"/>
      <span>${style}</span>
    </label>`;
  }).join('');
}
function setTeacherPhotoPreview(dataUrl){
  const pv=document.getElementById('tch-photo-preview');
  const hid=document.getElementById('tch-photo');
  hid.value=dataUrl||'';
  if(dataUrl){ pv.style.backgroundImage=`url('${dataUrl}')`; pv.textContent=''; }
  else { pv.style.backgroundImage='none'; pv.textContent=tr('modal.noPhoto'); }
}
function clearTeacherPhoto(){ setTeacherPhotoPreview(''); const f=document.getElementById('tch-photo-file'); if(f) f.value=''; }
async function handleTeacherPhoto(input){
  const file=input.files&&input.files[0];
  input.value=''; // let the same file be re-picked after a failure
  if(!file) return;
  const pv=document.getElementById('tch-photo-preview');
  const prevValue=(document.getElementById('tch-photo')||{}).value||'';
  if(pv){ pv.style.backgroundImage='none'; pv.textContent=tr('msg.uploading'); }
  try{
    // store a sharp photo for the intro-page cards, but still cap it so it stays a quick download —
    // and now it's uploaded to Storage rather than embedded in the database blob (see uploadImageBlob)
    const url=await uploadImageBlob(file,{maxDim:900,quality:0.9,mime:'image/jpeg',ext:'jpg'});
    setTeacherPhotoPreview(url);
  }catch(e){
    setTeacherPhotoPreview(prevValue);
    toast(tr('msg.uploadFailed')+' — '+((e&&e.message)||String(e)),false);
  }
}
function openAddTeacher(){
  selectedTeacherSpecs=[];
  renderTeacherSpecList();
  document.getElementById('m-teacher-title').textContent=tr('modal.addTeacher');
  document.getElementById('tch-id').value='';
  ['tch-name','tch-phone','tch-email','tch-instagram','tch-xiaohongshu','tch-video','tch-quote'].forEach(id=>document.getElementById(id).value='');
  setTeacherPhotoPreview(''); document.getElementById('tch-photo-file').value='';
  document.getElementById('tch-video-uprow').innerHTML=uploadRowHTML('tch-video');
  openM('m-teacher');
}
function openEditTeacher(id){
  const t=DB.teachers.find(x=>x.id===id);
  selectedTeacherSpecs=[...(t.specs||[])];
  renderTeacherSpecList();
  document.getElementById('m-teacher-title').textContent=tr('modal.editTeacher');
  document.getElementById('tch-id').value=t.id;
  document.getElementById('tch-name').value=t.name;
  document.getElementById('tch-phone').value=t.phone;
  document.getElementById('tch-email').value=t.email;
  document.getElementById('tch-status').value=t.status;
  document.getElementById('tch-instagram').value=t.instagram||'';
  document.getElementById('tch-xiaohongshu').value=t.xiaohongshu||'';
  document.getElementById('tch-video').value=t.video||'';
  document.getElementById('tch-quote').value=t.quote||'';
  document.getElementById('tch-photo-file').value='';
  setTeacherPhotoPreview(t.photo||'');
  document.getElementById('tch-video-uprow').innerHTML=uploadRowHTML('tch-video');
  openM('m-teacher');
}
function openTeacherClassEdit(id){
  populateSel();
  const c=DB.classes.find(x=>x.id===id);
  document.getElementById('m-tcls-title').textContent=tr('modal.editMyClass');
  document.getElementById('tcls-id').value=c.id;
  document.getElementById('tcls-name').value=c.name;
  document.getElementById('tcls-style').value=c.style;
  setSelectValueSafe(document.getElementById('tcls-diff'),c.difficulty,'All Levels');
  document.getElementById('tcls-place').value=c.placeId;
  document.getElementById('tcls-day').value=c.day;
  setRoomValue('tcls-room',c.room);
  document.getElementById('tcls-start').value=c.start;
  document.getElementById('tcls-end').value=c.end;
  document.getElementById('tcls-max').value=c.max;
  { const _r=document.getElementById('tcls-rate'); if(_r) _r.value=c.rate||''; }
  toggleTclsRateField();
  openM('m-teacher-class');
}
function openAddTeacherClass(){
  populateSel();
  document.getElementById('m-tcls-title').textContent=tr('modal.addNewClass');
  document.getElementById('tcls-id').value='';
  document.getElementById('tcls-name').value='';
  document.getElementById('tcls-style').value=styleList()[0];
  document.getElementById('tcls-diff').value='All Levels';
  document.getElementById('tcls-diff').dataset.origRaw=''; document.getElementById('tcls-diff').dataset.touched=''; // brand-new class — no stored value to protect
  document.getElementById('tcls-place').value=DB.places[0].id;
  document.getElementById('tcls-day').value='Monday';
  setRoomValue('tcls-room','Big Room');
  document.getElementById('tcls-start').value='09:00';
  document.getElementById('tcls-end').value='10:00';
  document.getElementById('tcls-max').value='15';
  { const _r=document.getElementById('tcls-rate'); if(_r) _r.value=''; }
  toggleTclsRateField();
  openM('m-teacher-class');
}
function openStudentProfileEdit(){
  // students may no longer edit their own profile details (name/age/parent/phone/email) — password only
  if(session&&session.role==='student'){ toast(tr('msg.profileLocked'),false); return; }
  const s=DB.students.find(x=>x.id===session.ref);
  if(!s)return;
  document.getElementById('sprof-id').value=s.id;
  document.getElementById('sprof-name').value=s.name;
  document.getElementById('sprof-birthday').value=s.birthday||'';
  document.getElementById('sprof-parent').value=s.parent;
  document.getElementById('sprof-phone').value=s.phone;
  document.getElementById('sprof-email').value=s.email;
  openM('m-student-profile');
}

// ══════════ MY ACCOUNT (any role) ══════════
function openMyAccount(){
  const acc=DB.accounts.find(a=>a.user===session.user);
  if(!acc)return;
  document.getElementById('acc-name').value=acc.name;
  document.getElementById('acc-user').value=acc.user;
  document.getElementById('acc-role-display').value=acc.role.charAt(0).toUpperCase()+acc.role.slice(1);
  document.getElementById('acc-pass').value='';
  const isCounter=acc.role==='counter'; // counter login is admin-managed (name only)
  const isStudent=acc.role==='student'; // student may change PASSWORD only — not name/username
  const nn=document.getElementById('acc-name'), uu=document.getElementById('acc-user'), pp=document.getElementById('acc-pass');
  nn.disabled=isStudent;                 uu.disabled=isCounter||isStudent;      pp.disabled=isCounter;
  nn.style.opacity=isStudent?'.6':'';    uu.style.opacity=(isCounter||isStudent)?'.6':''; pp.style.opacity=isCounter?'.6':'';
  pp.placeholder=isCounter?tr('page.adminManaged'):'••••••••';
  const note=document.getElementById('acc-firstlogin-note');
  const stillDefault=!acc.pwChanged&&['student','teacher'].includes(acc.role);
  note.style.display=stillDefault?'block':'none';
  if(stillDefault) note.textContent=tr('page.firstLoginNote');
  openM('m-account');
}
function saveMyAccount(){
  const acc=DB.accounts.find(a=>a.user===session.user);
  if(!acc)return;
  const newName=document.getElementById('acc-name').value.trim();
  const newUser=document.getElementById('acc-user').value.trim();
  const newPass=document.getElementById('acc-pass').value;
  if(!newName||!newUser){toast(tr('msg.nameUserEmpty'),false);return;}
  const isCounter=acc.role==='counter', isStudent=acc.role==='student';
  if(!isCounter&&!isStudent){ // only these roles may change their username/display name
    if(newUser!==acc.user&&DB.accounts.find(a=>a.user===newUser)){toast(tr('msg.userTaken'),false);return;}
    acc.user=newUser;
    acc.name=newName;
  }
  // password: everyone except counter may change it; record the date so admin can see when it changed
  if(!isCounter&&newPass){
    if(newPass===acc.pass){ toast(tr('msg.passwordSameAsBefore'),false); return; }
    acc.pass=newPass; acc.pwChanged=toLocalISODate(new Date());
  }
  session=acc;
  document.getElementById('u-name').textContent=acc.name;
  document.getElementById('u-avatar').textContent=ini(acc.name);
  closeM('m-account');
  toast(tr('msg.accountUpdated'));
  if(currentPageId) showPage(currentPageId);
}

// ══════════ PUBLIC STUDIO SITE ══════════
function showLoginFromSite(){
  document.getElementById('site-screen').style.display='none';
  document.getElementById('login-screen').style.display='flex';
}
// "Find a Studio Near You" — instead of scrolling down, shows a picker so each branch can send
// visitors somewhere different (a WhatsApp chat, a Maps pin, a branch-specific booking link…).
// A branch with no link set falls back to a Google Maps search on its saved address.
function openBranchLinksModal(title){
  document.getElementById('m-branch-links-title').textContent='🏢 '+(title||IV('findBtn')||tr('site.findStudio'));
  const body=document.getElementById('m-branch-links-body');
  body.innerHTML=(DB.places||[]).map(pl=>{
    const link=normalizeSocialLink(pl.introLink||'','link')||('https://www.google.com/maps/search/'+encodeURIComponent(placeAddress(pl)));
    return `<button class="btn btn-o" style="justify-content:space-between;display:flex;align-items:center;width:100%" onclick="window.open('${link.replace(/'/g,"\\'")}','_blank','noopener');closeM('m-branch-links')"><span>🏢 ${H(pl.name)}</span><span style="color:var(--muted)">→</span></button>`;
  }).join('')||`<div class="empty">—</div>`;
  openM('m-branch-links');
}
function backToSite(){
  document.getElementById('login-screen').style.display='none';
  document.getElementById('branch-screen').style.display='none';
  document.getElementById('cred-screen').style.display='none';
  showBusy(tr('msg.busyLoading'),true);
  const ssEl=document.getElementById('site-screen');
  if(ssEl) ssEl.classList.remove('hero-ready');
  renderSiteScreen(); // always re-render in the current language
  document.getElementById('site-screen').style.display='block';
  hideBusy();
}
// Fallback text if a branch (old data from before this field existed) has no address saved yet.
const DEFAULT_PLACE_ADDRESS={1:'Adda Height, Kajang, Selangor',2:'Horizon Square, Johor Bahru, Johor',3:'Tasek, Ipoh, Perak',4:'Kulai, Johor'};
function placeAddress(pl){ return (pl&&pl.address&&String(pl.address).trim())?String(pl.address).trim():(DEFAULT_PLACE_ADDRESS[pl&&pl.id]||(pl&&pl.name+', Malaysia')||''); }
function ensureIntro(){
  if(!DB.intro||typeof DB.intro!=='object') DB.intro={};
  if(!DB.intro.footer||typeof DB.intro.footer!=='object') DB.intro.footer={};
}
// Escape anything admin-typed before it goes near innerHTML.
function H(v){ return String(v==null?'':v).replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;').replace(/'/g,'&#39;'); }
// Admin override for a piece of intro-page copy — '' means "fall back to the built-in EN / 中文 text".
function IV(key){ ensureIntro(); const v=DB.intro[key]; return (v!=null&&String(v).trim()!=='')?String(v).trim():''; }
// Admin override for a footer field.
function FV(key){ ensureIntro(); const v=DB.intro.footer[key]; return (v!=null&&String(v).trim()!=='')?String(v).trim():''; }
// A heading the admin typed across two lines renders as two lines.
function multiline(v){ return H(v).replace(/\r?\n/g,'<br/>'); }
// tel: / wa.me / mailto: need the raw digits, not the pretty spacing the admin types.
function digitsOnly(v){ return String(v||'').replace(/[^\d+]/g,'').replace(/(?!^)\+/g,''); }
function waLink(v){ const d=digitsOnly(v).replace(/^\+/,''); return d?('https://wa.me/'+d):''; }
function footerDefaults(){
  return { tagline:'', address:'', hours:'', phone:'', email:'', whatsapp:'',
    instagram:'', facebook:'', tiktok:'', xiaohongshu:'', youtube:'',
    copyright:'© 2026 B Dance Studio · Adda Height · Horizon Square · Tasek · Kulai' };
}
function videoEmbedHTML(url){
  url=(url||'').trim();
  if(!url) return '';
  if(/^data:video\//i.test(url)) return `<video controls playsinline preload="metadata" src="${url}"></video>`;
  let m;
  if((m=url.match(/(?:youtube\.com\/(?:watch\?v=|embed\/)|youtu\.be\/)([\w-]{6,})/))) return `<iframe src="https://www.youtube.com/embed/${m[1]}" allow="accelerometer;autoplay;clipboard-write;encrypted-media;gyroscope;picture-in-picture" allowfullscreen></iframe>`;
  if((m=url.match(/vimeo\.com\/(?:video\/)?(\d+)/))) return `<iframe src="https://player.vimeo.com/video/${m[1]}" allow="autoplay;fullscreen;picture-in-picture" allowfullscreen></iframe>`;
  if((m=url.match(/instagram\.com\/(reels?|p|tv)\/([A-Za-z0-9_-]+)/i))){
    let type=m[1].toLowerCase(); if(type==='reels') type='reel';
    // wrapped so .ig-crop can slide Instagram's own header / footer bars out of view
    return `<div class="ig-crop"><iframe class="ig-frame" src="https://www.instagram.com/${type}/${m[2]}/embed" allowtransparency="true" allowfullscreen scrolling="no" frameborder="0"></iframe></div>`;
  }
  if(/\.(mp4|webm|ogg|mov|m4v)(\?.*)?$/i.test(url)) return `<video controls playsinline preload="metadata" src="${url}"></video>`;
  return `<iframe src="${url}" allowfullscreen></iframe>`;
}
// Takes the Instagram reel link already in the field, asks db.js to copy the real .mp4 into Supabase
// via the Graph API, and replaces the field with the permanent Supabase URL. Only works for reels on
// the studio's OWN Instagram account — that's a hard limit of the Graph API, not of this code.
async function importFromInstagram(fieldId){
  const fld=document.getElementById(fieldId); if(!fld) return;
  const url=(fld.value||'').trim();
  const st=document.getElementById(fieldId+'-up');
  const say=(t,cls)=>{ if(st){ st.textContent=t||''; st.className='upl-status'+(cls?' '+cls:''); } };
  if(!/instagram\.com\/(reels?|p|tv)\//i.test(url)){ say(tr('msg.igNeedLink'),'err'); toast(tr('msg.igNeedLink'),false); return; }
  say(tr('msg.igImporting'));
  try{
    // plain fetch, not fetchWithTimeout: downloading + re-uploading a reel legitimately outruns the
    // 10s cloud timeout, and aborting it would read as a failure when it was merely a big file
    const r=await withBusy(tr('msg.igImporting'),()=>fetch(CLOUD_URL,{method:'POST',headers:{'Content-Type':'application/json'},
      body:JSON.stringify({action:'ig-import',url})}));
    let j={}; try{ j=await r.json(); }catch(e){}
    if(!r.ok||j.error) throw new Error(j.error||('HTTP '+r.status));
    if(!j.publicUrl) throw new Error('No file came back');
    fld.value=j.publicUrl;
    await autoSaveUploadedMedia(fieldId,j.publicUrl);
    say(tr('msg.uploadDone'),'ok');
    toast(tr('msg.uploadDone'));
  }catch(e){
    const m=(e&&e.message)||String(e);
    say(m,'err');
    toast(tr('msg.igFailed')+' \u2014 '+m,false);
  }
}
// ── Monthly bonus class ─────────────────────────────────────────────────────────────────────
// Everything below is DERIVED from payments + attendance. Nothing is stored on the student, so the
// entitlement can never disagree with the bills, and clearing the attendance returns the bonus.
const BONUS_ENABLED=false;
const BONUS_VALID_DAYS=30;      // a bonus lapses 30 days after the fee was paid
const REPLACE_WINDOW_DAYS=28;   // 配套一/二 are '28天内使用完', so a missed class must be made up within 28 days
const CANCEL_GRACE_DAYS=7;      // the studio cancelled that day's class, so the student gets a week longer
// The makeup deadline is shared across a whole 4-class billing cycle, not reset per absence. Each cycle
// is anchored to the date of its FIRST class record (present or absent) — the deadline is that anchor
// date + 28 days. So a 2nd absence in the same cycle does NOT get a fresh 28 days; it shares whatever
// time is left until the cycle's original deadline. If the studio cancelled any class within that same
// cycle, the whole cycle's deadline is extended by an extra week.
function addDaysISO(iso,days){ const d=new Date(iso+'T00:00:00'); d.setDate(d.getDate()+days); return toLocalISODate(d); }
function daysBetweenISO(a,b){ return Math.round((new Date(b+'T00:00:00')-new Date(a+'T00:00:00'))/86400000); }
// Groups one student's attendance history for one class into billing cycles (every 4 counted attendances
// = 1 cycle, same boundary the fee-billing logic uses). Absences/cancellations don't advance the cycle,
// but they DO stay inside whichever cycle is currently open — so the cycle's anchor is simply the date of
// the earliest record since the previous cycle closed.
function classCyclesFor(studentId,classId){
  const recs=(DB.attendance||[]).filter(a=>a.studentId===studentId&&a.classId===classId&&a.date)
    .sort((a,b)=>a.date.localeCompare(b.date)||(a.id-b.id));
  const cycles=[];
  let cur=null;
  recs.forEach(a=>{
    if(!cur){ cur={anchor:a.date,records:[],countedTotal:0,cancelled:false}; cycles.push(cur); }
    cur.records.push(a);
    if(a.status==='cancelled') cur.cancelled=true;
    if(counted(a)) cur.countedTotal+=attWeight(a);
    if(cur.countedTotal>=4-1e-9) cur=null; // cycle complete — the next record starts a brand-new cycle
  });
  return cycles;
}
function cycleForDate(studentId,classId,dateISO){
  return classCyclesFor(studentId,classId).find(c=>c.records.some(r=>r.date===dateISO))||null;
}
function cycleDeadline(cycle){
  if(!cycle) return null;
  return addDaysISO(cycle.anchor,REPLACE_WINDOW_DAYS+(cycle.cancelled?CANCEL_GRACE_DAYS:0));
}
// One grant per BILLED MONTH the student has actually paid — however many classes that month covered,
// hence the earliest payment date per month rather than one grant per payment row. Each grant runs for
// 30 days from that payment date, so a mid-month payer isn't short-changed by a calendar boundary.
function bonusGrants(st){
  if(!st) return [];
  const byMonth={};
  // Registration is a grant in its own right: the student has their first bonus the moment the counter
  // saves them, before any fee is collected. Keyed on the JOIN MONTH and dated from the join date, so
  // when that same month's fee is paid later it merges into this one grant instead of making a second —
  // the first month never yields two bonuses, and the 30 days run from the day they walked in.
  if(st.join&&/^\d{4}-\d{2}-\d{2}$/.test(st.join)){
    const jm=monthNameFromDate(st.join);
    if(MONTHS_EN.includes(jm)) byMonth[jm]=st.join;
  }
  DB.payments.filter(p=>p.studentId===st.id&&p.status==='Paid'&&p.classId&&p.date&&MONTHS_EN.includes(p.month||''))
    .forEach(p=>{ if(!byMonth[p.month]||p.date<byMonth[p.month]) byMonth[p.month]=p.date; });
  return Object.keys(byMonth)
    .map(m=>({month:m,paidDate:byMonth[m],expires:addDaysISO(byMonth[m],BONUS_VALID_DAYS)}))
    .sort((a,b)=>a.expires<b.expires?-1:1);
}
// Matched on the month RECORDED when it was spent — not on the month the class fell in. A window can
// straddle a month boundary (pay 25 Jul, attend 3 Aug), so the date alone can't say which grant went.
function bonusUsedFor(st,month){ return (DB.attendance||[]).filter(a=>a.studentId===st.id&&a.bonus&&a.bonusMonth===month).length; }
// The grant that would be spent on this date: unused, and the date sits inside its window.
// bonusGrants() is sorted soonest-expiring first, so we always burn the one about to lapse.
function activeBonusGrant(st,onISO){
  if(!BONUS_ENABLED) return null;
  if(!st||!onISO) return null;
  // Credit-only students are excluded from the bonus, and bonusEligibility() has always said so. But
  // it used to be moot here: with no monthly-fee rows they had no grants at all. The join grant changed
  // that, so the exclusion has to live at the source or every read-only display would promise a bonus
  // the counter is then refused when they try to spend it.
  if(isCreditOnlyStudent(st)) return null;
  return bonusGrants(st).find(g=>bonusUsedFor(st,g.month)<1&&onISO>=g.paidDate&&onISO<=g.expires)||null;
}
// An absence still owed a replacement is simply one with NO remark on it yet.
//
// The remark IS the replacement record: the counter writes it once the make-up has actually been done
// ("did replacement in Ms Pam's class"), which settles that specific absence. So the moment a remark
// is saved, this count drops by one and the student sees it. Explicit and per-absence — no pairing,
// no inference.
const isReplaced=a=>!!(a.remark&&a.remark.trim());
function openReplacements(st,onISO){
  if(!st||!onISO) return [];
  return (DB.attendance||[])
    .filter(a=>a.studentId===st.id&&a.status==='absent'&&a.date&&!isReplaced(a))
    .map(a=>{
      // Private-class absences are one-off bookings, not part of a monthly 4-class billing cycle,
      // so the usual 28-day makeup window doesn't apply — they stay owed indefinitely until replaced.
      const noExpiry=C(a.classId)?.difficulty==='Private';
      return {absent:a.date,classId:a.classId,noExpiry,expires:noExpiry?null:cycleDeadline(cycleForDate(st.id,a.classId,a.date))};
    })
    .filter(x=>x.noExpiry||(x.expires&&x.expires>=onISO))         // already lapsed — not a live entitlement
    .sort((a,b)=>(a.expires||'9999-99-99').localeCompare(b.expires||'9999-99-99'));
}
// Absences still inside their cycle's shared replacement window on this date. Used to WARN, never to block.
function replaceableAbsences(st,onISO){
  if(!st||!onISO) return [];
  return (DB.attendance||[]).filter(a=>{
    if(a.studentId!==st.id||a.status!=='absent'||!a.date||a.date>onISO||isReplaced(a)) return false;
    if(C(a.classId)?.difficulty==='Private') return true;   // never lapses — see openReplacements()
    const deadline=cycleDeadline(cycleForDate(st.id,a.classId,a.date));
    return deadline&&onISO<=deadline;
  });
}
// Returns WHY it isn't allowed, not just a boolean — the counter needs to be able to explain it to
// the student standing in front of them.
function bonusEligibility(st,classId,dateISO){
  if(!BONUS_ENABLED) return {ok:false,msg:''};
  if(!st) return {ok:false,msg:''};
  if(isCreditOnlyStudent(st)) return {ok:false,msg:tr('msg.bonusCreditOnly')};
  const cls=C(classId); if(!cls) return {ok:false,msg:''};
  if((st.classIds||[]).includes(classId)) return {ok:false,msg:tr('msg.bonusOwnClass')};
  const g=activeBonusGrant(st,dateISO);
  if(g) return {ok:true,left:1,grant:g,expires:g.expires};
  // Not eligible — say WHY, so the counter can explain it to the student in front of them.
  const grants=bonusGrants(st);
  if(!grants.length) return {ok:false,msg:tr('msg.bonusNotPaid').replace('{m}',monthNameFromDate(dateISO))};
  const unused=grants.filter(x=>bonusUsedFor(st,x.month)<1);
  if(!unused.length) return {ok:false,msg:tr('msg.bonusUsedUp').replace('{m}',grants[grants.length-1].month)};
  // Every student has a join date, so there is ALWAYS at least one grant — which means "no grants" can
  // no longer be what tells us the fee is unpaid. Ask the payments directly instead, or a student who
  // never paid and let their join bonus lapse would be told "expired" when the real reason is the bill.
  const everPaid=DB.payments.some(p=>p.studentId===st.id&&p.status==='Paid'&&p.classId&&MONTHS_EN.includes(p.month||''));
  if(!everPaid) return {ok:false,msg:tr('msg.bonusNotPaid').replace('{m}',monthNameFromDate(dateISO))};
  return {ok:false,msg:tr('msg.bonusExpired')};   // earned, never spent, window closed
}
// Free for the student: no payment row is created. The teacher is paid via a virtual salary row
// built from this attendance record in renderTeacherSalary() — same trick as "Use Credit".
async function addBonusDropin(sid){
  const st=DB.students.find(x=>x.id===sid); if(!st||!attClassId) return;
  const el=bonusEligibility(st,attClassId,attDate);
  if(!el.ok){ if(el.msg) toast(el.msg,false); return; }
  // stamp the grant's month onto the row: the window can straddle months, so the date alone would
  // not tell us later which bonus this consumed
  const bm=el.grant.month;
  let rec=DB.attendance.find(a=>a.classId===attClassId&&a.date===attDate&&a.studentId===sid&&!a.extra);
  if(rec){ rec.status='present'; rec.single=true; rec.bonus=true; rec.bonusMonth=bm; }
  else{
    const aid=await claimAttendanceId();
    if(aid==null) return;
    DB.attendance.push({id:aid,classId:attClassId,date:attDate,studentId:sid,status:'present',single:true,bonus:true,bonusMonth:bm});
  }
  if(!await commitSave()) return;
  const cls=C(attClassId);
  toast(tr('msg.bonusUsed').replace('{t}',T(cls.teacherId).name).replace('{n}',fmt(SALARY_PER_SINGLE)));
  renderDropinList(); renderAttendance();
}
// A student's ID is their auto-created 6-digit login id (accounts.user), not DB.students.id.
// Every student-facing list must use this one helper — showing the internal id anywhere would put
// the same student under two different "IDs" and confuse the counter.
// Both balances at a glance for the front desk, from the SAME two helpers the student's own Fees page
// reads — so the number the counter quotes can never disagree with the number the student is looking
// at on their phone. Rendered only when non-zero, like the 🎟️ credits tag beside them; the expiry
// date rides along in the tooltip, since that is the thing the counter actually gets asked.
function balanceTagsFor(s){
  const today=toLocalISODate(new Date());
  const g=activeBonusGrant(s,today);
  const reps=openReplacements(s,today);
  let out='';
  if(g) out+=` <span class="tag" title="${tr('page.bonusExpires').replace('{d}',g.expires)}">🎁 1</span>`;
  if(reps.length) out+=` <span class="tag" title="${reps[0].noExpiry?tr('page.replaceNoExpiry'):tr('page.replaceExpires').replace('{d}',reps[0].expires)}">🔁 ${reps.length}</span>`;
  return out;
}
function studentIdOf(s){
  if(!s) return '\u2014';
  const acc=DB.accounts.find(a=>a.role==='student'&&a.ref===s.id);
  return acc?acc.user:'\u2014';   // em-dash: login was deliberately deleted, or not created yet
}
// ── Filterable <select> ────────────────────────────────────────────────────────────────────
// A native <select> cannot be filtered with CSS: iOS Safari renders the dropdown through the OS and
// ignores display:none / hidden on an <option>, so the "hidden" entries still appear in the picker.
// Rebuilding the list from a cached full copy is the only thing that works on the iPad this runs on.
const selectFullList = {};                   // select id -> [{value,label}] of every option
// Call right after anything rewrites a select's options, or the filter will restore a stale list.
function cacheSelectOptions(selectId){
  const sel=document.getElementById(selectId); if(!sel) return;
  selectFullList[selectId]=[...sel.options].map(o=>({value:o.value,label:o.textContent}));
  const f=document.getElementById(selectId+'-f');
  if(f&&f.value) filterSelect(f,selectId);   // a filter was already typed — keep it applied
}
function filterSelect(inputEl,selectId){
  const sel=document.getElementById(selectId); if(!sel) return;
  const all=selectFullList[selectId]||[];
  const q=(inputEl.value||'').trim().toLowerCase();
  const keep=q?all.filter(o=>o.label.toLowerCase().includes(q)):all;
  const prev=sel.value;
  sel.innerHTML=keep.map(o=>`<option value="${H(o.value)}">${H(o.label)}</option>`).join('');
  inputEl.classList.toggle('selfilter-none',q&&!keep.length);   // red border = nothing matched
  if(keep.some(o=>o.value===prev)){ sel.value=prev; return; }   // their pick survived — leave it be
  // their pick was filtered out: fall to the first match and let dependent fields catch up
  if(keep.length){ sel.selectedIndex=0; sel.dispatchEvent(new Event('change')); }
}
// Stale filter text from a previous visit would silently hide most of the list on reopen.
function resetSelectFilters(){
  ['pay-student','pay-class','pay-credit-student'].forEach(id=>{
    const f=document.getElementById(id+'-f');
    if(f){ f.value=''; f.classList.remove('selfilter-none'); }
  });
}
// Reference-counted so overlapping operations can't hide the overlay out from under each other,
// and delayed by 250ms so a fast save never flashes a modal at the user — only real waits show.
// (the very first boot passes immediate=true instead — see below)
let busyDepth=0, busyTimer=null, busyShownAt=-1, busyHideTimer=null;
const BUSY_MIN_VISIBLE_MS=400; // long enough for the overlay's own .28s fade-in to finish before it's
// ever allowed to hide, so hiding it can never interrupt/reverse that fade mid-flight — and long
// enough that a very fast load (e.g. served from cache) doesn't just flicker the spinner for an
// imperceptible instant instead of actually being visible.
// ══════════ ERROR SURFACING ══════════
// An iPad has no console. When a click handler throws, the button simply does nothing and the only
// report anyone can make is "it stopped working" — which is unfixable, because the one fact that
// would identify the bug is the one fact nobody can see. So surface it: any uncaught error or
// rejected promise becomes a toast, and the last few are kept for the Database page to list.
var lastErrors=[];
function noteError(kind,msg,where){
  var e={t:new Date().toTimeString().slice(0,8),kind:kind,msg:String(msg||'unknown'),where:where||''};
  lastErrors.push(e); if(lastErrors.length>20) lastErrors.shift();
  try{ toast('\u26A0\uFE0F '+e.msg+(e.where?' ('+e.where+')':''),false); }catch(x){}
}
window.addEventListener('error',function(ev){
  noteError('Error',ev.message,(String(ev.filename||'').split('/').pop())+(ev.lineno?':'+ev.lineno:''));
});
window.addEventListener('unhandledrejection',function(ev){
  var r=ev.reason; noteError('Promise',(r&&r.message)||r);
});

function showBusy(msg,immediate){
  busyDepth++;
  const m=document.getElementById('busy-msg'); if(m) m.textContent=msg||'';
  if(busyHideTimer){ clearTimeout(busyHideTimer); busyHideTimer=null; } // new work arrived before a pending hide fired — cancel it, the overlay is still needed
  if(busyDepth>1||busyTimer) return;           // already showing, or already counting down
  const reveal=()=>{
    busyTimer=null;
    const ov=document.getElementById('busy-ov'); if(!ov) return;
    const img=document.getElementById('busy-logo'), src=document.querySelector('.tlogo img');
    if(img&&src&&!img.getAttribute('src')) img.src=src.src;   // borrow the logo already in the page
    ov.classList.add('on');
    busyShownAt=Date.now();
  };
  if(immediate) reveal(); else busyTimer=setTimeout(reveal,250);
}
function hideBusy(){
  busyDepth=Math.max(0,busyDepth-1);
  if(busyDepth>0) return;                      // something else is still working
  if(busyTimer){ clearTimeout(busyTimer); busyTimer=null; busyShownAt=-1; return; } // it never actually became visible — nothing to fade out or wait for
  const doHide=()=>{
    busyHideTimer=null;
    const ov=document.getElementById('busy-ov'); if(ov) ov.classList.remove('on');
    busyShownAt=-1;
    onBusyHidden();
  };
  const elapsed=busyShownAt>=0?Date.now()-busyShownAt:BUSY_MIN_VISIBLE_MS;
  const remain=BUSY_MIN_VISIBLE_MS-elapsed;
  if(remain>0) busyHideTimer=setTimeout(doHide,remain); else doHide();
}
// The landing page's hero entrance (count, heading, lead, buttons, reel) used to run on a fixed delay
// from page parse — independent of the loading overlay's own lifecycle. On a slow connection the whole
// sequence played out and finished while still hidden behind the opaque overlay, so by the time it
// cleared the hero was already static — the entrance was never actually seen. It's gated behind the
// .hero-ready class in CSS now, and this is the one place that adds it: the instant the loading
// overlay is confirmed gone, not a moment before, so the reveal is guaranteed to happen where the
// visitor can actually watch it. Only meaningful the first time (added once per session) and only
// while the landing page is what's actually showing.
function onBusyHidden(){
  const ss=document.getElementById('site-screen');
  if(ss&&ss.style.display!=='none'&&!ss.classList.contains('hero-ready')){
    ss.classList.add('hero-ready');
    animateHeroStats();
  }
  setupHeroReplay();
}
// The hero's entrance used to be genuinely one-shot: .hero-ready only ever got added once (page
// load / sign-out), so scrolling away and back — e.g. down to Locations, then back up to the top —
// showed a hero that had already finished its animation, sitting static. This watches the hero the
// same way every other section on the page already watches itself (see __siteObserver below):
// leaving the viewport clears .hero-ready so every gated element (count, heading, lead, buttons,
// reel, stats) drops back to its pre-animation state, and returning to view re-adds it, which
// restarts the CSS keyframes and re-runs the stat count-up from 0. Same threshold/rootMargin as
// __siteObserver, so it triggers at the same "moment" a visitor would expect any other section to.
let __heroObserver=null;
function setupHeroReplay(){
  if(__heroObserver||!('IntersectionObserver' in window)) return;
  const hero=document.querySelector('.site-hero');
  if(!hero) return;
  __heroObserver=new IntersectionObserver(entries=>{
    entries.forEach(entry=>{
      const ss=document.getElementById('site-screen');
      if(!ss||ss.style.display==='none') return;
      if(entry.isIntersecting){
        if(!ss.classList.contains('hero-ready')){
          ss.classList.add('hero-ready');
          animateHeroStats();
        }
      } else {
        ss.classList.remove('hero-ready');
      }
    });
  },{threshold:0,rootMargin:'0px 0px -12% 0px'});
  __heroObserver.observe(hero);
}
// Counts each hero stat up from 0 as its card pops in (CSS lands the card, this fills in the
// number), staggered to follow the same nth-child delays as the .site-stats-inline entrance above.
// anime.js is already loaded for the scroll-triggered reveals further down the page, so this reuses
// it rather than hand-rolling another rAF loop.
function animateHeroStats(){
  if(window.matchMedia && matchMedia('(prefers-reduced-motion: reduce)').matches) return;
  const els=document.querySelectorAll('.site-stats-inline b');
  els.forEach((el,i)=>{
    const target=parseInt((el.textContent||'').replace(/\D/g,''),10);
    if(!isFinite(target)||target<=0) return;
    const obj={v:0};
    if(window.anime){
      anime.remove(obj);
      anime({targets:obj,v:target,duration:900,delay:900+i*80,easing:'easeOutQuart',round:1,
             update:()=>{ el.textContent=obj.v; }});
    }
  });
}
// finally{} matters: an exception must never strand the overlay on screen with the app unusable.
async function withBusy(msg,fn){ showBusy(msg); try{ return await fn(); } finally{ hideBusy(); } }
// The loading mark: a continuous spin (360° loops seamlessly back to 0°, so the reset is invisible)
// plus a slow gold-to-rose glow behind the logo. anime.js v3 (loaded here) has no built-in support for
// animating CSS custom properties — that's a v4-only feature — so the glow's colour is interpolated by
// hand and pushed onto --busy-glow every frame via the update callback, the same pattern already used
// for the stat counters on the public site.
if(window.anime&&!(window.matchMedia&&window.matchMedia('(prefers-reduced-motion: reduce)').matches)){
  anime({targets:'.busy-mark img',rotate:'360deg',duration:1700,loop:true,easing:'linear'});
  (function(){
    const from=[255,166,53], to=[255,77,46]; // warm gold -> rose
    const mark=document.querySelector('.busy-mark'), state={t:0};
    anime({targets:state,t:1,duration:1500,direction:'alternate',loop:true,easing:'easeInOutSine',
      update:()=>{
        if(!mark) return;
        const r=Math.round(from[0]+(to[0]-from[0])*state.t);
        const g=Math.round(from[1]+(to[1]-from[1])*state.t);
        const b=Math.round(from[2]+(to[2]-from[2])*state.t);
        mark.style.setProperty('--busy-glow',`rgb(${r},${g},${b})`);
      }});
  })();
}
// Cursor-trail dots inside the loading overlay: writes are cheap (a transform per dot) and only
// happen while the overlay is actually on screen, so this can stay attached for the page's whole
// lifetime rather than being wired up on every showBusy()/hideBusy() call.
if(!(window.matchMedia&&window.matchMedia('(prefers-reduced-motion: reduce)').matches)){
  const trailDots=document.querySelectorAll('.busy-trail i');
  if(trailDots.length){
    document.addEventListener('pointermove',e=>{
      const ov=document.getElementById('busy-ov');
      if(!ov||!ov.classList.contains('on')) return;
      const t=`translate(${e.clientX}px,${e.clientY}px)`;
      trailDots.forEach(d=>{ d.style.transform=t; });
    },{passive:true});
  }
}
// Stops a double-tap / rapid double-click on a Save button from running the same async save twice
// (which would otherwise push two records — the guard flag is set synchronously, before the handler's
// first await, so even a near-instant second click is rejected deterministically). Key it per action
// (e.g. 'payment', 'class', 'student') so unrelated saves never block each other.
const _saveGuards=new Set();
async function guardedOnce(key,fn){
  if(_saveGuards.has(key)) return;      // a save with this key is already running — ignore this click
  _saveGuards.add(key);
  // The JS-level guard above already stops a second click on the SAME button from double-saving —
  // that part always worked. What it can't stop is the counter, seeing no feedback on a slow
  // connection (a single health-check retry in requireConnection() alone can take up to 16s),
  // concluding the button is broken, and closing + reopening the form to try again — a genuinely
  // fresh submission this guard has no way to see, which is how "saves twice" actually happens.
  // Visually disabling the real button (not just no-op'ing the click) is what closes that gap.
  const btn=(window.event&&window.event.currentTarget&&window.event.currentTarget.tagName==='BUTTON')?window.event.currentTarget:null;
  const priorLabel=btn?btn.textContent:null;
  if(btn){ btn.disabled=true; btn.textContent=tr('msg.busySaving'); }
  try{ return await fn(); }
  finally{
    _saveGuards.delete(key);
    if(btn){ btn.disabled=false; btn.textContent=priorLabel; }
  }
}
// Sizes a video wrapper to the video's REAL shape, once the browser has read its metadata.
// Only applies to native <video> (our uploads) — an Instagram/YouTube iframe can't be measured from
// out here, so those keep whatever aspect the caller chose.
function fitToNativeVideo(wrap,portraitMax,landscapeMax){
  if(!wrap) return;
  const v=wrap.querySelector('video'); if(!v) return;
  const apply=()=>{
    if(!v.videoWidth||!v.videoHeight) return;
    wrap.classList.add('fitted');
    wrap.style.aspectRatio=v.videoWidth+' / '+v.videoHeight;
    if(portraitMax!==undefined) wrap.style.maxWidth=(v.videoHeight>v.videoWidth)?portraitMax:landscapeMax;
  };
  if(v.readyState>=1) apply(); else v.addEventListener('loadedmetadata',apply,{once:true});
}
// Returns the storage path if this URL is one of OUR uploads, else '' — a YouTube, Vimeo or
// Instagram link has no path here and must never be touched by the cleanup below.
function ourStoragePath(url){
  const m=String(url||'').match(/\/storage\/v1\/object\/public\/media\/([^?#\s]+)/);
  return m?decodeURIComponent(m[1]):'';
}
// Is this uploaded file still pointed at by anything else? Two fields can legitimately hold the same
// URL (someone copy-pastes it between teachers), and deleting it out from under the other one would
// silently break their card. Err on the side of keeping the file.
function mediaStillUsed(url){
  if(!url) return true;
  const hit=v=>String(v||'').trim()===url;
  if(DB.intro&&(hit(DB.intro.videoUrl)||hit(DB.intro.reelUrl)||hit(DB.intro.heroImage))) return true;
  if(DB.intro&&(DB.intro.events||[]).some(ev=>hit(ev.poster))) return true;
  if(DB.intro&&(DB.intro.shops||[]).some(sh=>hit(sh.photo))) return true;
  if((DB.places||[]).some(pl=>hit(pl.qrImage))) return true;
  return (DB.teachers||[]).some(t=>hit(t.video)||hit(t.photo));
}
// Resizes/compresses an image file on a canvas (same as before), then uploads the RESULT to Supabase
// Storage through the same sign-upload pipeline video already uses (see uploadMediaFile) instead of
// keeping it as an inline base64 string — that's what let a handful of restored teacher photos blow
// the whole shared database past Vercel's 4.5MB request/response cap and take the site down. Returns
// the public URL once the upload is confirmed; throws with a human-readable message on failure so the
// caller can revert its preview and tell the person the upload didn't go through — unlike a canvas
// resize, this now involves the network and can genuinely fail.
async function uploadImageBlob(file,{maxDim,quality=0.9,mime='image/jpeg',ext='jpg',square=false}={}){
  const dataUrl=await new Promise((resolve,reject)=>{
    const reader=new FileReader();
    reader.onload=e=>resolve(e.target.result);
    reader.onerror=()=>reject(new Error('Could not read that file'));
    reader.readAsDataURL(file);
  });
  const img=await new Promise((resolve,reject)=>{
    const im=new Image();
    im.onload=()=>resolve(im);
    im.onerror=()=>reject(new Error('Could not read that image'));
    im.src=dataUrl;
  });
  const canvas=document.createElement('canvas');
  const ctx=canvas.getContext('2d');
  if(square){
    // center-crop to a square first (shop icons), then scale to the fixed target size
    const SIZE=maxDim||500;
    const side=Math.min(img.width,img.height);
    const sx=(img.width-side)/2, sy=(img.height-side)/2;
    canvas.width=SIZE; canvas.height=SIZE;
    ctx.drawImage(img,sx,sy,side,side,0,0,SIZE,SIZE);
  }else{
    let w=img.width,h=img.height;
    if(maxDim){
      if(w>h){ if(w>maxDim){ h=Math.round(h*maxDim/w); w=maxDim; } }
      else{ if(h>maxDim){ w=Math.round(w*maxDim/h); h=maxDim; } }
    }
    canvas.width=w; canvas.height=h;
    if(mime==='image/png'){ ctx.fillStyle='#fff'; ctx.fillRect(0,0,w,h); ctx.imageSmoothingEnabled=false; } // QR codes: crisp squares, no smoothing
    else{ ctx.imageSmoothingEnabled=true; ctx.imageSmoothingQuality='high'; }
    ctx.drawImage(img,0,0,w,h);
  }
  const blob=await new Promise(resolve=>canvas.toBlob(resolve,mime,quality));
  if(!blob) throw new Error('Could not process that image');
  const safeName=(file.name||'photo').replace(/\.[a-z0-9]+$/i,'')+'.'+ext;
  const r=await fetchWithTimeout(CLOUD_URL,{method:'POST',headers:{'Content-Type':'application/json'},
    body:JSON.stringify({action:'sign-upload',name:safeName})});
  let j={}; try{ j=await r.json(); }catch(e){}
  if(!r.ok||j.error){
    if(r.status===404||/bucket/i.test(String(j.error||''))) throw new Error(tr('msg.uploadNoBucket'));
    throw new Error(j.error||('HTTP '+r.status));
  }
  const put=await fetch(j.uploadUrl,{method:'PUT',headers:{'Content-Type':mime},body:blob});
  if(!put.ok){ let t=''; try{ t=(await put.text()||'').slice(0,160); }catch(e){} throw new Error('HTTP '+put.status+(t?' — '+t:'')); }
  return j.publicUrl;
}
// Call AFTER a successful save, once the database genuinely no longer references oldUrl.
// Best-effort by design: a failed cleanup leaves one orphan file behind, which is much better than
// erroring at a user who already finished their save.
async function dropOrphanMedia(oldUrl){
  const path=ourStoragePath(oldUrl);
  if(!path) return;                    // not one of ours
  if(mediaStillUsed(oldUrl)) return;   // something still points at it
  try{
    await fetchWithTimeout(CLOUD_URL,{method:'POST',headers:{'Content-Type':'application/json'},
      body:JSON.stringify({action:'delete-object',path})});
  }catch(e){ /* orphan left behind — never surface this mid-save */ }
}
// Builds the "Upload video" row that sits under a video URL field. fieldId is the <input> it fills.
// An upload only ever filled the form field, so if the page reloaded or the user navigated away
// before pressing Save, a successful upload was silently lost — the file was in storage but nothing
// pointed at it. This writes the URL to the right record as soon as the upload finishes, so
// "✅ Video uploaded" genuinely means saved. Falls back silently: if the save can't go through, the
// URL is still in the field and the normal Save button will pick it up.
async function autoSaveUploadedMedia(fieldId,url){
  try{
    if(fieldId==='prof-video'){
      const t=DB.teachers.find(x=>x.id===session.ref); if(!t) return;
      t.video=url;
      await commitSave();
      return;
    }
    if(fieldId==='tch-video'){
      const id=document.getElementById('tch-id').value;
      if(!id) return;                       // brand-new teacher: saved with the rest of the form
      const t=DB.teachers.find(x=>x.id===parseInt(id)); if(!t) return;
      t.video=url;
      await commitSave();
      return;
    }
    if(fieldId==='intro-videoUrl'||fieldId==='intro-reelUrl'){
      ensureIntro();
      DB.intro[fieldId==='intro-videoUrl'?'videoUrl':'reelUrl']=url;
      await commitSave();
    }
  }catch(e){}
}
function uploadRowHTML(fieldId){
  return `<div class="upl-row"><label class="btn btn-o btn-s upl-btn">\u2b06\ufe0f ${tr('page.uploadVideo')}<input type="file" accept="video/*" onchange="uploadMediaFile(this,'${fieldId}')"/></label><button type="button" class="btn btn-o btn-s" onclick="importFromInstagram('${fieldId}')">\u2b07\ufe0f ${tr('page.igImport')}</button><span class="upl-status" id="${fieldId}-up"></span></div>`;
}
// Picks up a file, asks db.js to sign a one-time upload URL, then PUTs the file straight to Supabase
// Storage and drops the permanent public URL into the field. The file never passes through the Netlify
// function (6MB body cap), and the secret key never reaches the browser (it only signs the URL).
async function uploadMediaFile(input,fieldId){
  const file=input.files&&input.files[0];
  input.value='';                                   // let the same file be re-picked after a failure
  if(!file) return;
  const fld=document.getElementById(fieldId); if(!fld) return;
  const st=document.getElementById(fieldId+'-up');
  const say=(t,cls)=>{ if(st){ st.textContent=t||''; st.className='upl-status'+(cls?' '+cls:''); } };
  if(file.size>50*1024*1024){ say(tr('msg.videoTooBig'),'err'); toast(tr('msg.videoTooBig'),false); return; }
  say(tr('msg.uploading'));
  try{
    const r=await fetchWithTimeout(CLOUD_URL,{method:'POST',headers:{'Content-Type':'application/json'},
      body:JSON.stringify({action:'sign-upload',name:file.name})});
    let j={}; try{ j=await r.json(); }catch(e){}
    if(!r.ok||j.error){
      if(r.status===404||/bucket/i.test(String(j.error||''))) throw new Error(tr('msg.uploadNoBucket'));
      throw new Error(j.error||('HTTP '+r.status));
    }
    // Plain fetch, NOT fetchWithTimeout — a 40MB upload legitimately takes longer than the 10s
    // cloud timeout, and aborting it mid-flight would look like a failure when it was just big.
    const put=await withBusy(tr('msg.uploading'),()=>fetch(j.uploadUrl,{method:'PUT',headers:{'Content-Type':file.type||'application/octet-stream'},body:file}));
    if(!put.ok){ let t=''; try{ t=(await put.text()||'').slice(0,160); }catch(e){} throw new Error('HTTP '+put.status+(t?' \u2014 '+t:'')); }
    fld.value=j.publicUrl;
    await autoSaveUploadedMedia(fieldId,j.publicUrl);
    say(tr('msg.uploadDone'),'ok');
    toast(tr('msg.uploadDone'));
  }catch(e){
    const m=(e&&e.message)||String(e);
    say(m,'err');
    toast(tr('msg.uploadFailed')+' \u2014 '+m,false);
  }
}
// ── Hero scroll-video background ────────────────────────────────────────────────────────────────
// Optional upgrade to the hero background: if the "Hero Background Image" admin field is set to a
// direct video file (.mp4/.webm/.mov/.m4v) instead of a photo, this scrubs through it frame-by-frame
// as the visitor scrolls past the hero, instead of showing it as a single drifting still photo.
// Deliberately does NOT stretch the page to give itself extra scroll room — the frame shown is tied
// to how far the hero has scrolled through the viewport using its own existing height, so this stays
// a background effect rather than turning into a dedicated multi-screen cinematic sequence. If that
// longer, pinned-canvas version is what's wanted instead, this same frame-extraction approach still
// applies, just with a taller wrapper and position:sticky around the canvas.
// Falls back to leaving the existing gradient/aurora background alone (no static-image fallback,
// since a video and a photo can't both occupy the same admin field at once) if the URL isn't a
// recognised video file, the browser can't decode it, or it's cross-origin without CORS enabled —
// reading frames back off a tainted video throws, so any of those cases are caught here rather than
// breaking the page.
const HERO_VIDEO_FRAME_COUNT=60; // desktop-only effect; 60 frames keeps first-load extraction quick
let heroVideoAbort=null; // lets a newer call cancel a still-in-flight extraction from an older one
function isHeroVideoUrl(url){ return /\.(mp4|webm|mov|m4v)(\?|#|$)/i.test(url); }
async function setupHeroScrollVideo(canvas,videoUrl){
  if(heroVideoAbort) heroVideoAbort.cancelled=true; // an older extraction is still finishing — drop it
  const token={cancelled:false};
  heroVideoAbort=token;
  canvas.style.display='none';
  const reduceMotion=window.matchMedia && matchMedia('(prefers-reduced-motion: reduce)').matches;
  try{
    const video=document.createElement('video');
    video.crossOrigin='anonymous'; // required to read frames back out; the host must allow it via CORS
    video.src=videoUrl;
    video.muted=true;
    video.playsInline=true;
    video.preload='auto';
    await new Promise((res,rej)=>{
      video.onloadedmetadata=res;
      video.onerror=()=>rej(new Error('hero video failed to load — check the URL and CORS headers'));
      video.load();
    });
    if(token.cancelled) return;

    const off=document.createElement('canvas');
    off.width=video.videoWidth; off.height=video.videoHeight;
    const octx=off.getContext('2d');
    const frameCount=reduceMotion?1:HERO_VIDEO_FRAME_COUNT; // one still frame if motion is reduced
    const frames=[];
    for(let i=0;i<frameCount;i++){
      if(token.cancelled) return;
      video.currentTime=frameCount===1?0:(i/(frameCount-1))*video.duration;
      await new Promise(res=>{ video.onseeked=res; });
      octx.drawImage(video,0,0);
      frames.push(await createImageBitmap(off));
    }
    if(token.cancelled) return;

    const ctx=canvas.getContext('2d');
    canvas.width=off.width; canvas.height=off.height;
    canvas.style.display='';
    const draw=i=>{ const f=frames[Math.max(0,Math.min(frames.length-1,i))]; if(f) ctx.drawImage(f,0,0,canvas.width,canvas.height); };
    draw(0);
    if(frameCount===1) return; // reduced motion: one still frame, no scroll listener needed

    const hero=canvas.closest('.site-hero');
    let lastFrame=-1, ticking=false;
    const onScroll=()=>{
      if(ticking) return;
      ticking=true;
      requestAnimationFrame(()=>{
        ticking=false;
        if(!hero || !hero.isConnected || token.cancelled) return;
        const rect=hero.getBoundingClientRect();
        const ratio=Math.max(0,Math.min(1,-rect.top/Math.max(1,rect.height)));
        const frameIndex=Math.round(ratio*(frames.length-1));
        if(frameIndex!==lastFrame){ draw(frameIndex); lastFrame=frameIndex; }
      });
    };
    window.addEventListener('scroll',onScroll,{passive:true});
    onScroll();
  }catch(e){
    console.warn('[hero-video] falling back to the plain background:',e);
    canvas.style.display='none';
  }
}
function applyIntroOverrides(){
  ensureIntro();
  const I=DB.intro, D=introDefaults();
  const pel=document.getElementById('event-poster');
  if(pel && window.__defaultPoster===undefined) window.__defaultPoster=pel.getAttribute('src')||''; // remember the built-in poster once
  const set=(id,val)=>{ const el=document.getElementById(id); if(el) el.textContent=val; };
  set('site-event-lead', (I.eventLead&&I.eventLead.length)?I.eventLead:tr('site.eventLead'));
  // Build the event slider from every event card the admin set up (or the one migrated legacy event).
  buildEventSlider();
  // Collaborated shops row (hidden automatically when there are none)
  set('site-shops-eyebrow', tr('site.shopsEyebrow'));
  set('site-shops-h2', tr('site.shopsTitle'));
  set('site-shops-lead', tr('site.shopsLead'));
  buildShopSection();
  // Hero background image — shown only when the admin has set one. A photo drifts continuously
  // (CSS); a direct video file (.mp4/.webm/.mov/.m4v) instead scrubs frame-by-frame as the visitor
  // scrolls past the hero — see setupHeroScrollVideo() above.
  const hb=document.getElementById('site-hero-bg');
  const heroVideoCanvas=document.getElementById('site-hero-video-canvas');
  if(hb){
    const img=(I.heroImage||'').trim();
    hb.style.display=img?'':'none';
    if(img && isHeroVideoUrl(img)){
      hb.style.removeProperty('--heroImg');
      if(heroVideoCanvas) setupHeroScrollVideo(heroVideoCanvas,img);
    }else{
      if(heroVideoAbort) heroVideoAbort.cancelled=true;
      if(heroVideoCanvas) heroVideoCanvas.style.display='none';
      if(img) hb.style.setProperty('--heroImg',`url('${img.replace(/'/g,"%27")}')`);
    }
  }
  const vsec=document.getElementById('site-video-section');
  if(vsec){
    if(I.videoUrl){
      vsec.style.display='';
      const vframe=document.getElementById('site-video-frame');
      const portrait=/instagram\.com/i.test(I.videoUrl); // reels are vertical, so give them a tall frame
      vframe.style.aspectRatio=portrait?'9 / 16':'16 / 9';
      vframe.style.maxWidth=portrait?'420px':'900px';
      vframe.innerHTML=videoEmbedHTML(I.videoUrl);
      fitToNativeVideo(vframe,'420px','900px');   // an uploaded clip overrides the guess above
      set('site-video-h2', I.videoTitle||D.videoTitle);
      set('site-video-eyebrow', I.videoEyebrow||D.videoEyebrow);
    } else { vsec.style.display='none'; document.getElementById('site-video-frame').innerHTML=''; }
  }
  // studio reel — the second video, shown at the top of the intro page (hero)
  const rframe=document.getElementById('site-reel-frame');
  const heroEl=document.querySelector('.site-hero');
  if(rframe){
    if(I.reelUrl){
      rframe.style.display='';
      const rPortrait=/instagram\.com/i.test(I.reelUrl);
      rframe.style.aspectRatio=rPortrait?'9 / 16':'16 / 9';
      rframe.style.maxWidth=rPortrait?'360px':'';
      rframe.innerHTML=videoEmbedHTML(I.reelUrl);
      fitToNativeVideo(rframe,'360px','');
      if(heroEl) heroEl.style.gridTemplateColumns=''; // restore the 2-column hero
    } else {
      rframe.style.display='none'; rframe.innerHTML='';
      if(heroEl) heroEl.style.gridTemplateColumns='1fr'; // no reel → single-column hero, no empty gap
    }
  }
}

// ── Public event slider ──────────────────────────────────────────────
// Renders one slide per event card. With a single event it's just a static card;
// with several it auto-advances and the visitor can swipe or tap the arrows / dots.
let __evTimer=null, __evIdx=0, __evCount=0, __evFieldsData=[];
// Types a single value out character by character (with a blinking caret while it runs) instead of
// just appearing — used for the event Date / Time / Venue fields. Respects reduced-motion by
// skipping straight to the final text. `delay` staggers the three fields so they don't all type at
// once.
function typeText(el,text,speed,delay){
  if(!el) return;
  text=String(text==null?'':text);
  if(window.matchMedia && matchMedia('(prefers-reduced-motion: reduce)').matches){ el.textContent=text; return; }
  clearTimeout(el.__typeTimer);
  el.textContent='';
  el.classList.add('type-caret');
  let i=0;
  const step=()=>{
    el.textContent=text.slice(0,i);
    i++;
    if(i<=text.length){ el.__typeTimer=setTimeout(step,speed||16); }
    else { el.classList.remove('type-caret'); }
  };
  el.__typeTimer=setTimeout(step,delay||0);
}
// Re-types the Date / Time / Venue of whichever event slide is currently active — called both when
// the event section scrolls into view and whenever the slide changes (evGo), so every event that
// gets shown types in rather than only the first one.
function typeCurrentEventSlide(){
  const track=document.getElementById('site-event-track');
  if(!track) return;
  const slide=track.children[__evIdx];
  if(!slide) return;
  const data=__evFieldsData[__evIdx]||{};
  ['date','time','venue'].forEach((f,i)=>{
    const el=slide.querySelector(`[data-field="${f}"]`);
    if(el) typeText(el,data[f],40,i*420);
  });
}
// A poster is frequently a large base64 image rather than a normal file (see the DB-size warning
// elsewhere about posters/photos pasted in as base64), so a slow or flaky phone connection can fail
// to load/decode it on the first try. Rather than leaving the browser's broken-image icon up
// permanently, keep retrying with a capped backoff until it succeeds.
function retryEventPoster(imgEl){
  const wrap=imgEl.parentElement;
  if(wrap) wrap.classList.add('is-retrying');
  const tries=(imgEl.__posterRetries||0)+1;
  imgEl.__posterRetries=tries;
  const delay=Math.min(2000*Math.pow(1.6,tries-1),15000); // 2s, 3.2s, 5.1s, ... capped at 15s apart
  clearTimeout(imgEl.__posterRetryTimer);
  const original=imgEl.__posterOriginalSrc||(imgEl.__posterOriginalSrc=imgEl.getAttribute('src'));
  imgEl.__posterRetryTimer=setTimeout(()=>{
    imgEl.src='';
    // data: URIs can't take a cache-busting suffix (it would corrupt the encoded bytes) — only add
    // one for real network URLs, where it also helps skip past a cached failure response.
    imgEl.src=original.startsWith('data:') ? original : original+(original.includes('?')?'&':'?')+'_r='+Date.now();
  },delay);
}
function eventSlideHTML(ev,D){
  const badge=ev.badge||D.eventBadge, title=ev.title||D.eventTitle;
  const lead =(ev.lead&&ev.lead.length)?ev.lead:'';
  const date=ev.date||D.eventDate, time=ev.time||D.eventTime, venue=ev.venue||D.eventVenue;
  const catsStr=(ev.cats&&ev.cats.length)?ev.cats:D.eventCats;
  const cats=catsStr.split(',').map(c=>c.trim()).filter(Boolean).map(c=>`<span class="site-event-tag">${H(c)}</span>`).join('');
  const poster=ev.poster||window.__defaultPoster||'';
  const regUrl=normalizeSocialLink(ev.regUrl||'','link');
  // The register link lives in a data attribute (not inline JS) so quotes/ampersands in it can't break anything.
  const btn=regUrl
    ? `<button class="site-btn" data-reg="${H(regUrl)}">${H(tr('site.eventBtnLink'))}</button>`
    : `<button class="site-btn" onclick="showLoginFromSite()">${H(tr('site.eventBtn'))}</button>`;
  const leadHTML=lead?`<div class="site-lead" style="margin:0 0 20px">${H(lead)}</div>`:'';
  return `<div class="evsl-slide"><div class="site-event-wrap">
    <div class="site-event-poster">
      <span class="site-event-badge">${H(badge)}</span>
      <div class="site-event-poster-spinner" aria-hidden="true"></div>
      <img src="${H(poster)}" alt="${H(title)}" onload="this.parentElement.classList.remove('is-retrying')" onerror="retryEventPoster(this)"/>
    </div>
    <div class="site-event-info">
      ${leadHTML}
      <div class="site-event-row"><span class="site-event-k">${H(tr('site.eventDateL'))}</span><span class="site-event-v" data-field="date">${H(date)}</span></div>
      <div class="site-event-row"><span class="site-event-k">${H(tr('site.eventTimeL'))}</span><span class="site-event-v" data-field="time">${H(time)}</span></div>
      <div class="site-event-row"><span class="site-event-k">${H(tr('site.eventVenueL'))}</span><span class="site-event-v" data-field="venue">${H(venue)}</span></div>
      <div class="site-event-row"><span class="site-event-k">${H(tr('site.eventCatsL'))}</span><span class="site-event-v">${cats}</span></div>
      <div class="site-event-cta">${btn}</div>
    </div>
  </div></div>`;
}
function buildEventSlider(){
  const D=introDefaults();
  const events=getIntroEvents();
  const slider=document.getElementById('site-event-slider');
  const legacy=document.getElementById('site-event-legacy');
  const track=document.getElementById('site-event-track');
  if(!slider||!track) return;
  if(legacy) legacy.style.display='none';   // the old static card is replaced by the slider
  slider.style.display='';
  // Section heading: a single event keeps its own title; several show a generic plural heading.
  const h2=document.getElementById('site-event-h2');
  if(h2) h2.textContent = events.length>1 ? tr('site.eventsTitle') : (events[0].title||D.eventTitle);
  track.innerHTML=events.map(ev=>eventSlideHTML(ev,D)).join('');
  // Raw (unescaped) field text per slide, for the typewriter effect — reusing eventSlideHTML's own
  // fallback logic so it can never drift out of sync with what's actually shown.
  __evFieldsData=events.map(ev=>({
    date: ev.date||D.eventDate, time: ev.time||D.eventTime, venue: ev.venue||D.eventVenue,
  }));
  // open each event's register link from its data attribute (keeps URLs out of inline JS)
  track.querySelectorAll('.site-btn[data-reg]').forEach(b=>{
    b.onclick=()=>{ const u=b.getAttribute('data-reg'); if(u) window.open(u,'_blank','noopener'); };
  });
  __evCount=events.length; __evIdx=0;
  // controls only when there's more than one event
  slider.querySelectorAll('.evsl-nav,.evsl-dots').forEach(el=>el.remove());
  if(__evCount>1){
    slider.insertAdjacentHTML('beforeend',
      `<button class="evsl-nav prev" aria-label="Previous event" onclick="evSlide(-1)">‹</button>
       <button class="evsl-nav next" aria-label="Next event" onclick="evSlide(1)">›</button>
       <div class="evsl-dots" id="site-event-dots">${events.map((e,i)=>`<button class="evsl-dot${i===0?' on':''}" aria-label="Event ${i+1}" onclick="evGo(${i})"></button>`).join('')}</div>`);
    bindEventSwipe();
    startEventAuto();
  } else {
    stopEventAuto();
  }
  evGo(0);
}
function evGo(i){
  if(__evCount<1) return;
  __evIdx=((i%__evCount)+__evCount)%__evCount;
  const track=document.getElementById('site-event-track');
  if(track) track.style.transform=`translateX(-${__evIdx*100}%)`;
  const dots=document.querySelectorAll('#site-event-dots .evsl-dot');
  dots.forEach((d,di)=>d.classList.toggle('on',di===__evIdx));
  typeCurrentEventSlide();
}
function evSlide(dir){ evGo(__evIdx+dir); restartEventAuto(); }
function startEventAuto(){ stopEventAuto(); if(__evCount>1) __evTimer=setInterval(()=>evGo(__evIdx+1),6000); }
function stopEventAuto(){ if(__evTimer){ clearInterval(__evTimer); __evTimer=null; } }
function restartEventAuto(){ startEventAuto(); } // any manual move resets the countdown
function bindEventSwipe(){
  const vp=document.querySelector('#site-event-slider .evsl-viewport');
  if(!vp||vp.__swipeBound) return; vp.__swipeBound=true;
  let x0=null;
  vp.addEventListener('touchstart',e=>{ x0=e.touches[0].clientX; stopEventAuto(); },{passive:true});
  vp.addEventListener('touchend',e=>{
    if(x0==null) return;
    const dx=e.changedTouches[0].clientX-x0; x0=null;
    if(Math.abs(dx)>40) evSlide(dx<0?1:-1); else startEventAuto();
  },{passive:true});
  vp.addEventListener('mouseenter',stopEventAuto);
  vp.addEventListener('mouseleave',()=>{ if(__evCount>1) startEventAuto(); });
}

// ── Collaborated shops (public intro section) ────────────────────────
// Each shop: { name, photo (500x500 data URL), items (newline-separated), url }.
function blankShop(){ return { name:'', photo:'', items:'', url:'' }; }
function getIntroShops(){
  ensureIntro();
  const list=DB.intro.shops;
  if(!Array.isArray(list)) return [];
  // only shops with at least a name or a photo are shown
  return list.map(s=>Object.assign(blankShop(),s)).filter(s=>(s.name&&s.name.trim())||s.photo);
}
let __shopList=[]; // the shops currently rendered, so the modal can look one up by index
const SHOP_MARQUEE_MIN=11; // more shops than this many → scroll them instead of wrapping onto more rows
const TEACHER_PREVIEW=8;   // instructors shown before the "Show all" button is needed
function buildShopSection(){
  const sec=document.getElementById('site-shops-section');
  const row=document.getElementById('site-shops-row');
  if(!sec||!row) return;
  // Student Perks (Collaborated Shops) feature disabled — remove this early return to bring it back.
  sec.style.display='none'; row.innerHTML=''; return;
  __shopList=getIntroShops();
  if(!__shopList.length){ sec.style.display='none'; row.innerHTML=''; return; }
  sec.style.display='';
  const disc=tr('site.shopDiscountShort');
  // dup = the second copy that makes the loop seamless: hidden from screen readers and skipped by
  // keyboard tabbing so the same shops aren't announced or tabbed through twice, but still tappable.
  const chip=(s,i,dup)=>{
    const bg=s.photo?`background-image:url('${String(s.photo).replace(/'/g,"%27")}')`:'';
    return `<button type="button" class="shop-chip"${dup?' aria-hidden="true" tabindex="-1"':''} onclick="openShopModal(${i})">
      <span class="shop-icon" style="${bg}"></span>
      <span class="shop-name">${H(s.name||'')}</span>
      <span class="shop-disc">${H(disc)}</span>
    </button>`;
  };
  if(__shopList.length>=SHOP_MARQUEE_MIN){
    const chips=__shopList.map((s,i)=>chip(s,i,false)).join('');
    const chipsDup=__shopList.map((s,i)=>chip(s,i,true)).join('');
    // Three copies: JS keeps the scroll parked in the middle one, so there is always a full list of
    // shops waiting whichever way it's dragged, and the jump back is invisible.
    row.className='shop-marquee';
    row.innerHTML=`<div class="shop-track">${chipsDup}${chips}${chipsDup}</div>`;
    initShopMarquee();
  }else{
    stopShopMarquee();
    row.className='shop-row';
    row.innerHTML=__shopList.map((s,i)=>chip(s,i,false)).join('');
  }
}
// ── Instructor list: show 6, reveal the rest on request ──────────────
// Keeps the button's label and visibility in step with the roster and the current collapsed state.
// Called after the cards are rendered, so it also survives a language switch or a data refresh.
function syncTeacherMore(){
  const grid=document.getElementById('site-teacher-grid');
  const wrap=document.getElementById('site-teacher-more');
  const btn=document.getElementById('site-teacher-more-btn');
  if(!grid||!wrap||!btn) return;
  const total=grid.children.length;
  if(total<=TEACHER_PREVIEW){          // everyone already fits — no button, nothing hidden
    wrap.style.display='none';
    grid.classList.remove('collapsed');
    return;
  }
  wrap.style.display='';
  const collapsed=grid.classList.contains('collapsed');
  btn.textContent=collapsed
    ? tr('site.showAllTeachers').replace('{n}',total)
    : tr('site.showLessTeachers');
}
function toggleTeacherList(){
  const grid=document.getElementById('site-teacher-grid');
  if(!grid) return;
  const collapsing=!grid.classList.contains('collapsed');
  grid.classList.toggle('collapsed');
  syncTeacherMore();
  // when folding back up, return to the top of the section so the page doesn't jump past it
  if(collapsing){
    const sec=document.getElementById('site-teachers');
    if(sec&&sec.scrollIntoView) sec.scrollIntoView({behavior:'smooth',block:'start'});
  } else if(window.anime&&!(window.matchMedia&&window.matchMedia('(prefers-reduced-motion: reduce)').matches)){
    // Expanding: the extra cards already settled at opacity 1 during the page's initial scroll-reveal
    // (just hidden by CSS), so without this they'd pop in instantly rather than animate. Reset them
    // and play the reveal fresh at the moment the click uncovers them.
    const extra=Array.from(grid.children).slice(TEACHER_PREVIEW);
    if(extra.length){
      anime.remove(extra);
      extra.forEach(el=>{ el.style.opacity='0'; });
      anime({targets:extra,translateY:['24px','0px'],opacity:[0,1],duration:600,
             delay:anime.stagger(80),easing:'easeOutQuart'});
    }
  }
}
// ── Shop line: drifts on its own, but can be dragged or swiped by hand ───────────────
// The hard part is that a drag and a click start identically. We watch how far the pointer travels:
// under a few pixels it's a tap and the shop opens, beyond that it's a drag and the click that the
// browser fires afterwards is swallowed, so pulling the line along never opens a shop by accident.
let __shopRAF=null, __shopCleanup=null;
const SHOP_DRIFT_PX=0.4;   // per frame ≈ 24px/s — slow enough to read, fast enough to notice
const SHOP_DRAG_SLOP=6;    // px of travel before a press counts as a drag rather than a tap
function stopShopMarquee(){
  if(__shopRAF){ cancelAnimationFrame(__shopRAF); __shopRAF=null; }
  if(__shopCleanup){ __shopCleanup(); __shopCleanup=null; }
}
function initShopMarquee(){
  stopShopMarquee(); // a re-render (language switch, data refresh) must not leave a second loop running
  const el=document.getElementById('site-shops-row');
  const track=el&&el.querySelector('.shop-track');
  if(!el||!track) return;
  const reduced=window.matchMedia&&window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  let dragging=false, moved=false, startX=0, startScroll=0, holdUntil=0, suppressClick=false;
  const copyW=()=>track.scrollWidth/3;               // one copy of the shop list
  const park=()=>{ const w=copyW(); if(w>0) el.scrollLeft=w; };   // sit in the middle copy
  // Wait for layout (images/fonts) before parking, or scrollWidth is still 0.
  requestAnimationFrame(()=>requestAnimationFrame(park));

  function wrap(){
    const w=copyW(); if(w<=0) return;
    // Stepping a whole copy leaves identical pixels on screen, so the reset can't be seen. Looped
    // rather than a single test because a fast flick can overshoot by more than one copy at once.
    let x=el.scrollLeft, guard=0;
    while(x>=w*2 && guard++<8) x-=w;
    while(x<=0   && guard++<8) x+=w;
    if(x!==el.scrollLeft) el.scrollLeft=x;
  }
  function step(){
    const idle=!dragging && Date.now()>holdUntil;
    if(idle && !reduced) el.scrollLeft+=SHOP_DRIFT_PX;
    wrap();
    __shopRAF=requestAnimationFrame(step);
  }
  __shopRAF=requestAnimationFrame(step);

  // Pause the drift while a pointer is on it, and for a moment after letting go.
  const hold=(ms)=>{ holdUntil=Date.now()+ms; };
  const onEnter=()=>hold(1e9);                  // hovering: stay put until the pointer leaves
  const onLeave=()=>{ if(!dragging) hold(0); };
  // Touch is left to the browser: it pans natively with real momentum, and a scroll gesture never
  // becomes a click, so only the mouse needs the manual drag below.
  const onDown=e=>{
    if(e.pointerType==='touch'){ hold(1e9); return; }
    dragging=true; moved=false;
    startX=e.clientX; startScroll=el.scrollLeft;
    el.classList.add('dragging');
    if(el.setPointerCapture) try{ el.setPointerCapture(e.pointerId); }catch(_){}
  };
  const onMove=e=>{
    if(!dragging) return;
    const dx=e.clientX-startX;
    if(!moved && Math.abs(dx)>SHOP_DRAG_SLOP) moved=true;
    if(moved){
      // Fold the target back into the middle copy BEFORE writing it. Assigning a negative scrollLeft
      // would just be clamped to 0 by the browser and the line would stick at the left edge instead
      // of looping. startScroll shifts by the same amount so the line keeps tracking the cursor.
      let target=startScroll-dx, w=copyW(), guard=0;
      if(w>0){
        while(target>=w*2 && guard++<8){ target-=w; startScroll-=w; }
        while(target<=0   && guard++<8){ target+=w; startScroll+=w; }
      }
      el.scrollLeft=target;
      e.preventDefault();
    }
  };
  const onUp=e=>{
    if(e.pointerType==='touch'){ hold(900); return; }  // let native momentum finish, then drift again
    if(!dragging) return;
    dragging=false;
    el.classList.remove('dragging');
    suppressClick=moved;   // it was a drag, so eat the click the browser is about to fire
    hold(moved?1200:0);
    moved=false;
  };
  // Capture phase runs before the chip's own handler, so this is what stops a drag opening a shop.
  const onClick=e=>{ if(suppressClick){ e.preventDefault(); e.stopPropagation(); suppressClick=false; } };

  el.addEventListener('pointerenter',onEnter);
  el.addEventListener('pointerleave',onLeave);
  el.addEventListener('pointerdown',onDown);
  el.addEventListener('pointermove',onMove,{passive:false});
  el.addEventListener('pointerup',onUp);
  el.addEventListener('pointercancel',onUp);
  el.addEventListener('click',onClick,true);
  el.addEventListener('dragstart',e=>e.preventDefault());  // stop the browser's own image dragging

  __shopCleanup=()=>{
    el.removeEventListener('pointerenter',onEnter);
    el.removeEventListener('pointerleave',onLeave);
    el.removeEventListener('pointerdown',onDown);
    el.removeEventListener('pointermove',onMove);
    el.removeEventListener('pointerup',onUp);
    el.removeEventListener('pointercancel',onUp);
    el.removeEventListener('click',onClick,true);
    el.classList.remove('dragging');
  };
}
function openShopModal(i){
  const s=__shopList[i]; if(!s) return;
  const icon=document.getElementById('shop-modal-icon');
  icon.src=s.photo||''; icon.style.display=s.photo?'':'none';
  document.getElementById('shop-modal-name').textContent=s.name||'';
  document.getElementById('shop-modal-badge').textContent='🎉 '+tr('site.shopDiscount');
  document.getElementById('shop-modal-items-l').textContent=tr('site.shopOffers');
  const items=String(s.items||'').split('\n').map(x=>x.trim()).filter(Boolean);
  const ul=document.getElementById('shop-modal-items');
  ul.innerHTML=items.length?items.map(x=>`<li>${H(x)}</li>`).join(''):`<li style="opacity:.6">${H(tr('site.shopNoItems'))}</li>`;
  document.getElementById('shop-modal-items-wrap').style.display=items.length?'':'';
  const link=document.getElementById('shop-modal-link');
  const url=normalizeSocialLink(s.url||'','link');
  if(url){ link.style.display='inline-flex'; link.href=url; link.textContent=tr('site.shopVisit'); }
  else link.style.display='none';
  document.getElementById('shop-modal-close').textContent=tr('page.welcomeDone');
  openM('m-shop');
}
// Instructors slide in from the left, one after another, when their section is reached.
// Anime.js handles the stagger; if it hasn't loaded, this simply does nothing and the cards are
// visible as normal — motion is never allowed to be the reason content can't be seen.
let __siteObserver=null;
// Splits a heading into per-word spans so the words can be animated individually. Headings are
// admin-editable, so this is done in JS — whatever they type gets the treatment. <br> is preserved.
function splitHeadingWords(h){
  if(h.dataset.split) return;
  h.dataset.split='1';
  h.innerHTML=h.innerHTML.split(/(<br\s*\/?>)/i).map(part=>{
    if(/^<br/i.test(part)) return part;
    return part.split(/\s+/).filter(Boolean)
      .map(w=>`<span class="aw" style="display:inline-block">${w}</span>`).join(' ');
  }).join('');
}
// One observer drives every section: whatever that section contains gets its own motion, and
// everything resets on the way out so it replays next time it's scrolled to.
// Springy press on the public page's buttons. Delegated from the document, so buttons that are
// re-rendered later (the event slider, shop chips) are covered without re-binding anything.
function initButtonPress(){
  if(!window.anime||window.__btnPressOn) return;
  window.__btnPressOn=true;
  document.addEventListener('pointerdown',e=>{
    const b=e.target.closest('#site-screen .site-btn');
    if(!b) return;
    anime.remove(b);
    anime({targets:b,scale:[1,.94],duration:110,easing:'easeOutQuad'});
  },{passive:true});
  document.addEventListener('pointerup',e=>{
    const b=e.target.closest('#site-screen .site-btn');
    if(!b) return;
    anime.remove(b);
    anime({targets:b,scale:[.94,1],duration:420,easing:'easeOutElastic(1,.5)'});
  },{passive:true});
}
function initSiteAnimations(){
  if(!window.anime||!('IntersectionObserver' in window)) return;
  document.querySelectorAll('#site-screen .site-h2').forEach(splitHeadingWords);

  const play=sec=>{
    const words=sec.querySelectorAll('.aw');
    if(words.length){
      anime.remove(words);
      anime({targets:words,translateY:['28px','0px'],opacity:[0,1],duration:650,
             delay:anime.stagger(45),easing:'easeOutQuart'});
    }
    const eyebrows=sec.querySelectorAll('.site-eyebrow');
    if(eyebrows.length){
      anime.remove(eyebrows);
      anime({targets:eyebrows,translateY:['14px','0px'],opacity:[0,1],duration:500,easing:'easeOutQuart'});
    }
    const teachers=sec.querySelectorAll('.site-teacher-card');
    if(teachers.length){
      anime.remove(teachers);
      anime({targets:teachers,translateX:['-80px','0px'],opacity:[0,1],duration:750,
             delay:anime.stagger(110),easing:'easeOutQuart'});
    }
    const branches=sec.querySelectorAll('.site-branch-card');
    if(branches.length){
      anime.remove(branches);
      // Springy "pop out" for the branch cards specifically. anime.js v4 added a true spring()
      // physics easing; this app runs v3, whose closest equivalent is elastic — same bouncy overshoot
      // feel, applied only here so the rest of the reveal (headings, teachers, chips) stays unchanged.
      // Opacity keeps a plain ease of its own: an elastic curve overshoots past 1 and below 0, which
      // opacity can't display (it just clips), so sharing the bounce with position would flicker.
      anime({targets:branches,
             translateX:{value:['70px','0px'],easing:'easeOutElastic(1, .6)',duration:900},
             opacity:{value:[0,1],easing:'easeOutQuad',duration:400},
             delay:anime.stagger(110)});
    }
    const chips=sec.querySelectorAll('.shop-chip');
    if(chips.length){
      anime.remove(chips);
      anime({targets:chips,scale:[.6,1],opacity:[0,1],duration:600,
             delay:anime.stagger(70),easing:'easeOutBack'});
    }
    const frames=sec.querySelectorAll('.site-video-frame');
    if(frames.length){
      anime.remove(frames);
      anime({targets:frames,translateY:['30px','0px'],scale:[.97,1],opacity:[0,1],duration:650,easing:'easeOutQuart'});
    }
    const posters=sec.querySelectorAll('.site-event-poster');
    if(posters.length){
      anime.remove(posters);
      anime({targets:posters,translateX:['40px','0px'],opacity:[0,1],duration:700,easing:'easeOutQuart'});
    }
    if(sec.id==='site-event') typeCurrentEventSlide();
  };
  const reset=sec=>{
    const all=sec.querySelectorAll('.aw,.site-teacher-card,.site-branch-card,.shop-chip,.site-eyebrow,.site-video-frame,.site-event-poster');
    anime.remove(all);
    all.forEach(el=>{ el.style.opacity='0'; });
  };

  if(!__siteObserver){
    __siteObserver=new IntersectionObserver(entries=>{
      entries.forEach(e=>{ e.isIntersecting?play(e.target):reset(e.target); });
    },{threshold:0,rootMargin:'0px 0px -12% 0px'});
  }
  __siteObserver.disconnect();
  document.querySelectorAll('#site-screen .site-section, #site-screen .site-cta').forEach(sec=>__siteObserver.observe(sec));
}
function renderSiteScreen(){
  const styleCount=new Set(DB.classes.map(c=>c.style)).size;
  const C=contentDefaults();
  const cv=k=>IV(k)||C[k];                       // admin's wording, or the built-in text
  const txt=(id,k)=>{ const el=document.getElementById(id); if(el) el.textContent=cv(k); };
  const head=(id,k)=>{ const el=document.getElementById(id); if(el) el.innerHTML=multiline(cv(k)); };

  txt('site-eyebrow','heroEyebrow');
  // hero heading: first line plain, the rest in gold — however many lines the admin typed
  const h1=document.getElementById('site-h1');
  if(h1){
    const lines=cv('heroTitle').split(/\r?\n/);
    const first=H(lines.shift()||'');
    const rest=lines.filter(l=>l.trim()!=='').map(l=>`<span>${H(l)}</span>`).join('<br/>');
    h1.innerHTML=first+(rest?'<br/>'+rest:'');
  }
  txt('site-hero-lead','heroLead');
  txt('site-find-btn','findBtn');
  txt('site-meet-btn','meetBtn');
  txt('site-about-eyebrow','aboutEyebrow');
  head('site-about-h2','aboutTitle');
  txt('site-about-lead','aboutLead');
  txt('site-instr-eyebrow','instrEyebrow');
  head('site-instr-h2','instrTitle');
  txt('site-instr-lead','instrLead');
  txt('site-loc-eyebrow','locEyebrow');
  head('site-loc-h2','locTitle');
  txt('site-loc-lead','locLead');
  txt('site-cta-h2','ctaTitle');
  txt('site-cta-lead','ctaLead');
  document.getElementById('site-cta-btn').textContent=tr('site.contactBtn');
  // event section
  const setTxt=(id,key)=>{ const el=document.getElementById(id); if(el) el.textContent=tr(key); };
  setTxt('site-event-eyebrow','site.eventEyebrow');
  setTxt('site-event-lead','site.eventLead');
  setTxt('site-event-date-l','site.eventDateL');
  setTxt('site-event-time-l','site.eventTimeL');
  setTxt('site-event-venue-l','site.eventVenueL');
  setTxt('site-event-cats-l','site.eventCatsL');
  setTxt('site-event-btn','site.eventBtn');
  const siteBtn=document.getElementById('site-signin-btn');
  if(siteBtn) siteBtn.textContent=(window.innerWidth<=680?tr('site.signInShort'):tr('site.signIn'));

  // hero inline stats
  document.getElementById('site-stats-inline').innerHTML=`
    <div><b>${DB.places.length}</b><span>${tr('site.statFranchises')}</span></div>
    <div><b>${styleCount}</b><span>${tr('site.statStyles')}</span></div>
    <div><b>${DB.teachers.length}</b><span>${tr('site.statInstructors')}</span></div>
    <div><b>2026</b><span>${tr('site.statFounded')}</span></div>`;

  // teacher cards
  const teacherBiosEn={
    'Hip-hop':'Leads hip-hop training focused on groove and musicality before tricks.',
    'Popping':'Popping specialist known for breaking technique down into drills anyone can practice at home.',
    'Street Jazz':'Brings a street jazz background to sharpen performance quality for our competition crews.',
    'K-pop':'Runs our K-pop cover dance track, from clean formations to full stage energy.',
    'Kid Dance':'Specializes in making a first dance class fun and confidence-building for younger students.',
    'Dancehall':'Teaches authentic dancehall foundations and musicality, not just the viral moves.',
    'Waacking':'Focuses on the arm technique and musicality waacking is built on.',
    'Choreography':'Builds performance-ready routines for our competition and showcase crews.',
  };
  const teacherBiosZh={
    'Hip-hop':'主教基础Hip-hop课程，注重律动与音乐感，而非急于教花式技巧。',
    'Popping':'Popping专项导师，擅长把技巧拆解成任何人都能在家练习的分解动作。',
    'Street Jazz':'拥有street jazz背景，专注提升竞技队伍的表演质量。',
    'K-pop':'主教K-pop翻跳课程，从整齐的队形到完整的舞台能量。',
    'Kid Dance':'专注让儿童的第一堂舞蹈课变得有趣，并建立自信心。',
    'Dancehall':'教授正宗的dancehall基础与音乐感，不只是网络流行动作。',
    'Waacking':'专注于waacking的手臂技巧与音乐感训练。',
    'Choreography':'为竞赛与表演队伍编排舞台级别的routine。',
  };
  const teacherBios=currentLang==='zh'?teacherBiosZh:teacherBiosEn;
  document.getElementById('site-teacher-grid').innerHTML=DB.teachers.map(t=>{
    const cls=DB.classes.filter(c=>c.teacherId===t.id);
    const specs=t.specs||[];
    const bio=teacherBios[specs[0]]||(currentLang==='zh'?`教授 ${specs.join('、')}，涵盖各分店，从初学者到表演队伍。`:`Teaches ${specs.join(', ')} across our branches, from first-timers to performance crews.`);
    const classWord=currentLang==='zh'?`${cls.length} 堂课`:`${cls.length} class${cls.length!==1?'es':''}`;
    const hasSocial=(t.instagram&&t.instagram.trim())||(t.xiaohongshu&&t.xiaohongshu.trim());
    const socialHint=hasSocial?`<div class="site-teacher-social-hint">${t.instagram&&t.instagram.trim()?'📸':''}${t.xiaohongshu&&t.xiaohongshu.trim()?' 📕':''} ${currentLang==='zh'?'点击查看':'Tap to connect'}</div>`:'';
    return `<div class="site-teacher-card" role="button" tabindex="0" style="cursor:pointer" onclick="openTeacherSocial(${t.id},this)" onkeydown="if(event.key==='Enter'||event.key===' '){event.preventDefault();openTeacherSocial(${t.id},this)}">
      ${t.photo?`<div class="site-teacher-photo has-photo" style="background-image:url('${t.photo}')"></div>`:`<div class="site-teacher-photo" style="background-color:${TCOLOR(t.id)}">${ini(t.name)}</div>`}
      <div class="site-teacher-body">
        <h4>${t.name}</h4>
        <div>${specs.map(s=>`<span class="site-teacher-style">${s}</span>`).join(' ')}</div>
        <p>${bio}</p>
        <p style="color:var(--muted);margin-top:8px">${classWord} · ${[...new Set(cls.map(c=>Pl(c.placeId).name))].join(', ')||'—'}</p>
        ${socialHint}
      </div>
    </div>`;
  }).join('');
  // Only the first 6 instructors show until the visitor asks for the rest — a long roster otherwise
  // pushes the whole rest of the page down. The button hides itself when there's nothing to reveal.
  syncTeacherMore();

  // branch cards
  document.getElementById('site-branch-grid').innerHTML=DB.places.map(pl=>{
    const cls=DB.classes.filter(c=>c.placeId===pl.id);
    const styles=[...new Set(cls.map(c=>c.style))];
    const teacherNames=[...new Set(cls.map(c=>T(c.teacherId).name))];
    const addr=placeAddress(pl);
    const mapQuery=encodeURIComponent(addr);
    const perWeek=currentLang==='zh'?`每周 ${cls.length} 堂课`:`${cls.length} class${cls.length!==1?'es':''}/week`;
    const openingSoon=currentLang==='zh'?'即将开课':'Opening soon';
    return `<div class="site-branch-card">
      <h4>🏢 ${pl.name}</h4>
      <div class="addr">${H(addr)}<br/>${perWeek} · ${teacherNames.join(', ')||'—'}</div>
      <div class="meta" style="margin-bottom:14px">${styles.map(s=>`<span class="tag">${s}</span>`).join('')||`<span style="color:var(--muted);font-size:12px">${openingSoon}</span>`}</div>
      <div class="site-map-frame">
        <iframe src="https://www.google.com/maps?q=${mapQuery}&output=embed" loading="lazy" referrerpolicy="no-referrer-when-downgrade" title="Map of ${pl.name}"></iframe>
      </div>
      <a class="site-map-link" href="https://www.google.com/maps/search/?api=1&query=${mapQuery}" target="_blank" rel="noopener">${tr('site.getDirections')}</a>
    </div>`;
  }).join('');
  applyIntroOverrides();
  initSiteAnimations();
  initButtonPress();
  renderContactFooters();
  if(typeof loadGoogleTranslate==='function') loadGoogleTranslate();
}
function introDefaults(){
  return { eventBadge:'Vol 6', eventTitle:'K-Night Vol 6', eventLead:tr('site.eventLead'),
    eventDate:'📅 9 Aug 2026 · Sunday', eventTime:'🕛 12:00 PM – 8:00 PM', eventVenue:'📍 Sutera Mall · Level 4',
    eventCats:'KPOP Solo, KPOP Battle, KPOP Group Cover, KPOP Randomz',
    eventRegUrl:'',
    videoEyebrow:'Watch', videoTitle:'See Us Move', videoUrl:'' };
}
// The one shared event shape. Blank fields fall back to the built-in defaults when rendered.
function blankEvent(){ return { badge:'', title:'', lead:'', date:'', time:'', venue:'', cats:'', regUrl:'', poster:'' }; }
// The list of events an admin has set up. Older saves stored a single event as flat
// eventBadge/eventTitle/… keys on DB.intro — fold that into a one-item array so nothing is lost.
function getIntroEvents(){
  ensureIntro();
  const I=DB.intro;
  if(Array.isArray(I.events) && I.events.length) return I.events.map(e=>Object.assign(blankEvent(),e));
  // migrate the legacy single event (only if the admin had actually set any of its fields)
  const legacy={ badge:I.eventBadge||'', title:I.eventTitle||'', lead:I.eventLead||'', date:I.eventDate||'',
    time:I.eventTime||'', venue:I.eventVenue||'', cats:I.eventCats||'', regUrl:I.eventRegUrl||'', poster:I.eventPoster||'' };
  const touched=Object.values(legacy).some(x=>x!=null&&String(x).trim()!=='');
  return touched ? [legacy] : [blankEvent()]; // at least one card, so the section always shows something
}
// The built-in wording for every editable block on the intro page, in the language currently selected.
// renderSiteScreen() shows the admin's text when there is one and these when there isn't.
function contentDefaults(){
  return {
    heroEyebrow:[...new Set(DB.classes.map(c=>c.style))].slice(0,4).join(' · '),
    heroTitle:tr('site.heroLine1')+'\n'+tr('site.heroLine2'),
    heroLead:tr('site.heroLead'),
    findBtn:tr('site.findStudio'), meetBtn:tr('site.meetInstructors'),
    aboutEyebrow:tr('site.aboutEyebrow'), aboutTitle:tr('site.aboutTitle1')+'\n'+tr('site.aboutTitle2'), aboutLead:tr('site.aboutLead'),
    instrEyebrow:tr('site.instructorsEyebrow'), instrTitle:tr('site.instructorsTitle1')+'\n'+tr('site.instructorsTitle2'), instrLead:tr('site.instructorsLead'),
    locEyebrow:tr('site.locationsEyebrow'), locTitle:tr('site.locationsTitle1')+'\n'+tr('site.locationsTitle2'), locLead:tr('site.locationsLead'),
    ctaTitle:tr('site.ctaTitle'), ctaLead:tr('site.ctaLead')
  };
}
const CONTENT_KEYS=['heroEyebrow','heroTitle','heroLead','findBtn','meetBtn','aboutEyebrow','aboutTitle','aboutLead','instrEyebrow','instrTitle','instrLead','locEyebrow','locTitle','locLead','ctaTitle','ctaLead'];
const FOOTER_KEYS=['tagline','address','hours','phone','email','whatsapp','instagram','facebook','tiktok','xiaohongshu','youtube','copyright'];

// ══════════ FOOTER — admin-editable contact details ══════════
// Rendered in two places: the public intro page footer, and the footer under every signed-in page
// (so students see the same contact number / WhatsApp / socials without hunting for them).
function footerContactRows(){
  const D=footerDefaults(), rows=[];
  const phone=FV('phone'), wa=FV('whatsapp'), email=FV('email');
  if(phone) rows.push(`<div class="foot-line"><span class="fi">📞</span><a href="tel:${H(digitsOnly(phone))}">${H(phone)}</a></div>`);
  if(wa){ const l=waLink(wa); rows.push(`<div class="foot-line"><span class="fi">💬</span><a href="${H(l)}" target="_blank" rel="noopener">WhatsApp · ${H(wa)}</a></div>`); }
  if(email) rows.push(`<div class="foot-line"><span class="fi">✉️</span><a href="mailto:${H(email)}">${H(email)}</a></div>`);
  return rows;
}
function footerVisitRows(){
  const rows=[];
  const addr=FV('address'), hours=FV('hours');
  if(addr) rows.push(`<div class="foot-line"><span class="fi">📍</span><a href="https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(addr)}" target="_blank" rel="noopener">${multiline(addr)}</a></div>`);
  if(hours) rows.push(`<div class="foot-line"><span class="fi">🕒</span><span>${multiline(hours)}</span></div>`);
  return rows;
}
function footerSocialHTML(){
  const nets=[
    {k:'instagram',icon:'📸',label:'Instagram',pre:'https://www.instagram.com/'},
    {k:'facebook', icon:'👍',label:'Facebook', pre:'https://www.facebook.com/'},
    {k:'tiktok',   icon:'🎵',label:'TikTok',   pre:'https://www.tiktok.com/@'},
    {k:'youtube',  icon:'▶️',label:'YouTube',  pre:'https://www.youtube.com/@'},
    {k:'xiaohongshu',icon:'📕',label:'Xiaohongshu',pre:'https://www.xiaohongshu.com/user/profile/'}
  ];
  return nets.map(nt=>{
    const raw=FV(nt.k); if(!raw) return '';
    const url=/^https?:\/\//i.test(raw)?raw:(nt.pre+raw.replace(/^@+/,''));
    return `<a href="${H(url)}" target="_blank" rel="noopener">${nt.icon} ${nt.label}</a>`;
  }).filter(Boolean).join('');
}
function renderContactFooters(){
  ensureIntro();
  const D=footerDefaults();
  const contact=footerContactRows(), visit=footerVisitRows(), social=footerSocialHTML();
  const tagline=FV('tagline');
  const copy=FV('copyright')||D.copyright;

  // ── public intro page ──
  const grid=document.getElementById('site-foot-grid');
  if(grid){
    const brandCol=`<div class="foot-col">
      <h5>B Dance Studio</h5>
      ${tagline?`<div class="foot-tagline">${multiline(tagline)}</div>`:''}
      ${social?`<div class="foot-social" style="margin-top:${tagline?'14px':'2px'}">${social}</div>`:''}
    </div>`;
    const contactCol=contact.length?`<div class="foot-col"><h5>${tr('page.footContactH')}</h5>${contact.join('')}</div>`:'';
    const visitCol=visit.length?`<div class="foot-col"><h5>${tr('page.footVisitH')}</h5>${visit.join('')}</div>`:'';
    grid.innerHTML=brandCol+contactCol+visitCol;
    grid.style.display=(tagline||social||contact.length||visit.length)?'':'none';
    // one filled column shouldn't stretch across the whole width
    const cols=[!!(tagline||social),!!contact.length,!!visit.length].filter(Boolean).length;
    grid.style.gridTemplateColumns=cols<=1?'1fr':(cols===2?'1.3fr 1fr':'1.3fr 1fr 1fr');
  }
  const copyEl=document.getElementById('site-foot-copy'); if(copyEl) copyEl.textContent=copy;
  const stylesEl=document.getElementById('site-foot-styles');
  if(stylesEl) stylesEl.textContent=[...new Set(DB.classes.map(c=>c.style))].join(' · ');

  // ── every signed-in page, students included ──
  const app=document.getElementById('app-foot-contact');
  if(app){
    const line=contact.concat(visit).join('');
    app.innerHTML=(line||social)
      ? `<div style="display:flex;flex-wrap:wrap;gap:2px 22px;justify-content:center">${line}</div>${social?`<div class="foot-social" style="justify-content:center;margin-top:10px">${social}</div>`:''}`
      : '';
    app.style.display=(line||social)?'':'none';
  }
  const appCopy=document.getElementById('app-foot-copy'); if(appCopy) appCopy.textContent=copy;
}
function addBranch(){
  const name=(prompt(tr('page.addBranchPrompt'))||'').trim();
  if(!name) return;
  if(DB.places.some(p=>p.name.toLowerCase()===name.toLowerCase())){ toast(tr('msg.branchExists'),false); return; }
  const id=Math.max(0,...DB.places.map(p=>p.id))+1;
  DB.places.push({id,name,address:'',introLink:''});
  renderIntroEditor();
  toast(tr('msg.branchAdded'));
}
function deleteBranch(id){
  const pl=DB.places.find(p=>p.id===id); if(!pl) return;
  const classCount=DB.classes.filter(c=>c.placeId===id).length;
  if(classCount>0){ toast(tr('msg.branchInUse').replace('{n}',classCount),false); return; }
  askConfirm(tr('msg.confirmDeleteBranch').replace('{s}',pl.name),()=>{
    DB.places=DB.places.filter(p=>p.id!==id);
    // the branch's own front-desk login has nothing left to belong to — remove it along with the
    // branch. Payment/rental history that references this placeId is left untouched: it's a real
    // record of money already collected, not something a branch being retired should erase.
    DB.accounts=DB.accounts.filter(a=>!(a.role==='counter'&&a.placeId===id));
    if(franchiseScope===id) franchiseScope=null;
    if(String(schedPlaceFilter)===String(id)) schedPlaceFilter='all';
    if(String(accStudentPlaceFilter)===String(id)) accStudentPlaceFilter='all';
    if(String(allClassPlaceFilter)===String(id)) allClassPlaceFilter='all';
    renderIntroEditor();
    toast(tr('msg.branchDeleted'));
  });
}
function renderIntroEditor(){
  ensureIntro();
  const host=document.getElementById('page-intro');
  if(!session||session.role!=='admin'){ host.innerHTML=`<div class="stitle">${tr('nav.intro')}</div><div class="empty">${tr('page.adminOnly')}</div>`; return; }
  const I=DB.intro, D=introDefaults();
  const v=k=>H((I[k]!=null&&I[k]!=='')?I[k]:D[k]||''); // full HTML-escape so & in a value survives round-trips
  const posterSrc=I.eventPoster||'';
  const C=contentDefaults(), F=footerDefaults();
  // Page Content fields show the admin's text if there is one, and the built-in text as a placeholder
  // when there isn't — so clearing a field visibly means "go back to the built-in wording".
  const cRow=(k,labelKey,rows)=>{
    const val=H(I[k]!=null?I[k]:''), ph=H(C[k]||'');
    return rows
      ? `<div class="fg"><label>${tr(labelKey)}</label><textarea class="finput" id="ic-${k}" rows="${rows}" placeholder="${ph}">${val}</textarea></div>`
      : `<div class="fg"><label>${tr(labelKey)}</label><input class="finput" id="ic-${k}" placeholder="${ph}" value="${val}"/></div>`;
  };
  const fRow=(k,labelKey,ph,rows)=>{
    const val=H((I.footer&&I.footer[k]!=null)?I.footer[k]:'');
    return rows
      ? `<div class="fg"><label>${tr(labelKey)}</label><textarea class="finput" id="if-${k}" rows="${rows}" placeholder="${H(ph||'')}">${val}</textarea></div>`
      : `<div class="fg"><label>${tr(labelKey)}</label><input class="finput" id="if-${k}" placeholder="${H(ph||'')}" value="${val}"/></div>`;
  };
  host.innerHTML=`
    <div class="stitle">🖼️ ${tr('page.introTitle')}</div>
    <div style="color:var(--muted);font-size:13px;margin-bottom:18px;max-width:640px">${tr('page.introIntro')}</div>

    <div class="scard" style="margin-bottom:16px">
      <h3 style="margin:0 0 4px">🎉 ${tr('page.introEventSection')}</h3>
      <div style="color:var(--muted);font-size:12px;margin-bottom:14px">${tr('page.introEventsNote')}</div>
      <div id="intro-events-list"></div>
      <button type="button" class="btn btn-o btn-s" onclick="addIntroEvent()">➕ ${tr('page.introAddEvent')}</button>
    </div>

    <div class="scard" style="margin-bottom:16px;display:none" data-feature="student-perks-shops">
      <!-- Student Perks (Collaborated Shops) feature disabled — remove display:none above to bring it back. -->
      <h3 style="margin:0 0 4px">🛍️ ${tr('page.introShopSection')}</h3>
      <div style="color:var(--muted);font-size:12px;margin-bottom:14px">${tr('page.introShopsNote')}</div>
      <div id="intro-shops-list"></div>
      <button type="button" class="btn btn-o btn-s" onclick="addIntroShop()">➕ ${tr('page.introAddShop')}</button>
    </div>

    <div class="scard" style="margin-bottom:16px">
      <h3 style="margin:0 0 12px">🎬 ${tr('page.introVideoSection')}</h3>
      <div style="color:var(--muted);font-size:12px;margin-bottom:10px">${tr('page.introVideoNote')}</div>
      <div class="frow"><div class="fg"><label>${tr('page.introVideoEyebrow')}</label><input class="finput" id="intro-videoEyebrow" value="${v('videoEyebrow')}"/></div>
        <div class="fg"><label>${tr('page.introVideoTitle')}</label><input class="finput" id="intro-videoTitle" value="${v('videoTitle')}"/></div></div>
      <div class="fg"><label>${tr('page.introVideoUrl')}</label><input class="finput" id="intro-videoUrl" placeholder="https://youtu.be/..." value="${H(I.videoUrl||'')}"/>${uploadRowHTML('intro-videoUrl')}</div>
    </div>

    <div class="scard" style="margin-bottom:16px">
      <h3 style="margin:0 0 12px">📽️ ${tr('page.reelSection')}</h3>
      <div style="color:var(--muted);font-size:12px;margin-bottom:10px">${tr('page.reelNote')}</div>
      <div class="fg"><label>${tr('page.introVideoUrl')}</label><input class="finput" id="intro-reelUrl" placeholder="https://youtu.be/..." value="${H(I.reelUrl||'')}"/>${uploadRowHTML('intro-reelUrl')}</div>
    </div>

    <div class="scard" style="margin-bottom:16px">
      <h3 style="margin:0 0 4px">🖼️ ${tr('page.heroImageSection')}</h3>
      <div style="color:var(--muted);font-size:12px;margin-bottom:12px">${tr('page.heroImageNote')}</div>
      <div style="display:flex;align-items:center;gap:12px;flex-wrap:wrap">
        <div id="intro-heroimg-preview" style="width:150px;height:84px;border-radius:4px;background:#1a1a1a center/cover no-repeat;flex:none;border:1px solid var(--border)${I.heroImage?`;background-image:url('${(I.heroImage||'').replace(/'/g,"%27")}')`:''}"></div>
        <input type="file" accept="image/*" onchange="handleHeroImage(this)"/>
        <button type="button" class="btn btn-o btn-s" onclick="clearHeroImage()">✕</button>
      </div>
      <input type="hidden" id="intro-heroImage" value="${(I.heroImage||'').replace(/"/g,'&quot;')}"/>
    </div>

    <div class="scard" style="margin-bottom:16px">
      <h3 style="margin:0 0 12px">📍 ${tr('page.introLocSection')}</h3>
      <div style="color:var(--muted);font-size:12px;margin-bottom:14px">${tr('page.introLocNote')}</div>
      ${DB.places.map(pl=>`<div class="fg" style="border:1px solid var(--border);border-radius:6px;padding:10px;margin-bottom:12px">
        <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:8px">
          <label style="margin:0">🏢 ${H(pl.name)}</label>
          <button type="button" class="btn btn-o btn-s" style="border-color:#a33;color:#e88" onclick="deleteBranch(${pl.id})">🗑️ ${tr('common.delete')}</button>
        </div>
        <textarea class="finput" id="intro-place-addr-${pl.id}" rows="2" placeholder="${H(DEFAULT_PLACE_ADDRESS[pl.id]||pl.name+', Malaysia')}">${H(pl.address||'')}</textarea>
        <input class="finput" id="intro-place-link-${pl.id}" style="margin-top:6px" value="${H(pl.introLink||'')}" placeholder="${H(tr('page.introBranchLinkPh'))}"/>
        <div style="color:var(--muted);font-size:12px;margin-top:5px">${tr('page.introBranchLinkNote')}</div></div>`).join('')}
      <button type="button" class="btn btn-o btn-s" onclick="addBranch()">➕ ${tr('page.addBranch')}</button>
    </div>

    <div class="scard" style="margin-bottom:16px">
      <h3 style="margin:0 0 6px">📝 ${tr('page.contentSection')}</h3>
      <div style="color:var(--muted);font-size:12px;margin-bottom:14px">${tr('page.contentNote')}</div>

      <div style="font-size:11px;font-weight:700;letter-spacing:1.4px;text-transform:uppercase;color:var(--gold);margin:2px 0 10px">Hero</div>
      ${cRow('heroEyebrow','page.cHeroEyebrow')}
      ${cRow('heroTitle','page.cHeroTitle',2)}
      ${cRow('heroLead','page.cHeroLead',3)}
      <div class="frow">${cRow('findBtn','page.cFindBtn')}${cRow('meetBtn','page.cMeetBtn')}</div>

      <div style="font-size:11px;font-weight:700;letter-spacing:1.4px;text-transform:uppercase;color:var(--gold);margin:16px 0 10px;border-top:1px solid var(--border);padding-top:14px">About</div>
      ${cRow('aboutEyebrow','page.cAboutEyebrow')}
      ${cRow('aboutTitle','page.cAboutTitle',2)}
      ${cRow('aboutLead','page.cAboutLead',4)}

      <div style="font-size:11px;font-weight:700;letter-spacing:1.4px;text-transform:uppercase;color:var(--gold);margin:16px 0 10px;border-top:1px solid var(--border);padding-top:14px">Instructors</div>
      ${cRow('instrEyebrow','page.cInstrEyebrow')}
      ${cRow('instrTitle','page.cInstrTitle',2)}
      ${cRow('instrLead','page.cInstrLead',3)}

      <div style="font-size:11px;font-weight:700;letter-spacing:1.4px;text-transform:uppercase;color:var(--gold);margin:16px 0 10px;border-top:1px solid var(--border);padding-top:14px">Locations</div>
      ${cRow('locEyebrow','page.cLocEyebrow')}
      ${cRow('locTitle','page.cLocTitle',2)}
      ${cRow('locLead','page.cLocLead',3)}

      <div style="font-size:11px;font-weight:700;letter-spacing:1.4px;text-transform:uppercase;color:var(--gold);margin:16px 0 10px;border-top:1px solid var(--border);padding-top:14px">Closing</div>
      ${cRow('ctaTitle','page.cCtaTitle')}
      ${cRow('ctaLead','page.cCtaLead',2)}
    </div>

    <div class="scard" style="margin-bottom:16px">
      <h3 style="margin:0 0 6px">📇 ${tr('page.footerSection')}</h3>
      <div style="color:var(--muted);font-size:12px;margin-bottom:14px">${tr('page.footerNote')}</div>
      ${fRow('tagline','page.footTagline','One or two lines about the studio',2)}
      <div class="frow">
        ${fRow('phone','page.footPhone','+60 12-345 6789')}
        ${fRow('whatsapp','page.footWhatsapp','+60 12-345 6789')}
      </div>
      ${fRow('email','page.footEmail','hello@bdancestudio.com')}
      ${fRow('address','page.footAddress','Studio address',2)}
      ${fRow('hours','page.footHours','Mon–Sat 10am–9pm · Sun by appointment')}

      <div style="font-size:11px;font-weight:700;letter-spacing:1.4px;text-transform:uppercase;color:var(--gold);margin:16px 0 10px;border-top:1px solid var(--border);padding-top:14px">${tr('page.footFollowH')}</div>
      <div class="frow">
        ${fRow('instagram','page.footInstagram','@bdancestudio or full link')}
        ${fRow('facebook','page.footFacebook','page name or full link')}
      </div>
      <div class="frow">
        ${fRow('tiktok','page.footTiktok','@bdancestudio or full link')}
        ${fRow('youtube','page.footYoutube','@channel or full link')}
      </div>
      ${fRow('xiaohongshu','page.footXhs','Paste your profile / share link')}
      ${fRow('copyright','page.footCopy',F.copyright)}
    </div>

    <div style="display:flex;gap:10px;flex-wrap:wrap">
      <button class="btn btn-g" onclick="guardedOnce('intro',saveIntro)">💾 ${tr('page.introSave')}</button>
      <button class="btn btn-o" onclick="resetIntro()">${tr('page.introReset')}</button>
    </div>`;
  __eventsDraft=getIntroEvents();     // working copy for the event cards; committed on Save
  renderEventEditors();
  __shopsDraft=getIntroShopsForEdit();  // working copy for the shop cards; committed on Save
  renderShopEditors();
}

// ── Multi-event editor ───────────────────────────────────────────────
// __eventsDraft is edited live by the cards below and written to DB.intro.events on Save.
let __eventsDraft=[];
function renderEventEditors(){
  const host=document.getElementById('intro-events-list');
  if(!host) return;
  if(!__eventsDraft.length) __eventsDraft=[blankEvent()];
  host.innerHTML=__eventsDraft.map((ev,i)=>eventEditorCard(ev,i)).join('');
}
function eventEditorCard(ev,i){
  const A=(f)=>H(ev[f]!=null?ev[f]:'');
  const poster=ev.poster||'';
  const removeBtn=__eventsDraft.length>1
    ? `<button type="button" class="btn btn-o btn-s" style="border-color:#a33;color:#e88" onclick="removeIntroEvent(${i})">🗑️ ${H(tr('page.introRemoveEvent'))}</button>` : '';
  return `<div class="scard" style="background:rgba(255,255,255,.02);border-style:dashed;margin-bottom:12px">
    <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:10px">
      <div style="font-size:11px;font-weight:700;letter-spacing:1.4px;text-transform:uppercase;color:var(--gold)">${H(tr('page.introEventN')).replace('{n}',i+1)}</div>
      ${removeBtn}
    </div>
    <div class="frow"><div class="fg"><label>${tr('page.introBadge')}</label><input class="finput" value="${A('badge')}" oninput="evField(${i},'badge',this.value)"/></div>
      <div class="fg"><label>${tr('page.introEventTitle')}</label><input class="finput" value="${A('title')}" oninput="evField(${i},'title',this.value)"/></div></div>
    <div class="fg"><label>${tr('page.introEventLead')}</label><textarea class="finput" rows="2" oninput="evField(${i},'lead',this.value)">${A('lead')}</textarea></div>
    <div class="frow"><div class="fg"><label>${tr('page.introDate')}</label><input class="finput" value="${A('date')}" oninput="evField(${i},'date',this.value)"/></div>
      <div class="fg"><label>${tr('page.introTime')}</label><input class="finput" value="${A('time')}" oninput="evField(${i},'time',this.value)"/></div></div>
    <div class="fg"><label>${tr('page.introVenue')}</label><input class="finput" value="${A('venue')}" oninput="evField(${i},'venue',this.value)"/></div>
    <div class="fg"><label>${tr('page.introCats')}</label><input class="finput" value="${A('cats')}" oninput="evField(${i},'cats',this.value)"/></div>
    <div class="fg"><label>${tr('page.introRegUrl')}</label><input class="finput" value="${A('regUrl')}" placeholder="https://forms.gle/..." oninput="evField(${i},'regUrl',this.value)"/>
      <div style="color:var(--muted);font-size:12px;margin-top:5px">${tr('page.introRegUrlNote')}</div></div>
    <div class="fg"><label>${tr('page.introPoster')}</label>
      <div style="display:flex;align-items:center;gap:12px">
        <div id="ev-poster-preview-${i}" style="width:88px;height:120px;border-radius:6px;background:#222 center/cover no-repeat;flex:none;border:1px solid var(--border)${poster?`;background-image:url('${poster.replace(/'/g,"%27")}')`:''}"></div>
        <input type="file" accept="image/*" onchange="handleEventPoster(${i},this)"/>
        <button type="button" class="btn btn-o btn-s" onclick="clearEventPoster(${i})">✕</button>
      </div>
    </div>
  </div>`;
}
function evField(i,field,val){ if(__eventsDraft[i]) __eventsDraft[i][field]=val; }
function addIntroEvent(){ __eventsDraft.push(blankEvent()); renderEventEditors(); }
function removeIntroEvent(i){ __eventsDraft.splice(i,1); if(!__eventsDraft.length) __eventsDraft=[blankEvent()]; renderEventEditors(); }
async function handleEventPoster(i,input){
  const file=input.files&&input.files[0];
  input.value='';
  if(!file) return;
  const pv=document.getElementById('ev-poster-preview-'+i);
  const prevValue=(__eventsDraft[i]&&__eventsDraft[i].poster)||'';
  if(pv){ pv.style.backgroundImage='none'; }
  try{
    const url=await uploadImageBlob(file,{maxDim:720,quality:0.82,mime:'image/jpeg',ext:'jpg'});
    if(__eventsDraft[i]) __eventsDraft[i].poster=url;
    if(pv) pv.style.backgroundImage=`url('${url}')`;
  }catch(e){
    if(__eventsDraft[i]) __eventsDraft[i].poster=prevValue;
    if(pv) pv.style.backgroundImage=prevValue?`url('${prevValue}')`:'none';
    toast(tr('msg.uploadFailed')+' — '+((e&&e.message)||String(e)),false);
  }
}
function clearEventPoster(i){
  if(__eventsDraft[i]) __eventsDraft[i].poster='';
  const pv=document.getElementById('ev-poster-preview-'+i); if(pv) pv.style.backgroundImage='none';
}

// ── Multi-shop editor (collaborated shops) ───────────────────────────
let __shopsDraft=[];
function getIntroShopsForEdit(){
  ensureIntro();
  const list=DB.intro.shops;
  const arr=Array.isArray(list)?list.map(s=>Object.assign(blankShop(),s)):[];
  return arr.length?arr:[blankShop()]; // always show at least one empty card to fill in
}
function renderShopEditors(){
  const host=document.getElementById('intro-shops-list');
  if(!host) return;
  if(!__shopsDraft.length) __shopsDraft=[blankShop()];
  host.innerHTML=__shopsDraft.map((sh,i)=>shopEditorCard(sh,i)).join('');
}
function shopEditorCard(sh,i){
  const A=f=>H(sh[f]!=null?sh[f]:'');
  const photo=sh.photo||'';
  const removeBtn=__shopsDraft.length>1
    ? `<button type="button" class="btn btn-o btn-s" style="border-color:#a33;color:#e88" onclick="removeIntroShop(${i})">🗑️ ${H(tr('page.introRemoveShop'))}</button>` : '';
  return `<div class="scard" style="background:rgba(255,255,255,.02);border-style:dashed;margin-bottom:12px">
    <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:10px">
      <div style="font-size:11px;font-weight:700;letter-spacing:1.4px;text-transform:uppercase;color:var(--gold)">${H(tr('page.introShopN')).replace('{n}',i+1)}</div>
      ${removeBtn}
    </div>
    <div class="fg"><label>${tr('page.introShopName')}</label><input class="finput" value="${A('name')}" oninput="shopField(${i},'name',this.value)"/></div>
    <div class="fg"><label>${tr('page.introShopItems')}</label><textarea class="finput" rows="4" placeholder="${H(tr('page.introShopItemsPh'))}" oninput="shopField(${i},'items',this.value)">${A('items')}</textarea>
      <div style="color:var(--muted);font-size:12px;margin-top:5px">${tr('page.introShopItemsNote')}</div></div>
    <div class="fg"><label>${tr('page.introShopUrl')}</label><input class="finput" value="${A('url')}" placeholder="https://... or wa.me/60..." oninput="shopField(${i},'url',this.value)"/>
      <div style="color:var(--muted);font-size:12px;margin-top:5px">${tr('page.introShopUrlNote')}</div></div>
    <div class="fg"><label>${tr('page.introShopPhoto')}</label>
      <div style="display:flex;align-items:center;gap:12px">
        <div id="shop-photo-preview-${i}" style="width:96px;height:96px;border-radius:16px;background:#222 center/cover no-repeat;flex:none;border:1px solid var(--border)${photo?`;background-image:url('${photo.replace(/'/g,"%27")}')`:''}"></div>
        <input type="file" accept="image/*" onchange="handleShopPhoto(${i},this)"/>
        <button type="button" class="btn btn-o btn-s" onclick="clearShopPhoto(${i})">✕</button>
      </div>
      <div style="color:var(--muted);font-size:12px;margin-top:5px">${tr('page.introShopPhotoNote')}</div>
    </div>
  </div>`;
}
function shopField(i,field,val){ if(__shopsDraft[i]) __shopsDraft[i][field]=val; }
function addIntroShop(){ __shopsDraft.push(blankShop()); renderShopEditors(); }
function removeIntroShop(i){ __shopsDraft.splice(i,1); if(!__shopsDraft.length) __shopsDraft=[blankShop()]; renderShopEditors(); }
async function handleHeroImage(input){
  const file=input.files&&input.files[0];
  input.value='';
  if(!file) return;
  const pv=document.getElementById('intro-heroimg-preview');
  const prevValue=(document.getElementById('intro-heroImage')||{}).value||'';
  if(pv){ pv.style.backgroundImage='none'; }
  try{
    // wide enough to stay sharp while it zooms in — this is usually the single biggest image in the
    // app, which is exactly why it needs to live in Storage rather than inline in the database blob
    const url=await uploadImageBlob(file,{maxDim:1600,quality:0.82,mime:'image/jpeg',ext:'jpg'});
    document.getElementById('intro-heroImage').value=url;
    if(pv) pv.style.backgroundImage=`url('${url}')`;
  }catch(e){
    document.getElementById('intro-heroImage').value=prevValue;
    if(pv) pv.style.backgroundImage=prevValue?`url('${prevValue}')`:'none';
    toast(tr('msg.uploadFailed')+' — '+((e&&e.message)||String(e)),false);
  }
}
function clearHeroImage(){
  document.getElementById('intro-heroImage').value='';
  document.getElementById('intro-heroimg-preview').style.backgroundImage='none';
}
async function handleShopPhoto(i,input){
  const file=input.files&&input.files[0];
  input.value='';
  if(!file) return;
  const pv=document.getElementById('shop-photo-preview-'+i);
  const prevValue=(__shopsDraft[i]&&__shopsDraft[i].photo)||'';
  if(pv){ pv.style.backgroundImage='none'; }
  try{
    // shop icons are a fixed 500x500 square — center-crop then scale so every icon lines up cleanly
    const url=await uploadImageBlob(file,{maxDim:500,quality:0.85,mime:'image/jpeg',ext:'jpg',square:true});
    if(__shopsDraft[i]) __shopsDraft[i].photo=url;
    if(pv) pv.style.backgroundImage=`url('${url}')`;
  }catch(e){
    if(__shopsDraft[i]) __shopsDraft[i].photo=prevValue;
    if(pv) pv.style.backgroundImage=prevValue?`url('${prevValue}')`:'none';
    toast(tr('msg.uploadFailed')+' — '+((e&&e.message)||String(e)),false);
  }
}
function clearShopPhoto(i){
  if(__shopsDraft[i]) __shopsDraft[i].photo='';
  const pv=document.getElementById('shop-photo-preview-'+i); if(pv) pv.style.backgroundImage='none';
}
async function saveIntro(){
  if(!(await requireConnection())) return; // no/slow connection — retries a cold cloud function before giving up, same as every other Save
  ensureIntro();
  const gv=id=>{ const el=document.getElementById(id); return el?el.value.trim():''; };
  CONTENT_KEYS.forEach(k=>{ DB.intro[k]=gv('ic-'+k); });     // '' = fall back to the built-in wording
  FOOTER_KEYS.forEach(k=>{ DB.intro.footer[k]=gv('if-'+k); });
  const g=id=>{ const el=document.getElementById(id); return el?el.value.trim():''; };
  const oldVideo=DB.intro.videoUrl||'', oldReel=DB.intro.reelUrl||'';
  const oldHeroImage=DB.intro.heroImage||'';
  const oldPosters=(DB.intro.events||[]).map(ev=>ev.poster||'').filter(Boolean);
  const oldShopPhotos=(DB.intro.shops||[]).map(sh=>sh.photo||'').filter(Boolean);
  ['videoEyebrow','videoTitle','videoUrl','reelUrl'].forEach(k=>{ DB.intro[k]=g('intro-'+k); });
  // Events: save the whole list. Trim each field; keep every card that has any content, plus always
  // at least one (even if blank, so the section still renders with the built-in defaults).
  let evs=(__eventsDraft||[]).map(ev=>{ const o=blankEvent(); Object.keys(o).forEach(k=>o[k]=(ev[k]!=null?String(ev[k]).trim():'')); return o; });
  const nonEmpty=evs.filter(ev=>Object.values(ev).some(x=>x!==''));
  DB.intro.events = nonEmpty.length ? nonEmpty : [blankEvent()];
  // clear the old single-event flat keys so they can't shadow / duplicate the new events array
  ['eventBadge','eventTitle','eventLead','eventDate','eventTime','eventVenue','eventCats','eventRegUrl','eventPoster'].forEach(k=>{ delete DB.intro[k]; });
  // Collaborated shops: keep each card that has a name or a photo; trim text fields.
  let shops=(__shopsDraft||[]).map(sh=>{ const o=blankShop(); Object.keys(o).forEach(k=>o[k]=(sh[k]!=null?(k==='photo'?sh[k]:String(sh[k]).trim()):'')); return o; });
  DB.intro.shops = shops.filter(sh=>(sh.name&&sh.name.trim())||sh.photo);
  DB.intro.heroImage=(document.getElementById('intro-heroImage')||{}).value||'';
  delete DB.intro.videoData; // reel is link-only now — drop any previously uploaded clip
  DB.places.forEach(pl=>{ const el=document.getElementById('intro-place-addr-'+pl.id); if(el) pl.address=el.value.trim();
    const lel=document.getElementById('intro-place-link-'+pl.id); if(lel) pl.introLink=lel.value.trim(); });
  if(!await commitSave()) return;
  dropOrphanMedia(oldVideo); dropOrphanMedia(oldReel); dropOrphanMedia(oldHeroImage);
  oldPosters.forEach(dropOrphanMedia);
  oldShopPhotos.forEach(dropOrphanMedia);
  renderContactFooters();
  toast(tr('page.introSaved'));
}
function resetIntro(){
  askConfirm(tr('page.introResetConfirm'),async()=>{
    if(!(await requireConnection())) return; // same warm-up+retry gate as saveIntro(), not a single-shot push
    DB.intro={}; if(!await commitSave()) return; renderIntroEditor(); toast(tr('page.introReset2'));
  });
}

// ══════════ LOGIN ══════════
let pendingFranchise=null; // branch chosen by a counter before entering credentials
const COUNTER_DEMO={1:'counter.kl',2:'counter.pg',3:'counter.jb',4:'counter.kk'};

function chooseRole(r){
  loginRole=r;
  document.getElementById('login-screen').style.display='none';
  if(r==='counter'){
    // counters pick their branch BEFORE entering credentials — each branch has its own account
    renderFranchisePicker();
    document.getElementById('branch-screen').style.display='flex';
  }else{
    showCredScreen();
  }
}

function renderFranchisePicker(){
  document.getElementById('branch-picker-title').textContent=tr('login.chooseFranchise');
  document.getElementById('branch-back-btn').textContent=tr('login.back');
  const classWord=currentLang==='zh'?'堂课':null;
  document.getElementById('branch-list').innerHTML=DB.places.map(pl=>{
    const clsCount=DB.classes.filter(c=>c.placeId===pl.id).length;
    const label=currentLang==='zh'?`${clsCount} ${classWord}`:`${clsCount} class${clsCount!==1?'es':''}`;
    return `<button class="btn btn-o" style="width:100%;display:flex;justify-content:space-between;align-items:center;padding:14px 16px;text-align:left" onclick="selectFranchise(${pl.id})">
      <span style="font-weight:600">🏢 ${pl.name}</span><span style="color:var(--muted);font-size:12px">${label}</span>
    </button>`;
  }).join('');
}

function selectFranchise(placeId){
  pendingFranchise=placeId;
  document.getElementById('branch-screen').style.display='none';
  showCredScreen();
}

function showCredScreen(){
  clearCredError();
  const roleLabelEn=loginRole.charAt(0).toUpperCase()+loginRole.slice(1);
  const roleLabel=tr('login.'+loginRole);
  const icons={admin:'🛡️',counter:'🏢',teacher:'👩‍🏫',student:'🎓'};
  const signInAs=currentLang==='zh'?`${icons[loginRole]} 以${roleLabel}身份登录`:`${icons[loginRole]} Sign in as ${roleLabelEn}`;
  document.getElementById('cred-title').textContent=signInAs;
  document.getElementById('cred-sub').textContent=loginRole==='counter'?`${Pl(pendingFranchise).name} ${currentLang==='zh'?'分店':'Branch'}`:`${roleLabel} ${currentLang==='zh'?'登录':'Access'}`;
  document.getElementById('login-user').placeholder=tr('login.username');
  document.getElementById('login-pass').placeholder=tr('login.password');
  document.getElementById('cred-signin-btn').textContent=tr('login.signIn');
  document.getElementById('cred-back-btn').textContent=tr('login.back');
  // no demo credentials shown — users type their own; the field placeholders are the only labels
  document.getElementById('login-user').value='';
  document.getElementById('login-pass').value='';
  document.getElementById('cred-hint').innerHTML='';
  document.getElementById('cred-screen').style.display='flex';
}

function backFromCred(){
  document.getElementById('cred-screen').style.display='none';
  if(loginRole==='counter'){
    document.getElementById('branch-screen').style.display='flex';
  }else{
    document.getElementById('login-screen').style.display='flex';
  }
}

function backToLogin(){
  pendingFranchise=null;
  document.getElementById('branch-screen').style.display='none';
  document.getElementById('cred-screen').style.display='none';
  document.getElementById('login-screen').style.display='flex';
}

function showCredError(msg){
  const el=document.getElementById('cred-error');
  el.textContent='⚠️ '+msg;
  el.style.display='block';
}
function clearCredError(){
  const el=document.getElementById('cred-error');
  if(el){ el.style.display='none'; el.textContent=''; }
}
// Asks the server to check the credentials. Returns {ok, account, token} on success, {ok:false} when
// the password is wrong, or null when the server couldn't be reached / doesn't know this action yet.
// That last case matters during rollout: a site running the previous function must still let staff in.
async function serverLogin(u,p,role){
  try{
    const r=await fetchWithTimeout(CLOUD_URL,{method:'POST',headers:{'Content-Type':'application/json'},
      body:JSON.stringify({action:'login',user:u,pass:p,role})});
    if(!r||!r.ok) return null;                       // 404/500 → older function deployed, fall back
    const j=await r.json().catch(()=>null);
    if(!j||typeof j.ok!=='boolean') return null;     // unrecognised shape → fall back
    return j;
  }catch(e){ return null; }                          // offline/timeout → fall back
}
async function doLogin(){
  clearCredError();
  const u=document.getElementById('login-user').value.trim();
  const p=document.getElementById('login-pass').value;
  if(!u||!p){ showCredError(currentLang==='zh'?'请输入用户名与密码':'Please enter your username and password'); return; }
  if(!(await withBusy(tr('msg.busySigningIn'),()=>requireConnection()))){ showCredError(tr('msg.offlineBanner')); return; } // no/slow connection — stop here, don't sign in
  // The password is checked on the server, and the token it returns is what every save is signed
  // with. So a sign-in that can't reach the server is refused outright rather than handing out a
  // session that looks fine but silently can't save anything.
  const res=await withBusy(tr('msg.busySigningIn'),()=>serverLogin(u,p,loginRole));
  if(!res){
    showCredError(currentLang==='zh'?'无法连接服务器验证登录，请稍后再试':'Could not reach the server to verify your sign-in — please try again');
    return;
  }
  if(!res.ok){ showCredError('Invalid username or password'); return; }
  sessionToken=res.token||'';
  // Until now this browser only had the public landing-page slice. Pull the real database with the
  // new token before going any further — entering the app on partial data would show empty lists.
  const full=await withBusy(tr('msg.busySigningIn'),()=>cloudLoad());
  if(!full||dbIsPublicOnly){
    sessionToken='';
    showCredError(currentLang==='zh'?'无法载入数据，请重试':'Signed in, but could not load your data — please try again');
    return;
  }
  const acc=DB.accounts.find(a=>a.user===res.account.user&&a.role===res.account.role)||res.account;
  if(loginRole==='counter'){
    // enforce one-account-per-branch: the account must belong to the chosen location
    if(acc.placeId!==pendingFranchise){
      showCredError(`This account belongs to ${Pl(acc.placeId).name} — it can't be used at ${Pl(pendingFranchise).name}`);
      return;
    }
    franchiseScope=acc.placeId;
  }
  session=acc;
  persistSession();
  enterApp();
}

// Every account starts with its own fresh filters — one account's filter choices never carry over to
// another (e.g. after admin logs out and a counter logs in on the same device).
function resetSessionFilters(){
  payFilter='all';
  adminDayFilter='Monday'; schedPlaceFilter='all'; schedTeacherFilter='all';
  stuPlaceFilter='all'; stuTeacherFilter='all'; stuSortBy='name';
  payTeacherFilter='all'; payPlaceFilter='all'; payClassFilter='all'; payMonthFilter='all'; payDateFrom=null; payDateTo=null;
  teacherDayFilter='Monday';
  studentPayFrom=null; studentPayTo=null;
  allClassStyleFilter='all'; allClassPlaceFilter='all'; allClassTeacherFilter='all';
  attClassId=null; attDate=null; attTeacherFilter=null; attDayFilter=null; attHistFrom=null; attHistTo=null;
  dropinPlaceFilter='all'; dropinTeacherFilter='all'; dropinClassFilter='all';
  try{ selectedPaymentIds&&selectedPaymentIds.clear&&selectedPaymentIds.clear(); }catch(e){}
  try{ dismissedFloatCards&&dismissedFloatCards.clear&&dismissedFloatCards.clear(); }catch(e){}
}

function enterApp(){
  markActivity();   // start the idle clock from the sign-in, not from whenever the page was loaded —
                    // a device parked on the login screen all morning must not time out on entry
  resetSessionFilters();
  document.getElementById('site-screen').style.display='none'; // hide the public intro page — signing in replaces it with the app
  document.getElementById('login-screen').style.display='none';
  document.getElementById('branch-screen').style.display='none';
  document.getElementById('cred-screen').style.display='none';
  document.getElementById('app').classList.add('visible');
  document.getElementById('u-name').textContent=session.name;
  const roleLabel=session.role.charAt(0).toUpperCase()+session.role.slice(1);
  const roleText=franchiseScope?`${roleLabel} · ${Pl(franchiseScope).name}`:roleLabel;
  document.getElementById('u-role').textContent=roleText;
  document.getElementById('u-avatar').textContent=ini(session.name);
  document.getElementById('u-name-drawer').textContent=session.name;
  document.getElementById('u-role-drawer').textContent=roleText;
  document.getElementById('u-avatar-drawer').textContent=ini(session.name);
  buildNav();
  maybePromptPasswordChange();
}
// Students and teachers are handed an auto-generated password when their account is created — one
// the front desk can read aloud, which also means it's guessable by anyone who knows their name or
// phone number. pwChanged is only set once someone actually changes it, so its absence is a reliable
// "still on the handed-out password" signal. Counters are admin-managed and excluded.
function maybePromptPasswordChange(){
  if(!session||!['student','teacher'].includes(session.role)) return;
  const acc=DB.accounts.find(a=>a.user===session.user);
  if(!acc||acc.pwChanged) return;
  setTimeout(()=>{
    if(!session||document.getElementById('m-account').classList.contains('open')) return;
    toast(tr('msg.changePasswordPrompt'),false);
    openMyAccount();
  },700);
}

function doLogout(){
  sessionToken='';   // the signed proof dies with the session
  dbIsPublicOnly=false;   // next pull decides afresh what this browser is allowed to hold
  session=null;
  franchiseScope=null;
  pendingFranchise=null;
  clearPersistedSession();
  document.getElementById('app').classList.remove('visible');
  document.getElementById('branch-screen').style.display='none';
  document.getElementById('cred-screen').style.display='none';
  document.getElementById('login-screen').style.display='none';
  document.querySelectorAll('.page').forEach(p=>p.classList.remove('active'));
  // Signing out IS "going to the landing page" from the visitor's point of view, so it gets the same
  // loading moment as a fresh visit — and the hero (count, heading, reel video, everything gated
  // behind .hero-ready) is reset so it plays again here too, not just the very first time the page
  // was ever opened. Nothing below actually needs to wait on anything; showBusy/hideBusy still holds
  // it up for a moment on purpose, the same as any other loading screen, rather than skipping straight
  // to a silent instant swap.
  showBusy(tr('msg.busyLoading'),true);
  const ssEl=document.getElementById('site-screen');
  if(ssEl) ssEl.classList.remove('hero-ready');
  // return to the intro (studio site) page, re-rendered in whatever language the user
  // switched to while logged in — the login screens are re-translated too
  translateStatic();
  translateLoginScreens();
  renderSiteScreen();
  document.getElementById('site-screen').style.display='block';
  hideBusy();
  toast(tr('msg.signedOut'));
}

// ══════════ IDLE AUTO-LOGOUT ══════════
// The real risk is a shared counter iPad left face-up on the desk: whoever picks it up next inherits
// the session that was open, with full reach into fees and student records. So a session ends itself
// after IDLE_LOGOUT_MS with no touch, key, click or scroll.
//
// Checked on an interval against a wall-clock stamp rather than a rolling setTimeout, because an iPad
// that sleeps or gets backgrounded freezes its timers: a timeout armed before the sleep fires late,
// after wake, having "counted" none of the time the device was away. Comparing Date.now() means a
// device that slept through the whole window is signed out on the first check after it wakes — which
// is the only moment that actually matters, since that is when someone is holding it again.
const IDLE_LOGOUT_MS=5*60*1000;   // ← the whole rule lives here
const IDLE_WARN_MS=60*1000;       // heads-up this long before the end
let idleLast=Date.now();
let idleWarned=false;
// The session itself only ever lived in a JS variable, so ANY reload — a manual browser refresh, iOS
// Safari reclaiming memory on a backgrounded tab, a deploy landing under the service worker — dropped
// straight back to the sign-in screen even though nothing about the session had actually expired. This
// persists just enough to restore it (which account, which branch, and the same wall-clock idle stamp
// idleCheck() already trusts) so a reload behaves like any other moment of inactivity: still signed in
// if under the 5-minute idle limit, signed out for real if not — never signed in forever, never signed
// out just because the page happened to reload.
const SESSION_KEY='bds_session';
let lastPersistedIdleAt=0;
function persistSession(){
  try{
    if(!session){ localStorage.removeItem(SESSION_KEY); return; }
    localStorage.setItem(SESSION_KEY,JSON.stringify({role:session.role,user:session.user,franchiseScope,ts:idleLast,token:sessionToken||''}));
  }catch(e){}
}
function clearPersistedSession(){ try{ localStorage.removeItem(SESSION_KEY); }catch(e){} }

function markActivity(){
  idleLast=Date.now(); idleWarned=false;
  // don't touch storage on every single scroll/tap — once every few seconds is plenty to keep the
  // persisted idle stamp close enough to accurate for the boot-time restore check below
  if(session && Date.now()-lastPersistedIdleAt>5000){ lastPersistedIdleAt=Date.now(); persistSession(); }
}

function idleCheck(){
  if(!session) return;   // nothing to protect on the site / login screens
  const idle=Date.now()-idleLast;
  if(idle>=IDLE_LOGOUT_MS){ idleLogout(); return; }
  if(idle>=IDLE_LOGOUT_MS-IDLE_WARN_MS && !idleWarned){ idleWarned=true; toast(tr('msg.idleWarn'),false); }
}

async function idleLogout(){
  // Close anything floating BEFORE handing over to doLogout(), which only swaps the screens — an open
  // modal or the nav drawer would otherwise be left hanging over the public site page with the session
  // already gone behind it, still showing whatever student's details were on screen.
  document.querySelectorAll('.mbg.open').forEach(m=>{ try{ stopModalMedia(m.id); }catch(e){} m.classList.remove('open'); });
  ['nav-drawer','drawer-backdrop'].forEach(id=>{ const el=document.getElementById(id); if(el) el.classList.remove('open'); });
  // The 4s autosave may not have ticked since the last edit (especially if this tab was backgrounded —
  // browsers throttle setInterval in hidden tabs, so it may not have run at all while idle), and nobody
  // is watching to retry. This MUST be awaited and MUST run before doLogout() below: doLogout() clears
  // sessionToken synchronously, and cloudSave()'s actual network request doesn't fire until the next
  // microtask — call it without awaiting first and the request goes out with an already-blank token,
  // gets silently rejected, and whatever was just edited is lost with no error shown anywhere.
  try{ saveDB(); }catch(e){}
  try{ await cloudSave(); }catch(e){}
  doLogout();
  toast(tr('msg.idleLogout'),false);   // replaces doLogout()'s own "Signed out" — says WHY it happened
}

// capture:true so activity still registers when a handler stops the event from bubbling; passive so
// none of this can ever delay a scroll or a tap.
['pointerdown','keydown','touchstart','scroll','wheel'].forEach(ev=>document.addEventListener(ev,markActivity,{passive:true,capture:true}));
// Returning to a backgrounded tab is the other moment worth checking on the spot, rather than waiting
// out the rest of the 15s tick.
document.addEventListener('visibilitychange',()=>{ if(!document.hidden) idleCheck(); });
setInterval(idleCheck,15000);

// ══════════ NAV ══════════
const NAVS={
  admin:['schedule','students','payments','teachers','attendance','reports','accounts','intro'],
  counter:['schedule','students','payments','attendance','reports'],
  teacher:['my-schedule','my-students','my-salary','attendance','my-profile'],
  student:['my-fees','my-classes','all-classes','my-attendance','rewards']
};

let currentPageId=null;
function navLabel(id){ return `${NAV_ICONS[id]||''} ${tr('nav.'+id)}`; }
function buildNav(){
  const tabs=NAVS[session.role];
  const tabHtml=tabs.map((id,i)=>`<button class="ntab${i===0?' active':''}" onclick="showPage('${id}',this)">${navLabel(id)}</button>`).join('');
  document.getElementById('nav-tabs').innerHTML=tabHtml;
  document.getElementById('nav-drawer-tabs').innerHTML=tabs.map((id,i)=>`<button class="ntab${i===0?' active':''}" onclick="showPage('${id}',this);closeDrawer()">${navLabel(id)}</button>`).join('');
  showPage(tabs[0],document.querySelector('.ntab'));
}
function renderNavLabels(){
  if(!session) return;
  const tabs=NAVS[session.role];
  document.querySelectorAll('#nav-tabs .ntab').forEach((btn,i)=>{ if(tabs[i]) btn.innerHTML=navLabel(tabs[i]); });
  document.querySelectorAll('#nav-drawer-tabs .ntab').forEach((btn,i)=>{ if(tabs[i]) btn.innerHTML=navLabel(tabs[i]); });
}

function toggleDrawer(){
  const d=document.getElementById('nav-drawer'), b=document.getElementById('drawer-backdrop');
  const isOpen=d.classList.contains('open');
  d.classList.toggle('open',!isOpen);
  b.classList.toggle('open',!isOpen);
}
function closeDrawer(){
  document.getElementById('nav-drawer').classList.remove('open');
  document.getElementById('drawer-backdrop').classList.remove('open');
}

function showPage(id,el){
  currentPageId=id;
  document.querySelectorAll('.page').forEach(p=>p.classList.remove('active'));
  document.querySelectorAll('.ntab').forEach(t=>t.classList.remove('active'));
  const pg=document.getElementById('page-'+id);
  if(pg) pg.classList.add('active');
  // keep BOTH the desktop tab row and the mobile drawer's matching tab highlighted in sync
  document.querySelectorAll(`.ntab[onclick*="showPage('${id}'"]`).forEach(t=>t.classList.add('active'));
  // clear any floating reminder cards from the previous page — pages that need them will re-add fresh
  const fr=document.getElementById('floating-reminders');
  if(fr) fr.innerHTML='';
  // Render
  const renders={
    'schedule':renderAdminSchedule,
    'students':renderAdminStudents,'payments':renderAdminPayments,
    'teachers':renderAdminTeachers,'my-schedule':renderTeacherSchedule,
    'my-students':renderTeacherStudents,'my-salary':renderTeacherSalary,'my-profile':renderTeacherProfile,'my-fees':renderStudentFees,
    'my-classes':renderStudentClasses,'attendance':renderAttendance,
    'reports':renderReports,'all-classes':renderAllClasses,'my-attendance':renderStudentAttendance,
    'accounts':renderAccounts,
    'rewards':renderRewards,
    'intro':renderIntroEditor
  };
  if(renders[id]) renders[id]();
  // keep the contact footer under the signed-in pages in step with the admin's latest details
  // and with the currently selected language
  if(typeof renderContactFooters==='function') renderContactFooters();
}

const DAYS=['Monday','Tuesday','Wednesday','Thursday','Friday','Saturday','Sunday'];
let adminDayFilter='Monday';
let schedPlaceFilter='all';
let schedTeacherFilter='all';
let schedSortBy='teacher'; // how the "All classes" list is ordered: 'teacher' | 'time' | 'style'

function renderAdminSchedule(){
  const scopedStuds=scopedStudents();
  const scopedPay=scopedPayments();
  const unpaidList=scopedPay.filter(p=>p.status!=='Paid');
  // Totalled by the date the payment actually landed (matches Payments page "Filter by Paid Date"),
  // not by which month's fee it was for — a payment for August's fee paid in September, or one for
  // September's fee paid early in August, should land in the same month here as it does there.
  const [lastMoStart,lastMoEnd]=lastMonthDateRange();
  const paidLastMonth=scopedPay.filter(p=>p.status==='Paid'&&p.date&&p.date>=lastMoStart&&p.date<=lastMoEnd).reduce((s,p)=>s+p.amount,0);
  const totalFee=scopedStuds.reduce((s,st)=>s+st.fee,0);
  const dayClasses=scopedClasses().filter(c=>c.day===adminDayFilter);
  // group day's classes by place, and inside each place run straight down the clock — the counter
  // reads this list to see what is on next, so time order matters more than keeping a teacher's
  // classes together (that grouping made the times jump back and forth between teachers)
  const placesInDay=scopedPlaces().filter(p=>dayClasses.some(c=>c.placeId===p.id));

  let dayHtml='';
  if(dayClasses.length===0){
    dayHtml=`<div class="empty">${tr('page.noClassesOn')} ${tr('common.days.'+adminDayFilter)}</div>`;
  }else{
    placesInDay.forEach(pl=>{
      // start time first; end time then teacher name only to break ties so two classes starting at
      // the same time keep a stable order instead of shuffling between renders
      const placeCls=dayClasses.filter(c=>c.placeId===pl.id).sort((a,b)=>{
        if(a.start!==b.start) return a.start.localeCompare(b.start);
        if(a.end!==b.end) return a.end.localeCompare(b.end);
        return T(a.teacherId).name.localeCompare(T(b.teacherId).name);
      });
      dayHtml+=`<div style="font-size:11px;font-weight:700;color:#f8fafc;background:var(--slate);text-transform:uppercase;letter-spacing:.5px;padding:6px 12px;border-radius:6px;margin:14px 0 8px;display:inline-block">🏢 ${pl.name}</div>`;
      placeCls.forEach(c=>{
        const t=T(c.teacherId);
        const e=DB.students.filter(s=>s.classIds&&s.classIds.includes(c.id)).length;
        const full=e>=c.max;
        dayHtml+=`<div class="scard" style="margin-bottom:10px;display:flex;justify-content:space-between;align-items:center;gap:10px;flex-wrap:wrap">
          <div style="display:flex;align-items:center;gap:12px">
            <div style="text-align:center;min-width:56px">
              <div style="font-weight:700;color:var(--black);font-size:13px">${c.start}</div>
              <div style="font-size:10px;color:var(--muted)">${c.end}</div>
            </div>
            <div>
              <div style="font-weight:600;color:var(--gold)">${c.name} <span class="tag">${c.style}</span> ${diffTag(c)}</div>
              <div style="color:var(--muted);font-size:12px;margin-top:2px">👩‍🏫 <span style="color:${TCOLOR(c.teacherId)};font-weight:600">${t.name}</span> · 📍 ${c.room}</div>
            </div>
          </div>
          <div style="display:flex;align-items:center;gap:8px">
            <span class="badge ${full?'br':'bg'}">${e}/${c.max}</span>
            ${session.role!=='teacher'?`<button class="btn btn-g btn-s" onclick="openEnrollManager(${c.id})">${tr('common.addStudent')}</button>`:''}
            <button class="btn btn-o btn-s" onclick="openEditClass(${c.id})">${tr('common.edit')}</button>
            <button class="btn btn-d btn-s" onclick="delItem('classes',${c.id},renderAdminSchedule)">${tr('common.delete')}</button>
          </div>
        </div>`;
      });
    });
  }

  // Full list, ordered by the admin/counter's chosen sort. Group header rows match the sort so the
  // list stays easy to scan: by teacher → teacher headers, by style → dance-style headers, by time →
  // day headers (each day's classes in start-time order).
  let filteredAll=scopedClasses();
  if(schedPlaceFilter!=='all') filteredAll=filteredAll.filter(c=>c.placeId===parseInt(schedPlaceFilter));
  if(schedTeacherFilter!=='all') filteredAll=filteredAll.filter(c=>c.teacherId===parseInt(schedTeacherFilter));
  const dayIndex=d=>{ const i=DAYS.indexOf(d); return i<0?99:i; };
  const byTime=(a,b)=>{ const d=dayIndex(a.day)-dayIndex(b.day); if(d!==0) return d; return a.start.localeCompare(b.start); };
  let sortedAll, groupOf;
  if(schedSortBy==='time'){
    sortedAll=[...filteredAll].sort(byTime);
    groupOf=c=>tr('common.days.'+c.day);
  }else if(schedSortBy==='style'){
    sortedAll=[...filteredAll].sort((a,b)=>{ if(a.style!==b.style) return a.style.localeCompare(b.style); return byTime(a,b); });
    groupOf=c=>c.style;
  }else{ // 'teacher' (default)
    sortedAll=[...filteredAll].sort((a,b)=>{ const ta=T(a.teacherId).name, tb=T(b.teacherId).name; if(ta!==tb) return ta.localeCompare(tb); return byTime(a,b); });
    groupOf=c=>T(c.teacherId).name;
  }
  let lastGroup=null;
  let rows='';
  sortedAll.forEach(c=>{
    const t=T(c.teacherId);
    const g=groupOf(c);
    if(g!==lastGroup){
      const icon=schedSortBy==='teacher'?'👩‍🏫':schedSortBy==='style'?'💃':'📅';
      rows+=`<tr><td colspan="7" style="background:var(--slate);font-size:11px;text-transform:uppercase;letter-spacing:.5px;color:#f8fafc;font-weight:700;padding:8px 13px">${icon} ${g}</td></tr>`;
      lastGroup=g;
    }
    const e=DB.students.filter(s=>s.classIds&&s.classIds.includes(c.id)).length;
    const pct=e/c.max;
    const capWarn = pct>=1 ? `<span class="badge br" style="margin-left:6px">${tr('common.full').toUpperCase()}</span>` : pct>=0.8 ? `<span class="badge by" style="margin-left:6px">Almost Full</span>` : '';
    rows+=`<tr><td><strong style="color:var(--gold)">${c.name}</strong><br><span class="tag">${c.style}</span> ${diffTag(c)}</td>
      <td><div class="ncell"><div class="avatar">${ini(t.name)}</div><span style="color:${TCOLOR(c.teacherId)};font-weight:600">${t.name}</span></div></td>
      <td>${tr('common.days.'+c.day)}</td><td>${c.start}–${c.end}</td><td>${e}/${c.max}${capWarn}</td><td>${c.room}</td>
      <td style="display:flex;gap:4px">${session.role!=='teacher'?`<button class="btn btn-g btn-s" onclick="openEnrollManager(${c.id})">${tr('common.addStudent')}</button>`:''}<button class="btn btn-o btn-s" onclick="openEditClass(${c.id})">${tr('common.edit')}</button><button class="btn btn-d btn-s" onclick="delItem('classes',${c.id},renderAdminSchedule)">${tr('common.delete')}</button></td></tr>`;
  });

  document.getElementById('page-schedule').innerHTML=`
    <div class="role-banner"><div class="ri">${session.role==='counter'?'🏢':'🛡️'}</div><div><div class="rn">${session.role==='counter'?Pl(franchiseScope).name+' '+tr('common.franchise2'):tr('page.adminPanel')}</div><div class="rs">${session.role==='counter'?tr('page.franchiseView'):tr('page.fullAccess')} — ${new Date().toLocaleDateString(currentLang==='zh'?'zh-CN':'en-MY',{weekday:'long',year:'numeric',month:'long',day:'numeric'})}</div></div></div>
    <div class="stat-row" style="margin-bottom:20px">
      <div class="scard"><div class="sl">${tr('page.statStudents')}</div><div class="sv">${scopedStuds.length}</div></div>
      <div class="scard"><div class="sl">${tr('page.statClasses')}</div><div class="sv">${scopedClasses().length}</div></div>
      <div class="scard"><div class="sl">${tr('page.statTeachers')}</div><div class="sv">${scopedTeachers().length}</div></div>
      <div class="scard"><div class="sl">${tr('page.statExpected')}</div><div class="sv" style="font-size:18px">${fmt(totalFee)}</div></div>
      <div class="scard"><div class="sl">${tr('page.statCollected').replace('{month}',monthLabel(lastMonthName()))}</div><div class="sv" style="font-size:18px;color:var(--success)">${fmt(paidLastMonth)}</div></div>
      <div class="scard"><div class="sl">${tr('page.statUnpaid')}</div><div class="sv" style="color:var(--danger)">${unpaidList.length}</div></div>
    </div>
    <div class="pheader"><div class="stitle" style="margin:0">${tr('title.schedule')}</div><button class="btn btn-g" onclick="openAddClass()">${tr('common.addClass')}</button></div>
    <div class="fg"><label>${tr('common.filterByDay')}</label><select onchange="adminDayFilter=this.value;renderAdminSchedule()">
      ${DAYS.map(d=>`<option value="${d}" ${adminDayFilter===d?'selected':''}>${tr('common.days.'+d)}</option>`).join('')}
    </select></div>
    <div style="margin-bottom:24px">${dayHtml}</div>
    <div class="stitle">${tr('page.allClasses')} <span style="font-size:11px;color:var(--muted);font-weight:400">${tr('page.sortedBy')}</span></div>
    <div style="font-size:11px;font-weight:600;color:var(--muted);text-transform:uppercase;letter-spacing:.5px;margin-bottom:6px">${tr('page.sortBy')}</div>
    <select class="fsel" onchange="schedSortBy=this.value;renderAdminSchedule()">
      <option value="teacher" ${schedSortBy==='teacher'?'selected':''}>${tr('common.teacher')}</option>
      <option value="time" ${schedSortBy==='time'?'selected':''}>${tr('common.time')}</option>
      <option value="style" ${schedSortBy==='style'?'selected':''}>${tr('common.danceStyle')}</option>
    </select>
    ${session.role==='counter'?'':`<div style="font-size:11px;font-weight:600;color:var(--muted);text-transform:uppercase;letter-spacing:.5px;margin-bottom:6px">${tr('common.filterByFranchise')}</div>
    <select class="fsel" onchange="schedPlaceFilter=this.value;renderAdminSchedule()">
      <option value="all" ${schedPlaceFilter==='all'?'selected':''}>${tr('common.allFranchises')}</option>
      ${scopedPlaces().map(pl=>`<option value="${pl.id}" ${schedPlaceFilter==String(pl.id)?'selected':''}>${pl.name}</option>`).join('')}
    </select>`}
    <div style="font-size:11px;font-weight:600;color:var(--muted);text-transform:uppercase;letter-spacing:.5px;margin-bottom:6px">${tr('common.filterByTeacher')}</div>
    <select class="fsel" onchange="schedTeacherFilter=this.value;renderAdminSchedule()">
      <option value="all" ${schedTeacherFilter==='all'?'selected':''}>${tr('common.allTeachers')}</option>
      ${scopedTeachers().map(t=>`<option value="${t.id}" ${schedTeacherFilter==String(t.id)?'selected':''}>${t.name}</option>`).join('')}
    </select>
    <div class="twrap"><table><thead><tr><th>${tr('common.class')}</th><th>${tr('common.teacher')}</th><th>${tr('common.day')}</th><th>${tr('common.time')}</th><th>${tr('common.students')}</th><th>${tr('common.room')}</th><th></th></tr></thead>
    <tbody>${rows||`<tr><td colspan="7" class="empty">${tr('page.classesMatchFilters')}</td></tr>`}</tbody></table></div>`;
  feeReminderBanner(scopedStuds.map(s=>s.id));
  showPaymentReminderFloat(unpaidList);
}

// ══════════ ADMIN — STUDENTS ══════════
let stuPlaceFilter='all';
let stuTeacherFilter='all';
let stuSortBy='name';
// Representative sort keys for a student who may have several classes — each picks the single value
// that best matches what the table actually shows, so "sort by day"/"sort by teacher" lines up with
// what the counter sees in the CLASSES/TEACHER columns rather than some hidden internal order.
function studentSortIdKey(s){ const n=parseInt(studentIdOf(s)); return isNaN(n)?Infinity:n; }
function studentSortDayKey(s){
  const classes=SC(s);
  if(!classes.length) return Infinity; // no classes — sorts to the end regardless of direction
  return Math.min(...classes.map(c=>{ const i=DAYS.indexOf(c.day); return i===-1?Infinity:i; }));
}
function studentSortTeacherKey(s){
  const names=[...new Set(SC(s).map(c=>T(c.teacherId).name))].sort();
  return names[0]||'￿'; // no teacher — sorts to the end (higher than any real name)
}
function renderAdminStudents(q=''){
  let list=scopedStudents();
  // A counter's own student directory shows every student who takes AT LEAST ONE class at this
  // branch — not just students whose single "home" branch happens to match. A student can be
  // registered under one branch but also take a class at another (different teacher, different
  // branch); that second branch's counter still needs to see them here to manage that class's
  // attendance/payments day-to-day. Previously this filtered on studentPlaceId(s) (the student's
  // one home branch only), which silently hid cross-branch students from every branch except
  // their home one — e.g. a Horizon teacher's class roster would be invisible on Horizon's own
  // Students page. studentPlaceIds() (plural) already exists and returns every branch a student
  // actually has a class in, so use that instead.
  if(franchiseScope && session && session.role==='counter') list=list.filter(s=>studentPlaceIds(s).includes(franchiseScope));
  if(q) list=list.filter(s=>s.name.toLowerCase().includes(q.toLowerCase())||s.parent.toLowerCase().includes(q.toLowerCase())||String(studentIdOf(s)).toLowerCase().includes(q.toLowerCase()));
  if(stuPlaceFilter!=='all') list=list.filter(s=>studentPlaceIds(s).includes(parseInt(stuPlaceFilter)));
  if(stuTeacherFilter!=='all') list=list.filter(s=>studentTeacherIds(s).includes(parseInt(stuTeacherFilter)));

  // Grouping/section-header branch for each student: a counter is only ever looking at ONE branch
  // (their own), so every student on their page groups under that same branch heading — even a
  // student whose "home" branch (studentPlace) is elsewhere, since what matters here is that they
  // take a class at THIS branch. Admin still groups by each student's actual home branch, since
  // admin's view spans every branch at once and that's the meaningful grouping there.
  const groupPlaceFor=(session&&session.role==='counter'&&franchiseScope)?(s=>Pl(franchiseScope)):studentPlace;

  // sort by branch group (grouping stays fixed regardless of the sort picked below), then
  // by whichever column the counter chose — ID / Day / Teacher — falling back to name as the
  // tiebreaker (and as the sort itself when stuSortBy is 'name', the default/original behavior)
  list=[...list].sort((a,b)=>{
    const pa=groupPlaceFor(a).name, pb=groupPlaceFor(b).name;
    if(pa!==pb) return pa.localeCompare(pb);
    if(stuSortBy==='id'){
      const ka=studentSortIdKey(a), kb=studentSortIdKey(b);
      if(ka!==kb) return ka-kb;
    } else if(stuSortBy==='day'){
      const ka=studentSortDayKey(a), kb=studentSortDayKey(b);
      if(ka!==kb) return ka-kb;
    } else if(stuSortBy==='teacher'){
      const ka=studentSortTeacherKey(a), kb=studentSortTeacherKey(b);
      if(ka!==kb) return ka.localeCompare(kb);
    }
    return a.name.localeCompare(b.name);
  });

  const isAdminStu=(session&&session.role==='admin');
  // Bulk-select (checkboxes + the action bar) is useful to counter staff too — they're the ones who
  // actually hand out the free t-shirt at the front desk — so it's available to admin AND counter,
  // while the destructive bulk-delete button underneath stays admin-only (see the bar markup below).
  const canBulkStu=(session&&(session.role==='admin'||session.role==='counter'));
  // Students who already have tshirtRedeemed=true are excluded from the bulk row-checkbox entirely —
  // there's nothing left to tick for them, so the checkbox renders disabled (see rows.forEach below)
  // and they're left out of "select all" / the bulk action bar's count. They can still be removed
  // individually via each row's own Del button, which doesn't go through this selection set.
  visibleStudentIds=list.filter(s=>!s.tshirtRedeemed).map(s=>s.id);
  // A student taking ONLY private classes has no real monthly fee to speak of (classRateFor already
  // excludes Private from that calc) — showing "RM 0" there reads as neglected, so show what they
  // actually paid for their most recent private session instead, clearly labelled as private so it's
  // never mistaken for a recurring monthly amount.
  const feeCellFor=s=>{
    const classes=SC(s);
    if(classes.some(c=>c.difficulty!=='Private')) return fmt(s.fee);
    if(!classes.some(c=>c.difficulty==='Private')) return fmt(s.fee);
    const lastPay=DB.payments.filter(p=>p.kind==='private'&&p.studentId===s.id)
      .sort((a,b)=>(b.date||b.earnedDate||'').localeCompare(a.date||a.earnedDate||''))[0];
    return lastPay
      ? `${fmt(lastPay.amount)} <span class="tag" style="margin-left:4px;font-size:10px">${tr('page.privateClassLabel')}</span>`
      : fmt(s.fee);
  };
  let rows='';
  let lastPlace=null;
  list.forEach(s=>{
    const classes=SC(s);
    const place=groupPlaceFor(s);
    if(place.name!==lastPlace){
      rows+=`<tr><td colspan="${canBulkStu?8:7}" style="background:var(--slate);font-size:12px;text-transform:uppercase;letter-spacing:.5px;color:#f8fafc;font-weight:700;padding:9px 13px;border-top:2px solid var(--gold)">🏢 ${place.name}</td></tr>`;
      lastPlace=place.name;
    }
    const classTags=classes.length
      ? classes.map(c=>`<span class="tag" title="${T(c.teacherId).name} · ${Pl(c.placeId).name}">${c.name}</span>`).join(' ')
      : `<span style="color:var(--muted);font-size:11px">${tr('page.noClasses2')}</span>`;
    const teacherNames=[...new Set(classes.map(c=>c.teacherId))].map(tid=>`<span style="color:${TCOLOR(tid)};font-weight:600">${T(tid).name}</span>`).join(', ')||'—';
    const tshirtDone=!!s.tshirtRedeemed;
    // Already-collected students get no checkbox at all here (not even a disabled/greyed one) —
    // there's nothing left to select them for in this bar, and the "Collected" tag next to their
    // name already says why. See visibleStudentIds above, which excludes them for the same reason.
    rows+=`<tr>${canBulkStu?`<td style="width:34px;text-align:center">${tshirtDone?'':`<input type="checkbox" ${selectedStudentIds.has(s.id)?'checked':''} onchange="toggleStudentSelect(${s.id},this.checked)" style="width:auto;accent-color:var(--gold)"/>`}</td>`:''}<td><div class="ncell"><div class="avatar">${ini(s.name)}</div><div><strong>${s.name}</strong> ${gradeBadgeFor(s,18)}${creditsOf(s)>0?` <span class="tag" style="background:rgba(52,211,153,.14);color:var(--success)">🎟️ ${creditsOf(s)}</span>`:''}${tshirtDone?` <span class="tag" style="background:rgba(52,211,153,.14);color:var(--success)" title="${tr('page.tshirtAlreadyCollectedTip')}">${tr('page.tshirtCollectedTag')}</span>`:''}${balanceTagsFor(s)}<br><span style="color:var(--muted);font-size:11px">ID ${studentIdOf(s)} · ${tr('common.age')} ${ageOf(s)} · ${tr('common.parent')}: ${s.parent}</span></div></div></td>
      <td>${classTags}</td><td>${teacherNames}</td><td>${s.phone}</td><td style="color:var(--black);font-weight:600">${feeCellFor(s)}</td>
      <td><span class="badge bg">${tr('common.active')}</span></td>
      <td style="display:flex;gap:4px"><button class="btn btn-o btn-s" onclick="openEditStudent(${s.id})">${tr('common.edit')}</button><button class="btn btn-d btn-s" onclick="deleteStudent(${s.id})">${tr('common.delete')}</button></td></tr>`;
  });

  // preserve search box focus + cursor position across re-renders (fixes the box losing focus on every keystroke)
  const activeEl=document.activeElement;
  const wasSearchFocused=activeEl&&activeEl.id==='stu-search-input';
  const cursorPos=wasSearchFocused?activeEl.selectionStart:null;

  document.getElementById('page-students').innerHTML=`
    <div class="pheader"><div class="stitle" style="margin:0">${tr('title.students')}</div>
    <div style="display:flex;gap:10px;flex-wrap:wrap">
      <input class="sbar" id="stu-search-input" placeholder="${tr('common.searchPlaceholder')}" value="${q.replace(/"/g,'&quot;')}" oninput="renderAdminStudents(this.value)"/>
      <button class="btn btn-g" onclick="openAddStudent()">${tr('common.addStudent')}</button>
    </div></div>
    <div class="scard" style="margin-bottom:16px;display:flex;gap:10px;flex-wrap:wrap;align-items:center">
      <div style="font-weight:700;font-size:13px">🎁 ${tr('page.verifyReward')}</div>
      <input class="finput" id="rc-input" style="margin:0;flex:1;min-width:140px;max-width:220px;font-family:'JetBrains Mono',monospace;letter-spacing:2px;text-transform:uppercase" placeholder="${tr('page.enterCode')}" onkeydown="if(event.key==='Enter')verifyRewardCode()"/>
      <button class="btn btn-g btn-s" onclick="verifyRewardCode()">✓ ${tr('page.verifyCollect')}</button>
      <span style="color:var(--muted);font-size:11.5px">${tr('page.verifyRewardNote')}</span>
      <button class="btn btn-o btn-s" style="margin-left:auto" onclick="openRedemptionHistory()">📜 ${tr('page.redemptionHistory')}</button>
    </div>
    ${session.role==='counter'?'':`<div style="font-size:11px;font-weight:600;color:var(--muted);text-transform:uppercase;letter-spacing:.5px;margin-bottom:6px">${tr('common.filterByFranchise')}</div>
    <select class="fsel" onchange="stuPlaceFilter=this.value;renderAdminStudents(document.getElementById('stu-search-input').value)">
      <option value="all" ${stuPlaceFilter==='all'?'selected':''}>${tr('common.allFranchises')}</option>
      ${scopedPlaces().map(pl=>`<option value="${pl.id}" ${stuPlaceFilter==String(pl.id)?'selected':''}>${pl.name}</option>`).join('')}
    </select>`}
    <div style="font-size:11px;font-weight:600;color:var(--muted);text-transform:uppercase;letter-spacing:.5px;margin-bottom:6px">${tr('common.filterByTeacher')}</div>
    <select class="fsel" onchange="stuTeacherFilter=this.value;renderAdminStudents(document.getElementById('stu-search-input').value)">
      <option value="all" ${stuTeacherFilter==='all'?'selected':''}>${tr('common.allTeachers')}</option>
      ${scopedTeachers().map(t=>`<option value="${t.id}" ${stuTeacherFilter==String(t.id)?'selected':''}>${t.name}</option>`).join('')}
    </select>
    <div style="font-size:11px;font-weight:600;color:var(--muted);text-transform:uppercase;letter-spacing:.5px;margin-bottom:6px">${tr('common.sortBy')}</div>
    <select class="fsel" onchange="stuSortBy=this.value;renderAdminStudents(document.getElementById('stu-search-input').value)">
      <option value="name" ${stuSortBy==='name'?'selected':''}>${tr('page.sortName')}</option>
      <option value="id" ${stuSortBy==='id'?'selected':''}>${tr('page.sortId')}</option>
      <option value="day" ${stuSortBy==='day'?'selected':''}>${tr('page.sortDay')}</option>
      <option value="teacher" ${stuSortBy==='teacher'?'selected':''}>${tr('page.sortTeacher')}</option>
    </select>
    <div style="color:var(--muted);font-size:11px;margin:10px 0">${tr('page.groupedByFranchise')}</div>
    ${canBulkStu?`<div class="scard" style="margin-bottom:10px;display:flex;gap:10px;align-items:center;flex-wrap:wrap">
      <button class="btn btn-g btn-s" id="bulk-tshirt-students" onclick="tickTshirtSelected()" ${selectedStudentIds.size?'':'disabled'}>👕 ${tr('page.tickTshirtSelected')} (<span id="bulk-tshirt-count">${selectedStudentIds.size}</span>)</button>
      ${isAdminStu?`<button class="btn btn-d btn-s" id="bulk-del-students" onclick="deleteSelectedStudents()" ${selectedStudentIds.size?'':'disabled'}>🗑️ ${tr('page.deleteSelected')} (<span id="bulk-del-count">${selectedStudentIds.size}</span>)</button>`:''}
      <span style="color:var(--muted);font-size:11.5px">${tr('page.tickTshirtSelectedNote')}</span>
    </div>`:''}
    <div class="twrap"><table><thead><tr>${canBulkStu?`<th style="width:34px;text-align:center"><input type="checkbox" id="stu-select-all" onchange="toggleAllStudents(this.checked)" style="width:auto;accent-color:var(--gold)"/></th>`:''}<th>${tr('common.name')}</th><th>${tr('common.classes')}</th><th>${tr('common.teacher')}</th><th>${tr('common.contact')}</th><th>${tr('common.feeMonth')}</th><th>${tr('common.status')}</th><th></th></tr></thead>
    <tbody>${rows||`<tr><td colspan="${canBulkStu?8:7}" class="empty">${tr('page.noStudentsFound')}</td></tr>`}</tbody></table></div>`;
  updateBulkStudentBar();

  if(wasSearchFocused){
    const input=document.getElementById('stu-search-input');
    if(input){ input.focus(); input.setSelectionRange(cursorPos,cursorPos); }
  }
}

// ══════════ ADMIN — PAYMENTS ══════════
let payTeacherFilter='all';
let payPlaceFilter='all';
let payClassFilter='all';
let payMonthFilter='all';
let __paymentsExportList=[];
let payDateFrom=null, payDateTo=null;
let payReceiptSearch='';
let payCategoryFilter='all';
let payMethodFilter='all';
const PAY_CATEGORIES=[
  {v:'single',label:'Single Class',test:p=>p.kind==='class'&&p.month==='Single Class'},
  {v:'trial',label:'Trial Class',test:p=>p.kind==='class'&&p.month==='Trial Class'},
  {v:'private',label:'Private Class',test:p=>p.kind==='private'},
  {v:'rental',label:'Rental',test:p=>p.kind==='rental'},
  {v:'danceshow',label:'Dance Show',test:p=>p.kind==='danceshow'},
  {v:'package',label:'Credit Package',test:p=>p.kind==='credit'},
];
// Splits a payment into one row PER contributing teacher, so a multi-class student's payment never
// shows 2 teachers combined in a single row. Uses the same per-class RM130 split as the salary page.
function payListCSVRows(list){
  const header=['Receipt','Date','Who','Franchise','Teacher','Class','Month','Amount','Status','Method','Notes'];
  const rows=[header];
  list.forEach(p=>{
    const cls=p.classId?C(p.classId):null;
    const isRental=p.kind==='rental', isDanceShow=p.kind==='danceshow';
    const who=isRental?tr('common.rental'):isDanceShow?tr('page.danceShowLabel'):(p.studentId?payStudent(p).name:'');
    const teacherName=cls?T(cls.teacherId).name:((isDanceShow||p.kind==='private')&&p.teacherId?T(p.teacherId).name:'');
    const placeName=paymentBranchIds(p).map(id=>Pl(id).name).join('/');
    rows.push(['#RCP-'+String(p.id).padStart(5,'0'),p.date||'',who,placeName,teacherName,cls?cls.name:'',monthLabel(p.month||''),p.amount,p.status,p.method||'',p.notes||'']);
  });
  return rows.map(r=>r.map(csvEscape).join(',')).join('\n');
}
function exportPaymentsCSV(list){
  const label=payMonthFilter==='all'?'all-months':payMonthFilter.toLowerCase().replace(/\s+/g,'-');
  downloadFile('payments_'+label+'_'+toLocalISODate(new Date())+'.csv',payListCSVRows(list),'text/csv;charset=utf-8');
  toast(tr('msg.reportExported'));
}
function renderAdminPayments(){
  stampPaymentTeachers();
  const prActiveEl=document.activeElement;
  const prWasFocused=prActiveEl&&prActiveEl.id==='pay-receipt-search';
  const prCursorPos=prWasFocused?prActiveEl.selectionStart:null;
  const scopedPay=scopedPayments();

  let list=payFilter==='all'?scopedPay:scopedPay.filter(p=>p.status.toLowerCase()===payFilter);
  // studentless records (rental / dance show / private / trial) have no roster branch to read — fall
  // back to the branch stamped on the record itself, or they'd vanish whenever a branch filter is on
  if(payPlaceFilter!=='all'){
    const wantPl=parseInt(payPlaceFilter);
    // Filter by the branch this specific receipt was actually for (paymentBranchIds), not the
    // student's whole multi-branch footprint — see paymentBranchIds() for why.
    list=list.filter(p=>paymentMatchesPlace(p,wantPl));
  }
  if(payTeacherFilter!=='all') list=list.filter(p=>(p.classId&&C(p.classId).teacherId===parseInt(payTeacherFilter))||((p.kind==='danceshow'||p.kind==='private')&&p.teacherId===parseInt(payTeacherFilter)));
  if(payClassFilter!=='all') list=list.filter(p=>String(p.classId||'')===payClassFilter);
  if(payMonthFilter!=='all') list=list.filter(p=>(p.month||'')===payMonthFilter);
  if(payCategoryFilter!=='all'){ const cat=PAY_CATEGORIES.find(c=>c.v===payCategoryFilter); if(cat) list=list.filter(cat.test); }
  if(payMethodFilter!=='all') list=list.filter(p=>(p.method||'')===payMethodFilter);
  if(payDateFrom) list=list.filter(p=>p.date&&p.date>=payDateFrom);
  if(payDateTo) list=list.filter(p=>p.date&&p.date<=payDateTo);
  if(payReceiptSearch.trim()){
    // accepts however the person types it — "RCP-00020", "#RCP-00020", "00020", or just "20" — all match
    // the same receipt number shown on the printed receipt (#RCP-${id padded to 5 digits}). ALSO
    // matches by student login ID (e.g. just "0042" or a fragment of it, e.g. "137") — same
    // case-insensitive substring convention used for student search elsewhere (see renderDropinList) —
    // so a counter can look up every payment for one student without knowing any of their receipt numbers.
    // Receipt matching is an EXACT numeric match (not substring) — it used to be `includes()`, which
    // meant a receipt id of e.g. 1137 or 2137 also matched a search for "137", silently pulling in a
    // totally unrelated student's bill any time their receipt number happened to contain the same
    // digits as the one you were actually looking for (this is what caused an unrelated KeQing bill to
    // show up under a Soh Li Qi search — see the fix notes above). Student-ID substring matching is left
    // as-is on purpose (it's one continuous 6-digit id, not two different numbering systems colliding).
    const qRaw=payReceiptSearch.trim();
    const qLower=qRaw.toLowerCase();
    const qDigits=qRaw.toUpperCase().replace(/^#/,'').replace(/^RCP-?/,'').replace(/\D/g,'');
    const qReceiptId=qDigits?parseInt(qDigits,10):null;
    list=list.filter(p=>{
      if(qReceiptId!=null&&p.id===qReceiptId) return true;
      const sid=p.studentId?studentIdOf(S(p.studentId)):null;
      return !!(sid&&sid!=='—'&&sid.toLowerCase().includes(qLower));
    });
  }

  const paid=list.filter(p=>p.status==='Paid').reduce((s,p)=>s+p.amount,0);
  const unpaid=list.filter(p=>p.status!=='Paid').reduce((s,p)=>s+p.amount,0);
  const paidCount=list.filter(p=>p.status==='Paid').length;
  const unpaidCount=list.filter(p=>p.status!=='Paid').length;

  const placeCards=scopedPlaces().map(pl=>{
    const placePayments=scopedPay.filter(p=>paymentMatchesPlace(p,pl.id));
    const collected=placePayments.filter(p=>p.status==='Paid').reduce((s,p)=>s+p.amount,0);
    const outstanding=placePayments.filter(p=>p.status!=='Paid').length;
    return `<div class="scard"><div class="sl">🏢 ${pl.name}</div><div class="sv" style="font-size:16px">${fmt(collected)}</div><div class="ss">${outstanding} ${outstanding!==1?tr('page.unpaidRecordsPl'):tr('page.unpaidRecords')}</div></div>`;
  }).join('');

  list=[...list].sort((a,b)=>(b.date||'').localeCompare(a.date||'')||b.id-a.id);
  __paymentsExportList=list;
  const visibleIds=new Set(list.map(p=>p.id));
  [...selectedPaymentIds].forEach(id=>{ if(!visibleIds.has(id)) selectedPaymentIds.delete(id); });

  document.getElementById('page-payments').innerHTML=`
    <div class="pheader"><div class="stitle" style="margin:0">${tr('title.payments')}</div><div style="display:flex;gap:8px;flex-wrap:wrap"><button class="btn btn-o" onclick="exportPaymentsCSV(__paymentsExportList)">📥 ${tr('common.downloadCSV')}</button><button class="btn btn-g" onclick="openRecordPayment()">${tr('common.recordPayment')}</button></div></div>
    <div class="stat-row" style="margin-bottom:16px">
      <div class="scard"><div class="sl">${tr('common.totalCollected')}</div><div class="sv" style="font-size:18px;color:var(--success)">${fmt(paid)}</div><div class="ss">${paidCount} ${paidCount!==1?tr('page.unpaidRecordsWord'):tr('page.unpaidRecordWord')}</div></div>
      <div class="scard"><div class="sl">${tr('common.totalUnpaid')}</div><div class="sv" style="font-size:18px;color:var(--danger)">${fmt(unpaid)}</div><div class="ss">${unpaidCount} ${unpaidCount!==1?tr('page.unpaidRecordsWord'):tr('page.unpaidRecordWord')}</div></div>
    </div>
    ${session.role==='counter'?'':`<div class="stitle" style="font-size:14px">${tr('common.byFranchise')}</div>
    <div class="stat-row" style="margin-bottom:16px">${placeCards}</div>
    <div style="font-size:11px;font-weight:600;color:var(--muted);text-transform:uppercase;letter-spacing:.5px;margin-bottom:6px">${tr('common.filterByFranchise')}</div>
    <select class="fsel" onchange="payPlaceFilter=this.value;renderAdminPayments()">
      <option value="all" ${payPlaceFilter==='all'?'selected':''}>${tr('common.allFranchises')}</option>
      ${scopedPlaces().map(pl=>`<option value="${pl.id}" ${payPlaceFilter==String(pl.id)?'selected':''}>${pl.name}</option>`).join('')}
    </select>`}
    <div style="font-size:11px;font-weight:600;color:var(--muted);text-transform:uppercase;letter-spacing:.5px;margin-bottom:6px">${tr('common.filterByTeacher')}</div>
    <select class="fsel" onchange="payTeacherFilter=this.value;renderAdminPayments()">
      <option value="all" ${payTeacherFilter==='all'?'selected':''}>${tr('common.allTeachers')}</option>
      ${scopedTeachers().map(t=>`<option value="${t.id}" ${payTeacherFilter==String(t.id)?'selected':''}>${t.name}</option>`).join('')}
    </select>
    <div style="font-size:11px;font-weight:600;color:var(--muted);text-transform:uppercase;letter-spacing:.5px;margin-bottom:6px">${tr('common.filterByStatus')}</div>
    <select class="fsel" onchange="payFilter=this.value;renderAdminPayments()">
      ${['all','paid','unpaid'].map(f=>`<option value="${f}" ${payFilter===f?'selected':''}>${f==='all'?tr('common.all'):f==='paid'?tr('common.paid'):tr('common.unpaid')}</option>`).join('')}
    </select>
    <div class="frow" style="margin:10px 0 4px">
      <div class="fg"><label>${tr('common.filterByClass')}</label><select onchange="payClassFilter=this.value;renderAdminPayments()">
        <option value="all">${tr('common.allClasses')}</option>
        ${[...scopedClasses()].sort((a,b)=>a.name.localeCompare(b.name)).map(c=>`<option value="${c.id}" ${payClassFilter==String(c.id)?'selected':''}>${c.name} — ${T(c.teacherId).name}</option>`).join('')}
      </select></div>
      <div class="fg"><label>${tr('common.filterByMonth')}</label><select onchange="payMonthFilter=this.value;renderAdminPayments()">
        <option value="all">${tr('common.allMonths')}</option>
        ${['January','February','March','April','May','June','July','August','September','October','November','December'].map(m=>`<option value="${m}" ${payMonthFilter===m?'selected':''}>${monthLabel(m)}</option>`).join('')}
      </select></div>
    </div>
    <div class="frow" style="margin:0 0 4px">
      <div class="fg"><label>${tr('common.filterByCategory')}</label><select onchange="payCategoryFilter=this.value;renderAdminPayments()">
        <option value="all">${tr('common.allCategories')}</option>
        ${PAY_CATEGORIES.map(c=>`<option value="${c.v}" ${payCategoryFilter===c.v?'selected':''}>${monthLabel(c.label)}</option>`).join('')}
      </select></div>
      <div class="fg"><label>${tr('common.filterByMethod')}</label><select onchange="payMethodFilter=this.value;renderAdminPayments()">
        <option value="all">${tr('common.allMethods')}</option>
        ${[...new Set(scopedPay.map(p=>p.method).filter(Boolean))].sort().map(m=>`<option value="${m}" ${payMethodFilter===m?'selected':''}>${m}</option>`).join('')}
      </select></div>
    </div>
    <div style="font-size:11px;font-weight:600;color:var(--muted);text-transform:uppercase;letter-spacing:.5px;margin-bottom:6px">${tr('common.filterByDate')}</div>
    <div class="frow" style="margin-bottom:6px">
      <div class="fg"><label>${tr('common.from')}</label><input type="date" value="${payDateFrom||''}" onchange="payDateFrom=this.value||null;renderAdminPayments()"/></div>
      <div class="fg"><label>${tr('common.to')}</label><input type="date" value="${payDateTo||''}" onchange="payDateTo=this.value||null;renderAdminPayments()"/></div>
    </div>
    ${(payDateFrom||payDateTo)?`<button class="btn btn-o btn-s" style="margin-bottom:8px" onclick="payDateFrom=null;payDateTo=null;renderAdminPayments()">${tr('common.clearFilter')}</button>`:''}
    <div style="font-size:11px;font-weight:600;color:var(--muted);text-transform:uppercase;letter-spacing:.5px;margin-bottom:6px">${tr('common.searchByReceipt')}</div>
    <input class="finput" id="pay-receipt-search" placeholder="🔍 ${tr('common.searchByReceiptPh')}" value="${payReceiptSearch.replace(/"/g,'&quot;')}" oninput="setPayReceiptSearch(this.value)" style="margin-bottom:10px;max-width:320px"/>
    <div style="color:var(--muted);font-size:11px;margin:8px 0">${tr('page.billedSeparately')}</div>
    ${selectedPaymentIds.size>=2?`<div class="scard" style="margin-bottom:12px;border-color:var(--gold);display:flex;justify-content:space-between;align-items:center;flex-wrap:wrap;gap:8px">
      <span style="font-size:13px">${selectedPaymentIds.size} ${tr('page.billsSelected')}</span>
      <button class="btn btn-g btn-s" onclick="paySelectedTogether()">${tr('page.paySelected')}</button>
    </div>`:''}
    <div class="twrap"><table><thead><tr><th></th><th>${tr('common.student')}</th><th>${tr('common.franchise2')}</th><th>${tr('common.teacher')}</th><th>${tr('common.class')}</th><th>${tr('common.month')}</th><th>${tr('common.amount')}</th><th>${tr('common.status')}</th><th>${tr('common.date')}</th><th>${tr('common.method')}</th><th></th></tr></thead>
    <tbody>${list.map(p=>{
      const isRental=p.kind==='rental';
      const isDanceShow=p.kind==='danceshow';
      const isPrivate=p.kind==='private';
      const st=(!isRental&&!isDanceShow)?payStudent(p):null;
      const cls=p.classId?C(p.classId):null;
      const b=p.status==='Paid'?'bg':'br';
      const checked=selectedPaymentIds.has(p.id);
      const nameCell=isRental
        ?`<div class="ncell"><div class="avatar" style="background:linear-gradient(135deg,var(--gold),var(--rose))">🏠</div>${tr('common.rental')}</div>`
        :isDanceShow
        ?`<div class="ncell"><div class="avatar" style="background:linear-gradient(135deg,var(--gold),var(--rose))">🎭</div>${tr('page.danceShowLabel')}</div>`
        :`<div class="ncell"><div class="avatar">${ini(st.name)}</div>${st.name}</div>`;
      const franchiseCell=(isRental||isDanceShow||isPrivate)?(p.placeId?Pl(p.placeId).name:(st&&st.id?studentPlace(st).name:'—')):(cls?Pl(cls.placeId).name:'—');
      const teacherCell=isRental?'—':(isDanceShow||isPrivate)?`<span style="color:${TCOLOR(p.teacherId)};font-weight:600">${T(p.teacherId).name}</span>`:(cls?`<span style="color:${TCOLOR(cls.teacherId)};font-weight:600">${T(cls.teacherId).name}</span>`:'—');
      const classCell=isRental?`🏠 ${p.room||'—'}${p.rentStart?` · ${p.rentStart}–${p.rentEnd}`:''}`:isPrivate?`🔒 ${p.room||'—'}${p.rentStart?` · ${p.rentStart}–${p.rentEnd}`:''}`:isDanceShow?`🎭 ${p.dsCount||0} pax × RM${p.dsPerPerson||0} · ${p.dsPct||0}%`:(cls?cls.name:'—');
      const monthCell=isRental?tr('common.rental'):isDanceShow?tr('page.danceShowLabel'):isPrivate?tr('page.privateClassLabel'):(p.kind==='credit'?`🎟️ ${p.creditPkg} ${tr('page.creditClasses')}`:(p.kind==='credit-use'?`🎟️ ${tr('page.creditUsedShort')}`:monthLabel(p.month)));
      // Regular monthly class-fee bill = a real student's real class, billed for an actual calendar
      // month — same p.classId + MONTHS_EN.includes(p.month) predicate already used elsewhere (e.g.
      // bonusGrants()) to tell these apart from single-class drop-ins ('Single Class'), credit/rental/
      // dance-show/private records, and trial bills (no studentId). Only THAT kind of bill is ever
      // RM130/RM160, so only it gets the dropdown.
      const isMonthlyClassBill=p.studentId&&p.classId&&MONTHS_EN.includes(p.month||'');
      const amountCell=(session.role==='admin'&&p.status!=='Paid'&&isMonthlyClassBill)
        ?`<select onchange="setPaymentAmount(${p.id},this.value)" aria-label="${tr('common.amount')}" style="width:auto;padding:4px 8px;font-size:12px;font-weight:600">
            <option value="160" ${p.amount===160?'selected':''}>RM 160</option>
            <option value="130" ${p.amount===130?'selected':''}>RM 130</option>
            ${(p.amount!==160&&p.amount!==130)?`<option value="${p.amount}" selected>${fmt(p.amount)}</option>`:''}
          </select>`
        :fmt(p.amount);
      return`<tr><td>${p.status!=='Paid'?`<input type="checkbox" ${checked?'checked':''} onchange="togglePaymentSelect(${p.id})" style="width:auto;accent-color:var(--gold)"/>`:''}</td>
      <td>${nameCell}</td>
      <td>${franchiseCell}</td>
      <td>${teacherCell}</td>
      <td>${classCell}</td>
      <td>${monthCell}</td><td style="font-weight:600">${amountCell}</td>
      <td><span class="badge ${b}">${p.status==='Paid'?tr('common.paid'):tr('common.unpaid')}</span></td>
      <td style="color:var(--muted)">${p.date||'—'}</td><td>${p.method||'—'}</td>
      <td>
        <button class="btn btn-o btn-s" onclick="openEditPayment(${p.id})">✎ ${tr('common.edit')}</button>
        ${p.receiptUrl?`<button class="btn ${p.receiptStatus==='reviewed'?'btn-o':'btn-g'} btn-s" style="margin-left:6px" onclick="openPaymentReceiptModal(${p.id})" title="${p.receiptStatus==='reviewed'?'Receipt uploaded — reviewed':'Receipt uploaded — needs review'}">🧾${p.receiptStatus==='reviewed'?'':' •'}</button>`:''}
      </td></tr>`;
    }).join('')||`<tr><td colspan="11" class="empty">${tr('page.recordsMatchFilters')}</td></tr>`}</tbody></table></div>`;

  if(prWasFocused){
    const input=document.getElementById('pay-receipt-search');
    if(input){ input.focus(); input.setSelectionRange(prCursorPos,prCursorPos); }
  }
}
function setPayReceiptSearch(v){ payReceiptSearch=v; renderAdminPayments(); }

// ── RECEIPT PRINTING ──
function printReceipt(paymentId){
  const p=DB.payments.find(x=>x.id===paymentId);
  if(!p)return;
  // this is the ordinary text/HTML receipt, not the rental photo — hide the Share/Save Photo button
  // showRentalReceiptModal() turns on, so it doesn't linger from a previous rental-receipt view
  pendingRentalReceipt=null;
  const shareBtn=document.getElementById('receipt-share-btn'); if(shareBtn) shareBtn.style.display='none';
  const st=payStudent(p);
  const cls=p.classId?C(p.classId):null;
  const classNames=p.kind==='private'
    ?`${tr('page.privateClassLabel')} · ${p.room||'—'}${p.rentStart?` ${p.rentStart}–${p.rentEnd}`:''}`
    :(cls?cls.name:(SC(st).map(c=>c.name).join(' + ')||'—'));
  const stuAcc=st.id?DB.accounts.find(a=>a.role==='student'&&a.ref===st.id):null;
  // a trial student has no login/roster entry yet — the receipt just says so rather than inventing an ID
  const stuLoginId=stuAcc?stuAcc.user:(st.id?('S'+String(st.id).padStart(4,'0')):'—');
  document.getElementById('receipt-body').innerHTML=`
    <div id="receipt-print-area" style="font-family:'Courier New',monospace;padding:24px;background:#fff;color:#111;border-radius:6px;max-width:340px;margin:0 auto">
      <h1 style="font-size:18px;text-align:center;margin-bottom:2px;letter-spacing:1px;color:#c9500f">💃 B DANCE STUDIO</h1>
      <div style="text-align:center;color:#666;font-size:11px;margin-bottom:20px;letter-spacing:1px">OFFICIAL PAYMENT RECEIPT</div>
      <hr style="border:none;border-top:1px dashed #c9500f;margin:14px 0"/>
      <div style="display:flex;justify-content:space-between;font-size:13px;margin:6px 0"><span>Receipt No.</span><b>#RCP-${String(p.id).padStart(5,'0')}</b></div>
      <div style="display:flex;justify-content:space-between;font-size:13px;margin:6px 0"><span>Date Paid</span><b>${p.date||'—'}</b></div>
      <div style="display:flex;justify-content:space-between;font-size:13px;margin:6px 0"><span>Student</span><b>${st.name}</b></div>
      <div style="display:flex;justify-content:space-between;font-size:13px;margin:6px 0"><span>Student ID</span><b>${stuLoginId}</b></div>
      <div style="display:flex;justify-content:space-between;font-size:13px;margin:6px 0"><span>Class</span><b>${classNames}</b></div>
      <div style="display:flex;justify-content:space-between;font-size:13px;margin:6px 0"><span>Month</span><b>${p.month} 2026</b></div>
      <div style="display:flex;justify-content:space-between;font-size:13px;margin:6px 0"><span>Method</span><b>${p.method||'—'}</b></div>
      <hr style="border:none;border-top:1px dashed #c9500f;margin:14px 0"/>
      <div style="font-size:18px;font-weight:700;text-align:center;margin:16px 0;padding:10px;background:#fff2e8;border:1px solid #ffcda3;border-radius:6px;color:#c9500f">RM ${Number(p.amount).toLocaleString()}</div>
      <hr style="border:none;border-top:1px dashed #c9500f;margin:14px 0"/>
      <div style="text-align:center;font-size:11px;color:#888;margin-top:20px">Thank you for your payment!<br/>This is a computer-generated receipt.</div>
    </div>`;
  openM('m-receipt');
}
// Print ONLY the receipt: clone it into #receipt-print-root (the only thing left visible during
// print — see the @media print rule above) and call window.print() directly, synchronously, inside
// the click handler. NOTE: this must NOT be wrapped in setTimeout/async — iOS/iPad Safari only allows
// window.print() when it's triggered directly by the user gesture; any delay causes Safari to silently
// do nothing.
function printReceiptNow(){
  const area=document.getElementById('receipt-print-area');
  if(!area) return;
  let root=document.getElementById('receipt-print-root');
  if(!root){ root=document.createElement('div'); root.id='receipt-print-root'; root.style.display='none'; document.body.appendChild(root); }
  root.innerHTML=area.outerHTML;
  document.body.classList.add('printing-receipt');
  window.print();
  const cleanup=()=>{ document.body.classList.remove('printing-receipt'); root.innerHTML=''; window.removeEventListener('afterprint',cleanup); };
  window.addEventListener('afterprint',cleanup);
  setTimeout(cleanup,3000); // fallback in case afterprint never fires (some mobile browsers skip it)
}

let pendingMarkPaidIds=[];
let pendingMarkPaidCallback=null;
function markPaid(id,afterFn){
  pendingMarkPaidIds=[id];
  pendingMarkPaidCallback=afterFn||renderAdminPayments;
  document.getElementById('mp-date').value=toLocalISODate(new Date());
  document.getElementById('mp-method').value='Bank Transfer';
  document.getElementById('mp-summary').innerHTML='';
  openM('m-mark-paid');
}
function markPaidMultiple(ids,afterFn){
  pendingMarkPaidIds=[...ids];
  pendingMarkPaidCallback=afterFn||renderAdminPayments;
  document.getElementById('mp-date').value=toLocalISODate(new Date());
  document.getElementById('mp-method').value='Bank Transfer';
  const items=ids.map(id=>{
    const p=DB.payments.find(x=>x.id===id);
    const cls=p.classId?C(p.classId):null;
    return `<div>${S(p.studentId).name} — ${cls?cls.name:p.month} <span style="color:var(--gold);float:right">${fmt(p.amount)}</span></div>`;
  }).join('');
  const total=ids.reduce((s,id)=>s+DB.payments.find(x=>x.id===id).amount,0);
  document.getElementById('mp-summary').innerHTML=`<div style="border:1px solid var(--border);border-radius:4px;padding:10px 12px;margin-bottom:12px;font-size:12.5px;line-height:1.9">
    <div style="font-weight:700;color:var(--muted);text-transform:uppercase;font-size:10.5px;letter-spacing:.5px;margin-bottom:4px">${currentLang==='zh'?`合并支付 ${ids.length} 笔账单`:`Paying ${ids.length} bills together`}</div>
    ${items}
    <div style="border-top:1px solid var(--border);margin-top:6px;padding-top:6px;font-weight:700">${tr('common.total')} <span style="color:var(--gold);float:right">${fmt(total)}</span></div>
  </div>`;
  openM('m-mark-paid');
}
function confirmMarkPaid(){
  const method=document.getElementById('mp-method').value;
  const date=document.getElementById('mp-date').value||toLocalISODate(new Date());
  pendingMarkPaidIds.forEach(id=>{
    const p=DB.payments.find(x=>x.id===id);
    if(p){ p.status='Paid'; p.date=date; p.method=method; }
  });
  closeM('m-mark-paid');
  toast(pendingMarkPaidIds.length>1?`${pendingMarkPaidIds.length} ${tr('msg.billsPaidVia')}${method}`:`${tr('msg.paidVia')}${method}`);
  selectedPaymentIds.clear();
  if(pendingMarkPaidCallback) pendingMarkPaidCallback();
}
function markUnpaid(id){
  const p=DB.payments.find(x=>x.id===id);
  if(p){p.status='Unpaid';p.date='';}
  toast(tr('msg.markedUnpaid'));
  renderAdminPayments();
}
// ── Edit a payment record: change Paid/Unpaid, method + date, or delete — all in one dialog ──
let editPaymentId=null;
function epToggle(){
  const st=document.getElementById('ep-status').value;
  document.getElementById('ep-paid-fields').style.display=(st==='Paid')?'':'none';
}
function openEditPayment(id){
  const p=DB.payments.find(x=>x.id===id);
  if(!p) return;
  editPaymentId=id;
  const isRental=p.kind==='rental';
  const isDanceShow=p.kind==='danceshow';
  const who=isRental?tr('common.rental'):isDanceShow?tr('page.danceShowLabel'):payStudent(p).name;
  const cls=p.classId?C(p.classId):null;
  const what=cls?cls.name:isDanceShow?`${T(p.teacherId).name} · ${p.dsCount||0} pax`:(p.kind==='private'?`${tr('page.privateClassLabel')} · ${T(p.teacherId).name}`:(p.kind==='credit'?`${p.creditPkg} ${tr('page.creditClasses')}`:monthLabel(p.month)));
  document.getElementById('ep-summary').innerHTML=`<b>${who}</b> · ${what} · <span style="color:var(--gold);font-weight:700">${fmt(p.amount)}</span>`;
  document.getElementById('ep-status').value=(p.status==='Paid')?'Paid':'Unpaid';
  const m=document.getElementById('ep-method'); if(m) m.value=(p.method&&p.method!=='Cash')?p.method:'Bank Transfer';
  const dateInput=document.getElementById('ep-date');
  dateInput.value=p.date||toLocalISODate(new Date());
  // Counters can flip Paid/Unpaid and pick the method, but can't backdate or postdate a payment —
  // only admins may hand-edit the actual Date Paid (matches the delete button being admin-only below).
  const isCounter=session&&session.role==='counter';
  dateInput.disabled=isCounter;
  dateInput.title=isCounter?tr('msg.dateEditAdminOnly'):'';
  const del=document.getElementById('ep-delete-btn'); if(del) del.style.display=(session&&session.role==='admin')?'':'none';
  epToggle();
  openM('m-edit-payment');
}
async function saveEditPayment(){
  const p=DB.payments.find(x=>x.id===editPaymentId);
  if(!p){ closeM('m-edit-payment'); return; }
  const st=document.getElementById('ep-status').value;
  const priorStatus=p.status, priorDate=p.date;
  const isCounter=session&&session.role==='counter';
  if(st==='Paid'){
    p.status='Paid';
    p.method=document.getElementById('ep-method').value;
    if(isCounter){
      // Ignore the (disabled) date field for counters, even if someone tampers with it client-side —
      // keep the existing Paid date untouched, or stamp today's date when freshly marking as Paid.
      p.date=(priorStatus==='Paid'&&priorDate)?priorDate:toLocalISODate(new Date());
    }else{
      p.date=document.getElementById('ep-date').value||toLocalISODate(new Date());
    }
  }else{
    p.status='Unpaid'; p.date=''; p.method='';
  }
  if(!await commitSave()) return;
  closeM('m-edit-payment');
  toast(tr('msg.paymentUpdated'));
  renderAdminPayments();
}
function deleteEditPayment(){
  const id=editPaymentId;
  askConfirm(tr('msg.confirmDelete'),async()=>{
    const idx=DB.payments.findIndex(x=>x.id===id);
    if(idx===-1) return;
    const removed=DB.payments[idx];
    DB.payments=DB.payments.filter(x=>x.id!==id);
    if(!await commitSave()){
      // cloud never confirmed the delete — put it back rather than leaving it missing locally
      // only for it to reappear unpredictably once a later save/merge pulls the still-intact cloud copy
      DB.payments.splice(idx,0,removed);
      renderAdminPayments();
      return;
    }
    closeM('m-edit-payment');
    toast(tr('msg.deleted'));
    renderAdminPayments();
  });
}
// ── Inline amount edit (admin only) — the Amount column in the Payments table renders as a RM130/
// RM160 dropdown for a still-Unpaid monthly class bill, so an admin can correct the rate (e.g. a
// student's class count changed after the bill was raised) without opening the full Edit dialog.
// Scoped to Unpaid so this never silently rewrites a Paid bill's already-collected revenue figure —
// once it's Paid, amount changes only happen through the same intentional Edit-record flow as before.
async function setPaymentAmount(id,val){
  const p=DB.payments.find(x=>x.id===id);
  if(!p) return;
  const amount=parseFloat(val)||0;
  if(amount===p.amount) return; // re-selecting the already-current option — nothing to save
  const prevAmount=p.amount;
  p.amount=amount;
  if(!await commitSave()){
    p.amount=prevAmount; // cloud never confirmed it — leave the bill exactly as it was
    renderAdminPayments();
    return;
  }
  toast(currentLang==='zh'?`账单金额已更新为 ${fmt(amount)}`:`Bill amount updated to ${fmt(amount)}`);
  renderAdminPayments();
}
// ── Receipt review (bank-transfer proof a student uploaded against this exact bill) ──
// The upload itself happens client-side in the student app via the narrowly-scoped
// 'update-payment-receipt' server action (a student may only ever set receiptUrl/receiptUploadedAt
// on their own bill, never status/amount/method — see api/db.js). Once it lands in DB.payments (via
// the normal cloud pull, same as any other field riding in a row's meta jsonb), staff review and
// dismiss it through the ordinary whole-DB commitSave() path below — same as every other admin edit
// on this page (setPaymentAmount, saveEditPayment, etc.) — since a staff session is already trusted
// with full-database writes and doesn't need its own separate patch endpoint.
let currentReceiptPaymentId=null;
function openPaymentReceiptModal(id){
  const p=DB.payments.find(x=>x.id===id);
  if(!p||!p.receiptUrl) return;
  currentReceiptPaymentId=id;
  const st=p.studentId?S(p.studentId):null;
  const cls=p.classId?C(p.classId):null;
  document.getElementById('pr-summary').innerHTML=`<b>${st?st.name:'—'}</b> · ${cls?cls.name:monthLabel(p.month)} · <span style="color:var(--gold);font-weight:700">${fmt(p.amount)}</span>`;
  document.getElementById('pr-image').src=p.receiptUrl;
  const reviewed=p.receiptStatus==='reviewed';
  document.getElementById('pr-status').innerHTML=`Uploaded ${p.receiptUploadedAt?String(p.receiptUploadedAt).slice(0,10):'—'} · <span class="badge ${reviewed?'bg':'br'}">${reviewed?'Reviewed':'Pending review'}</span>`;
  const btn=document.getElementById('pr-review-btn'); if(btn) btn.style.display=reviewed?'none':'';
  openM('m-payment-receipt');
}
async function markReceiptReviewed(id){
  const p=DB.payments.find(x=>x.id===id);
  if(!p) return;
  const prev=p.receiptStatus;
  p.receiptStatus='reviewed';
  if(!await commitSave()){
    p.receiptStatus=prev; // cloud never confirmed it — leave it exactly as it was, allow retry
    toast(lastCloudError||'Could not save — try again',false);
    return;
  }
  toast('Receipt marked reviewed');
  closeM('m-payment-receipt');
  renderAdminPayments();
}
let selectedPaymentIds=new Set();
function togglePaymentSelect(id){
  if(selectedPaymentIds.has(id)) selectedPaymentIds.delete(id); else selectedPaymentIds.add(id);
  renderAdminPayments();
}
function paySelectedTogether(){
  if(selectedPaymentIds.size<2) return;
  markPaidMultiple([...selectedPaymentIds],renderAdminPayments);
}

// ══════════ ADMIN — TEACHERS ══════════
// The public instructor list, the teacher pickers and this table all read DB.teachers in order, so
// moving an entry inside that array is all a reorder needs — nothing else has to know about it.
// The whole rearrangement happens on a local staging copy (arrangeTeachersWorking) inside its own
// modal — nothing touches DB.teachers, and nothing saves, until Save is pressed.
let arrangeTeachersWorking=[];
function openArrangeTeachers(){
  document.getElementById('arrange-teachers-title').textContent=tr('page.arrangeTeachersTitle');
  document.getElementById('arrange-teachers-intro').textContent=tr('page.arrangeTeachersIntro');
  arrangeTeachersWorking=DB.teachers.map(t=>t.id);
  renderArrangeTeachersList();
  openM('m-arrange-teachers');
}
function closeArrangeTeachers(){ closeM('m-arrange-teachers'); }
function renderArrangeTeachersList(){
  const wrap=document.getElementById('arrange-teachers-list');
  if(!wrap) return;
  wrap.innerHTML=arrangeTeachersWorking.map((id,idx)=>{
    const t=DB.teachers.find(x=>x.id===id);
    if(!t) return '';
    return `<div style="display:flex;align-items:center;gap:10px;padding:8px 10px;background:var(--bg);border:1px solid var(--border);border-radius:6px">
      <div class="avatar" style="background:${TCOLOR(t.id)}">${ini(t.name)}</div>
      <div style="flex:1;font-weight:600;color:var(--black)">${t.name}</div>
      <div style="display:flex;gap:4px">
        <button type="button" class="btn btn-o btn-s" ${idx===0?'disabled':''} onclick="moveArrangeTeacher(${idx},-1)">↑</button>
        <button type="button" class="btn btn-o btn-s" ${idx===arrangeTeachersWorking.length-1?'disabled':''} onclick="moveArrangeTeacher(${idx},1)">↓</button>
      </div>
    </div>`;
  }).join('');
}
function moveArrangeTeacher(idx,dir){
  const to=idx+dir;
  if(to<0||to>=arrangeTeachersWorking.length) return;
  const [moved]=arrangeTeachersWorking.splice(idx,1);
  arrangeTeachersWorking.splice(to,0,moved);
  renderArrangeTeachersList();
}
async function saveArrangeTeachers(){
  const byId=new Map(DB.teachers.map(t=>[t.id,t]));
  const ordered=arrangeTeachersWorking.map(id=>byId.get(id)).filter(Boolean);
  // anyone added or removed elsewhere while this modal was open still needs to end up in the result —
  // append any current teacher this staged order doesn't know about, rather than silently dropping them
  const seen=new Set(ordered.map(t=>t.id));
  DB.teachers.forEach(t=>{ if(!seen.has(t.id)) ordered.push(t); });
  // Record the chosen order as a real field on each teacher (sortOrder), not just this array's position.
  // Postgres rows have no inherent order — db.js always reads teachers back sorted by id (needed for
  // stable pagination on every table) unless it finds this field to re-sort by. Without it, an arranged
  // order looked saved but silently reverted to id order on the very next reload. Being a normal
  // per-record field also means it's protected by the app's existing per-field 3-way merge, same as any
  // other teacher field — one admin's reorder can't get clobbered by another device's unrelated edit to
  // the same teacher.
  ordered.forEach((t,idx)=>{ t.sortOrder=idx; });
  const prev=DB.teachers.slice();
  DB.teachers=ordered;
  if(!await commitSave()){ DB.teachers=prev; return; } // save failed — leave the modal open with the staged order intact so they can retry
  toast(tr('msg.orderSaved'));
  closeM('m-arrange-teachers');
  renderAdminTeachers();
}
function renderAdminTeachers(){
  const isCounter=session.role==='counter';
  const statusLabel=s=>s==='Active'?tr('common.active'):s==='On Leave'?tr('common.onLeave'):tr('common.partTime');
  document.getElementById('page-teachers').innerHTML=`
    <div class="pheader"><div class="stitle" style="margin:0">${tr('title.teachers')}</div><div style="display:flex;gap:8px">${isCounter?'':`<button class="btn btn-o" onclick="openArrangeTeachers()">${tr('page.arrangeOrder')}</button>`}<button class="btn btn-g" onclick="openAddTeacher()">${tr('common.addTeacher')}</button></div></div>
    <div style="color:var(--muted);font-size:11px;margin-bottom:10px">${isCounter?tr('page.teacherHintCounter').replace('{f}',Pl(franchiseScope).name):tr('page.teacherHintAdmin')}</div>
    <div class="twrap"><table><thead><tr><th>${tr('common.name')}</th><th>${tr('page.totalStudent')}</th>${isCounter?'':DB.places.map(pl=>`<th>${pl.name}</th>`).join('')}<th>${currentLang==='zh'?'单堂课':'Single Class'}<br><span style="font-weight:400;text-transform:none">${tr('page.paidQty')}</span></th><th>RM160<br><span style="font-weight:400;text-transform:none">${tr('page.paidQty')}</span></th><th>RM130<br><span style="font-weight:400;text-transform:none">${tr('page.paidQty')}</span></th><th>${tr('common.status')}</th><th></th></tr></thead>
    <tbody>${DB.teachers.map((t,idx)=>{const b=t.status==='Active'?'bg':t.status==='On Leave'?'br':'by';
      // counter: scope every number to their branch · admin: studio-wide total plus one column per branch
      const classScope=isCounter?scopedClasses().filter(c=>c.teacherId===t.id).map(c=>c.id):null;
      const fee=teacherFeeBreakdown(t.id,classScope);
      const franchiseBreakdown=isCounter?[]:teacherBreakdownByFranchise(t.id);
      const franchiseCols=isCounter?'':DB.places.map(pl=>{
        const fb=franchiseBreakdown.find(x=>x.place.id===pl.id);
        return `<td style="text-align:center;color:${fb?'var(--black)':'var(--muted)'};font-weight:${fb?'700':'400'}">${fb?fb.count:'—'}</td>`;
      }).join('');
      return`<tr><td><div class="ncell"><div class="avatar" style="background:${TCOLOR(t.id)}">${ini(t.name)}</div><div><strong style="color:${TCOLOR(t.id)}">${t.name}</strong><br><span style="color:var(--muted);font-size:11px">${t.email}</span></div></div></td>
      <td style="text-align:center"><strong style="font-size:16px">${fee.totalStudents}</strong></td>
      ${franchiseCols}
      <td style="text-align:center;color:var(--gold);font-weight:700">${fee.singleQty}</td>
      <td style="text-align:center;color:var(--black);font-weight:700">${fee.rm150Qty}</td>
      <td style="text-align:center;color:var(--black);font-weight:700">${fee.rm120Qty}</td>
      <td><span class="badge ${b}">${statusLabel(t.status)}</span></td>
      <td style="display:flex;gap:4px;align-items:center"><button class="btn btn-o btn-s" onclick="openEditTeacher(${t.id})">${tr('common.edit')}</button><button class="btn btn-d btn-s" onclick="deleteTeacher(${t.id})">${tr('common.delete')}</button></td></tr>`;
    }).join('')||`<tr><td colspan="${isCounter?6:6+DB.places.length}" class="empty">${tr('page.noTeachers')}</td></tr>`}</tbody></table></div>`;
}

// ══════════ TEACHER — MY SCHEDULE ══════════
let teacherDayFilter='Monday';
function renderTeacherSchedule(){
  const tid=session.ref;
  const myCls=DB.classes.filter(c=>c.teacherId===tid);
  const dayCls=myCls.filter(c=>c.day===teacherDayFilter)
    .sort((a,b)=>{
      const pa=Pl(a.placeId).name, pb=Pl(b.placeId).name;
      if(pa!==pb) return pa.localeCompare(pb);
      return a.start.localeCompare(b.start);
    });

  const myStudentIds=DB.students.filter(s=>(s.classIds||[]).some(cid=>myCls.map(c=>c.id).includes(cid))).map(s=>s.id);
  document.getElementById('page-my-schedule').innerHTML=`
    <div class="pheader"><div class="role-banner" style="margin:0;flex:1"><div class="ri">👩‍🏫</div><div><div class="rn">${tr('title.my-schedule')}</div><div class="rs">${session.name} · ${myCls.length} ${myCls.length!==1?tr('page.classesThisWeek'):tr('page.classThisWeek')} ${tr('page.thisWeek')}</div></div></div>
    <button class="btn btn-g" onclick="openAddTeacherClass()">${tr('page.addNewClass')}</button></div>
    <div class="fg"><label>${tr('common.filterByDay')}</label><select onchange="teacherDayFilter=this.value;renderTeacherSchedule()">
      ${DAYS.map(d=>`<option value="${d}" ${teacherDayFilter===d?'selected':''}>${tr('common.days.'+d)}</option>`).join('')}
    </select></div>
    <div style="margin-bottom:24px">
      ${dayCls.length===0?`<div class="empty">${tr('page.noClassesOnDay')} ${tr('common.days.'+teacherDayFilter)}</div>`:
        dayCls.map(c=>{const e=DB.students.filter(s=>s.classIds&&s.classIds.includes(c.id)).length;
          return`<div class="scard" style="margin-bottom:10px;display:flex;justify-content:space-between;align-items:center;gap:10px;flex-wrap:wrap">
            <div style="display:flex;align-items:center;gap:12px">
              <div style="text-align:center;min-width:56px">
                <div style="font-weight:700;color:var(--black);font-size:13px">${c.start}</div>
                <div style="font-size:10px;color:var(--muted)">${c.end}</div>
              </div>
              <div>
                <div style="font-weight:600;color:var(--gold)">${c.name} <span class="tag">${c.style}</span> ${diffTag(c)}</div>
                <div style="color:var(--muted);font-size:12px;margin-top:2px">🏢 ${Pl(c.placeId).name} · 📍 ${c.room}</div>
              </div>
            </div>
            <div style="display:flex;align-items:center;gap:8px;flex-wrap:wrap">
              <span class="badge bg">${e}/${c.max}</span>
              <button class="btn btn-g btn-s" onclick="openEnrollManager(${c.id})">➕ ${tr('page.addToClass')}</button>
              <button class="btn btn-o btn-s" onclick="openTeacherClassEdit(${c.id})">${tr('common.edit')}</button>
              <button class="btn btn-d btn-s" onclick="delItem('classes',${c.id},renderTeacherSchedule)">${tr('common.delete')}</button>
            </div>
          </div>`;
        }).join('')}
    </div>
    <div class="stitle">${tr('page.myClassesTitle')} <span style="font-size:11px;color:var(--muted);font-weight:400">${tr('page.sortedByFranchiseTime')}</span></div>
    <div class="twrap"><table><thead><tr><th>${tr('common.class')}</th><th>${tr('common.franchise2')}</th><th>${tr('common.day')}</th><th>${tr('common.time')}</th><th>${tr('common.room')}</th><th>${tr('common.students')}</th><th></th></tr></thead>
    <tbody>${[...myCls].sort((a,b)=>{
      const pa=Pl(a.placeId).name, pb=Pl(b.placeId).name;
      if(pa!==pb) return pa.localeCompare(pb);
      return a.start.localeCompare(b.start);
    }).map(c=>{const e=DB.students.filter(s=>s.classIds&&s.classIds.includes(c.id)).length;
      return`<tr><td><strong style="color:var(--gold)">${c.name}</strong><br><span class="tag">${c.style}</span> ${diffTag(c)}</td>
      <td>${Pl(c.placeId).name}</td>
      <td>${tr('common.days.'+c.day)}</td><td>${c.start}–${c.end}</td><td>${c.room}</td>
      <td><strong>${e}</strong>/${c.max}
        <div class="pb"><div class="pf" style="width:${Math.min(100,e/c.max*100)}%"></div></div>
      </td>
      <td style="display:flex;gap:4px;flex-wrap:wrap"><button class="btn btn-g btn-s" onclick="openEnrollManager(${c.id})">➕ ${tr('page.addToClass')}</button><button class="btn btn-o btn-s" onclick="openTeacherClassEdit(${c.id})">${tr('common.edit')}</button><button class="btn btn-d btn-s" onclick="delItem('classes',${c.id},renderTeacherSchedule)">${tr('common.delete')}</button></td></tr>`;
    }).join('')||`<tr><td colspan="7" class="empty">${tr('page.noClassesYet')}</td></tr>`}</tbody></table></div>`;
  feeReminderBanner(myStudentIds);
}

// ══════════ TEACHER — MY STUDENTS ══════════
function renderTeacherStudents(){
  const tid=session.ref;
  const myCls=DB.classes.filter(c=>c.teacherId===tid).map(c=>c.id);
  const myStus=DB.students.filter(s=>s.classIds&&s.classIds.some(cid=>myCls.includes(cid)));
  const isSingleLabel=p=>{const t=((p.month||'')+' '+(p.notes||'')).toLowerCase();return t.includes('single class')||t.includes('trial class');};

  document.getElementById('page-my-students').innerHTML=`
    <div class="pheader"><div class="role-banner" style="margin:0;flex:1"><div class="ri">👩‍🏫</div><div><div class="rn">${tr('title.my-students')}</div><div class="rs">${myStus.length} ${myStus.length!==1?tr('page.myStudentsCountPl'):tr('page.myStudentsCount')} ${tr('page.acrossYourClasses')}</div></div></div></div>
    <div style="color:var(--muted);font-size:11px;margin-bottom:10px">${tr('page.billedSeparatelyTeacher')}</div>
    <div class="twrap"><table><thead><tr><th>${tr('common.name')}</th><th>${tr('common.age')}</th><th>${tr('common.franchise2')}</th><th>${tr('common.myClasses')}</th><th>${tr('common.parent')}</th><th>${tr('common.phone')}</th><th>${tr('page.feeStatusMyClass')}</th></tr></thead>
    <tbody>${myStus.map(s=>{
      const clsHere=SC(s).filter(c=>myCls.includes(c.id));
      const clsHereNames=clsHere.map(c=>c.name).join(', ')||'—';
      const branches=[...new Set(SC(s).map(c=>Pl(c.placeId).name))].join(', ')||'—';
      // most recent payment for THIS teacher's class specifically — never another teacher's class
      const myClsIdsForStudent=clsHere.map(c=>c.id);
      const latest=[...DB.payments].filter(p=>p.studentId===s.id&&p.classId&&myClsIdsForStudent.includes(p.classId)&&!isSingleLabel(p)).sort((a,b)=>(b.date||'').localeCompare(a.date||'')||b.id-a.id)[0];
      let badge=`<span class="badge by">${tr('page.noRecord')}</span>`;
      if(latest){
        const b=latest.status==='Paid'?'bg':'br';
        badge=`<span class="badge ${b}">${monthLabel(latest.month)}: ${latest.status==='Paid'?tr('common.paid'):tr('common.unpaid')}</span>`;
      }
      // teachers are VIEW-ONLY for payments — fee status is shown for reference; recording/editing is done by the counter or admin
      return`<tr><td><div class="ncell"><div class="avatar">${ini(s.name)}</div><div><strong>${s.name}</strong><br><span style="color:var(--muted);font-size:11px">ID ${studentIdOf(s)}</span></div></div></td>
      <td>${ageOf(s)}</td><td>${branches}</td><td style="color:var(--gold);font-weight:600">${clsHereNames}</td><td>${s.parent}</td><td>${s.phone}</td>
      <td>${badge}</td></tr>`;
    }).join('')||`<tr><td colspan="7" class="empty">${tr('page.noStudentsFound')}</td></tr>`}</tbody></table></div>
    <div style="margin-top:12px;color:var(--muted);font-size:11px">${tr('page.enrollmentNote')}</div>`;
}
function openTeacherPaymentFor(studentId,classId){
  resetSelectFilters();
  openM('m-payment');
  const sel=document.getElementById('pay-student');
  if(sel) sel.value=studentId;
  onPayStudentChange();
  if(classId){
    const clsSel=document.getElementById('pay-class');
    if(clsSel) clsSel.value=classId;
    onPayClassChange();
  }
}

// ══════════ TEACHER — MANAGE ENROLLMENT (teacher's own classes only) ══════════
function openEnrollManager(preselectClassId,presetSearch){
  const role=session&&session.role;
  const myCls=role==='teacher' ? DB.classes.filter(c=>c.teacherId===session.ref) : scopedClasses();
  const sel=document.getElementById('enroll-class-select');
  sel.innerHTML=myCls.length
    ? myCls.map(c=>`<option value="${c.id}">${c.name} · ${tr('common.days.'+c.day)} ${c.start} (${Pl(c.placeId).name})</option>`).join('')
    : `<option value="">${currentLang==='zh'?'尚未分配课程给您':'No classes assigned to you yet'}</option>`;
  if(preselectClassId&&myCls.some(c=>c.id===preselectClassId)) sel.value=String(preselectClassId);
  document.getElementById('enroll-search').value=presetSearch||'';
  renderEnrollList();
  openM('m-enroll');
}
// Re-render whichever page is currently showing so counts/balances update live, whether the enrollment
// tool was opened by a teacher (their own classes), a counter, or an admin (schedule view).
function refreshEnrollViews(){
  if(!session) return;
  if(session.role==='teacher') refreshTeacherViews();
  else if(session.role==='counter'||session.role==='admin'){ const active=document.querySelector('.page.active'); if(active&&active.id==='page-schedule') renderAdminSchedule(); }
}
// Re-render whichever teacher page is currently showing so counts/balances update live
function refreshTeacherViews(){
  if(!session||session.role!=='teacher') return;
  const active=document.querySelector('.page.active');
  if(!active) return;
  if(active.id==='page-my-schedule') renderTeacherSchedule();
  else if(active.id==='page-my-students') renderTeacherStudents();
  else if(active.id==='page-my-salary') renderTeacherSalary();
}
async function toggleEnrollment(studentId,classId){
  const s=DB.students.find(x=>x.id===studentId);
  if(!s)return;
  if(!s.classIds) s.classIds=[];
  const idx=s.classIds.indexOf(classId);
  const wasEnrolled=idx!==-1;
  const priorFee=s.fee;
  if(!wasEnrolled) s.classIds.push(classId); else s.classIds.splice(idx,1);
  // This button used to only touch classIds, silently leaving the fee at whatever it was before —
  // e.g. a student going from 1 class (RM160) to 2 (RM130 each = RM260) kept showing RM160 until
  // someone happened to open the full Edit Student form. Same rule saveStudent() already applies:
  // Private classes are billed per-session and don't count toward the 1-vs-2+ threshold here either.
  const regularClassCount=s.classIds.filter(id=>C(id)?.difficulty!=='Private').length;
  s.fee=calcMonthlyFee(regularClassCount);
  let newBillPid=null, newBillRate=null;
  const cancelledBills=[]; // full records of any Unpaid bill for this class snapshotted here, so a failed save can restore them
  const cls=C(classId);
  if(!wasEnrolled && cls && cls.difficulty!=='Private'){
    // Same "each class bills independently" rule as saveStudent(): a fresh Unpaid bill for just the
    // new class, at whatever rate now applies — existing classes' payments are never touched here.
    newBillRate=classRateFor(s); // computed after the push above, so it already reflects the new count
    newBillPid=await claimPaymentId();
    if(newBillPid==null){
      // undo the classIds/fee change made above — nothing else has been touched yet at this point
      if(!wasEnrolled) s.classIds=s.classIds.filter(id=>id!==classId); else s.classIds.push(classId);
      s.fee=priorFee;
      renderEnrollList();
      return;
    }
    DB.payments.push({id:newBillPid,kind:'class',studentId:s.id,classId,month:new Date().toLocaleDateString('en-US',{month:'long'}),amount:newBillRate,status:'Unpaid',date:'',method:'',notes:`New class fee for ${cls.name} — must be paid before joining`,earnedDate:toLocalISODate(new Date())});
  }else if(wasEnrolled){
    // She's off this class now — an Unpaid bill for it isn't a real debt, and leaving it in Payments
    // meant it kept surfacing under this teacher forever even though she'd left the roster (mirrors
    // removeStudentData(), which drops a departing student's Unpaid bills but keeps Paid ones on file).
    DB.payments=DB.payments.filter(p=>{
      if(p.studentId===s.id&&p.classId===classId&&p.status==='Unpaid'){
        cancelledBills.push(p);
        return false;
      }
      return true;
    });
  }
  if(!await commitSave()){
    if(!wasEnrolled) s.classIds=s.classIds.filter(id=>id!==classId); else s.classIds.push(classId); // revert — it never actually saved
    s.fee=priorFee;
    if(newBillPid!=null) DB.payments=DB.payments.filter(p=>p.id!==newBillPid);
    if(cancelledBills.length) DB.payments.push(...cancelledBills);
    renderEnrollList();
    return;
  }
  let msg=`${s.name} ${wasEnrolled?tr('msg.removedFromClass'):tr('msg.addedToClass')}`;
  if(s.fee!==priorFee) msg+=tr('msg.enrollFeeUpdated').replace('{f}',fmt(s.fee));
  if(newBillPid!=null) msg+=tr('msg.enrollBillCreated').replace('{r}',fmt(newBillRate));
  if(cancelledBills.length) msg+=currentLang==='zh'?` · 已取消该课程 ${fmt(cancelledBills.reduce((sum,p)=>sum+p.amount,0))} 未付款账单`:` · unpaid bill (${fmt(cancelledBills.reduce((sum,p)=>sum+p.amount,0))}) for that class cancelled`;
  toast(msg);
  renderEnrollList();
  refreshEnrollViews(); // update the class balance (e.g. 12/15) immediately — no page reload needed
}
function renderEnrollList(){
  const sel=document.getElementById('enroll-class-select');
  const listWrap=document.getElementById('enroll-student-list');
  if(!sel||!listWrap)return;
  const classId=parseInt(sel.value);
  const cls=classId?C(classId):null;
  const q=(document.getElementById('enroll-search').value||'').toLowerCase();
  // every student in the system is searchable here — no franchise/branch restriction, and it doesn't
  // matter whether they're a monthly-fee student or a credit-package student
  let list=cls ? DB.students : [];
  if(q) list=list.filter(s=>{
    const acc=DB.accounts.find(a=>a.role==='student'&&a.ref===s.id);
    const sid=acc?String(acc.user).toLowerCase():'';
    return s.name.toLowerCase().includes(q)||sid.includes(q);
  });
  listWrap.innerHTML=!classId?`<div class="empty">Select one of your classes above</div>`:
    list.length===0?`<div class="empty">No students found</div>`:
    list.map(s=>{
      const enrolled=(s.classIds||[]).includes(classId);
      const acc=DB.accounts.find(a=>a.role==='student'&&a.ref===s.id);
      const sid=acc?acc.user:'—';
      // She's real, just not tied to THIS branch yet (e.g. a monthly student at Adda Height whose
      // Tasek teacher now also wants her in a Tasek class) — flag it right here so whoever's adding
      // her can see that at a glance instead of having to check the Students page separately first.
      const otherBranch=!studentPlaceIds(s).includes(cls.placeId);
      const branchTag=otherBranch?` <span class="tag" style="background:rgba(255,122,41,.14);color:var(--gold)">🏢 ${studentPlace(s).name}</span>`:'';
      return `<label style="display:flex;align-items:center;gap:8px;font-size:13px;padding:7px 8px;border-radius:4px;cursor:pointer;background:${enrolled?'rgba(255,122,41,.12)':'transparent'}">
        <input type="checkbox" ${enrolled?'checked':''} onchange="toggleEnrollment(${s.id},${classId})" style="width:auto;accent-color:var(--gold)"/>
        <span>${s.name}${branchTag} <span style="color:var(--muted)">· ID ${sid} · Age ${ageOf(s)}</span></span>
      </label>`;
    }).join('');
}

// ══════════ STUDENT — MY FEES ══════════
// ══════════ STUDENT — MY ATTENDANCE (read-only) ══════════
let studentAttFrom=null;
let studentAttTo=null;
function setStudentAttRange(){
  studentAttFrom=document.getElementById('satt-from').value||null;
  studentAttTo=document.getElementById('satt-to').value||null;
  renderStudentAttendance();
}
function clearStudentAttRange(){
  studentAttFrom=null; studentAttTo=null;
  renderStudentAttendance();
}
function renderStudentAttendance(){
  const sid=session.ref;
  const me=DB.students.find(s=>s.id===sid);
  const myClasses=me?SC(me):[];
  const inRange=date=>(!studentAttFrom||date>=studentAttFrom)&&(!studentAttTo||date<=studentAttTo);
  const todayISO=toLocalISODate(new Date());
  const myOpenReps=me?openReplacements(me,todayISO):[];

  document.getElementById('page-my-attendance').innerHTML=`
    <div class="role-banner"><div class="ri">✅</div><div><div class="rn">${tr('title.my-attendance')}</div><div class="rs">${tr('page.viewOnlyCycle')} ${presentCount(sid)} ${tr('page.classesAttendedCycle')}</div></div></div>
    <div style="color:var(--muted);font-size:11px;margin-bottom:16px">${tr('page.attendanceChangeNote')}</div>
    <div class="frow" style="margin-bottom:16px">
      <div class="fg"><label>${tr('common.from')}</label><input type="date" id="satt-from" value="${studentAttFrom||''}" onchange="setStudentAttRange()"/></div>
      <div class="fg"><label>${tr('common.to')}</label><input type="date" id="satt-to" value="${studentAttTo||''}" onchange="setStudentAttRange()"/></div>
    </div>
    ${(studentAttFrom||studentAttTo)?`<button class="btn btn-o btn-s" style="margin-bottom:16px" onclick="clearStudentAttRange()">${tr('common.clearFilter')}</button>`:''}
    ${myClasses.length===0?`<div class="empty">${tr('page.notEnrolled')}</div>`:
      myClasses.map(cls=>{
        const allRecords=[...DB.attendance.filter(a=>a.classId===cls.id&&a.studentId===sid)].sort((a,b)=>b.date.localeCompare(a.date));
        const records=allRecords.filter(r=>inRange(r.date));
        const presentN=records.filter(r=>r.status==='present').length;
        const absentN=records.filter(r=>r.status==='absent').length;
        const cancelledN=records.filter(r=>r.status==='cancelled').length;
        const cycleTotal=presentCount(sid);
        const cycleProgress=cycleTotal%4===0&&cycleTotal>0?4:cycleTotal%4;
        const clsRep=myOpenReps.filter(r=>r.classId===cls.id)[0]; // earliest shared deadline for THIS class, if any
        const clsRepDaysLeft=(clsRep&&!clsRep.noExpiry)?daysBetweenISO(todayISO,clsRep.expires):null;
        return `<div class="scard" style="margin-bottom:16px">
          <div style="display:flex;justify-content:space-between;align-items:center;flex-wrap:wrap;gap:10px;margin-bottom:10px">
            <div>
              <div style="font-weight:700;color:var(--gold);font-size:15px">${cls.name}</div>
              <div style="color:var(--muted);font-size:12px">${tr('common.days.'+cls.day)} · ${cls.start}–${cls.end} · 👩‍🏫 <span style="color:${TCOLOR(cls.teacherId)};font-weight:600">${T(cls.teacherId).name}</span></div>
            </div>
            <div style="display:flex;gap:6px">
              <span class="badge bg">${presentN} ${tr('common.present')}</span>
              ${absentN?`<span class="badge br">${absentN} ${tr('common.absent')}</span>`:''}
              ${cancelledN?`<span class="badge by">${cancelledN} ${tr('page.cancelledCount')}</span>`:''}
            </div>
          </div>
          <div style="margin-bottom:10px">
            <div style="display:flex;justify-content:space-between;font-size:11px;color:var(--muted);margin-bottom:4px"><span>${tr('page.cycleProgress')}</span><span>${cycleProgress}/4</span></div>
            <div class="pb"><div class="pf" style="width:${cycleProgress/4*100}%"></div></div>
          </div>
          ${clsRep?`<div style="margin-bottom:10px;padding:8px 10px;border-radius:6px;background:${(!clsRep.noExpiry&&clsRepDaysLeft<=3)?'rgba(211,47,47,.12)':'rgba(255,122,41,.12)'};border:1px solid ${(!clsRep.noExpiry&&clsRepDaysLeft<=3)?'var(--danger)':'var(--gold)'};font-size:12px;color:${(!clsRep.noExpiry&&clsRepDaysLeft<=3)?'var(--danger)':'var(--gold)'}">🔁 ${clsRep.noExpiry?tr('page.replaceNoExpiry'):tr('page.replaceDaysLeft').replace('{n}',clsRepDaysLeft).replace('{d}',clsRep.expires)}</div>`:''}
          ${records.length===0?`<div class="empty" style="padding:16px">${(studentAttFrom||studentAttTo)?tr('page.noAttendanceInRange'):tr('page.noAttendanceYet')}</div>`:`
          <div class="twrap"><table><thead><tr><th>${tr('common.date')}</th><th>${tr('common.status')}</th><th>${tr('common.remark')}</th></tr></thead>
          <tbody>${records.map(r=>{
            const label=new Date(r.date+'T00:00:00').toLocaleDateString(currentLang==='zh'?'zh-CN':'en-MY',{weekday:'short',year:'numeric',month:'short',day:'numeric'});
            const badge=r.extra
              ?`<span class="badge bg">🔁 ${tr('att.extraTag')} +${r.dur==='half'?'0.5':'1'}</span>`
              :(r.status==='present'?`<span class="badge bg">${tr('common.present')}</span>`:r.status==='absent'?`<span class="badge br">${tr('common.absent')}</span>`:`<span class="badge by">${tr('common.classCancelled')}</span>`);
            const remarkCell=r.remark
              ?`<span style="color:var(--blue)">📝 ${r.remark}</span>`
              :(r.extra?`<span style="color:var(--muted)">${r.dur==='half'?tr('att.halfHour'):tr('att.oneHour')}</span>`:`<span style="color:var(--muted)">—</span>`);
            return `<tr><td>${label}</td><td>${badge}</td><td>${remarkCell}</td></tr>`;
          }).join('')}</tbody></table></div>`}
        </div>`;
      }).join('')}`;
}

// ══════════ GRADE LEVELS & REWARDS (student) ══════════
let _bid=0;
function styleGradesOf(s){ return (s&&s.styleGrades&&typeof s.styleGrades==='object')?s.styleGrades:{}; }
function highestGrade(s){
  const vals=Object.values(styleGradesOf(s)).filter(v=>v>0);
  if(vals.length) return Math.max(...vals);
  return (s&&s.grade)||1; // legacy fallback if no per-style grades set
}
function gradeOf(s){ return highestGrade(s); } // overall grade = HIGHEST across dance styles — drives points + the main badge
function ensureStudentExtras(){
  const demoBdays={1:'2014-08-14',2:'2011-03-22',3:'2016-11-05',5:'2013-05-30',6:'2015-12-02'};
  // per-dance-style grades (e.g. Grade 1 Hip-hop, Grade 2 Dancehall, Grade 3 Street Jazz)
  const demoStyleGrades={1:{'Hip-hop':1,'Dancehall':2,'Street Jazz':3},2:{'K-pop':2,'Dancehall':4},3:{'Hip-hop':3,'Kid Dance':1}};
  DB.students.forEach(s=>{
    if(s.birthday==null) s.birthday=demoBdays[s.id]||'';
    if(!Array.isArray(s.redemptions)) s.redemptions=[];
    if(!Array.isArray(s.bdayClaims)) s.bdayClaims=[];
    if(typeof s.pointsAdjust!=='number') s.pointsAdjust=0;
    if(!s.styleGrades||typeof s.styleGrades!=='object') s.styleGrades={};
    if(Object.keys(s.styleGrades).length===0&&demoStyleGrades[s.id]) s.styleGrades={...demoStyleGrades[s.id]};
  });
}
function gradeMeta(g){
  const M={
    1:{tierKey:'grade.bronze', type:'medal',  c1:'#e39b5a',c2:'#a45a24'},
    2:{tierKey:'grade.silver', type:'medal',  c1:'#eef1f4',c2:'#98a0a9'},
    3:{tierKey:'grade.gold',   type:'medal',  c1:'#ffdf6e',c2:'#e0a007'},
    4:{tierKey:'grade.diamond',type:'diamond',c1:'#8fe9ff',c2:'#37a6d8'},
    5:{tierKey:'grade.crown',  type:'crown',  c1:'#ffd75e',c2:'#ff8a2e'},
  };
  return M[g]||M[1];
}
function gradeBadge(g,size){
  size=size||48; const m=gradeMeta(g); const id='gb'+(++_bid);
  const grad=`<defs><linearGradient id="${id}" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="${m.c1}"/><stop offset="1" stop-color="${m.c2}"/></linearGradient></defs>`;
  let body;
  if(m.type==='medal'){
    body=`${grad}
      <path d="M17 4 L23 22 L18 24 L12 8 Z" fill="#ff4d2e"/>
      <path d="M31 4 L25 22 L30 24 L36 8 Z" fill="#ff7a29"/>
      <circle cx="24" cy="30" r="13" fill="url(#${id})" stroke="rgba(0,0,0,.28)" stroke-width="1.5"/>
      <circle cx="24" cy="30" r="9" fill="none" stroke="rgba(255,255,255,.42)" stroke-width="1"/>
      <path d="M24 23.5 l1.9 3.9 4.3 .6 -3.1 3 .7 4.3 -3.8 -2 -3.8 2 .7 -4.3 -3.1 -3 4.3 -.6 Z" fill="rgba(255,255,255,.94)"/>`;
  }else if(m.type==='diamond'){
    body=`${grad}
      <path d="M24 6 L38 19 L24 43 L10 19 Z" fill="url(#${id})" stroke="rgba(255,255,255,.55)" stroke-width="1.2"/>
      <path d="M10 19 L38 19" stroke="rgba(255,255,255,.45)" stroke-width="1"/>
      <path d="M24 6 L18 19 L24 43 M24 6 L30 19 L24 43" stroke="rgba(255,255,255,.4)" stroke-width="1" fill="none"/>`;
  }else{
    body=`${grad}
      <path d="M7 33 L9 15 L18 25 L24 11 L30 25 L39 15 L41 33 Z" fill="url(#${id})" stroke="rgba(0,0,0,.22)" stroke-width="1"/>
      <rect x="7" y="33" width="34" height="7" rx="1.5" fill="url(#${id})" stroke="rgba(0,0,0,.22)" stroke-width="1"/>
      <circle cx="9" cy="15" r="2.6" fill="#ff4d2e"/><circle cx="24" cy="11" r="2.6" fill="#ff4d2e"/><circle cx="39" cy="15" r="2.6" fill="#ff4d2e"/>`;
  }
  return `<svg width="${size}" height="${size}" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Grade ${g} ${m.type}">${body}</svg>`;
}
function gradeChip(g,size){
  return `<span style="display:inline-flex;align-items:center;gap:6px;vertical-align:middle">${gradeBadge(g,size||22)}<span style="font-weight:700">${tr('page.gradeWord')} ${g}</span> <span style="color:var(--muted);font-size:11px">· ${tr(gradeMeta(g).tierKey)}</span></span>`;
}
function hasAnyGrade(s){ return Object.values(styleGradesOf(s)).some(v=>v>0) || !!(s&&s.grade>0); } // a student with no per-style grade AND no legacy grade has no grade yet
function babyBadge(size){ size=size||22; return `<span style="display:inline-flex;align-items:center;justify-content:center;width:${size}px;height:${size}px;font-size:${Math.round(size*0.82)}px;line-height:1" role="img" aria-label="${tr('page.noGradesYet')}">👶</span>`; }
function gradeBadgeFor(s,size){ return hasAnyGrade(s)?gradeBadge(gradeOf(s),size):babyBadge(size); }
function gradeChipFor(s,size){ return hasAnyGrade(s)?gradeChip(gradeOf(s),size):`<span style="display:inline-flex;align-items:center;gap:6px;vertical-align:middle">${babyBadge(size||22)}<span style="color:var(--muted);font-weight:600">${tr('page.noGradesYet')}</span></span>`; }
function renderStudentGradeInputs(sg){
  sg=sg||{};
  const host=document.getElementById('stu-grades'); if(!host) return;
  host.innerHTML=styleList().map(st=>{
    const g=sg[st]||0;
    const opts=[`<option value="0">—</option>`].concat([1,2,3,4,5].map(n=>`<option value="${n}" ${g===n?'selected':''}>${tr('page.gradeWord')} ${n}</option>`)).join('');
    return `<div style="display:flex;align-items:center;gap:6px"><span style="flex:1;color:var(--muted);font-size:12px">${st}</span><select class="stu-style-grade" data-style="${st}" style="width:auto;margin:0;padding:5px 6px;font-size:12px">${opts}</select></div>`;
  }).join('');
}
function collectStudentGrades(){
  const sg={};
  document.querySelectorAll('#stu-grades .stu-style-grade').forEach(sel=>{ const g=parseInt(sel.value)||0; if(g>0) sg[sel.dataset.style]=g; });
  return sg;
}
function studentGradesSummary(s){ // "Hip-hop G1 · Dancehall G2 · Street Jazz G3"
  const sg=styleGradesOf(s); const keys=Object.keys(sg);
  if(!keys.length) return tr('page.noGradesYet');
  return keys.map(st=>`${st} ${tr('page.gradeWord')} ${sg[st]}`).join(' · ');
}

const REWARDS=[
  {id:'water',    icon:'💧', cost:30,   key:'reward.water'},
  {id:'drink',    icon:'🥤', cost:60,   key:'reward.drink'},
  {id:'sticker',  icon:'✨', cost:100,  key:'reward.sticker'},
  {id:'wristband',icon:'🎗️', cost:180,  key:'reward.wristband'},
  {id:'tote',     icon:'👜', cost:250,  key:'reward.tote'},
  {id:'freeclass',icon:'🎟️', cost:400,  key:'reward.freeclass'},
  {id:'tshirt',   icon:'👕', cost:650,  key:'reward.tshirt'},
  {id:'monthfree',icon:'🏆', cost:1500, key:'reward.monthfree'},
];
// Rewards now live in the shared database (DB.rewards) so admin/counter can edit & delete them.
// The list above is only the default seed used the first time.
function ensureRewards(){
  if(!Array.isArray(DB.rewards)||!DB.rewards.length){
    DB.rewards=REWARDS.map(r=>({id:r.id,icon:r.icon,cost:r.cost,key:r.key}));
  }
}
function rewardsList(){ ensureRewards(); return DB.rewards; }
function rewardName(r){ if(!r) return ''; if(r.name&&String(r.name).trim()) return r.name; return r.key?tr(r.key):(r.id||''); }
function gradePoints(g){ return ({0:1,1:2,2:5,3:10,4:10,5:10})[g]||1; } // points earned per class attended (none=1, G1=2, G2=5, G3=10, G4=10, G5=10 — G4/G5 match G3)
function studentEarnedPoints(sid){
  const s=DB.students.find(x=>x.id===sid);
  const per=gradePoints(hasAnyGrade(s)?gradeOf(s):0);
  // every PRESENT class earns points at the student's grade rate — includes monthly, credit and single-class drop-ins
  return DB.attendance.filter(a=>a.studentId===sid&&a.status==='present').length*per;
}
function studentBonusPoints(sid){ const s=DB.students.find(x=>x.id===sid); return ((s&&s.bdayClaims)?s.bdayClaims.length:0)*100; }
// Points are only DEDUCTED when a reward code is CLAIMED (collected) at the counter.
function committedPoints(s){
  // authoritative once set at claim time; otherwise fall back to the sum of already-collected rewards
  if(s && typeof s.spentPoints==='number') return s.spentPoints;
  return ((s&&s.redemptions)||[]).filter(r=>r.collected).reduce((n,r)=>n+(r.cost||0),0);
}
function studentPendingPoints(sid){ const s=DB.students.find(x=>x.id===sid); return ((s&&s.redemptions)||[]).filter(r=>!r.collected).reduce((n,r)=>n+(r.cost||0),0); }
function studentRedeemedPoints(sid){ const s=DB.students.find(x=>x.id===sid); return committedPoints(s); } // "deducted" = points from claimed rewards only
// DISPLAYED balance = earned + bonus − deducted(claimed only). Points come off a student's total ONLY when
// the counter collects the code — redeeming merely generates a code and puts the points ON HOLD.
function studentAdjustPoints(sid){ const s=DB.students.find(x=>x.id===sid); return (s&&Number(s.pointsAdjust))||0; } // manual +/- set by counter/admin in the student edit form
function pointsBalance(sid){ return studentEarnedPoints(sid)+studentBonusPoints(sid)+studentAdjustPoints(sid)-studentRedeemedPoints(sid); }
// ── Student edit form: Reward Points Add/Deduct control ─────────────────────────────────────────
// The counter enters an AMOUNT and taps Add or Deduct; the change is applied to the balance when they
// press Save Student (same as every other field on the form). Internally it still moves the stored
// manual adjustment (s.pointsAdjust) up or down — Add/Deduct is just a friendlier way to nudge it than
// typing an absolute total, and it can never push the balance below zero.
let pointsOp='add'; // 'add' | 'deduct' — which way the amount changes the balance
function setPointsOp(op){
  pointsOp=(op==='deduct')?'deduct':'add';
  const a=document.getElementById('stu-points-add'), d=document.getElementById('stu-points-deduct');
  if(a) a.className='btn btn-s '+(pointsOp==='add'?'btn-g':'btn-o');
  if(d) d.className='btn btn-s '+(pointsOp==='deduct'?'btn-g':'btn-o');
  updatePointsPreview();
}
function renderPointsBox(sid){
  const cd=document.getElementById('stu-points-current');
  if(cd) cd.textContent='Current balance: '+pointsBalance(sid)+' pts';
  updatePointsPreview();
}
function updatePointsPreview(){
  const pn=document.getElementById('stu-points-note'); if(!pn) return;
  const idv=(document.getElementById('stu-id')||{}).value||'';
  const sid=idv?parseInt(idv):null;
  if(sid===null||isNaN(sid)){ pn.textContent=''; return; }
  const cur=pointsBalance(sid), adj=studentAdjustPoints(sid);
  const breakdown=`Earned ${studentEarnedPoints(sid)} · birthday bonus ${studentBonusPoints(sid)}${adj?` · manual ${adj>0?'+':''}${adj}`:''} · redeemed \u2212${studentRedeemedPoints(sid)}.`;
  const amtEl=document.getElementById('stu-points');
  const amt=Math.max(0,parseInt(amtEl&&amtEl.value)||0);
  if(amt>0){
    const next=(pointsOp==='deduct')?Math.max(0,cur-amt):cur+amt;
    pn.innerHTML=`${breakdown}<br><b>${pointsOp==='deduct'?'Deduct':'Add'} ${amt} \u2192 new balance ${next} pts</b> — applied when you press Save.`;
  }else{
    pn.innerHTML=`${breakdown}<br>Enter an amount, tap Add or Deduct, then press Save.`;
  }
}
// SPENDABLE = displayed − points already on hold from pending (uncollected) codes, so a student can never
// redeem more than they actually have, even before any code is claimed.
function spendablePoints(sid){ return pointsBalance(sid)-studentPendingPoints(sid); }
function birthdayInfo(s){
  if(!s||!s.birthday) return null;
  const today=new Date(); today.setHours(0,0,0,0);
  const bd=new Date(s.birthday+'T00:00:00');
  const isToday=today.getMonth()===bd.getMonth()&&today.getDate()===bd.getDate();
  let next=new Date(today.getFullYear(),bd.getMonth(),bd.getDate());
  if(next<today) next=new Date(today.getFullYear()+1,bd.getMonth(),bd.getDate());
  const days=Math.round((next-today)/86400000);
  const claimedThisYear=(s.bdayClaims||[]).includes(today.getFullYear());
  return {isToday,days,claimedThisYear};
}
// A student's age is derived from their birthday (no longer entered by hand). Falls back to any
// stored s.age for older records that predate the birthday field, or '—' when neither exists.
function ageOf(s){
  if(s&&s.birthday){
    const bd=new Date(s.birthday+'T00:00:00');
    if(!isNaN(bd)){
      const t=new Date();
      let a=t.getFullYear()-bd.getFullYear();
      const m=t.getMonth()-bd.getMonth();
      if(m<0||(m===0&&t.getDate()<bd.getDate())) a--;
      if(a>=0&&a<130) return a;
    }
  }
  return (s&&s.age!=null&&s.age!=='')?s.age:'—';
}
function genRewardCode(){ const c='ABCDEFGHJKLMNPQRSTUVWXYZ23456789'; let s=''; for(let i=0;i<6;i++) s+=c[Math.floor(Math.random()*c.length)]; return s; }
async function redeemReward(id){
  const sid=session.ref, s=DB.students.find(x=>x.id===sid), reward=rewardsList().find(r=>r.id===id);
  if(!s||!reward) return;
  if(spendablePoints(sid)<reward.cost){ toast(tr('msg.notEnoughPoints'),false); return; }
  if(!Array.isArray(s.redemptions)) s.redemptions=[];
  const code=genRewardCode();
  const entry={id:'rd'+Date.now(),rewardId:id,name:rewardName(reward),icon:reward.icon,cost:reward.cost,date:toLocalISODate(new Date()),code,collected:false};
  s.redemptions.unshift(entry);
  // Saved through the student's own record rather than a whole-database push: a student is only ever
  // allowed to change their own row, and the server enforces that. it never actually saved — don't
  // hand out a code the counter can't honor.
  if(!await updateStudentRecord(sid,{redemptions:s.redemptions})){ s.redemptions=s.redemptions.filter(r=>r.id!==entry.id); return; }
  renderRewards();
  // show the student their collection code to give to the counter
  showRewardCode(reward, code);
}
function showRewardCode(reward,code){
  document.getElementById('rcode-title').textContent=tr('page.rewardCodeTitle');
  document.getElementById('rcode-reward').textContent=(reward.icon||'🎁')+' '+rewardName(reward);
  document.getElementById('rcode-value').textContent=code;
  document.getElementById('rcode-note').textContent=tr('page.rewardCodeNote');
  openM('m-rcode');
}
async function claimBirthday(){
  const sid=session.ref, s=DB.students.find(x=>x.id===sid);
  const info=birthdayInfo(s); if(!info) return;
  if(!info.isToday){ toast(tr('msg.notBirthday'),false); return; }
  const y=new Date().getFullYear();
  if(!Array.isArray(s.bdayClaims)) s.bdayClaims=[];
  if(s.bdayClaims.includes(y)){ toast(tr('msg.birthdayClaimed'),false); return; }
  s.bdayClaims.push(y);
  // same reasoning as redeemReward(): a student writes only their own record
  if(!await updateStudentRecord(sid,{bdayClaims:s.bdayClaims})){ s.bdayClaims=s.bdayClaims.filter(yr=>yr!==y); return; } // it never actually saved — allow retry
  toast(tr('msg.birthdayBonus'));
  renderRewards();
}
function renderRewards(){
  ensureStudentExtras();
  const sid=session.ref, s=DB.students.find(x=>x.id===sid);
  if(!s){ document.getElementById('page-rewards').innerHTML=`<div class="empty">—</div>`; return; }
  const g=gradeOf(s), m=gradeMeta(g), bal=pointsBalance(sid), spend=spendablePoints(sid), held=studentPendingPoints(sid), info=birthdayInfo(s);
  const noGrade=!hasAnyGrade(s);
  const sg=styleGradesOf(s); const styleKeys=Object.keys(sg).sort((a,b)=>sg[b]-sg[a]);
  const gradeCards=styleKeys.length
    ? styleKeys.map(st=>{ const gg=sg[st], mm=gradeMeta(gg), top=(gg===g);
        return `<div class="scard" style="text-align:center;${top?`border-color:${mm.c1}`:''}">
          <div style="display:flex;justify-content:center">${gradeBadge(gg,42)}</div>
          <div style="font-weight:700;font-size:13px;margin-top:6px">${st}</div>
          <div style="font-size:12px;color:var(--muted)">${tr('page.gradeWord')} ${gg} · ${tr(mm.tierKey)}</div>
          ${top?`<div style="margin-top:5px"><span class="badge bg">★ ${tr('page.highest')}</span></div>`:''}
        </div>`; }).join('')
    : `<div class="empty">${tr('page.noGradesYet')}</div>`;
  const gradesSection=`
    <div class="stitle" style="font-size:15px">🏅 ${tr('page.gradesByStyle')}</div>
    <div style="color:var(--muted);font-size:12px;margin-bottom:10px">${tr('page.highestGradeNote').replace('{g}',g)}</div>
    <div style="display:grid;grid-template-columns:repeat(auto-fill,minmax(150px,1fr));gap:12px;margin-bottom:22px">${gradeCards}</div>`;
  let bday;
  if(!s.birthday){
    bday=`<div class="scard"><div style="color:var(--muted);font-size:13px">${tr('page.birthdayNone')}</div></div>`;
  }else if(info.isToday){
    bday=`<div class="scard" style="border-color:var(--gold);text-align:center;background:radial-gradient(ellipse at top,rgba(255,122,41,.16),transparent)">
      <div style="font-size:32px">🎂</div>
      <div style="font-weight:700;font-size:16px;color:var(--gold)">${tr('page.birthdayToday')}</div>
      <div style="color:var(--muted);font-size:12px;margin:6px 0 12px">${tr('page.birthdayBonusNote')}</div>
      <button class="btn btn-g btn-s" ${info.claimedThisYear?'disabled style="opacity:.5"':''} onclick="claimBirthday()">${info.claimedThisYear?('✓ '+tr('page.birthdayClaimedBtn')):('🎁 '+tr('page.claimBirthday'))}</button>
    </div>`;
  }else{
    bday=`<div class="scard"><div style="display:flex;align-items:center;gap:12px"><div style="font-size:28px">🎂</div><div><div style="font-weight:700">${tr('page.birthdayCountdown').replace('{d}',info.days)}</div><div style="color:var(--muted);font-size:12px">${s.birthday}</div></div></div></div>`;
  }
  const cards=rewardsList().map(r=>{
    const can=spend>=r.cost;
    return `<div class="scard" style="text-align:center">
      <div style="font-size:30px;margin-bottom:6px">${r.icon}</div>
      <div style="font-weight:600;font-size:13px;min-height:34px;display:flex;align-items:center;justify-content:center">${rewardName(r)}</div>
      <div style="color:var(--gold);font-weight:700;margin:6px 0 10px">${r.cost} ${tr('page.pts')}</div>
      <button class="btn ${can?'btn-g':'btn-o'} btn-s" ${can?'':'disabled style="opacity:.5;cursor:not-allowed"'} onclick="redeemReward('${r.id}')">${tr('page.redeem')}</button>
    </div>`;
  }).join('');
  const hist=(s.redemptions||[]);
  const histHtml=hist.length?`<div class="twrap"><table><thead><tr><th>${tr('common.date')}</th><th>${tr('page.reward')}</th><th>${tr('page.pts')}</th><th>${tr('page.code')}</th><th>${tr('common.status')}</th></tr></thead><tbody>${hist.map(r=>`<tr><td style="color:var(--muted)">${r.date}</td><td>${r.icon||'🎁'} ${r.name}</td><td style="color:${r.collected?'var(--danger)':'var(--gold)'};white-space:nowrap">${r.collected?`-${r.cost}`:`🔒 ${r.cost}`}</td><td style="font-family:'JetBrains Mono',monospace;font-weight:700;letter-spacing:1px">${r.code||'—'}</td><td>${r.collected?`<span class="badge bg">✓ ${tr('page.collected')}</span>`:`<span class="badge by">${tr('page.pendingCollect')}</span>`}</td></tr>`).join('')}</tbody></table></div>`:`<div class="empty">${tr('page.noRedemptions')}</div>`;

  document.getElementById('page-rewards').innerHTML=`
    <div class="role-banner" style="border-left-color:${noGrade?'var(--border)':m.c1}">
      <div style="flex-shrink:0">${noGrade?babyBadge(54):gradeBadge(g,54)}</div>
      <div style="flex:1">
        <div class="rn">${noGrade?tr('page.noGradesYet'):`${tr('page.gradeWord')} ${g} · <span style="color:${m.c1}">${tr(m.tierKey)}</span>`}</div>
        <div class="rs">${tr('page.gradeNote')}</div>
      </div>
      <div style="text-align:right">
        <div style="font-family:'Bebas Neue',sans-serif;font-size:32px;color:var(--gold);line-height:1">${bal}</div>
        <div style="font-size:11px;color:var(--muted);text-transform:uppercase;letter-spacing:.5px">${tr('page.points')}</div>
      </div>
    </div>
    <div style="color:var(--muted);font-size:12px;margin-bottom:18px">💡 ${tr('page.pointsEarnedNote').replace('{p}',gradePoints(noGrade?0:g))}</div>
    ${held>0?`<div style="font-size:12px;margin:-10px 0 18px;padding:9px 12px;border-radius:6px;background:rgba(243,156,18,.1);border:1px solid rgba(243,156,18,.3);color:var(--gold)">🔒 ${currentLang==='zh'?`${held} 积分已锁定 —— 到前台出示下方代码领取后才会正式扣除`:`${held} pts on hold — shown as code(s) below. They're only deducted once the counter collects them.`}</div>`:''}
    ${gradesSection}

    <div class="stitle" style="font-size:15px">🎂 ${tr('page.birthday')}</div>
    <div style="margin-bottom:20px">${bday}</div>

    <div class="stitle" style="font-size:15px">🎁 ${tr('page.redeemRewards')}</div>
    <div style="display:grid;grid-template-columns:repeat(auto-fill,minmax(148px,1fr));gap:12px;margin-bottom:24px">${cards}</div>

    <div class="stitle" style="font-size:15px">👕 ${tr('promo.rewardTitle')}</div>
    <div class="scard" style="margin-bottom:24px;display:flex;gap:12px;align-items:center;border-left:3px solid var(--gold)">
      <input type="checkbox" ${s.tshirtRedeemed?'checked':''} disabled onclick="return false" style="width:18px;height:18px;accent-color:var(--gold);cursor:not-allowed"/>
      <div>
        <div style="font-weight:700;font-size:13px">${tr('promo.freeTshirt')}</div>
        <div style="color:var(--muted);font-size:11.5px">${s.tshirtRedeemed?tr('promo.studentOn'):tr('promo.studentOff')}</div>
      </div>
    </div>

    <div class="stitle" style="font-size:15px">🧾 ${tr('page.redemptionHistory')}</div>
    ${histHtml}`;
}

// ══════════ STUDENT — MY FEES ══════════
let studentPayFrom=null;
let studentPayTo=null;
function setStudentPayRange(){
  studentPayFrom=document.getElementById('spay-from').value||null;
  studentPayTo=document.getElementById('spay-to').value||null;
  renderStudentFees();
}
function clearStudentPayRange(){
  studentPayFrom=null; studentPayTo=null;
  renderStudentFees();
}
// ── studio payment details shown to STUDENTS only (how to pay: bank transfer + Touch 'n Go QR) ──
// Tap-to-zoom for a small QR preview — a 120px code can be genuinely hard to scan reliably,
// especially off someone else's phone screen. The overlay is created once and reused after (just
// swapping its image src), rather than rebuilt on every tap. Dismissible by tapping anywhere —
// the backdrop or the enlarged image itself — matching how a phone's own photo viewer behaves,
// so it needs no separate close button or explanation.
function zoomQR(url){
  let ov=document.getElementById('qr-zoom-overlay');
  if(!ov){
    ov=document.createElement('div');
    ov.id='qr-zoom-overlay';
    ov.style.cssText='position:fixed;inset:0;background:rgba(0,0,0,.92);z-index:99999;display:flex;align-items:center;justify-content:center;padding:30px;cursor:zoom-out';
    ov.onclick=()=>{ ov.style.display='none'; };
    const img=document.createElement('img');
    img.id='qr-zoom-img';
    img.alt='Payment QR';
    img.style.cssText='max-width:min(90vw,420px);max-height:80vh;background:#fff;padding:20px;border-radius:16px;box-shadow:0 20px 60px rgba(0,0,0,.6)';
    ov.appendChild(img);
    document.body.appendChild(ov);
  }
  document.getElementById('qr-zoom-img').src=url;
  ov.style.display='flex';
}
function studioPaymentCard(me){
  const pi=DB.paymentInfo||{};
  // Mirrors the same per-branch logic the mobile app uses (myClasses -> distinct placeIds), so a
  // student enrolled across multiple branches sees each branch's own QR, not just one generic card.
  const branches=me?studentPlaceIds(me).map(id=>Pl(id)):[];
  return `
    <div class="stitle">${tr('page.howToPay')}</div>
    <div class="scard" style="margin-bottom:18px">
      <div style="font-size:11px;font-weight:700;letter-spacing:.6px;text-transform:uppercase;color:var(--gold);margin-bottom:10px">🏦 ${tr('page.bankTransfer')}</div>
      <div style="font-size:13px;line-height:2.05">
        <div><span style="color:var(--muted)">${tr('page.bankName')}:</span> <b>${pi.bankName||'—'}</b></div>
        <div><span style="color:var(--muted)">${tr('page.accountName')}:</span> <b>${pi.accountName||'—'}</b></div>
        <div><span style="color:var(--muted)">${tr('page.accountNumber')}:</span> <b style="font-family:'JetBrains Mono',monospace;color:var(--gold);letter-spacing:.5px">${pi.accountNumber||'—'}</b></div>
        <div><span style="color:var(--muted)">DuitNow:</span> <b>${pi.duitnow||'—'}</b></div>
      </div>
      ${branches.map(pl=>`
      <div style="display:flex;gap:20px;flex-wrap:wrap;align-items:center;border-top:1px solid var(--border);padding-top:14px;margin-top:14px">
        <div style="text-align:center">
          <div style="font-size:10px;font-weight:700;letter-spacing:.5px;text-transform:uppercase;color:var(--muted);margin-bottom:8px">🏢 ${pl.name}</div>
          ${pl.qrImage
            ?`<div style="background:#fff;padding:10px;border-radius:12px;display:inline-block;box-shadow:0 8px 24px rgba(0,0,0,.45)"><img src="${H(pl.qrImage)}" alt="Payment QR" style="width:120px;height:120px;object-fit:contain;display:block;cursor:zoom-in" onclick="zoomQR('${pl.qrImage.replace(/'/g,"%27")}')"/></div>`
            :`<div style="width:120px;height:120px;border:1px dashed var(--border);border-radius:12px;display:flex;align-items:center;justify-content:center;color:var(--muted);font-size:10.5px;padding:10px;text-align:center">${tr('page.qrNone')}</div>`}
        </div>
        <div>
          <div style="font-size:11px;font-weight:700;letter-spacing:.6px;text-transform:uppercase;color:var(--gold);margin-bottom:8px">📱 ${tr('page.tngEwallet')}</div>
          <div style="font-size:12.5px;color:#f5f1e8"><b>${pi.tngName||pl.name}</b></div>
          <div style="font-size:12px;color:var(--muted);font-family:'JetBrains Mono',monospace">${pi.tngNumber||'—'}</div>
          <div style="font-size:10.5px;color:var(--muted);margin-top:6px">${tr('page.scanToPay')}</div>
        </div>
      </div>`).join('')}
      <div style="font-size:11.5px;color:var(--muted);margin-top:14px;border-top:1px solid var(--border);padding-top:11px">💡 ${tr('page.payNote')}</div>
    </div>`;
}
function renderStudentFees(){
  const sid=session.ref;
  const me=DB.students.find(s=>s.id===sid);
  const myPayments=DB.payments.filter(p=>p.studentId===sid);
  const pending=myPayments.filter(p=>p.status!=='Paid');
  const inRange=date=>!date?true:(!studentPayFrom||date>=studentPayFrom)&&(!studentPayTo||date<=studentPayTo);
  const filteredPayments=[...myPayments].filter(p=>inRange(p.date)).sort((a,b)=>(b.date||'').localeCompare(a.date||'')||b.id-a.id);

  document.getElementById('page-my-fees').innerHTML=`
    <div class="role-banner"><div class="ri">🎓</div><div style="flex:1"><div class="rn">${me?me.name:tr('common.student')}</div><div class="rs">${tr('page.monthlyFee')}: ${me?fmt(me.fee):''} · ${me?SC(me).map(c=>c.name).join(', ')||tr('page.noClasses2'):'—'}</div></div><div style="flex-shrink:0">${me?gradeChipFor(me,26):''}</div></div>
    <div class="stat-row">
      <div class="scard"><div class="sl">${tr('page.monthlyFee')}</div><div class="sv" style="font-size:20px">${me?fmt(me.fee):'—'}</div></div>
      <div class="scard"><div class="sl">🎟️ ${tr('page.classCredits')}</div><div class="sv" style="font-size:20px;color:var(--success)">${me?creditsOf(me):0}</div><div class="ss">${tr('page.creditsLeft')}${(me&&creditsOf(me)>0&&creditExpiryOf(me))?` · ${tr('page.bonusExpires').replace('{d}',creditExpiryOf(me))}`:''}</div></div>
      ${!BONUS_ENABLED?'':(()=>{ // read-only: the student can see the bonus but only the front desk can spend it
        const g=me?activeBonusGrant(me,toLocalISODate(new Date())):null;
        return `<div class="scard"><div class="sl">🎁 ${tr('page.bonusClass')}</div>
          <div class="sv" style="font-size:20px;color:${g?'var(--gold)':'var(--muted)'}">${g?1:0}</div>
          <div class="ss">${g?tr('page.bonusExpires').replace('{d}',g.expires):tr('page.bonusNone')}</div></div>`; })()}
      ${(()=>{ // read-only: shows the deadline so the student knows when their make-up lapses
        const list=me?openReplacements(me,toLocalISODate(new Date())):[];
        const next=list[0];
        return `<div class="scard"><div class="sl">🔁 ${tr('page.replacementCard')}</div>
          <div class="sv" style="font-size:20px;color:${next?'var(--gold)':'var(--muted)'}">${list.length}</div>
          <div class="ss">${next?(next.noExpiry?tr('page.replaceNoExpiry'):tr('page.replaceExpires').replace('{d}',next.expires)):tr('page.replaceNone')}</div></div>`; })()}
      <div class="scard"><div class="sl">${tr('common.unpaid')}</div><div class="sv" style="font-size:20px;color:var(--danger)">${pending.length}</div><div class="ss">${pending.length!==1?tr('page.unpaidRecordsWord'):tr('page.unpaidRecordWord')}</div></div>
    </div>
    ${studioPaymentCard(me)}
    ${pending.length>0?`<div class="stitle">${tr('page.outstandingPayments')}</div>`+pending.map(p=>{
      const cls=p.classId?C(p.classId):null;
      return `<div class="fee-card" style="border-color:var(--danger)">
        <div style="display:flex;justify-content:space-between;align-items:center">
          <div><div class="fm">${p.month} 2026${cls?` · ${cls.name}`:''}</div><span class="badge br">${tr('common.unpaid')}</span></div>
          <div class="fa" style="color:var(--danger)">${fmt(p.amount)}</div>
        </div>
        ${p.notes?`<div style="color:var(--muted);font-size:12px;margin-top:8px">${tr('page.noteLabel')}: ${p.notes}</div>`:''}
      </div>`;}).join(''):''}
    <div class="stitle">${tr('page.paymentHistory')}</div>
    <div class="frow" style="margin-bottom:12px">
      <div class="fg"><label>${tr('common.from')}</label><input type="date" id="spay-from" value="${studentPayFrom||''}" onchange="setStudentPayRange()"/></div>
      <div class="fg"><label>${tr('common.to')}</label><input type="date" id="spay-to" value="${studentPayTo||''}" onchange="setStudentPayRange()"/></div>
    </div>
    ${(studentPayFrom||studentPayTo)?`<button class="btn btn-o btn-s" style="margin-bottom:12px" onclick="clearStudentPayRange()">${tr('common.clearFilter')}</button>`:''}
    <div class="twrap"><table><thead><tr><th>${tr('common.month')}</th><th>${tr('common.class')}</th><th>${tr('common.amount')}</th><th>${tr('common.status')}</th><th>${tr('common.date')}</th><th>${tr('common.method')}</th><th></th></tr></thead>
    <tbody>${filteredPayments.map(p=>{const b=p.status==='Paid'?'bg':'br';const cls=p.classId?C(p.classId):null;
      return`<tr><td><strong>${p.month}</strong></td><td style="color:var(--gold);font-weight:600">${cls?cls.name:'—'}</td><td style="color:var(--black);font-weight:600">${fmt(p.amount)}</td>
      <td><span class="badge ${b}">${p.status==='Paid'?tr('common.paid'):tr('common.unpaid')}</span></td>
      <td>${p.date||'—'}</td><td>${p.method||'—'}</td>
      <td>${p.status==='Paid'?`<button class="btn btn-o btn-s" onclick="printReceipt(${p.id})">${tr('page.receipt')}</button>`:''}</td></tr>`;
    }).join('')||`<tr><td colspan="7" class="empty">${(studentPayFrom||studentPayTo)?tr('page.noPaymentsInRange'):tr('page.noPaymentRecords')}</td></tr>`}</tbody></table></div>`;
  feeReminderBanner([sid]);
}

// ══════════ STUDENT — MY CLASSES ══════════
function renderStudentClasses(){
  const sid=session.ref;
  const me=DB.students.find(s=>s.id===sid);
  const myClasses=me?SC(me):[];

  document.getElementById('page-my-classes').innerHTML=`
    <div class="role-banner"><div class="ri">🎓</div><div style="flex:1"><div class="rn">${tr('title.my-classes')}</div><div class="rs">${tr('page.enrolledSince')} ${me?me.join:'—'} · ${myClasses.length} ${myClasses.length!==1?tr('page.classesThisWeek'):tr('page.classThisWeek')}</div></div><div style="flex-shrink:0">${me?gradeChipFor(me,26):''}</div></div>
    ${me?`<div class="scard" style="margin-bottom:16px">
      <div class="stitle" style="margin-bottom:10px;font-size:14px">${tr('page.myProfile')}</div>
      <div style="display:grid;grid-template-columns:1fr 1fr;gap:10px;font-size:13px">
        <div><span style="color:var(--muted)">${tr('common.age')}:</span> ${ageOf(me)}</div>
        <div><span style="color:var(--muted)">${tr('common.parent')}:</span> ${me.parent}</div>
        <div><span style="color:var(--muted)">${tr('common.phone')}:</span> ${me.phone}</div>
        <div><span style="color:var(--muted)">${tr('common.email')}:</span> ${me.email}</div>
      </div>
    </div>`:''}
    <div style="margin-bottom:8px;color:var(--muted);font-size:11px">${tr('page.enrollmentChangeNote')}</div>
    ${myClasses.length===0?`<div class="empty">${tr('page.notEnrolled')}</div>`:
      myClasses.map(myClass=>{
        const teacher=T(myClass.teacherId);
        const classmates=DB.students.filter(s=>s.id!==sid&&s.classIds&&s.classIds.includes(myClass.id));
        return `<div class="scard" style="margin-bottom:16px">
          <div style="display:flex;justify-content:space-between;align-items:flex-start;flex-wrap:wrap;gap:12px">
            <div>
              <div style="font-size:18px;font-weight:700;margin-bottom:6px;color:var(--gold)">${myClass.name}</div>
              <div style="color:var(--muted);font-size:13px;margin-bottom:4px">📅 ${tr('common.days.'+myClass.day)} · ${myClass.start} – ${myClass.end}</div>
              <div style="color:var(--muted);font-size:13px;margin-bottom:4px">📍 ${myClass.room} · 🏢 ${Pl(myClass.placeId).name}</div>
              <div style="color:var(--muted);font-size:13px">👩‍🏫 <span style="color:${TCOLOR(teacher.id)};font-weight:600">${teacher.name}</span></div>
            </div>
            <span class="tag" style="font-size:13px;padding:6px 12px">${myClass.style}</span>
          </div>
          <div class="stitle" style="font-size:14px;margin-top:14px">${tr('page.classmates')} (${classmates.length})</div>
          <div class="twrap"><table><thead><tr><th>${tr('common.name')}</th><th>${tr('common.age')}</th></tr></thead>
          <tbody>${classmates.map(s=>`<tr><td><div class="ncell"><div class="avatar">${ini(s.name)}</div>${s.name}</div></td><td>${ageOf(s)}</td></tr>`).join('')||`<tr><td colspan="2" class="empty">${tr('page.noOtherStudents')}</td></tr>`}
          </tbody></table></div>
        </div>`;
      }).join('')}`;
}

// ══════════ STUDENT — ALL ACADEMY CLASSES (browse) ══════════
let allClassStyleFilter='all';
let allClassPlaceFilter='all';
let allClassTeacherFilter='all';
function renderAllClasses(){
  const styles=['all',...new Set(DB.classes.map(c=>c.style))];
  let list=DB.classes;
  if(allClassStyleFilter!=='all') list=list.filter(c=>c.style===allClassStyleFilter);
  if(allClassPlaceFilter!=='all') list=list.filter(c=>c.placeId===parseInt(allClassPlaceFilter));
  if(allClassTeacherFilter!=='all') list=list.filter(c=>c.teacherId===parseInt(allClassTeacherFilter));

  document.getElementById('page-all-classes').innerHTML=`
    <div class="role-banner"><div class="ri">🏫</div><div><div class="rn">${tr('title.all-classes')}</div><div class="rs">${tr('page.browseAllClasses')} ${DB.classes.length} ${tr('page.totalWord')}</div></div></div>
    <div class="fg"><label>${tr('common.filterByFranchise')}</label><select onchange="allClassPlaceFilter=this.value;renderAllClasses()">
      <option value="all" ${allClassPlaceFilter==='all'?'selected':''}>${tr('common.allFranchises')}</option>
      ${DB.places.map(pl=>`<option value="${pl.id}" ${allClassPlaceFilter==String(pl.id)?'selected':''}>${pl.name}</option>`).join('')}
    </select></div>
    <div class="fg"><label>${tr('common.filterByTeacher')}</label><select onchange="allClassTeacherFilter=this.value;renderAllClasses()">
      <option value="all" ${allClassTeacherFilter==='all'?'selected':''}>${tr('common.allTeachers')}</option>
      ${DB.teachers.map(t=>`<option value="${t.id}" ${allClassTeacherFilter==String(t.id)?'selected':''}>${t.name}</option>`).join('')}
    </select></div>
    <div class="fg"><label>${tr('common.filterByStyle')}</label><select onchange="allClassStyleFilter=this.value;renderAllClasses()">
      ${styles.map(s=>`<option value="${s}" ${allClassStyleFilter===s?'selected':''}>${s==='all'?tr('page.allStyles'):s}</option>`).join('')}
    </select></div>
    <div class="twrap"><table><thead><tr><th>${tr('common.class')}</th><th>${tr('common.franchise2')}</th><th>${tr('common.teacher')}</th><th>${tr('common.day')}</th><th>${tr('common.time')}</th><th>${tr('common.room')}</th><th>${tr('common.spots')}</th></tr></thead>
    <tbody>${list.map(c=>{
      const t=T(c.teacherId);
      const e=DB.students.filter(s=>s.classIds&&s.classIds.includes(c.id)).length;
      const full=e>=c.max;
      return`<tr><td><strong style="color:var(--gold)">${c.name}</strong><br><span class="tag">${c.style}</span> ${diffTag(c)}</td>
      <td>${Pl(c.placeId).name}</td>
      <td><div class="ncell"><div class="avatar">${ini(t.name)}</div><span style="color:${TCOLOR(c.teacherId)};font-weight:600">${t.name}</span></div></td>
      <td>${tr('common.days.'+c.day)}</td><td>${c.start}–${c.end}</td><td>${c.room}</td>
      <td>${full?`<span class="badge br">${tr('common.full')}</span>`:`<span class="badge bg">${c.max-e} ${tr('common.open')}</span>`}</td></tr>`;
    }).join('')||`<tr><td colspan="7" class="empty">No classes found</td></tr>`}</tbody></table></div>
    <div style="margin-top:12px;color:var(--muted);font-size:11px">💡 Interested in joining a class? Speak to the studio admin to update your enrollment.</div>`;
}

// ══════════ ATTENDANCE ══════════
let attClassId=null;
let attDate=null;
let attTeacherFilter=null;
let attDayFilter=null;
let replacementSearchQuery='';
let attHistFrom=null;
let attHistTo=null;
let attStudentSearchQuery='';

// toISOString() converts to UTC, which silently shifts the date back a day in any timezone ahead of
// UTC (e.g. Malaysia, UTC+8) — this formats using LOCAL date parts instead, so "next Monday" always
// lands on the actual next Monday regardless of the browser's timezone.
function toLocalISODate(d){
  const y=d.getFullYear(), m=String(d.getMonth()+1).padStart(2,'0'), day=String(d.getDate()).padStart(2,'0');
  return `${y}-${m}-${day}`;
}
function dayIndexOf(dayName){ return ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'].indexOf(dayName); }
function nearestDateForDay(dayName){
  const targetIdx=dayIndexOf(dayName);
  const today=new Date();
  let diff=today.getDay()-targetIdx;
  if(diff<0) diff+=7;
  const d=new Date(today);
  d.setDate(d.getDate()-diff);
  return toLocalISODate(d);
}
function shiftAttDate(days){
  const d=new Date(attDate+'T00:00:00');
  d.setDate(d.getDate()+days);
  attDate=toLocalISODate(d);
  renderAttendance();
}
// Jumping the attendance view to a different date used to apply instantly — one stray tap on the
// date picker could switch the counter onto the wrong session with no way back except noticing and
// jumping again. Now every jump asks for confirmation first; cancelling puts the date input back to
// the date actually on screen instead of leaving it showing an unapplied pick.
//
// The date picker always jumps to EXACTLY the date picked — it used to force-snap any date that
// wasn't the class's usual weekday onto the nearest matching weekday instead, which meant there was
// no way to use this picker to view/mark a one-off session held on a different day (e.g. a
// rescheduled or replacement class), even though tapping a date under "Previous records" already
// supported that with no snapping at all. Snapping to "nearest" also had a confusing edge case: it
// could round right back onto the date already on screen (e.g. picking the Friday 2 days after the
// Wednesday on screen is "nearer" to that same Wednesday than to the next one), making the confirm
// button look like it did nothing. Now the picker matches "Previous records": pick a date, confirm,
// land on that exact date — with the confirmation message flagging when it's not the class's usual
// day, so an accidental off-day pick is still easy to catch and cancel.
function jumpAttDate(v){
  if(!v) return;
  const cls=DB.classes.find(c=>c.id===attClassId);
  const resetInput=()=>{ const inp=document.getElementById('att-calendar'); if(inp) inp.value=attDate; };
  const label=new Date(v+'T00:00:00').toLocaleDateString(currentLang==='zh'?'zh-CN':'en-MY',{weekday:'long',year:'numeric',month:'long',day:'numeric'});
  if(cls){
    const picked=new Date(v+'T00:00:00');
    const targetIdx=dayIndexOf(cls.day);
    if(picked.getDay()!==targetIdx){
      askConfirm(
        currentLang==='zh'?`${cls.name} 通常在${tr('common.days.'+cls.day)}上课 — ${label} 是别的日子，仍要跳转查看该日期吗？`:`${cls.name} normally runs on ${cls.day}s — ${label} is a different day. Jump to it anyway?`,
        ()=>{ attDate=v; renderAttendance(); },
        {label:tr('page.switchDate'),danger:false,onCancel:resetInput}
      );
      return;
    }
  }
  askConfirm(
    currentLang==='zh'?`切换出席记录日期至 ${label}？`:`Switch the attendance date to ${label}?`,
    ()=>{ attDate=v; renderAttendance(); },
    {label:tr('page.switchDate'),danger:false,onCancel:resetInput}
  );
}
function setAttTeacherFilter(v){ attTeacherFilter=v?parseInt(v):null; attClassId=null; attDate=null; renderAttendance(); }
function setAttDayFilter(v){ attDayFilter=v||null; attClassId=null; attDate=null; renderAttendance(); }
function selectAttClass(id){
  attClassId=parseInt(id);
  const cls=DB.classes.find(c=>c.id===attClassId);
  attDate=cls?nearestDateForDay(cls.day):null;
  renderAttendance();
}

function renderAttendance(){
  const isTeacher=session.role==='teacher';
  if(isTeacher) attTeacherFilter=session.ref;
  const baseClasses=isTeacher?DB.classes.filter(c=>c.teacherId===session.ref):scopedClasses();
  let filtered=baseClasses;
  if(attTeacherFilter) filtered=filtered.filter(c=>c.teacherId===attTeacherFilter);
  if(attDayFilter) filtered=filtered.filter(c=>c.day===attDayFilter);
  filtered=[...filtered].sort((a,b)=>DAYS.indexOf(a.day)-DAYS.indexOf(b.day)||a.start.localeCompare(b.start));

  if(attClassId&&!filtered.find(c=>c.id===attClassId)) attClassId=null;
  if(!attClassId&&filtered.length>0) attClassId=filtered[0].id;

  const cls=DB.classes.find(c=>c.id===attClassId);
  if(cls&&!attDate) attDate=nearestDateForDay(cls.day);
  const records=cls?DB.attendance.filter(a=>a.classId===cls.id&&a.date===attDate):[];
  const enrolledRoster=cls?DB.students.filter(s=>s.classIds&&s.classIds.includes(cls.id)):[];
  // Anyone with an attendance record for THIS class+date who isn't currently enrolled — covers both
  // single-class drop-ins AND students who were enrolled back on this date but have since switched to
  // a different class. Without the latter, moving a student out of a class made their past attendance
  // on that class silently vanish from view (the DB.attendance record itself was never deleted — only
  // the roster, which used to be built from CURRENT classIds, stopped showing them). Was previously
  // restricted to `a.single&&!a.extra` records only, which is why switched-class history disappeared.
  const dropInStudents=cls?[...new Set(records.map(a=>a.studentId))].filter(id=>!enrolledRoster.some(s=>s.id===id)).map(id=>S(id)).filter(s=>s&&s.id):[];
  const roster=[...enrolledRoster,...dropInStudents];
  const dateLabel=attDate?new Date(attDate+'T00:00:00').toLocaleDateString('en-MY',{weekday:'long',year:'numeric',month:'long',day:'numeric'}):'';
  const isReplacementDay=cls&&attDate&&dayIndexOf(cls.day)!==new Date(attDate+'T00:00:00').getDay();

  // ── previous-record history: every past date this class has ANY attendance data for, filterable by
  // date range so it's easy to review a specific window (e.g. "July 2 to August 5") ──
  const inHistRange=d=>(!attHistFrom||d>=attHistFrom)&&(!attHistTo||d<=attHistTo);
  const historyDates=cls?[...new Set(DB.attendance.filter(a=>a.classId===cls.id).map(a=>a.date))].filter(inHistRange).sort((a,b)=>b.localeCompare(a)):[];
  const historyRows=historyDates.slice(0,20).map(d=>{
    const recs=DB.attendance.filter(a=>a.classId===cls.id&&a.date===d);
    const p=recs.filter(r=>r.status==='present').length, ab=recs.filter(r=>r.status==='absent').length, cn=recs.filter(r=>r.status==='cancelled').length;
    const label=new Date(d+'T00:00:00').toLocaleDateString('en-MY',{weekday:'short',year:'numeric',month:'short',day:'numeric'});
    const active=d===attDate;
    const replacementTag=dayIndexOf(cls.day)!==new Date(d+'T00:00:00').getDay()?`<span class="tag" style="margin-right:5px">${tr('page.extra')}</span>`:'';
    return `<button onclick="attDate='${d}';renderAttendance()" style="display:flex;justify-content:space-between;align-items:center;gap:10px;padding:8px 10px;border-radius:4px;border:1px solid ${active?'var(--gold)':'var(--border)'};background:${active?'rgba(255,122,41,.12)':'transparent'};cursor:pointer;color:var(--black);font-family:'Inter',sans-serif;font-size:12.5px;width:100%;text-align:left">
      <span>${replacementTag}${label}</span>
      <span style="display:flex;gap:5px;flex-shrink:0">${p?`<span class="badge bg">${p}✓</span>`:''}${ab?`<span class="badge br">${ab}✗</span>`:''}${cn?`<span class="badge by">${cn} ${tr('page.cncl')}</span>`:''}</span>
    </button>`;
  }).join('');

  // ── Replacement Records — running log of every extra/replacement session with its remark, so the
  // front desk (counter) and admin have a record of who did a replacement, in which class, and why ──
  const recClassIds=isTeacher?new Set(DB.classes.filter(c=>c.teacherId===session.ref).map(c=>c.id)):new Set(scopedClasses().map(c=>c.id));
  let replacements=DB.attendance.filter(a=>a.remark&&a.remark.trim()&&recClassIds.has(a.classId)).sort((a,b)=>(b.date||'').localeCompare(a.date||''));
  const rq=(replacementSearchQuery||'').trim().toLowerCase();
  if(rq) replacements=replacements.filter(a=>{
    const st=S(a.studentId);
    const acc=DB.accounts.find(x=>x.role==='student'&&x.ref===a.studentId);
    const sid=acc?String(acc.user).toLowerCase():'';
    return (st.name||'').toLowerCase().includes(rq)||sid.includes(rq);
  });
  replacements=replacements.slice(0,60);
  const replacementRecordsHtml=`
    <div class="stitle" style="margin-top:26px">📝 ${tr('page.replacementRecords')}</div>
    <div style="color:var(--muted);font-size:12px;margin-bottom:8px">${tr('page.replacementRecordsIntro')}</div>
    <input class="finput" id="replacement-search" placeholder="🔍 Search by name or student ID..." value="${replacementSearchQuery.replace(/"/g,'&quot;')}" oninput="setReplacementSearch(this.value)" style="margin-bottom:10px;max-width:320px"/>
    <div class="twrap"><table>
      <thead><tr><th>${tr('common.date')}</th><th>${tr('common.student')}</th><th>${tr('common.class')}</th><th>${tr('common.status')}</th><th>${tr('common.remark')}</th></tr></thead>
      <tbody>${replacements.length?replacements.map(a=>{
        const st=S(a.studentId), c=C(a.classId);
        const statusBadge=a.extra?`<span class="badge bg">🔁 ${tr('att.extraTag')}</span>`:a.status==='absent'?`<span class="badge br">${tr('common.absent')}</span>`:a.status==='present'?`<span class="badge bg">${tr('common.present')}</span>`:`<span class="badge by">${tr('common.classCancelled')}</span>`;
        return `<tr>
          <td style="color:var(--muted);white-space:nowrap">${a.date||'—'}</td>
          <td><div class="ncell"><div class="avatar">${ini(st.name)}</div>${st.name}</div></td>
          <td>${c?`${c.name} <span style="color:${TCOLOR(c.teacherId)};font-weight:600">· ${T(c.teacherId).name}</span>`:'—'}</td>
          <td>${statusBadge}</td>
          <td style="color:var(--blue)">📝 ${a.remark}</td>
        </tr>`;
      }).join(''):`<tr><td colspan="5" class="empty">${tr('page.noReplacements')}</td></tr>`}</tbody>
    </table></div>`;

  // preserve the replacement search box's focus + cursor position across re-renders (typing would
  // otherwise lose focus after every keystroke since the whole page innerHTML is rebuilt)
  const repActiveEl=document.activeElement;
  const repWasFocused=repActiveEl&&repActiveEl.id==='replacement-search';
  const repCursorPos=repWasFocused?repActiveEl.selectionStart:null;
  const asqWasFocused=repActiveEl&&repActiveEl.id==='att-student-search';
  const asqCursorPos=asqWasFocused?repActiveEl.selectionStart:null;

  const asq=(attStudentSearchQuery||'').trim().toLowerCase();
  const attSearchPool=isTeacher?DB.students.filter(s=>SC(s).some(c=>c.teacherId===session.ref)):scopedStudents();
  const attStudentMatches=asq?attSearchPool.filter(s=>{
    const loginId=studentIdOf(s).toLowerCase();
    return (s.name||'').toLowerCase().includes(asq)||loginId.includes(asq);
  }).slice(0,8):[];

  document.getElementById('page-attendance').innerHTML=`
    <div class="pheader"><div class="stitle" style="margin:0">${tr('title.attendance')}</div></div>
    <div class="fg" style="margin-bottom:16px;max-width:360px;position:relative">
      <label>${tr('page.searchStudent')}</label>
      <input class="finput" id="att-student-search" placeholder="${tr('common.searchByNameOrId')}" value="${attStudentSearchQuery.replace(/"/g,'&quot;')}" oninput="setAttStudentSearch(this.value)"/>
      ${asq?`<div style="position:absolute;z-index:20;top:100%;left:0;right:0;background:var(--card);border:1px solid var(--border);border-radius:4px;margin-top:2px;max-height:260px;overflow-y:auto;box-shadow:0 6px 16px rgba(0,0,0,.35)">
        ${attStudentMatches.length?attStudentMatches.map(s=>`<button onclick="pickAttStudent(${s.id})" style="display:flex;align-items:center;gap:8px;width:100%;text-align:left;padding:8px 10px;background:transparent;border:none;border-bottom:1px solid var(--border);cursor:pointer;color:var(--black);font-family:'Inter',sans-serif;font-size:13px">
          <div class="avatar">${ini(s.name)}</div><div><div style="font-weight:600">${s.name}</div><div style="font-size:11px;color:var(--muted)">${studentIdOf(s)}</div></div>
        </button>`).join(''):`<div style="padding:10px;color:var(--muted);font-size:12px">${tr('page.noMatchingStudents')}</div>`}
      </div>`:''}
    </div>
    <div class="frow" style="margin-bottom:14px">
      ${isTeacher?'':`<div class="fg"><label>${tr('common.teacher')}</label><select id="att-teacher-filter" onchange="setAttTeacherFilter(this.value)">
        <option value="">${tr('common.allTeachers')}</option>
        ${scopedTeachers().map(t=>`<option value="${t.id}" ${attTeacherFilter===t.id?'selected':''}>${t.name}</option>`).join('')}
      </select></div>`}
      <div class="fg"><label>${tr('common.day')}</label><select id="att-day-filter" onchange="setAttDayFilter(this.value)">
        <option value="">${tr('common.allDays')}</option>
        ${DAYS.map(d=>`<option value="${d}" ${attDayFilter===d?'selected':''}>${tr('common.days.'+d)}</option>`).join('')}
      </select></div>
    </div>
    <div class="fg" style="margin-bottom:16px">
      <label>${tr('common.classes')} ${attDayFilter?`${tr('page.classesOn')} ${tr('common.days.'+attDayFilter)}`:tr('page.classesEveryDay')} ${attTeacherFilter?`· ${T(attTeacherFilter).name}`:''}</label>
      <div style="display:flex;flex-direction:column;gap:6px;max-height:230px;overflow-y:auto;border:1px solid var(--border);border-radius:4px;padding:6px;background:var(--card)">
        ${filtered.length===0?`<div class="empty">${tr('page.classesMatchFilters')}</div>`:
          filtered.map(c=>{
            const active=c.id===attClassId;
            return `<button onclick="selectAttClass(${c.id})" style="text-align:left;display:flex;justify-content:space-between;align-items:center;gap:10px;padding:8px 10px;border-radius:4px;border:1px solid ${active?'var(--gold)':'var(--border)'};background:${active?'rgba(255,122,41,.12)':'transparent'};cursor:pointer;color:var(--black);font-family:'Inter',sans-serif;font-size:13px">
              <span><strong style="color:${TCOLOR(c.teacherId)}">${T(c.teacherId).name}</strong> — ${c.name} <span class="tag">${c.style}</span> ${diffTag(c)}</span>
              <span style="color:var(--muted);font-size:12px;white-space:nowrap">${tr('common.days.'+c.day)} · ${c.start}–${c.end}</span>
            </button>`;
          }).join('')}
      </div>
    </div>
    ${cls?`
    <div class="scard" style="margin-bottom:16px${isReplacementDay?';border-color:var(--gold)':''}">
      ${isReplacementDay?`<div style="text-align:center;margin-bottom:10px"><span class="tag">${tr('page.extraReplacementNotUsual')}</span></div>`:''}
      <div style="display:flex;align-items:center;justify-content:space-between;gap:10px;flex-wrap:wrap">
        <button class="btn btn-o btn-s" onclick="shiftAttDate(-7)">${tr('page.previous')} ${tr('common.days.'+cls.day)}</button>
        <div style="text-align:center">
          <div style="font-weight:700;font-size:14px">${dateLabel}</div>
          <div style="font-size:11px;color:var(--muted)">${tr('page.normallyRuns')} ${tr('common.days.'+cls.day)}s, ${cls.start}–${cls.end}</div>
        </div>
        <button class="btn btn-o btn-s" onclick="shiftAttDate(7)">${tr('page.next')} ${tr('common.days.'+cls.day)} ▶</button>
      </div>
      <div style="display:flex;align-items:center;gap:8px;justify-content:center;margin-top:12px;padding-top:12px;border-top:1px solid var(--border)">
        <label style="font-size:12px;color:var(--muted);margin:0">${tr('page.jumpToA')} ${tr('common.days.'+cls.day)}:</label>
        <input type="date" id="att-calendar" value="${attDate}" onchange="jumpAttDate(this.value)" style="width:auto"/>
      </div>
    </div>`:''}
    ${cls?`<div style="margin:4px 0 10px"><button class="btn btn-o btn-s" onclick="openDropin()">➕ ${tr('att.dropinBtn')}</button> <span style="color:var(--muted);font-size:11.5px">${tr('att.dropinHint')}</span></div>`:''}
    ${roster.length===0?`<div class="empty">${tr('page.noStudentsEnrolled')}</div>`:`
    <div class="twrap"><table><thead><tr><th>${tr('common.student')}</th><th>${tr('common.status')}</th><th>${tr('page.mark')}</th></tr></thead>
    <tbody>${roster.map(s=>{
      const rec=records.find(r=>r.studentId===s.id&&!r.extra);
      const extraRec=records.find(r=>r.studentId===s.id&&r.extra);
      const status=rec?rec.status:null;
      const paidCredit=!!(rec&&rec.paidByCredit);
      const isDropIn=!!(rec&&rec.single);
      const isBonusUse=!!(rec&&rec.bonus);
      const creditOnly=isCreditOnlyStudent(s); // credit-only: never enrolled in / paid for a monthly class — Present/Absent/Cancel are HIDDEN; they attend only via Use Credit (or Extra/Replacement)
      const badge=status==='present'?`<span class="badge bg">${tr('common.present')}</span>`:status==='absent'?`<span class="badge br">${tr('common.absent')}</span>`:status==='cancelled'?`<span class="badge by">${tr('common.classCancelled')}</span>`:`<span class="badge by">${tr('common.notMarked')}</span>`;
      return `<tr><td><div class="ncell"><div class="avatar">${ini(s.name)}</div><div>${s.name}${isBonusUse?` <span class="tag" style="background:rgba(255,122,41,.14);color:var(--gold)">${tr('att.bonusTag')}</span>`:isDropIn?` <span class="tag" style="background:rgba(255,122,41,.14);color:var(--gold)">🎫 ${tr('att.singleClassTag')}</span>`:''}</div></div></td>
      <td>${badge}${paidCredit?`<br><span class="badge bg" style="margin-top:5px;display:inline-block;background:rgba(52,211,153,.16);color:var(--success)">🎟️</span>`:''}${extraRec?`<br><span class="badge bg" style="margin-top:5px;display:inline-block">+${extraRec.dur==='half'?'0.5':'1'}</span>`:''}</td>
      <td>
        <div style="display:flex;gap:6px;flex-wrap:wrap;align-items:center">
          ${creditOnly?'':`<button class="btn ${status==='present'?'btn-success':'btn-o'} btn-s" onclick="markAttendance(${s.id},'present')">${tr('common.markPresent')}</button>
          <button class="btn ${status==='absent'?'btn-d':'btn-o'} btn-s" onclick="markAttendance(${s.id},'absent')">${tr('common.markAbsent')}</button>
          <button class="btn ${status==='cancelled'?'btn-g':'btn-o'} btn-s" onclick="markAttendance(${s.id},'cancelled')">${tr('common.markCancelled')}</button>`}
          <button class="btn ${extraRec?'btn-g':'btn-o'} btn-s" onclick="toggleExtraReplacement(${s.id})">${tr('att.extraBtn')}</button>
          ${cls.difficulty==='Private'?'':`<button class="btn ${paidCredit?'btn-success':'btn-o'} btn-s" onclick="toggleCredit(${s.id})" title="${tr('att.useCreditTip')}">🎟️ ${paidCredit?tr('att.creditUsed'):tr('att.useCredit')} (${creditsOf(s)})</button>`}
          ${(rec||extraRec)?`<button class="btn btn-d btn-s" onclick="clearAttendance(${s.id},${rec?rec.id:'null'},${extraRec?extraRec.id:'null'})" title="${tr('att.clearTip')}">🗑️</button>`:''}
          ${status==='absent'?`<button class="btn ${(rec&&rec.remark&&rec.remark.trim())?'btn-success':'btn-o'} btn-s" onclick="openReplacementModal(${s.id})">📝 ${(rec&&rec.remark&&rec.remark.trim())?tr('att.repEdit'):tr('att.repAdd')}</button>`:''}
        </div>
        ${((rec&&rec.remark)||extraRec||paidCredit)?`<div style="margin-top:6px;display:flex;gap:6px;flex-wrap:wrap">${paidCredit?`<span class="tag" style="background:rgba(52,211,153,.14);color:var(--success)">🎟️ ${tr('att.creditTag')}</span>`:''}${extraRec?`<span class="tag" style="background:rgba(255,122,41,.15);color:var(--gold)">🔁 ${tr('att.extraTag')} +${extraRec.dur==='half'?'0.5':'1'} · ${extraRec.dur==='half'?tr('att.halfHour'):tr('att.oneHour')}</span>`:''}${(rec&&rec.remark)?`<span class="tag" style="background:rgba(96,165,250,.14);color:var(--blue)">📝 ${rec.remark}</span>`:''}</div>`:''}
      </td></tr>`;
    }).join('')}</tbody></table></div>
    <div style="margin-top:14px;color:var(--muted);font-size:12px">
      ${records.filter(r=>r.status==='present').length} ${tr('page.presentCount')} · ${records.filter(r=>r.extra).length} ${tr('att.extraCount')} · ${records.filter(r=>r.status==='absent').length} ${tr('page.absentCount')} · ${records.filter(r=>r.status==='cancelled').length} ${tr('page.cancelledCount')} · ${Math.max(0,roster.length-records.filter(r=>!r.extra).length)} ${tr('page.unmarkedCount')}
    </div>`}
    ${cls?`
    <div class="stitle" style="margin-top:24px">${tr('page.previousRecordsFor')} ${cls.name} <span style="font-size:11px;color:var(--muted);font-weight:400">${tr('page.tapToJump')}</span></div>
    <div class="frow" style="margin-bottom:10px">
      <div class="fg"><label>${tr('common.from')}</label><input type="date" id="att-hist-from" value="${attHistFrom||''}" onchange="setAttHistRange()"/></div>
      <div class="fg"><label>${tr('common.to')}</label><input type="date" id="att-hist-to" value="${attHistTo||''}" onchange="setAttHistRange()"/></div>
    </div>
    ${(attHistFrom||attHistTo)?`<button class="btn btn-o btn-s" style="margin-bottom:10px" onclick="clearAttHistRange()">${tr('common.clearFilter')}</button>`:''}
    <div style="display:flex;flex-direction:column;gap:5px;max-height:280px;overflow-y:auto;border:1px solid var(--border);border-radius:4px;padding:6px;background:var(--card)">${historyRows||`<div class="empty">${(attHistFrom||attHistTo)?tr('page.noRecordsInRange'):tr('page.noRecordsYet')}</div>`}</div>`:''}
    ${replacementRecordsHtml}`;

  if(repWasFocused){
    const input=document.getElementById('replacement-search');
    if(input){ input.focus(); input.setSelectionRange(repCursorPos,repCursorPos); }
  }
  if(asqWasFocused){
    const input=document.getElementById('att-student-search');
    if(input){ input.focus(); input.setSelectionRange(asqCursorPos,asqCursorPos); }
  }
}
function setReplacementSearch(v){ replacementSearchQuery=v; renderAttendance(); }
function setAttStudentSearch(v){ attStudentSearchQuery=v; renderAttendance(); }
// Clicking a search result opens a read-only modal showing that student's attendance across every
// class they're enrolled in — mirrors renderStudentAttendance() (the student-facing "My Attendance"
// page) but for an admin/teacher looking up an arbitrary student, with no date-range filter (this is
// a quick lookup, not a page of its own) and no session/role restriction beyond what the search pool
// above already scoped.
function pickAttStudent(sid){
  attStudentSearchQuery='';
  renderAttendance();
  openStudentAttendanceModal(sid);
}
function openStudentAttendanceModal(sid){
  const s=S(sid);
  if(!s||s.name==='—'){ toast(tr('msg.studentGone'),false); return; }
  const classes=SC(s);
  document.getElementById('satt-modal-title').textContent=`${tr('page.attendanceFor')} ${s.name}`;
  document.getElementById('satt-modal-sub').textContent=`${studentIdOf(s)} · ${classes.length} ${classes.length===1?tr('common.class'):tr('page.classesWord')} · ${presentCount(sid)} ${tr('page.classesAttendedCycle')}`;
  document.getElementById('satt-modal-body').innerHTML=classes.length===0?`<div class="empty">${tr('page.notEnrolled')}</div>`:
    classes.map(cls=>{
      const records=[...DB.attendance.filter(a=>a.classId===cls.id&&a.studentId===sid)].sort((a,b)=>b.date.localeCompare(a.date));
      const presentN=records.filter(r=>r.status==='present').length;
      const absentN=records.filter(r=>r.status==='absent').length;
      const cancelledN=records.filter(r=>r.status==='cancelled').length;
      return `<div class="scard" style="margin-bottom:14px">
        <div style="display:flex;justify-content:space-between;align-items:center;flex-wrap:wrap;gap:10px;margin-bottom:10px">
          <div>
            <div style="font-weight:700;color:var(--gold);font-size:14px">${cls.name} ${diffTag(cls)}</div>
            <div style="color:var(--muted);font-size:12px">${tr('common.days.'+cls.day)} · ${cls.start}–${cls.end} · 👩‍🏫 <span style="color:${TCOLOR(cls.teacherId)};font-weight:600">${T(cls.teacherId).name}</span></div>
          </div>
          <div style="display:flex;gap:6px">
            <span class="badge bg">${presentN} ${tr('common.present')}</span>
            ${absentN?`<span class="badge br">${absentN} ${tr('common.absent')}</span>`:''}
            ${cancelledN?`<span class="badge by">${cancelledN} ${tr('page.cancelledCount')}</span>`:''}
          </div>
        </div>
        ${records.length===0?`<div class="empty" style="padding:12px">${tr('page.noAttendanceYet')}</div>`:`
        <div class="twrap"><table><thead><tr><th>${tr('common.date')}</th><th>${tr('common.status')}</th><th>${tr('common.remark')}</th></tr></thead>
        <tbody>${records.slice(0,30).map(r=>{
          const label=new Date(r.date+'T00:00:00').toLocaleDateString(currentLang==='zh'?'zh-CN':'en-MY',{weekday:'short',year:'numeric',month:'short',day:'numeric'});
          const badge=r.extra
            ?`<span class="badge bg">🔁 ${tr('att.extraTag')} +${r.dur==='half'?'0.5':'1'}</span>`
            :(r.status==='present'?`<span class="badge bg">${tr('common.present')}</span>`:r.status==='absent'?`<span class="badge br">${tr('common.absent')}</span>`:`<span class="badge by">${tr('common.classCancelled')}</span>`);
          const remarkCell=r.remark?`<span style="color:var(--blue)">📝 ${r.remark}</span>`:(r.extra?`<span style="color:var(--muted)">${r.dur==='half'?tr('att.halfHour'):tr('att.oneHour')}</span>`:`<span style="color:var(--muted)">—</span>`);
          return `<tr><td>${label}</td><td>${badge}</td><td>${remarkCell}</td></tr>`;
        }).join('')}</tbody></table></div>${records.length>30?`<div style="text-align:center;color:var(--muted);font-size:11px;margin-top:6px">+${records.length-30} more</div>`:''}`}
      </div>`;
    }).join('');
  openM('m-student-attendance');
}
function setAttHistRange(){
  attHistFrom=document.getElementById('att-hist-from').value||null;
  attHistTo=document.getElementById('att-hist-to').value||null;
  renderAttendance();
}
function clearAttHistRange(){ attHistFrom=null; attHistTo=null; renderAttendance(); }

// ── PER-STUDENT EXTRA / REPLACEMENT ──
// The Extra Replacement button sits below the Mark buttons and can be pressed together with
// Present. It adds ONE extra attendance (+1 to the student's count, advancing the 4-class billing
// cycle) and asks whether the extra session was half an hour or one hour; the chosen duration is
// labeled under the mark. Pressing the button again removes the extra session.
// ── Structured replacement record ────────────────────────────────────────────────────────────
// The counter records WHERE the make-up happened; that remark is what settles the absence.
let pendingRemarkStudent=null;
const WEEKDAYS_EN=['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
function weekdayOfISO(iso){ return iso?WEEKDAYS_EN[new Date(iso+'T00:00:00').getDay()]:''; }
// The absent record this modal is editing — the same one the old free-text box wrote to.
function repTargetRec(sid){
  return DB.attendance.find(a=>a.classId===attClassId&&a.date===attDate&&a.studentId===sid&&!a.extra);
}
function repClassOptions(){
  const tsel=document.getElementById('rep-teacher'), csel=document.getElementById('rep-class'), psel=document.getElementById('rep-place');
  if(!tsel||!csel) return;
  const tid=parseInt(tsel.value);
  const pf=psel?psel.value:'all';
  const prev=csel.value;
  // every class this teacher runs — a replacement can legitimately be in any branch — narrowed
  // further by the branch filter, since a teacher can run the same style at more than one branch
  let list=DB.classes.filter(c=>c.teacherId===tid);
  if(pf!=='all') list=list.filter(c=>c.placeId===parseInt(pf));
  list=[...list].sort((a,b)=>DAYS.indexOf(a.day)-DAYS.indexOf(b.day)||(a.start||'').localeCompare(b.start||''));
  csel.innerHTML=list.map(c=>`<option value="${c.id}">${H(c.name)} \u00b7 ${tr(c.day)} ${c.start||''}</option>`).join('')
    ||`<option value="">${currentLang==='zh'?'\u65e0\u8bfe\u7a0b':'No classes'}</option>`;
  if([...csel.options].some(o=>o.value===prev)) csel.value=prev;
  repSyncDay();
}
// Weekday follows the DATE, always — it's never typed, so the two can't disagree.
function repSyncDay(){
  const d=document.getElementById('rep-date'), day=document.getElementById('rep-day');
  if(d&&day) day.value=d.value?tr(weekdayOfISO(d.value)):'';
}
function openReplacementModal(sid){
  const rec=repTargetRec(sid);
  if(!rec||rec.status!=='absent') return;   // only an absence can be replaced
  pendingRemarkStudent=sid;
  const st=S(sid);
  const prev=rec.replacement||{};
  document.getElementById('rep-title').textContent=tr('page.repTitle');
  document.getElementById('rep-for').textContent=tr('page.repFor').replace('{s}',st?st.name:'').replace('{d}',attDate);
  document.getElementById('rep-l-teacher').textContent=tr('page.repTeacher');
  document.getElementById('rep-l-place').textContent=tr('common.filterByFranchise');
  document.getElementById('rep-l-class').textContent=tr('page.repClass');
  document.getElementById('rep-l-date').textContent=tr('page.repDate');
  document.getElementById('rep-l-day').textContent=tr('page.repDay');
  document.getElementById('rep-cancel').textContent=tr('common.cancel');
  document.getElementById('rep-save').textContent=tr('common.save');
  document.getElementById('rep-clear').textContent=tr('common.delete');
  document.getElementById('rep-clear').style.display=(rec.remark&&rec.remark.trim())?'':'none';
  const tsel=document.getElementById('rep-teacher');
  tsel.innerHTML=DB.teachers.map(t=>`<option value="${t.id}">${H(t.name)}</option>`).join('');
  if(prev.teacherId) tsel.value=prev.teacherId;
  const psel=document.getElementById('rep-place');
  psel.innerHTML=`<option value="all">${tr('common.allFranchises')}</option>${DB.places.map(p=>`<option value="${p.id}">${H(p.name)}</option>`).join('')}`;
  // if editing an existing replacement, jump straight to that class's branch so it's visible in the (now filtered) list
  const prevCls=prev.classId?C(prev.classId):null;
  psel.value=prevCls?String(prevCls.placeId):'all';
  repClassOptions();
  if(prev.classId) document.getElementById('rep-class').value=prev.classId;
  // default the date to the absence itself — a replacement is usually recorded soon after
  document.getElementById('rep-date').value=prev.date||attDate;
  repSyncDay();
  openM('m-replacement');
}
async function saveReplacement(){
  const sid=pendingRemarkStudent; if(sid==null) return;
  const rec=repTargetRec(sid); if(!rec||rec.status!=='absent') return;
  const classId=parseInt(document.getElementById('rep-class').value);
  const date=document.getElementById('rep-date').value;
  if(!classId){ toast(tr('msg.repNeedClass'),false); return; }
  if(!date){ toast(tr('msg.repNeedDate'),false); return; }
  const cls=C(classId), teacherId=cls?cls.teacherId:parseInt(document.getElementById('rep-teacher').value);
  rec.replacement={date,teacherId,classId};
  // remark stays the rendered summary: Replacement Records, the student's My Attendance and
  // isReplaced() all read it, and old hand-typed remarks must keep working untouched
  rec.remark=`${date} (${tr(weekdayOfISO(date))}) \u00b7 ${T(teacherId).name} \u00b7 ${cls?cls.name:''}`;
  if(!await commitSave()) return;   // failed — modal stays open with their input intact
  closeM('m-replacement');
  toast(tr('msg.repSaved'));
  renderAttendance();
}
async function clearReplacement(){
  const sid=pendingRemarkStudent; if(sid==null) return;
  const rec=repTargetRec(sid); if(!rec) return;
  delete rec.replacement; delete rec.remark;   // absence goes back to owing a replacement
  if(!await commitSave()) return;
  closeM('m-replacement');
  toast(tr('msg.repCleared'));
  renderAttendance();
}
let pendingExtraStudent=null;
async function saveAbsentRemark(sid){
  // the remark belongs to the ABSENT record so the student can view it in My Attendance
  const rec=DB.attendance.find(a=>a.classId===attClassId&&a.date===attDate&&a.studentId===sid&&!a.extra);
  if(!rec||rec.status!=='absent') return; // remark box is only active when the student is marked Absent
  const el=document.getElementById('rmk-'+sid);
  rec.remark=el?el.value:'';
  // This used to toast "saved" and push nothing to the database — the remark survived only if the
  // 4s autosave fired before the counter moved on. Lose that race and it vanished from Replacement
  // Records and from the student's My Attendance. Gate on the real save like every other write.
  if(!await commitSave()) return;   // failed — the text stays in the box so it can be retried
  toast(tr('msg.remarkSaved'));
  renderAttendance();
}
// ── Single-class drop-in: any student from ANY branch can be added, narrowed by branch / teacher / class ──
let dropinPlaceFilter='all', dropinTeacherFilter='all', dropinClassFilter='all';
function openDropin(){
  if(!attClassId){ toast(tr('page.selectClassFirst'),false); return; }
  dropinPlaceFilter='all'; dropinTeacherFilter='all'; dropinClassFilter='all';
  const el=document.getElementById('dropin-search'); if(el) el.value='';
  renderDropinFilters(); renderDropinList(); openM('m-dropin');
}
function renderDropinFilters(){
  const host=document.getElementById('dropin-filters'); if(!host) return;
  let cls=DB.classes.slice();
  if(dropinPlaceFilter!=='all') cls=cls.filter(c=>c.placeId===parseInt(dropinPlaceFilter));
  if(dropinTeacherFilter!=='all') cls=cls.filter(c=>c.teacherId===parseInt(dropinTeacherFilter));
  if(dropinClassFilter!=='all' && !cls.some(c=>String(c.id)===dropinClassFilter)) dropinClassFilter='all';
  host.innerHTML=`
    <div class="frow">
      <div class="fg"><label>${tr('common.filterByFranchise')}</label><select onchange="dropinPlaceFilter=this.value;renderDropinFilters();renderDropinList()">
        <option value="all">${tr('common.allFranchises')}</option>
        ${DB.places.map(p=>`<option value="${p.id}" ${dropinPlaceFilter==String(p.id)?'selected':''}>${p.name}</option>`).join('')}
      </select></div>
      <div class="fg"><label>${tr('common.filterByTeacher')}</label><select onchange="dropinTeacherFilter=this.value;renderDropinFilters();renderDropinList()">
        <option value="all">${tr('common.allTeachers')}</option>
        ${DB.teachers.map(t=>`<option value="${t.id}" ${dropinTeacherFilter==String(t.id)?'selected':''}>${t.name}</option>`).join('')}
      </select></div>
    </div>
    <div class="fg"><label>${tr('common.filterByClass')}</label><select onchange="dropinClassFilter=this.value;renderDropinList()">
      <option value="all">${tr('common.allClasses')}</option>
      ${cls.sort((a,b)=>a.name.localeCompare(b.name)).map(c=>`<option value="${c.id}" ${dropinClassFilter==String(c.id)?'selected':''}>${c.name} — ${T(c.teacherId).name}</option>`).join('')}
    </select></div>`;
}
function renderDropinList(){
  const host=document.getElementById('dropin-list'); if(!host) return;
  const cls=C(attClassId); if(!cls){ host.innerHTML=''; return; }
  const q=(document.getElementById('dropin-search').value||'').toLowerCase();
  const enrolledIds=new Set(DB.students.filter(s=>s.classIds&&s.classIds.includes(cls.id)).map(s=>s.id));
  const already=new Set(DB.attendance.filter(a=>a.classId===attClassId&&a.date===attDate&&a.single&&!a.extra).map(a=>a.studentId));
  let list=DB.students.filter(s=>!enrolledIds.has(s.id)); // all students across every branch
  // Only credit-package holders and students eligible for a bonus class belong in this list now —
  // the RM50-for-anyone option is gone, so no point showing students who qualify for neither.
  list=list.filter(s=>(isCreditOnlyStudent(s)&&creditsOf(s)>0)||bonusEligibility(s,attClassId,attDate).ok);
  if(dropinPlaceFilter!=='all') list=list.filter(s=>studentPlaceIds(s).includes(parseInt(dropinPlaceFilter)));
  if(dropinTeacherFilter!=='all') list=list.filter(s=>studentTeacherIds(s).includes(parseInt(dropinTeacherFilter)));
  if(dropinClassFilter!=='all') list=list.filter(s=>(s.classIds||[]).includes(parseInt(dropinClassFilter)));
  if(q) list=list.filter(s=>s.name.toLowerCase().includes(q)||String(studentIdOf(s)).toLowerCase().includes(q));
  list=[...list].sort((a,b)=>a.name.localeCompare(b.name));
  host.innerHTML=list.length?list.map(s=>{
    const added=already.has(s.id);
    const place=studentPlace(s).name;
    const creditOnly=isCreditOnlyStudent(s)&&creditsOf(s)>0;
    const meta=[`ID ${studentIdOf(s)}`, place!=='—'?place:'', creditOnly?`🎟️ ${creditsOf(s)}`:''].filter(Boolean).join(' · ');
    const bonusEl=added?{ok:false}:bonusEligibility(s,attClassId,attDate);
    // The main button only ever does the credit-deduction path now — a bonus-only student (not also
    // a credit holder) has no RM50 fallback left to fall through to, so their main row is inert and
    // the 🎁 button beside it is their only real action.
    const mainUsable=!added&&creditOnly;
    const mainLabel=added?'✓ '+tr('att.dropinAdded'):(creditOnly?'🎟️ '+tr('att.useCredit'):'🎁 '+tr('att.bonusBtn')+' →');
    return `<div style="display:flex;gap:6px;align-items:center"><button ${mainUsable?'':'disabled'} ${mainUsable?`onclick="addSingleDropin(${s.id})"`:''} style="flex:1;text-align:left;display:flex;align-items:center;gap:10px;padding:8px 10px;border-radius:4px;border:1px solid ${added?'var(--success)':'var(--border)'};background:${added?'rgba(52,211,153,.1)':'transparent'};cursor:${mainUsable?'pointer':'default'};color:var(--black);font-family:'Inter',sans-serif;font-size:13px">
      <span class="avatar" style="width:26px;height:26px;font-size:11px">${ini(s.name)}</span>
      <span style="flex:1">${s.name} ${gradeBadgeFor(s,16)}${meta?`<br><span style="color:var(--muted);font-size:11px">${meta}</span>`:''}</span>
      <span style="color:${added?'var(--success)':'var(--gold)'};font-weight:600">${mainLabel}</span>
    </button>${bonusEl.ok?`<button class="btn btn-o btn-s" style="white-space:nowrap" onclick="addBonusDropin(${s.id})" title="${tr('att.bonusTip').replace('{n}',SALARY_PER_SINGLE)}">🎁 ${tr('att.bonusBtn')} (${bonusEl.left})</button>`:''}
    </div>`;
  }).join(''):`<div class="empty">${tr('page.noFranchiseStudents')}</div>`;
}
async function addSingleDropin(sid){
  const s=DB.students.find(x=>x.id===sid); if(!s||!attClassId) return;
  // credit-only student who still holds credits → attend on a pre-paid credit (no RM50 single-class bill)
  if(isCreditOnlyStudent(s) && creditsOf(s)>0){
    let rec=DB.attendance.find(a=>a.classId===attClassId&&a.date===attDate&&a.studentId===sid&&!a.extra);
    if(rec){ rec.status='present'; rec.paidByCredit=true; rec.single=true; }
    else{
      const aid=await claimAttendanceId();
      if(aid==null) return;
      DB.attendance.push({id:aid,classId:attClassId,date:attDate,studentId:sid,status:'present',paidByCredit:true,single:true});
    }
    s.credits=creditsOf(s)-1;
    saveDB(); if(typeof cloudSave==='function') cloudSave();
    toast(tr('msg.creditUsed').replace('{n}',s.credits));
    renderDropinList(); renderAttendance();
    return;
  }
  let rec=DB.attendance.find(a=>a.classId===attClassId&&a.date===attDate&&a.studentId===sid&&!a.extra);
  let createdAtt=null, priorAttStatus=null;
  if(rec){ priorAttStatus=rec.status; rec.status='present'; rec.single=true; }
  else{
    const aid=await claimAttendanceId();
    if(aid==null) return;
    createdAtt={id:aid,classId:attClassId,date:attDate,studentId:sid,status:'present',single:true}; DB.attendance.push(createdAtt);
  }
  const cls=C(attClassId);
  // single-class bill (RM50) — the counter collects it; the teacher earns a single-class salary once Paid
  const pid=await claimPaymentId();
  if(pid==null){
    // undo the attendance change above — nothing else has been touched yet at this point
    if(createdAtt) DB.attendance=DB.attendance.filter(a=>a!==createdAtt);
    else if(rec) rec.status=priorAttStatus;
    return;
  }
  DB.payments.push({id:pid,kind:'class',studentId:sid,classId:attClassId,month:'Single Class',amount:SINGLE_FEE,status:'Unpaid',date:'',method:'',notes:`Single class drop-in — ${cls?cls.name:''}`,earnedDate:attDate});
  toast(tr('msg.dropinAdded').replace('{s}',s.name));
  renderDropinList(); renderAttendance();
}
async function toggleCredit(sid){
  const s=DB.students.find(x=>x.id===sid); if(!s) return;
  const rec=DB.attendance.find(a=>a.classId===attClassId&&a.date===attDate&&a.studentId===sid&&!a.extra);
  if(rec&&rec.paidByCredit){
    // undo: refund the credit, remove the counter/salary record
    rec.paidByCredit=false;
    const idx=DB.payments.findIndex(p=>p.kind==='credit-use'&&p.studentId===sid&&p.classId===attClassId&&p.date===attDate);
    if(idx>=0) DB.payments.splice(idx,1);
    s.credits=creditsOf(s)+1;
    // the class re-enters the monthly cycle — re-bill only if it now re-completes a cycle
    await checkAttendanceBilling(sid,attClassId,attDate,1);
    toast(tr('msg.creditRefunded').replace('{n}',s.credits));
    renderAttendance(); return;
  }
  if(creditsOf(s)<=0){ toast(tr('msg.noCredits'),false); return; }
  // Claim the attendance id (if this needs a new record) BEFORE touching the credit balance, so a
  // failed claim leaves the student's credits completely untouched instead of needing a rollback.
  let newAid=null;
  if(!rec){ newAid=await claimAttendanceId(); if(newAid==null) return; }
  s.credits=creditsOf(s)-1; // credit balance minus 1
  // credit-paid classes count as present but are OUTSIDE the monthly cycle (already pre-paid)
  if(rec){ rec.status='present'; rec.paidByCredit=true; }
  else DB.attendance.push({id:newAid,classId:attClassId,date:attDate,studentId:sid,status:'present',paidByCredit:true});
  // NOTE: using a credit is NOT a payment — no payments record is created. The paidByCredit attendance record
  // itself is the source of truth for the counter's log and the teacher's single-class salary (see renderTeacherSalary).
  // this class no longer counts toward the monthly cycle — cancel any next-month bill a mispressed Present created
  const removed=reconcileAutoBills(sid,attClassId);
  toast(tr(removed>0?'msg.creditUsedBillRemoved':'msg.creditUsed').replace('{n}',s.credits));
  renderAttendance();
}
function toggleExtraReplacement(studentId){
  if(!attClassId||!attDate) return;
  const existing=DB.attendance.find(a=>a.classId===attClassId&&a.date===attDate&&a.studentId===studentId&&a.extra);
  if(existing){
    const s=DB.students.find(x=>x.id===studentId);
    if(s && existing.creditCost) s.credits=creditsOf(s)+existing.creditCost; // refund the credits spent on this session
    DB.attendance=DB.attendance.filter(a=>a!==existing);
    toast(tr('msg.extraRemoved'));
    renderAttendance();
    return;
  }
  pendingExtraStudent=studentId;
  document.getElementById('extra-dur-title').textContent=tr('att.extraTitle');
  document.getElementById('extra-dur-desc').textContent=tr('att.extraDesc');
  document.getElementById('extra-dur-half').textContent=tr('att.halfHour');
  document.getElementById('extra-dur-one').textContent=tr('att.oneHour');
  document.getElementById('extra-dur-cancel').textContent=tr('common.cancel');
  openM('m-extra-duration');
}
async function confirmExtraDuration(dur){
  const sid=pendingExtraStudent;
  pendingExtraStudent=null;
  closeM('m-extra-duration');
  if(sid==null) return;
  const s=DB.students.find(x=>x.id===sid);
  // A MONTHLY student's extra / replacement is a FREE make-up that simply adds to their attendance.
  // A CREDIT-package student pays for it from their credit balance (half hour = 0.5, one hour = 1).
  const creditStudent=isCreditOnlyStudent(s);
  const cost=creditStudent?(dur==='half'?0.5:1):0;
  if(creditStudent && s && creditsOf(s)<cost){ toast(tr('msg.noCreditsExtra'),false); return; }
  // Claim the attendance id BEFORE touching the credit balance — same reasoning as toggleCredit() above:
  // a failed claim then leaves nothing to roll back.
  const aid=await claimAttendanceId();
  if(aid==null) return;
  if(s && cost>0) s.credits=creditsOf(s)-cost;
  // extras count toward the student's attendance (see counted()); credit-paid ones are flagged paidByCredit so their credit can be refunded if removed.
  DB.attendance.push({id:aid,classId:attClassId,date:attDate,studentId:sid,status:'present',extra:true,dur,paidByCredit:cost>0,creditCost:cost});
  saveDB(); if(typeof cloudSave==='function') cloudSave();
  // Studio rule: a replacement should be taken within 30 days of the absence it settles. Warn the
  // counter rather than refuse — they can see the situation, we can't.
  const late=!creditStudent&&replaceableAbsences(s,attDate).length===0;
  toast(`${tr('msg.extraAdded')} · ${dur==='half'?tr('att.halfHour'):tr('att.oneHour')}${cost>0?` · −${cost} 🎟️`:''}${late?` · ${tr('msg.replaceLate').replace('{n}',REPLACE_WINDOW_DAYS)}`:''}`,!late);
  renderAttendance();
}

// ── ATTENDANCE-DRIVEN BILLING CYCLE ──
// Every 4 PRESENT attendances = one month of classes. At the 3rd present attendance of a cycle the
// system reminds every account that the student must bring next month's fee to the next class; at the
// 4th, the next month's fee is auto-billed as Unpaid. "Absent" and "Class Cancelled" don't advance the
// cycle since the student didn't actually receive a class that day.
const MONTHS_EN=['January','February','March','April','May','June','July','August','September','October','November','December'];
function nextMonthName(){ return MONTHS_EN[(new Date().getMonth()+1)%12]; }
function lastMonthName(){ return MONTHS_EN[(new Date().getMonth()+11)%12]; } // +11 mod 12, not -1, so January wraps to December instead of going negative
// Calendar-day bounds of last month (e.g. run in September -> ['2026-08-01','2026-08-31']), used to total
// payments by the date they were actually PAID, so this lines up with the Payments page's "Filter by
// Paid Date" totals for the same month instead of the payment's billing-month tag (see paidLastMonth below).
function lastMonthDateRange(){
  const now=new Date();
  const first=new Date(now.getFullYear(),now.getMonth()-1,1);
  const last=new Date(now.getFullYear(),now.getMonth(),0);
  return [toLocalISODate(first),toLocalISODate(last)];
}
function monthNameFromDate(dateStr){ const d=new Date(dateStr+'T00:00:00'); return MONTHS_EN[d.getMonth()]; }
function nextMonthNameFromDate(dateStr){ const d=new Date(dateStr+'T00:00:00'); return MONTHS_EN[(d.getMonth()+1)%12]; }
function attWeight(a){ return (a.extra&&a.dur==='half')?0.5:1; } // a half-hour extra/replacement counts as HALF a class toward the 4-class billing cycle; a one-hour extra and a normal present each count as a full 1
function counted(a){
  // What counts toward a student's attendance total (weighted by attWeight — a half-hour extra = 0.5, everything else = 1).
  if(a.status==='cancelled') return false;   // a cancelled class was never attended
  if(a.single) return false;                 // single-class drop-ins are billed separately, outside the total
  if(a.extra) return true;                   // extra / replacement sessions DO add to the student's attendance
  if(a.paidByCredit) return false;           // a regular class paid from credits is pre-paid, outside the monthly cycle
  return true;
}
function presentCount(studentId){ return DB.attendance.filter(a=>a.studentId===studentId&&counted(a)).reduce((n,a)=>n+attWeight(a),0); }
function presentCountForClass(studentId,classId){ return DB.attendance.filter(a=>a.studentId===studentId&&a.classId===classId&&counted(a)).reduce((n,a)=>n+attWeight(a),0); }
// Starting offset for repairAdvanceBilling()'s cycle-by-cycle replay, meant to mirror
// presentCountForClass() exactly (see that function's use in checkAttendanceBilling — cyclesDone is
// always Math.floor(presentCountForClass(...)/4), with no separate carryover added on top). There is
// currently no data model for a student carrying attendance progress in from outside DB.attendance
// (e.g. from before this system was used, or across a class-ID change), so this always returns 0. If
// that ever becomes a real feature, this is the one place to plug the real starting total into so
// repairAdvanceBilling() keeps lining up with the live cycle math.
function rawCarryTotal(studentId,classId){ return 0; }
function classRateFor(student){ return (student.classIds||[]).filter(id=>C(id)?.difficulty!=='Private').length<=1?160:130; } // per monthly-class rate: RM160 if it's their only monthly class, RM130 each if they take 2+ — private classes are billed per-session and don't count toward this
function studentsNeedingFeeReminder(){
  // (student, class) pairs on the 3rd present-attendance of THAT class's own 4-class cycle — each class
  // a student takes is billed independently, scoped to the viewer's branch (counter only sees their
  // own branch's students; admin sees every branch)
  const pool=scopedStudents();
  const results=[];
  pool.forEach(s=>{
    SC(s).forEach(cls=>{
      if(cls.difficulty==='Private' && !(cls.rate>0)) return; // a private slot with no price set has nothing to bill/remind about (e.g. an older per-session slot never given a rate)
      const c=presentCountForClass(s.id,cls.id);
      if(c>0&&c%4>=3&&c%4<4) results.push({student:s,cls}); // in the final stretch of a cycle (3 or 3.5 of 4)
    });
  });
  return results;
}
let dismissedFloatCards=new Set(); // once a card is closed it stays closed until the page is refreshed
function closeFloatCard(id){
  dismissedFloatCards.add(id);
  const el=document.getElementById(id);
  if(el) el.remove();
}
function showPaymentReminderFloat(unpaidList){
  const existing=document.getElementById('float-payment-reminder');
  if(existing) existing.remove();
  if(dismissedFloatCards.has('float-payment-reminder')) return;
  if(!unpaidList||unpaidList.length===0) return;
  const names=[...new Set(unpaidList.map(p=>S(p.studentId).name))];
  const card=document.createElement('div');
  card.id='float-payment-reminder';
  card.className='float-card';
  card.style.borderColor='var(--danger)';
  card.innerHTML=`<button class="float-card-close" onclick="closeFloatCard('float-payment-reminder')">✕</button>
    <div class="float-card-label">${tr('float.paymentReminder')}</div>
    <div class="float-card-names">${names.map(n=>`<div>${n}</div>`).join('')}</div>`;
  document.getElementById('floating-reminders').appendChild(card);
}
function feeReminderBanner(onlyStudentIds){
  let list=studentsNeedingFeeReminder();
  if(onlyStudentIds) list=list.filter(({student})=>onlyStudentIds.includes(student.id));
  const existing=document.getElementById('float-fee-reminder');
  if(existing) existing.remove();
  if(dismissedFloatCards.has('float-fee-reminder')) return;
  if(list.length===0) return;
  const shown=list.slice(0,5);
  const extra=list.length-shown.length;
  const card=document.createElement('div');
  card.id='float-fee-reminder';
  card.className='float-card';
  card.style.borderColor='var(--warn)';
  card.innerHTML=`<button class="float-card-close" onclick="closeFloatCard('float-fee-reminder')">✕</button>
    <div class="float-card-label">${tr('float.feeReminder')}</div>
    <div class="float-card-names">${shown.map(({student,cls})=>`<div>${student.name} <span style="color:var(--muted)">— ${cls.name}</span></div>`).join('')}${extra>0?`<div style="color:var(--muted)">+${extra} ${currentLang==='zh'?'更多':'more'}</div>`:''}</div>`;
  document.getElementById('floating-reminders').appendChild(card);
}
// The bill Add Student raises when a student first joins a class ("First class fee ...") settles that
// student's very FIRST cycle directly — it is not an advance payment for a later cycle, so it must never
// be picked up as prepaid credit for the auto-billing cycle loop (checkAttendanceBilling /
// repairAdvanceBilling). Without this exclusion the enrollment fee — usually the earliest-dated payment on
// record — wins the earliest-paid-first match and gets consumed one cycle too early, pushing every later
// cycle's reconciliation off by one.
function isFirstClassFeeRecord(p){ return /^First class fee/.test(p.notes||''); }
// Some older enrolments were recorded as a plain Paid class payment without the "First class fee"
// note. A payment collected on (or before) the student's first counted attendance is still their
// initial-cycle fee, not an advance fee for the cycle completed after four attendances. Without this
// fallback, a student such as Zhi Yan (paid 12 Aug; first class 12 Aug) is falsely treated as prepaid
// and never receives the bill due after her fourth class.
function isInitialCyclePayment(p,studentId,classId){
  if(isFirstClassFeeRecord(p)) return true;
  const firstDate=DB.attendance.filter(a=>a.studentId===studentId&&a.classId===classId&&counted(a))
    .map(a=>a.date).filter(Boolean).sort()[0];
  const paidDate=p.date||p.earnedDate;
  return !!(firstDate&&paidDate&&paidDate<=firstDate);
}
// A payment record counts as "covering" a 4-class cycle if it's either one the system auto-billed
// itself, or one a counter/admin manually claimed against a cycle (see checkAttendanceBilling below).
// A historical version incorrectly wrote billCycle=1 onto some original "First class fee" payments.
// That fee is for the registration cycle, not the NEXT cycle that should be billed after four
// attendances. Never let that stale tag suppress the next invoice; real auto-bills remain recognised
// by their explicit note even if their billCycle value is missing.
function isCycleBillRecord(p){ return /Auto-billed/.test(p.notes||'') || (p.billCycle!=null&&!isFirstClassFeeRecord(p)); }
// `billCycle` was populated by older repair versions on ordinary payment records too. Historical
// repair must therefore use the durable auto-generated note, rather than that unreliable tag,
// when deciding whether an actual invoice already exists.
function isAutoGeneratedCycleBill(p){ return /Auto-billed/.test(p.notes||''); }
// The invoice after a completed cycle is for the month following the previous cycle's fee — not
// simply the month after the date the fourth class happened. A cycle can straddle two calendar
// months (Zhi Yan's ran from 12 Aug to 9 Sep), so using the completion date alone incorrectly
// labelled September's bill as October.
function billingMonthForCycle(studentId,classId,payKind,cycle,completedDate){
  const prior=DB.payments.filter(p=>{
    if(p.studentId!==studentId||p.classId!==classId||p.kind!==payKind||!MONTHS_EN.includes(p.month)||isSingleOrTrialLabel(p)) return false;
    if(!isAutoGeneratedCycleBill(p)) return true; // the original/ordinary fee establishes the first month
    const billCycle=Number(p.billCycle);
    return Number.isFinite(billCycle)&&billCycle>0 ? billCycle<cycle : (p.earnedDate||p.date||'')<completedDate;
  }).sort((a,b)=>((a.earnedDate||a.date||'').localeCompare(b.earnedDate||b.date||'')));
  const last=prior[prior.length-1];
  return last&&MONTHS_EN.includes(last.month) ? MONTHS_EN[(MONTHS_EN.indexOf(last.month)+1)%12] : monthNameFromDate(completedDate);
}
// A "Single Class"/"Trial Class" fee is a one-off, never a monthly-cycle payment — never treat one as
// an advance payment for a future cycle.
function isSingleOrTrialLabel(p){ const t=((p.month||'')+' '+(p.notes||'')).toLowerCase(); return t.includes('single class')||t.includes('trial class'); }
function reconcileAutoBills(studentId,classId){
  // Remove any auto-generated Unpaid "next month" bills beyond the number of completed 4-class cycles.
  // Fixes the mispress case: Present (4th of a cycle) auto-bills next month, then the class is switched to
  // Credit (or Cancelled) — the class no longer counts toward the cycle, so that bill must be withdrawn.
  // Paid bills are never touched (the student already paid); only surplus Unpaid auto-bills are removed.
  const cyclesDone=Math.floor(presentCountForClass(studentId,classId)/4+1e-9);
  const autos=DB.payments.filter(p=>p.studentId===studentId&&p.classId===classId&&isCycleBillRecord(p));
  let excess=autos.length-cyclesDone;
  if(excess<=0) return 0;
  const removable=autos.filter(p=>p.status!=='Paid').sort((a,b)=>(b.billCycle||0)-(a.billCycle||0));
  let removed=0;
  for(const p of removable){ if(excess<=0) break; const i=DB.payments.indexOf(p); if(i>=0){ DB.payments.splice(i,1); excess--; removed++; } }
  return removed;
}
async function checkAttendanceBilling(studentId,classId,onDate,weight){
  const s=DB.students.find(x=>x.id===studentId);
  const cls=DB.classes.find(c=>c.id===classId);
  if(!s||!cls) return;
  const isPrivateCls=cls.difficulty==='Private';
  // A private class only auto-bills once it has a price set (cls.rate) — set when it's created or edited
  // via Add/Edit Student or Add/Edit Class. An older private slot from before this existed (no rate) is
  // left alone rather than guessed at — same "don't invent a number" rule the rest of this app follows.
  if(isPrivateCls && !(cls.rate>0)) return;
  const attendedDate=onDate||attDate; // the REAL date this session happened — never "today" — so backfilled
  // or replacement sessions bill correctly relative to when the class actually ran
  const after=presentCountForClass(studentId,classId); // weighted total, already includes the record just added
  const w=(weight==null?1:weight);                     // weight of the attendance that triggered this check (0.5 for a half-hour extra)
  const before=Math.max(0,after-w);
  // Private classes bill at their own per-slot price (set on the class itself, since — see the booking
  // flow — a private slot is always tied to one student's own agreed rate), never the shared 160/130
  // monthly tiers classRateFor() computes for regular classes.
  const rate=isPrivateCls?cls.rate:classRateFor(s);
  const payKind=isPrivateCls?'private':'class';
  // Each completed block of 4 (weighted) classes owes exactly ONE cycle's fee — a private class has no
  // expiry on that cycle (it never lapses, unlike replacement/credit windows), it just never auto-bills
  // again until the next 4 attendances land. So 4 normal classes = 1 bill, 4 normal + 4 one-hour extras =
  // 8 = 2 bills, and half-hour extras only push the total up by 0.5.
  const cyclesDone=Math.floor(after/4+1e-9);
  const autoBilled=DB.payments.filter(p=>p.studentId===studentId&&p.classId===classId&&isCycleBillRecord(p)).length;
  if(cyclesDone>autoBilled){
    // reconcile: create one Unpaid bill for every completed cycle that isn't billed yet (usually 1, but a
    // single extra session could complete a cycle that a burst of attendances had skipped past)
    let anyNewBill=false, anyPrepaidClaimed=false, nm=billingMonthForCycle(studentId,classId,payKind,autoBilled+1,attendedDate);
    for(let cyc=autoBilled+1; cyc<=cyclesDone; cyc++){
      nm=billingMonthForCycle(studentId,classId,payKind,cyc,attendedDate);
      // A parent may already have paid ahead of the system's own auto-billing (e.g. paid next month's
      // fee after only their first class of this cycle — or, for a private class, the very first-session
      // bill Add Student raised when the slot was created). Look for unclaimed Paid tuition payments for
      // this student's class — ones that aren't a Single/Trial Class fee and haven't already been matched
      // to an earlier cycle — and reconcile this cycle against the EARLIEST-PAID one instead of raising a
      // duplicate bill. Matching by paid-date order (not by month label) on purpose: front-desk staff label
      // an advance payment by the calendar month they're paying FOR ("September"), while this cycle's own
      // computed label (nm, above) is "the month after this cycle's last class" — for a weekly class that
      // straddles a month boundary those two routinely disagree, so requiring them to match exactly caused
      // real advance payments to go unrecognized and duplicate bills to be raised instead (see git history/
      // conversation around 2026-09). Oldest-unclaimed-payment-first still protects against the original
      // concern (a payment meant for a much later cycle jumping the queue to cover an earlier one) as long
      // as payments are entered in the order they're actually collected, which they are in normal use. This
      // is the exact same rule repairAdvanceBilling() uses to backfill/repair older corrupted history — keep
      // both in sync.
      const prepaidPool=DB.payments.filter(p=>p.studentId===studentId&&p.classId===classId&&p.kind===payKind&&p.status==='Paid'&&p.billCycle==null&&!isSingleOrTrialLabel(p)&&!isInitialCyclePayment(p,studentId,classId)).sort((a,b)=>(a.date||'').localeCompare(b.date||''));
      const prepaid=prepaidPool[0];
      if(prepaid){ prepaid.billCycle=cyc; anyPrepaidClaimed=true; continue; }
      // earnedDate = the date the completing attendance happened — this is what the teacher's salary is
      // attributed to; the month label is the separate "fee for the upcoming cycle" concept
      const pid=await claimPaymentId();
      if(pid==null) return; // toast already shown by claimPaymentId(); any earlier cycles in this loop already saved are left as-is
      if(isPrivateCls){
        DB.payments.push({id:pid,kind:'private',studentId,privateName:null,teacherId:cls.teacherId,classId,placeId:cls.placeId,
          room:cls.room,rentStart:cls.start,rentEnd:cls.end,teacherEarn:privateTeacherEarnFor(cls),
          month:'Private Class',amount:rate,status:'Unpaid',date:'',method:'',notes:'Auto-billed — 4 attendances completed',earnedDate:attendedDate,billCycle:cyc});
      }else{
        DB.payments.push({id:pid,kind:'class',studentId,classId,month:nm,amount:rate,status:'Unpaid',date:'',method:'',notes:'Auto-billed — 4 attendances completed',earnedDate:attendedDate,billCycle:cyc});
      }
      anyNewBill=true;
    }
    if(anyNewBill) toast(tr('msg.autoBilled').replace('{s}',s.name).replace('{c}',cls.name).replace('{m}',monthLabel(nm)).replace('{a}',fmt(rate)));
    else if(anyPrepaidClaimed) toast(tr('msg.autoBilledPrepaid').replace('{s}',s.name).replace('{c}',cls.name).replace('{m}',monthLabel(nm)).replace('{a}',fmt(rate)));
  }else if(after%4===1){
    // First class of a new cycle. The bill raised at the end of the last cycle is due NOW — the
    // student is standing here, so this is the moment the counter should be collecting it.
    const owed=DB.payments.find(p=>p.studentId===studentId&&p.classId===classId&&p.status==='Unpaid');
    if(owed) toast(tr('msg.remindPayNow').replace('{s}',s.name).replace('{c}',cls.name).replace('{m}',monthLabel(owed.month)).replace('{a}',fmt(owed.amount)),true,'warn');
  }
}

function clearAttendance(sid,recId,exRecId){
  // admin / counter / teacher can delete a student's attendance record for this class + date.
  // Key off the record's OWN database id (captured at render time), not the currently-selected
  // attClassId/attDate — those can drift (renderAttendance() reassigns attClassId whenever the
  // selected class falls out of the filtered list, e.g. after a re-render triggered by an auto-bill
  // or a fresh data pull) between when the row was drawn and when the button is actually clicked.
  // Matching on that recomputed state silently no-ops the delete against the wrong class/date.
  askConfirm(tr('msg.confirmClearAtt'),async()=>{
    const s=DB.students.find(x=>x.id===sid);
    const rec=recId!=null?DB.attendance.find(a=>a.id===recId&&a.studentId===sid&&!a.extra):null;
    const exRec=exRecId!=null?DB.attendance.find(a=>a.id===exRecId&&a.studentId===sid&&a.extra):null;
    // refund a credit if this class was paid by credit, and drop its credit-use record
    if(rec&&rec.paidByCredit&&s){ s.credits=creditsOf(s)+1; DB.payments=DB.payments.filter(p=>!(p.kind==='credit-use'&&p.studentId===sid&&p.classId===rec.classId&&p.date===rec.date)); }
    // also refund any extra/replacement session paid from credits on this class + date
    if(exRec&&exRec.creditCost&&s){ s.credits=creditsOf(s)+exRec.creditCost; }
    const classIdForReconcile=(rec&&rec.classId)??(exRec&&exRec.classId)??attClassId;
    // Sweep any stray DUPLICATE row(s) for this exact student+class+date+kind, not just the one id we
    // captured at render time. A past double-tap race in markAttendance() (fixed separately — see its
    // comment) could have minted two rows for the same slot; the row shown on screen is only ever the
    // first one .find() returns, so without this a leftover duplicate silently survives every delete
    // and reappears on the next refresh — this is the actual "can't be deleted" bug.
    const plainDupKey=rec?(rec.studentId+'|'+rec.classId+'|'+rec.date):null;
    const extraDupKey=exRec?(exRec.studentId+'|'+exRec.classId+'|'+exRec.date):null;
    DB.attendance=DB.attendance.filter(a=>{
      if(a.id===recId||a.id===exRecId) return false;
      if(plainDupKey&&!a.extra&&(a.studentId+'|'+a.classId+'|'+a.date)===plainDupKey) return false;
      if(extraDupKey&&a.extra&&(a.studentId+'|'+a.classId+'|'+a.date)===extraDupKey) return false;
      return true;
    });
    reconcileAutoBills(sid,classIdForReconcile); // count dropped — withdraw any surplus auto-bill
    if(!await commitSave()) return; // credits were refunded and bills reconciled — none of it may be lost silently
    toast(tr('msg.attCleared'));
    renderAttendance();
  });
}
// Guards markAttendance() against a fast double-tap creating two attendance rows for the same
// student+class+date — see markAttendance()'s comment for the race this closes.
const _markAttendanceInFlight=new Set();
async function markAttendance(studentId,status){
  const st=DB.students.find(x=>x.id===studentId);
  // credit-only students (never enrolled in / paid a monthly class) attend purely on credits —
  // Present / Absent / Cancel don't apply. They may only Use Credit or add an Extra / Replacement.
  if(isCreditOnlyStudent(st)){ toast(tr('msg.creditOnlyNoMark'),false); return; }
  let rec=DB.attendance.find(a=>a.classId===attClassId&&a.date===attDate&&a.studentId===studentId&&!a.extra);
  if(rec){ rec.status=status; if(status!=='absent') delete rec.remark; }
  else{
    // claimAttendanceId() is an async round trip to the server. A second tap landing mid-await used
    // to see no existing record yet (the first tap's push hadn't happened) and mint its own row too —
    // two rows for the same slot, silently. The delete button only ever grabs the first one .find()
    // returns, so the other duplicate survived every delete and reappeared on the next refresh — the
    // "can't be deleted" report. Lock per student+class+date while a claim is in flight so a second
    // tap just no-ops instead of minting a duplicate.
    const lockKey=studentId+'|'+attClassId+'|'+attDate;
    if(_markAttendanceInFlight.has(lockKey)) return;
    _markAttendanceInFlight.add(lockKey);
    let aid;
    try{ aid=await claimAttendanceId(); } finally{ _markAttendanceInFlight.delete(lockKey); }
    if(aid==null) return;
    // Re-check in case the record showed up while we were awaiting the id claim (e.g. a pull/merge
    // landed in between) — never push a second row on top of one that already exists.
    rec=DB.attendance.find(a=>a.classId===attClassId&&a.date===attDate&&a.studentId===studentId&&!a.extra);
    if(rec){ rec.status=status; if(status!=='absent') delete rec.remark; }
    else DB.attendance.push({id:aid,classId:attClassId,date:attDate,studentId,status});
  }
  if(status==='present') await checkAttendanceBilling(studentId,attClassId);
  else if(status==='absent'){ toast(tr('msg.markedAbsent')); await checkAttendanceBilling(studentId,attClassId); } // absent still uses up a class (+1)
  else { toast(tr('msg.markedCancelled')); reconcileAutoBills(studentId,attClassId); } // cancelling drops the count — withdraw any surplus next-month bill
  renderAttendance();
}

// ══════════ TEACHER — MY PROFILE ══════════
// A teacher edits the SAME photo shown on the public intro page, plus their Instagram / Xiaohongshu links.
function normalizeSocialLink(v,type){
  v=(v||'').trim();
  if(!v) return '';
  if(/^https?:\/\//i.test(v)) return v;
  if(type==='instagram') return 'https://www.instagram.com/'+v.replace(/^@+/,'');
  return 'https://'+v.replace(/^\/+/,'');
}
function renderTeacherProfile(){
  const t=DB.teachers.find(x=>x.id===session.ref);
  const host=document.getElementById('page-my-profile');
  if(!t){ host.innerHTML=`<div class="empty">—</div>`; return; }
  const specs=(t.specs||[]);
  host.innerHTML=`
    <div class="role-banner"><div class="ri">🪪</div><div><div class="rn">${tr('title.my-profile')}</div><div class="rs">${t.name}</div></div></div>
    <div style="color:var(--muted);font-size:13px;margin-bottom:18px;max-width:640px">${tr('page.profileIntro')}</div>

    <div class="scard" style="margin-bottom:16px">
      <h3 style="margin:0 0 6px">🖼️ ${tr('page.profilePhotoTitle')}</h3>
      <div style="color:var(--muted);font-size:12px;margin-bottom:12px">${tr('page.profilePhotoNote')}</div>
      <div style="display:flex;align-items:center;gap:14px;flex-wrap:wrap">
        <div id="prof-photo-preview" style="width:88px;height:88px;border-radius:10px;background:#222 center/cover no-repeat;flex:none;border:1px solid var(--border);display:flex;align-items:center;justify-content:center;font-size:12px;color:var(--muted)${t.photo?`;background-image:url('${t.photo}')`:''}">${t.photo?'':tr('modal.noPhoto')}</div>
        <div style="display:flex;flex-direction:column;gap:8px">
          <input type="file" id="prof-photo-file" accept="image/*" onchange="handleProfilePhoto(this)"/>
          <button type="button" class="btn btn-o btn-s" style="align-self:flex-start" onclick="clearProfilePhoto()">✕</button>
        </div>
        <input type="hidden" id="prof-photo" value="${(t.photo||'').replace(/"/g,'&quot;')}"/>
      </div>
    </div>

    <div class="scard" style="margin-bottom:16px">
      <h3 style="margin:0 0 6px">🔗 ${tr('page.profileSocialTitle')}</h3>
      <div style="color:var(--muted);font-size:12px;margin-bottom:12px">${tr('page.profileSocialNote')}</div>
      <div class="fg"><label>${tr('page.profileInstagram')}</label><input class="finput" id="prof-instagram" placeholder="${tr('page.profileIgPlaceholder')}" value="${(t.instagram||'').replace(/"/g,'&quot;')}"/></div>
      <div class="fg"><label>${tr('page.profileXiaohongshu')}</label><input class="finput" id="prof-xiaohongshu" placeholder="${tr('page.profileXhsPlaceholder')}" value="${(t.xiaohongshu||'').replace(/"/g,'&quot;')}"/></div>
    </div>

    <div class="scard" style="margin-bottom:16px">
      <h3 style="margin:0 0 6px">🎬 ${tr('page.tchVideo')}</h3>
      <div style="color:var(--muted);font-size:12px;margin-bottom:12px">${tr('page.tchVideoNote')}</div>
      <div class="fg"><input class="finput" id="prof-video" placeholder="https://youtu.be/..." value="${(t.video||'').replace(/"/g,'&quot;')}"/>${uploadRowHTML('prof-video')}</div>
    </div>

    <div class="scard" style="margin-bottom:16px">
      <h3 style="margin:0 0 6px">📁 ${tr('page.tchQuote')}</h3>
      <div style="color:var(--muted);font-size:12px;margin-bottom:12px">${tr('page.tchQuoteNote')}</div>
      <div class="fg"><textarea class="finput" id="prof-quote" rows="3">${H(t.quote||'')}</textarea></div>
    </div>

    <div class="scard" style="margin-bottom:16px">
      <h3 style="margin:0 0 6px">🎯 ${tr('page.profileSpecs')}</h3>
      <div style="color:var(--muted);font-size:12px;margin-bottom:10px">${tr('page.profileSpecsNote')}</div>
      <div>${specs.map(s=>`<span class="tag">${s}</span>`).join(' ')||'—'}</div>
    </div>

    <div style="display:flex;gap:10px;flex-wrap:wrap">
      <button class="btn btn-g" onclick="guardedOnce('teacherprofile',saveTeacherProfile)">💾 ${tr('page.profileSave')}</button>
      <button class="btn btn-o" onclick="openTeacherSocial(${t.id})">👁️ ${tr('page.profilePreview')}</button>
    </div>`;
}
async function handlePaymentQR(input,placeId){
  const file=input.files&&input.files[0];
  input.value='';
  if(!file) return;
  const pv=document.getElementById('pi-qr-preview-'+placeId);
  const prevValue=(document.getElementById('pi-qrImage-'+placeId)||{}).value||'';
  if(pv){ pv.style.backgroundImage='none'; pv.textContent=tr('msg.uploading'); }
  try{
    // PNG, not JPEG — JPEG artefacts can break scanning; white background since a transparent PNG
    // would scan badly on a dark card; no smoothing so the QR squares stay crisp
    const url=await uploadImageBlob(file,{maxDim:600,quality:1,mime:'image/png',ext:'png'});
    document.getElementById('pi-qrImage-'+placeId).value=url;
    if(pv){ pv.style.backgroundImage=`url('${url}')`; pv.textContent=''; }
  }catch(e){
    document.getElementById('pi-qrImage-'+placeId).value=prevValue;
    if(pv){ pv.style.backgroundImage=prevValue?`url('${prevValue}')`:'none'; pv.textContent=prevValue?'':tr('page.qrNone'); }
    toast(tr('msg.uploadFailed')+' — '+((e&&e.message)||String(e)),false);
  }
}
function clearPaymentQR(placeId){
  document.getElementById('pi-qrImage-'+placeId).value='';
  const pv=document.getElementById('pi-qr-preview-'+placeId); pv.style.backgroundImage='none'; pv.textContent=tr('page.qrNone');
  const f=document.getElementById('pi-qr-file-'+placeId); if(f) f.value='';
}
async function handleProfilePhoto(input){
  const file=input.files&&input.files[0];
  input.value='';
  if(!file) return;
  const pv=document.getElementById('prof-photo-preview');
  const prevValue=(document.getElementById('prof-photo')||{}).value||'';
  if(pv){ pv.style.backgroundImage='none'; pv.textContent=tr('msg.uploading'); }
  try{
    const url=await uploadImageBlob(file,{maxDim:900,quality:0.9,mime:'image/jpeg',ext:'jpg'});
    document.getElementById('prof-photo').value=url;
    if(pv){ pv.style.backgroundImage=`url('${url}')`; pv.textContent=''; }
  }catch(e){
    document.getElementById('prof-photo').value=prevValue;
    if(pv){ pv.style.backgroundImage=prevValue?`url('${prevValue}')`:'none'; pv.textContent=prevValue?'':tr('modal.noPhoto'); }
    toast(tr('msg.uploadFailed')+' — '+((e&&e.message)||String(e)),false);
  }
}
function clearProfilePhoto(){
  document.getElementById('prof-photo').value='';
  const pv=document.getElementById('prof-photo-preview'); pv.style.backgroundImage='none'; pv.textContent=tr('modal.noPhoto');
  const f=document.getElementById('prof-photo-file'); if(f) f.value='';
}
async function saveTeacherProfile(){
  const t=DB.teachers.find(x=>x.id===session.ref); if(!t) return;
  const oldVideo=t.video||'';
  const oldPhoto=t.photo||'';
  t.photo=document.getElementById('prof-photo').value||'';
  t.instagram=document.getElementById('prof-instagram').value.trim();
  t.xiaohongshu=document.getElementById('prof-xiaohongshu').value.trim();
  t.video=document.getElementById('prof-video').value.trim();
  t.quote=document.getElementById('prof-quote').value.trim();
  if(!await commitSave()) return; // only confirm once the studio database actually has it
  dropOrphanMedia(oldVideo);
  dropOrphanMedia(oldPhoto);
  toast(tr('page.profileSaved'));
  renderTeacherProfile();
}
// ══════════ INTRO PAGE — TEACHER SOCIAL POPUP ══════════
// The instructor card popup is a small slider: photo, then their portfolio, then their highlight video —
// whichever of the three they've actually filled in. One slide alone just renders as a still panel.
let tslIdx=0, tslCount=1;
function tslGo(i){
  if(tslCount<=1) return;
  tslIdx=(i%tslCount+tslCount)%tslCount;
  const track=document.getElementById('tsl-track'); if(!track) return;
  // Pixel offset, not percentage. anime.js reads a transformed element's *current* position off its
  // computed CSS matrix, which is always in pixels — feeding it a percentage `to` value mixes units
  // across that read/write, and while the dot indicator (a plain classList toggle) always updated to
  // the right index, the track itself could settle on the wrong slide. Measuring the real width here
  // sidesteps the unit mismatch entirely.
  const toPx=-(tslIdx*track.clientWidth);
  const reduced=window.matchMedia && matchMedia('(prefers-reduced-motion: reduce)').matches;
  if(window.anime && !reduced){
    // anime.js v3 (which this app loads) takes the target value directly as the property's value —
    // {to:toPx} is v4-only syntax and v3 silently ignores it, so the track never moved even though
    // the dots (a separate classList.toggle) kept advancing. anime.remove() first so a fast prev/next
    // tap blends from wherever the track actually is instead of restarting from the old target.
    anime.remove(track);
    anime({targets:track,translateX:toPx,duration:320,easing:'easeOutQuart'});
  } else {
    track.style.transform=`translateX(${toPx}px)`;
  }
  document.querySelectorAll('#m-teacher-social .tsl-dot').forEach((d,k)=>{
    d.classList.toggle('on',k===tslIdx);
    d.setAttribute('aria-selected',k===tslIdx?'true':'false');
  });
  // don't leave a clip playing to itself behind the slide the visitor is actually looking at
  document.querySelectorAll('#m-teacher-social .tsl-slide video').forEach(v=>{ try{ v.pause(); }catch(e){} });
}
function tslNext(){ tslGo(tslIdx+1); }
function tslPrev(){ tslGo(tslIdx-1); }
function openTeacherSocial(id,cardEl){
  const t=DB.teachers.find(x=>x.id===id); if(!t) return;
  const ig=normalizeSocialLink(t.instagram,'instagram');
  const xhs=normalizeSocialLink(t.xiaohongshu,'xiaohongshu');

  // ── build the slides ──
  const slides=[];
  slides.push({
    label:tr('page.slidePhoto'),
    html:t.photo
      ? `<div class="tsl-slide photo" style="background-image:url('${H(t.photo)}')"></div>`
      : `<div class="tsl-slide mono" style="background:${TCOLOR(t.id)}">${ini(t.name)}</div>`
  });
  if(t.quote&&t.quote.trim()){
    slides.push({ label:tr('page.slideQuote'),
      html:`<div class="tsl-slide portfolio"><p>${multiline(t.quote)}</p></div>` });
  }
  if(t.video&&t.video.trim()){
    const portrait=/instagram\.com/i.test(t.video);
    slides.push({ label:tr('page.slideVideo'),
      html:`<div class="tsl-slide"><div class="tsl-vid${portrait?' portrait':''}">${videoEmbedHTML(t.video)}</div></div>` });
  }
  tslIdx=0; tslCount=slides.length;

  const track=slides.map((sl,i)=>sl.html.replace('<div class="tsl-slide',`<div data-i="${i}" class="tsl-slide`)).join('');
  const caption=slides.length>1?`<div class="tsl-cap" id="tsl-cap">${H(t.name)}</div>`:'';
  const arrows=slides.length>1
    ? `<button class="tsl-nav prev" onclick="tslPrev()" aria-label="${H(tr('page.slidePrev'))}">‹</button>
       <button class="tsl-nav next" onclick="tslNext()" aria-label="${H(tr('page.slideNext'))}">›</button>`
    : '';
  const dots=slides.length>1
    ? `<div class="tsl-dots" role="tablist">${slides.map((sl,i)=>`<button class="tsl-dot${i===0?' on':''}" role="tab" aria-selected="${i===0}" aria-label="${H(sl.label)}" onclick="tslGo(${i})"></button>`).join('')}</div>`
    : '<div style="height:12px"></div>';

  const specs=(t.specs||[]).map(x=>`<span class="tag">${H(x)}</span>`).join(' ');
  let links='';
  if(ig) links+=`<a class="btn btn-g" style="display:block;text-align:center;margin-bottom:10px;text-decoration:none" href="${ig}" target="_blank" rel="noopener">📸 ${tr('page.openInstagram')}</a>`;
  if(xhs) links+=`<a class="btn btn-g" style="display:block;text-align:center;margin-bottom:10px;text-decoration:none;background:#ff2442;border-color:#ff2442" href="${xhs}" target="_blank" rel="noopener">📕 ${tr('page.openXiaohongshu')}</a>`;
  if(!links) links=`<div class="empty" style="margin:6px 0 12px">${tr('page.socialNone')}</div>`;

  document.getElementById('m-teacher-social-body').innerHTML=`
    <div class="tsl" id="tsl">
      <div class="tsl-track" id="tsl-track" style="width:${slides.length*100}%">${track}</div>
      ${caption}${arrows}
    </div>
    ${dots}
    <h3 style="text-align:center;margin:0 0 4px">${H(t.name)}</h3>
    <div style="text-align:center;margin-bottom:16px">${specs}</div>
    ${links}
    <button class="btn btn-o" style="width:100%" onclick="closeM('m-teacher-social')">${tr('common.close')}</button>`;

  // each slide is 100% of the VIEWPORT, not of the widened track
  const trackEl=document.getElementById('tsl-track');
  if(trackEl){
    trackEl.style.width='100%';
    trackEl.querySelectorAll('.tsl-slide').forEach(el=>{ el.style.flex='0 0 100%'; });
    trackEl.querySelectorAll('.tsl-vid').forEach(w=>fitToNativeVideo(w));
  }
  bindTslSwipe();
  bindTeacherModalTilt();
  const mbg=document.getElementById('m-teacher-social');
  mbg.classList.add('open'); // open FIRST — the modal must actually be laid out (not display:none)
                              // before tslGo() below measures track.clientWidth or hands anything to
                              // anime.js; reading/animating a hidden element's transform is exactly
                              // what caused the slide/dot desync and the animation not visibly running
  tslGo(0); // sync track position + dots through the same code path used everywhere else
  if(cardEl&&window.matchMedia&&!window.matchMedia('(prefers-reduced-motion: reduce)').matches){
    const modalEl=mbg.querySelector('.modal');
    if(modalEl){
      // Swap-parent-style transition (github.com/juliangarnier/anime "swap parent animation" idea,
      // done by hand since this app runs anime.js v3 — v4's layout/FLIP helpers aren't available):
      // anchor on the card's own photo box rather than the whole card, so what visually "moves" is
      // the photo itself arriving in the modal, not an empty rectangle that happens to be card-sized.
      const photoEl=cardEl.querySelector('.site-teacher-photo');
      const from=(photoEl||cardEl).getBoundingClientRect(), to=modalEl.getBoundingClientRect();
      const dx=(from.left+from.width/2)-(to.left+to.width/2);
      const dy=(from.top+from.height/2)-(to.top+to.height/2);
      const scale=Math.min(from.width/to.width,from.height/to.height);
      modalEl.style.animation='none'; // this specific open has a real "from" element — the CSS
                                       // fallback entrance below is only for opens without one
      modalEl.style.transition='none';
      modalEl.style.opacity='0';
      modalEl.style.transform=`translate(${dx}px,${dy}px) scale(${scale})`;
      void modalEl.offsetWidth; // force the browser to commit the "from" state before animating away from it
      modalEl.style.transition='transform .5s cubic-bezier(.2,.8,.2,1), opacity .5s ease';
      modalEl.style.transform='none';
      modalEl.style.opacity='1';
      modalEl.addEventListener('transitionend',function te(){ modalEl.style.transition=''; modalEl.style.animation=''; modalEl.removeEventListener('transitionend',te); },{once:true});
    }
  }
}
// swipe on touch, arrow keys on desktop
function bindTslSwipe(){
  const el=document.getElementById('tsl'); if(!el||tslCount<=1) return;
  let x0=null,y0=null;
  el.addEventListener('touchstart',e=>{ x0=e.touches[0].clientX; y0=e.touches[0].clientY; },{passive:true});
  el.addEventListener('touchend',e=>{
    if(x0==null) return;
    const dx=e.changedTouches[0].clientX-x0, dy=e.changedTouches[0].clientY-y0;
    if(Math.abs(dx)>44&&Math.abs(dx)>Math.abs(dy)) dx<0?tslNext():tslPrev(); // ignore vertical scrolls
    x0=null;
  },{passive:true});
  el.tabIndex=0;
  el.addEventListener('keydown',e=>{
    if(e.key==='ArrowRight'){ e.preventDefault(); tslNext(); }
    if(e.key==='ArrowLeft'){ e.preventDefault(); tslPrev(); }
  });
}
// Subtle cursor-follow tilt on the teacher modal's photo/slide box — desktop-pointer nicety, harmless
// on touch since mousemove just doesn't fire much there. The '.tsl' node is rebuilt fresh every time
// openTeacherSocial() runs (it's part of the innerHTML replaced above), so — same as bindTslSwipe()
// right above — this just binds fresh listeners each open; the old node and its listeners are simply
// discarded, no unbind step needed.
function bindTeacherModalTilt(){
  const box=document.querySelector('#m-teacher-social .tsl');
  if(!box||!window.anime) return;
  if(window.matchMedia&&matchMedia('(prefers-reduced-motion: reduce)').matches) return;
  box.addEventListener('mousemove',e=>{
    const r=box.getBoundingClientRect();
    const px=(e.clientX-r.left)/r.width-0.5;   // -0.5 (left edge) .. 0.5 (right edge)
    const py=(e.clientY-r.top)/r.height-0.5;   // -0.5 (top edge)  .. 0.5 (bottom edge)
    // NOTE: this app runs anime.js v3, and `composition` (animejs.com/documentation/animation/
    // tween-parameters/composition) is a v4-only concept — v3 has no such parameter, so passing it
    // is silently ignored rather than doing anything. v3's actual equivalent for "each new tween
    // immediately takes over" is anime.remove() before starting the next one. mousemove can fire
    // dozens of times a second; without this, every move started a fresh 250ms tween on top of
    // whichever ones from the last few moves hadn't finished yet, and the pile of overlapping tweens
    // fighting over the same rotateX/rotateY each frame is what made the tilt effectively invisible.
    anime.remove(box);
    anime({targets:box,rotateY:px*10,rotateX:py*-10,duration:250,easing:'easeOutQuad'});
  });
  box.addEventListener('mouseleave',()=>{
    anime.remove(box);
    anime({targets:box,rotateX:0,rotateY:0,duration:400,easing:'easeOutQuad'});
  });
}

// ══════════ TEACHER — MY SALARY ══════════
// Commission model: the tiered per-class rate (RM70 base, see SALARY_MONTHLY_TIERS) for every PAID
// monthly-fee class-contribution — this applies the SAME whether the student is on the single-class
// (RM160) rate or the multi-class (RM130/class) rate, plus RM25 for every PAID "Single Class" drop-in
// AND every credit-paid class. For a multi-class student, each contributing teacher's row shows only
// THEIR RM130 share of the payment (not the student's full combined total) — e.g. a student who pays
// RM240 for 2 classes with 2 different teachers shows as "RM130 paid" on BOTH Sarah's and Daniel's
// salary pages, and each of them earns the tiered rate for it (not RM130, not RM240).
const SALARY_PER_SINGLE=25;
// The per-class monthly-fee rate isn't flat — it depends on the teacher's total DISTINCT monthly-fee
// students that month (across all their classes). Crossing a threshold bumps the rate for ALL of that
// month's monthly-fee classes, not just the students above the threshold.
// 1–20 students RM70 · 21–40 RM75 · 41+ RM80
const SALARY_MONTHLY_TIERS=[{max:20,rate:70},{max:40,rate:75},{max:Infinity,rate:80}];
function salaryRateForHeadcount(n){ return SALARY_MONTHLY_TIERS.find(t=>n<=t.max).rate; }
let salaryMonthFilter='all';
function setSalaryMonth(v){ salaryMonthFilter=v; renderTeacherSalary(); }
function renderTeacherSalary(){
  const tid=session.ref;
  const myClassIds=new Set(DB.classes.filter(c=>c.teacherId===tid).map(c=>c.id));
  const isSingle=p=>((p.month||'')+' '+(p.notes||'')).toLowerCase().includes('single class');
  const isTrial=p=>((p.month||'')+' '+(p.notes||'')).toLowerCase().includes('trial class');
  const isCreditUse=p=>p.kind==='credit-use';
  const isBonus=p=>p.kind==='bonus-class';
  const earnedMonthOf=p=>p.earnedDate?monthNameFromDate(p.earnedDate):p.month; // fallback for legacy records with no earnedDate

  // "Use Credit" no longer creates a payment — rebuild those salary rows from the paidByCredit attendance records.
  // Each credit-paid class earns the teacher one single-class salary, attributed to the month it was attended.
  const virtualCreditUses=(DB.attendance||[])
    .filter(a=>a.paidByCredit&&!a.extra&&a.status==='present'&&myClassIds.has(a.classId))
    .map(a=>({kind:'credit-use',studentId:a.studentId,classId:a.classId,month:'Credit',amount:0,status:'Paid',date:a.date,earnedDate:a.date}));
  // real payments (monthly fees + single-class drop-ins); drop any legacy credit-use payment rows so nothing double-counts
  // A bonus class is free for the student, so it creates no payment row — but the teacher is still
  // owed a single-class rate for teaching it. Rebuild those salary rows from the attendance records,
  // exactly as virtualCreditUses does above. (virtualCreditUses can't catch these: it requires
  // paidByCredit, which a bonus never sets — so there's no double counting.)
  const virtualBonusClasses=(DB.attendance||[])
    .filter(a=>a.bonus&&a.status==='present'&&myClassIds.has(a.classId))
    .map(a=>({kind:'bonus-class',studentId:a.studentId,classId:a.classId,month:'Bonus',amount:0,status:'Paid',date:a.date,earnedDate:a.date}));
  // Dance Show payments aren't tied to a class at all — they're matched directly by teacherId instead.
  const myDanceShows=DB.payments.filter(p=>p.kind==='danceshow'&&p.status==='Paid'&&p.teacherId===tid);
  // Private classes aren't tied to a scheduled class either — matched by teacherId, same as above.
  const myPrivates=DB.payments.filter(p=>p.kind==='private'&&p.status==='Paid'&&p.teacherId===tid);
  let allPaid=DB.payments.filter(p=>p.status==='Paid'&&p.classId&&myClassIds.has(p.classId)&&p.kind!=='private'&&!isCreditUse(p)).concat(virtualCreditUses).concat(virtualBonusClasses).concat(myDanceShows).concat(myPrivates);
  const monthsAvailable=[...new Set(allPaid.map(earnedMonthOf))].sort((a,b)=>MONTHS_EN.indexOf(a)-MONTHS_EN.indexOf(b));
  const filtered=salaryMonthFilter==='all'?allPaid:allPaid.filter(p=>earnedMonthOf(p)===salaryMonthFilter);

  let monthlySingleRateEarn=0, monthlyMultiRateEarn=0, singleClassEarn=0, danceShowEarn=0, privateEarn=0;
  let monthlySingleRateQty=0, monthlyMultiRateClassQty=0, singleClassQty=0, danceShowQty=0, privateQty=0;
  const rows=[];
  const monthlyClassCountByMonth={}; // earnedMonth → total count of monthly-fee class-contributions that month
  const monthlyPayRows=[]; // monthly-fee payments, held back until we know each month's count → rate

  filtered.forEach(p=>{
    const earnedMonth=earnedMonthOf(p);
    if(p.kind==='danceshow'){
      // teacherEarn is stored at save time under whatever rule was current then — the fallback below
      // only matters for a handful of very old records saved before the wage/split rule existed.
      const earn=(typeof p.teacherEarn==='number')?p.teacherEarn:danceShowTeacherEarnLegacy(p.amount,p.dsCount||0,p.dsPerPerson||0,p.dsPct||20);
      danceShowEarn+=earn; danceShowQty++;
      rows.push({p,student:{name:tr('page.danceShowLabel')},type:tr('page.danceShowLabel'),amountShown:p.amount,earn,earnedMonth});
      return;
    }
    if(p.kind==='private'){
      // whatever the counter typed into "Teacher Earns" at booking time — no rate is derived here
      const earn=(typeof p.teacherEarn==='number')?p.teacherEarn:0;
      privateEarn+=earn; privateQty++;
      rows.push({p,student:payStudent(p),type:tr('page.privateClassLabel'),amountShown:p.amount,earn,earnedMonth});
      return;
    }
    const st=payStudent(p);
    if(!st||(!st.id&&!st.typed)) return;   // these rows carry a typed name instead of a student id
    if(isCreditUse(p)){
      singleClassEarn+=SALARY_PER_SINGLE; singleClassQty++;
      rows.push({p,student:st,type:tr('page.creditClassLabel'),amountShown:0,earn:SALARY_PER_SINGLE,earnedMonth});
    }else if(isBonus(p)){
      singleClassEarn+=SALARY_PER_SINGLE; singleClassQty++; // free for the student, still RM25 to the teacher
      rows.push({p,student:st,type:tr('page.bonusClassLabel'),amountShown:0,earn:SALARY_PER_SINGLE,earnedMonth});
    }else if(isSingle(p)){
      singleClassEarn+=SALARY_PER_SINGLE; singleClassQty++;
      rows.push({p,student:st,type:tr('page.singleClassLabel'),amountShown:p.amount,earn:SALARY_PER_SINGLE,earnedMonth});
    }else if(isTrial(p)){
      singleClassEarn+=SALARY_PER_SINGLE; singleClassQty++; // a trial class earns the teacher the same RM25 one-off as a single class
      rows.push({p,student:st,type:tr('page.trialClassLabel'),amountShown:p.amount,earn:SALARY_PER_SINGLE,earnedMonth});
    }else{
      const totalClasses=(st.classIds||[]).length;
      monthlyPayRows.push({p,student:st,earnedMonth,isSingleRate:totalClasses<=1});
      // one student paying for 4 different classes with this teacher counts as 4 here, not 1 — every
      // monthly class-contribution counts toward the tier, matching how the teacher is actually paid per class
      monthlyClassCountByMonth[earnedMonth]=(monthlyClassCountByMonth[earnedMonth]||0)+1;
    }
  });

  // ── Tiered monthly-fee rate: this teacher's total monthly-fee class-contributions that month (across
  // ALL their classes — one student taking 4 classes counts as 4) decides the per-class rate for every
  // monthly-fee class-contribution earned that month — RM70 for 1–20, RM75 for 21–40, RM80 for 41+
  // and above. ──
  const headcountByMonth=monthlyClassCountByMonth;
  monthlyPayRows.forEach(({p,student,earnedMonth,isSingleRate})=>{
    const rate=salaryRateForHeadcount(headcountByMonth[earnedMonth]);
    if(isSingleRate){
      // single-class rate — the whole payment IS this teacher's one class
      monthlySingleRateEarn+=rate; monthlySingleRateQty++;
      rows.push({p,student,type:tr('page.singleClassRateLabel'),amountShown:p.amount,earn:rate,earnedMonth});
    }else{
      // multi-class rate — this one class's own payment only, never the student's other classes combined in
      monthlyMultiRateEarn+=rate; monthlyMultiRateClassQty++;
      rows.push({p,student,type:tr('page.multiClassRateLabel'),amountShown:p.amount,earn:rate,earnedMonth});
    }
  });
  const tierRows=Object.keys(headcountByMonth).map(m=>({month:m,headcount:headcountByMonth[m],rate:salaryRateForHeadcount(headcountByMonth[m])}))
    .sort((a,b)=>MONTHS_EN.indexOf(b.month)-MONTHS_EN.indexOf(a.month));

  const total=monthlySingleRateEarn+monthlyMultiRateEarn+singleClassEarn+danceShowEarn+privateEarn;

  const tierRowsHtml=tierRows.map(r=>`<tr><td><span class="tag" style="background:rgba(255,122,41,.12);color:var(--gold)">${r.month}</span></td><td>${r.headcount}</td><td style="color:var(--gold);font-weight:700">RM${r.rate}/class</td></tr>`).join('');

  const rowsHtml=rows.sort((a,b)=>(b.p.earnedDate||b.p.date||'').localeCompare(a.p.earnedDate||a.p.date||''))
    .map(({p,student,type,amountShown,earn,earnedMonth})=>`<tr><td><div class="ncell"><div class="avatar">${ini(student.name)}</div>${student.name}</div></td>
      <td><span class="tag" style="background:rgba(255,122,41,.12);color:var(--gold)">${earnedMonth}</span></td>
      <td><span class="tag">${type}</span></td>
      <td>${fmt(amountShown)}</td><td style="color:var(--muted)">${p.earnedDate||p.date||'—'}</td>
      <td style="color:var(--success);font-weight:700">+ ${fmt(earn)}</td></tr>`).join('');

  document.getElementById('page-my-salary').innerHTML=`
    <div class="role-banner"><div class="ri">💰</div><div><div class="rn">${tr('title.my-salary')}</div><div class="rs">${session.name} ${tr('page.autoCalculated')}</div></div></div>
    <div class="fg" style="max-width:260px">
      <label>${tr('page.filterByMonth')} <span style="font-weight:400;color:var(--muted)">${tr('page.monthActuallyTaught')}</span></label>
      <select onchange="setSalaryMonth(this.value)">
        <option value="all" ${salaryMonthFilter==='all'?'selected':''}>${tr('page.allMonths')}</option>
        ${monthsAvailable.map(m=>`<option value="${m}" ${salaryMonthFilter===m?'selected':''}>${m}</option>`).join('')}
      </select>
    </div>
    <div class="stat-row" style="margin-top:14px">
      <div class="scard"><div class="sl">${tr('page.singleClassRateRM160')}</div><div class="sv">${monthlySingleRateQty}</div><div class="ss">${fmt(monthlySingleRateEarn)}</div></div>
      <div class="scard"><div class="sl">${tr('page.multiClassRateRM130')}</div><div class="sv">${monthlyMultiRateClassQty}</div><div class="ss">${fmt(monthlyMultiRateEarn)}</div></div>
      <div class="scard"><div class="sl">${tr('page.singleClassPayments')}</div><div class="sv">${singleClassQty}</div><div class="ss">× RM${SALARY_PER_SINGLE} = ${fmt(singleClassEarn)}</div></div>
      ${danceShowQty?`<div class="scard"><div class="sl">${tr('page.danceShowLabel')}</div><div class="sv">${danceShowQty}</div><div class="ss">${fmt(danceShowEarn)}</div></div>`:''}
      ${privateQty?`<div class="scard"><div class="sl">${tr('page.privateClassLabel')}</div><div class="sv">${privateQty}</div><div class="ss">${fmt(privateEarn)}</div></div>`:''}
      <div class="scard"><div class="sl">${salaryMonthFilter==='all'?tr('page.totalSalary'):salaryMonthFilter+' '+tr('page.monthSalary')}</div><div class="sv" style="color:var(--gold)">${fmt(total)}</div><div class="ss">${salaryMonthFilter==='all'?tr('page.allMonthsWord'):tr('page.thisMonthOnly')}</div></div>
    </div>
    <div style="color:var(--muted);font-size:11px;margin:10px 0">${tr('page.salaryExplain').replace('{r2}',SALARY_PER_SINGLE)}</div>
    <div style="color:var(--muted);font-size:11px;margin:10px 0">${tr('page.studentCountBonusExplain')}</div>
    ${tierRows.length?`<div class="stitle">${tr('page.studentCountBonus')}</div>
    <div class="twrap"><table><thead><tr><th>${tr('page.studentCountBonusMonth')}</th><th>${tr('page.studentCountBonusHeadcount')}</th><th>${tr('page.studentCountBonusAmount')}</th></tr></thead>
    <tbody>${tierRowsHtml}</tbody></table></div>`:''}
    <div class="stitle">${tr('page.earningRecords')}</div>
    <div class="twrap"><table><thead><tr><th>${tr('common.student')}</th><th>${tr('page.earnedMonth')}</th><th>${tr('page.category')}</th><th>${tr('page.amountPaid')}</th><th>${tr('page.dateEarnedCol')}</th><th>${tr('page.myEarning')}</th></tr></thead>
    <tbody>${rowsHtml||`<tr><td colspan="6" class="empty">${tr('page.noPaidRecords')} ${salaryMonthFilter==='all'?'':tr('page.forMonth')+' '+salaryMonthFilter}</td></tr>`}</tbody></table></div>`;
}

// ══════════ REPORTS / CHARTS ══════════
function renderReports(){
  const students=scopedStudents(), classes=scopedClasses(), teachers=scopedTeachers(), payments=scopedPayments();
  const attendance=franchiseScope?DB.attendance.filter(a=>classes.some(c=>c.id===a.classId)):DB.attendance;
  const months=['January','February','March','April','May','June','July','August','September','October','November','December'];
  const revenueByMonth=months.map(m=>payments.filter(p=>p.month===m&&p.status==='Paid').reduce((s,p)=>s+p.amount,0));
  const maxRev=Math.max(...revenueByMonth,1);

  const styleCount={};
  classes.forEach(c=>{ styleCount[c.style]=(styleCount[c.style]||0)+students.filter(s=>s.classIds&&s.classIds.includes(c.id)).length; });
  const styles=Object.keys(styleCount);
  const maxStyle=Math.max(...Object.values(styleCount),1);

  // Total students per teacher, EXCLUDING single-class students (those whose only paid records are labeled "Single Class")
  const isSingle=p=>((p.month||'')+' '+(p.notes||'')).toLowerCase().includes('single class');
  const isTrial=p=>((p.month||'')+' '+(p.notes||'')).toLowerCase().includes('trial class');
  const isSingleOnlyStudent=s=>{
    const recs=DB.payments.filter(p=>p.studentId===s.id);
    return recs.length>0&&recs.every(isSingle);
  };
  const teacherTotals=teachers.map(t=>{
    const tCls=classes.filter(c=>c.teacherId===t.id).map(c=>c.id);
    const count=students.filter(s=>(s.classIds||[]).some(cid=>tCls.includes(cid))&&!isSingleOnlyStudent(s)).length;
    return {id:t.id,name:t.name,count};
  });
  const maxTotal=Math.max(...teacherTotals.map(t=>t.count),1);
  const allFranchiseTotalStudents=DB.students.length;
  const franchiseTotals=DB.places.map(pl=>({place:pl,count:DB.students.filter(s=>SC(s).some(c=>c.placeId===pl.id)).length}));

  document.getElementById('page-reports').innerHTML=`
    <div class="pheader"><div class="stitle" style="margin:0">${tr('page.reportsTitle')}</div>${session.role==='admin'?`<div><button class="btn btn-o" onclick="exportDatabaseXLSX()">📥 ${currentLang==='zh'?'导出 Excel（每张表一个分页）':'Export Excel (one tab per table)'}</button></div>`:''}</div>

    <div class="stitle">${tr('page.revenueByMonth')}</div>
    <div class="scard" style="margin-bottom:20px">
      <div style="display:flex;align-items:flex-end;gap:6px;height:140px;padding-top:10px">
        ${revenueByMonth.map((v,i)=>`
          <div style="flex:1;display:flex;flex-direction:column;align-items:center;justify-content:flex-end;height:100%">
            <div style="font-size:9px;color:var(--muted);margin-bottom:3px">${v>0?fmt(v):''}</div>
            <div style="width:100%;background:linear-gradient(to top,var(--gold),var(--rose));border-radius:3px 3px 0 0;height:${v/maxRev*100}%;min-height:${v>0?'4px':'0'}"></div>
            <div style="font-size:9px;color:var(--muted);margin-top:4px">${months[i].slice(0,3)}</div>
          </div>`).join('')}
      </div>
    </div>

    <div class="two-col">
      <div>
        <div class="stitle">${tr('page.enrollByStyle')}</div>
        <div class="scard">
          ${styles.map(s=>`
            <div style="margin-bottom:10px">
              <div style="display:flex;justify-content:space-between;font-size:12px;margin-bottom:3px"><span>${s}</span><b>${styleCount[s]}</b></div>
              <div class="pb"><div class="pf" style="width:${styleCount[s]/maxStyle*100}%"></div></div>
            </div>`).join('')||`<div class="empty">${tr('page.noData')}</div>`}
        </div>
      </div>
      <div>
        <div class="stitle">${tr('page.studentsPerTeacher')} <span style="font-size:11px;color:var(--muted);text-transform:none;letter-spacing:0">${tr('page.exclSingleClass')}</span></div>
        <div class="scard">
          ${teacherTotals.map(t=>`
            <div style="margin-bottom:10px">
              <div style="display:flex;justify-content:space-between;font-size:12px;margin-bottom:3px"><span style="color:${TCOLOR(t.id)};font-weight:600">${t.name}</span><b>${t.count} ${t.count!==1?tr('page.studentsWord'):tr('page.studentWord')}</b></div>
              <div class="pb"><div class="pf" style="width:${t.count/maxTotal*100}%"></div></div>
            </div>`).join('')||`<div class="empty">${tr('page.noData')}</div>`}
        </div>
      </div>
    </div>

    <div class="stitle" style="margin-top:20px">${tr('page.summary')}</div>
    <div class="stat-row">
      <div class="scard"><div class="sl">${tr('page.totalRevenue')}</div><div class="sv" style="font-size:18px">${fmt(payments.filter(p=>p.status==='Paid').reduce((s,p)=>s+p.amount,0))}</div></div>
      <div class="scard"><div class="sl">${tr('page.allFranchiseTotal')}</div><div class="sv">${allFranchiseTotalStudents}</div><div class="ss">${tr('page.acrossFranchises')} ${DB.places.length} ${tr('page.franchisesWord')}</div></div>
    </div>
    ${session.role!=='counter'?`<div class="stitle" style="font-size:14px;margin-top:14px">${tr('page.totalStudentByFranchise')}</div>
    <div class="stat-row">${franchiseTotals.map(f=>`<div class="scard"><div class="sl">🏢 ${f.place.name}</div><div class="sv" style="font-size:18px">${f.count}</div></div>`).join('')}</div>`:''}`;
}

// ══════════ SAVES ══════════
// ── Class time helpers ───────────────────────────────────────────────
// "HH:MM" → minutes since midnight, so times can be compared and added arithmetically.
function timeToMin(hhmm){
  const m=/^(\d{1,2}):(\d{2})$/.exec((hhmm||'').trim());
  if(!m) return null;
  return parseInt(m[1],10)*60+parseInt(m[2],10);
}
function minToTime(mins){
  const h=Math.floor(mins/60), m=mins%60;
  return String(h).padStart(2,'0')+':'+String(m).padStart(2,'0');
}
// Picking a start time fills the end in an hour later — the studio's normal class length, so the
// counter only types one time for the usual case and can still overwrite the end for a longer class.
// Clamped at 23:59 so a late start can never roll past midnight and produce an end before the start.
function autoEndFromStart(startId,endId){
  const s=timeToMin(document.getElementById(startId).value);
  if(s==null) return;
  document.getElementById(endId).value=minToTime(Math.min(s+60,23*60+59));
}
// Two classes clash when their times actually overlap — not only when they start at the same minute.
// Back-to-back is fine: one ending at 20:30 and the next starting at 20:30 do NOT overlap.
function rangesOverlap(aStart,aEnd,bStart,bEnd){
  const as=timeToMin(aStart), ae=timeToMin(aEnd), bs=timeToMin(bStart), be=timeToMin(bEnd);
  if(as==null||ae==null||bs==null||be==null) return false;
  return as<be && bs<ae;
}
// Finds anything the proposed class would collide with. A room can only hold one class at a time
// (so that check is per branch), while a teacher can't be in two places at once (so that one spans
// every branch). Pass the class's own id when editing so it doesn't clash with itself.
function findClassConflicts(vals,excludeId){
  const others=DB.classes.filter(c=>!excludeId||c.id!==parseInt(excludeId));
  const sameDay=others.filter(c=>c.day===vals.day&&rangesOverlap(vals.start,vals.end,c.start,c.end));
  return {
    room: sameDay.find(c=>c.placeId===vals.placeId&&String(c.room||'').trim().toLowerCase()===String(vals.room||'').trim().toLowerCase()),
    teacher: sameDay.find(c=>c.teacherId===vals.teacherId),
  };
}
// Shared start/end sanity + clash messaging for both the admin and teacher class forms.
// Returns true when the class is safe to save; shows the reason and returns false when it isn't.
function validateClassTimes(vals,excludeId){
  const s=timeToMin(vals.start), e=timeToMin(vals.end);
  if(s==null||e==null){ toast(currentLang==='zh'?'⚠️ 请填写开始与结束时间':'⚠️ Please set both a start and an end time',false); return false; }
  if(e<=s){ toast(currentLang==='zh'?'⚠️ 结束时间必须晚于开始时间':'⚠️ The end time must be later than the start time',false); return false; }
  const clash=findClassConflicts(vals,excludeId);
  if(clash.room){
    const c=clash.room;
    toast(currentLang==='zh'
      ?`⚠️ 教室冲突：「${c.room}」在${tr('common.days.'+vals.day)} ${c.start}–${c.end} 已有「${c.name}」（${Pl(vals.placeId).name}）`
      :`⚠️ Room conflict: "${c.room}" already has "${c.name}" from ${c.start}–${c.end} on ${vals.day} (${Pl(vals.placeId).name})`,false);
    return false;
  }
  if(clash.teacher){
    const c=clash.teacher, t=T(c.teacherId);
    // name the branch when the clash is at a different one, otherwise the message looks wrong ("but
    // that class isn't in this room") when the teacher is really booked across town
    const where=(c.placeId!==vals.placeId)?` (${Pl(c.placeId).name})`:'';
    toast(currentLang==='zh'
      ?`⚠️ 导师冲突：${t.name} 在${tr('common.days.'+vals.day)} ${c.start}–${c.end} 已教授「${c.name}」${where}`
      :`⚠️ Teacher conflict: ${t.name} already teaches "${c.name}" from ${c.start}–${c.end} on ${vals.day}${where}`,false);
    return false;
  }
  return true;
}
// ── One-off room bookings (private classes and rentals) ──────────────
// These sit on a calendar DATE, while classes repeat on a WEEKDAY, so a booking has to be checked
// against both: the recurring classes that fall on that weekday, and other bookings on that date.
function weekdayOfISO(iso){
  const d=new Date((iso||'')+'T00:00:00');
  if(isNaN(d)) return null;
  return DAYS[(d.getDay()+6)%7]; // JS weeks start on Sunday; DAYS starts on Monday
}
// The reverse of weekdayOfISO: the nearest calendar date (today or later) that falls on a given weekday
// name — used to give a brand-new recurring private-class slot (picked by weekday, not by a specific
// date) a real date to run its clash check against.
function nextDateForWeekday(dayName){
  const idx=DAYS.indexOf(dayName);
  const now=new Date();
  if(idx<0) return toLocalISODate(now);
  const todayIdx=(now.getDay()+6)%7;
  const d=new Date(now); d.setDate(d.getDate()+((idx-todayIdx+7)%7));
  return toLocalISODate(d);
}
// Branches are only comparable when we actually know both. Admin-recorded bookings save placeId as
// null, and blocking a booking because of a class at some other branch would be worse than missing
// a clash — so an unknown on one side means "can't tell", and we let it through.
function samePlaceKnown(a,b){
  if(a==null&&b==null) return true;   // both unrecorded — treat as the same place
  if(a==null||b==null) return false;  // one unknown — not confident enough to block
  return a===b;
}
const sameRoom=(a,b)=>String(a||'').trim().toLowerCase()===String(b||'').trim().toLowerCase();
// b = { date, start, end, room, placeId, teacherId? }. excludeId skips the record being edited.
function findBookingConflicts(b,excludePaymentId){
  const day=weekdayOfISO(b.date);
  const out={room:null,teacher:null};
  // 1) recurring classes landing on that weekday
  if(day){
    const cls=DB.classes.filter(c=>c.day===day&&rangesOverlap(b.start,b.end,c.start,c.end));
    out.room=cls.find(c=>samePlaceKnown(c.placeId,b.placeId)&&sameRoom(c.room,b.room))||null;
    if(b.teacherId) out.teacher=cls.find(c=>c.teacherId===b.teacherId)||null;
  }
  // 2) other one-off bookings already recorded on the same date. A record saved with the date box
  // left blank stores '' and falls back to earnedDate, so compare on that same effective date.
  const books=(DB.payments||[]).filter(p=>(p.kind==='private'||p.kind==='rental')
    && (!excludePaymentId||p.id!==parseInt(excludePaymentId))
    && (p.date||p.earnedDate)===b.date && rangesOverlap(b.start,b.end,p.rentStart,p.rentEnd));
  if(!out.room) out.room=books.find(p=>samePlaceKnown(p.placeId,b.placeId)&&sameRoom(p.room,b.room))||null;
  if(!out.teacher&&b.teacherId) out.teacher=books.find(p=>p.teacherId===b.teacherId)||null;
  return out;
}
// Shared start/end + clash checking for the private-class and room-rental forms.
function validateBookingTimes(b,excludePaymentId){
  const s=timeToMin(b.start), e=timeToMin(b.end);
  if(s==null||e==null){ toast(currentLang==='zh'?'⚠️ 请填写开始与结束时间':'⚠️ Please set both a start and an end time',false); return false; }
  if(e<=s){ toast(currentLang==='zh'?'⚠️ 结束时间必须晚于开始时间':'⚠️ The end time must be later than the start time',false); return false; }
  const clash=findBookingConflicts(b,excludePaymentId);
  if(clash.room){
    const c=clash.room, cs=c.start||c.rentStart, ce=c.end||c.rentEnd;
    const label=c.name||(c.kind==='rental'?(currentLang==='zh'?'场地租用':'a room rental'):(currentLang==='zh'?'私人课':'a private class'));
    toast(currentLang==='zh'
      ?`⚠️ 教室冲突：「${b.room}」在 ${b.date} ${cs}–${ce} 已有「${label}」`
      :`⚠️ Room conflict: "${b.room}" is already taken by ${label} from ${cs}–${ce} on ${b.date}`,false);
    return false;
  }
  if(clash.teacher){
    const c=clash.teacher, cs=c.start||c.rentStart, ce=c.end||c.rentEnd, t=T(b.teacherId);
    const label=c.name||(currentLang==='zh'?'私人课':'a private class');
    toast(currentLang==='zh'
      ?`⚠️ 导师冲突：${t.name} 在 ${b.date} ${cs}–${ce} 已有「${label}」`
      :`⚠️ Teacher conflict: ${t.name} is already booked for ${label} from ${cs}–${ce} on ${b.date}`,false);
    return false;
  }
  return true;
}
async function saveClass(){
  const n=document.getElementById('cls-name').value.trim();
  if(!n){toast(tr('msg.enterClassName'),false);return;}
  if(document.getElementById('cls-room').value==='Custom' && !document.getElementById('cls-room-custom').value.trim()){toast(tr('msg.enterRoomName'),false);return;}
  if(!(await requireConnection())) return; // no/slow connection — stop here, don't save, leave the form open so they can retry
  const id=document.getElementById('cls-id').value;
  // The dropdown above is only what's on screen; this is what gets written. A counter is pinned to
  // their own branch here regardless of what the select says — that covers a stale list rendered
  // before sign-in, and the case where cls-place holds a branch that is no longer in the options
  // (parseInt('') is NaN, which would otherwise be saved as the class's placeId).
  const counterScoped=(session&&session.role==='counter'&&franchiseScope)?franchiseScope:null;
  const _clsDiff=readSelectSafe(document.getElementById('cls-diff'),'All Levels');
  const vals={
    name:n,
    style:document.getElementById('cls-style').value,
    difficulty:_clsDiff,
    placeId:counterScoped||parseInt(document.getElementById('cls-place').value),
    teacherId:parseInt(document.getElementById('cls-teacher').value),
    day:document.getElementById('cls-day').value,
    start:document.getElementById('cls-start').value,
    end:document.getElementById('cls-end').value,
    room:readRoomValue('cls-room','Big Room'),
    max:parseInt(document.getElementById('cls-max').value)||15,
    // Only a Private class carries a billing rate — checkAttendanceBilling() reads this to auto-bill
    // every 4 attendances. Cleared for any other difficulty so a class switched away from Private never
    // keeps a stale price lying around that nothing shows or uses.
    rate:_clsDiff==='Private'?(parseFloat(document.getElementById('cls-rate').value)||0):undefined
  };

  // Times must make sense and must not overlap another class in the same room or for the same teacher
  if(!validateClassTimes(vals,id)) return;

  if(id){
    const c=DB.classes.find(x=>x.id===parseInt(id));
    // Without this guard a miss makes Object.assign(undefined,...) throw, and a throw here is invisible:
    // the modal never closes, no toast appears, and the button just looks dead.
    if(!c){ toast(tr('msg.classGone'),false); closeM('m-class'); renderAdminSchedule(); return; }
    Object.assign(c,vals);
  }else{
    DB.classes.push({id:nid.classes++,...vals});
  }
  // saveClass was the ONLY save path in the app that never committed — it mutated DB in memory, redrew
  // the list and stopped, leaving the change to whatever the 4s autosave managed later. So the new name
  // appeared on screen while the studio database still held the old one, and the next load put the old
  // name back. requireConnection() above was already awaited for this; the commit was just missing.
  if(!await commitSave()) return; // failed — leave the form open with their input intact so they can retry
  toast(id?tr('msg.classUpdated'):tr('msg.classAdded'));   // only claim success once the cloud has it
  closeM('m-class');
  renderAdminSchedule();
}
async function saveStudent(){
  const n=document.getElementById('stu-name').value.trim();
  if(!n){toast(tr('msg.enterStudentName'),false);return;}
  const _cpkgRaw=document.getElementById('stu-credit-pkg').value;
  const _isSingleCpkg=_cpkgRaw==='single';
  const _isPrivateCpkg=_cpkgRaw==='private';
  const _cpkgSel=(_isSingleCpkg||_isPrivateCpkg)?0:(parseInt(_cpkgRaw)||0);
  const _editId=document.getElementById('stu-id').value;
  const _existingStu=_editId?DB.students.find(x=>x.id===parseInt(_editId)):null;
  const _hasCredits=_existingStu&&creditsOf(_existingStu)>0;
  // a student needs EITHER at least one monthly class OR a credit package OR a single class OR a private class — a credit/single/private-only student is fine
  if(selectedClassIds.length===0 && _cpkgSel===0 && !_isSingleCpkg && !_isPrivateCpkg && !_hasCredits){toast(tr('msg.selectClassOrCredit'),false);return;}
  // without a class picked here, the payment would have no classId — meaning no teacher could ever be credited for it (see renderTeacherSalary(), which requires classId to attribute a payment)
  if(_isSingleCpkg && !parseInt(document.getElementById('stu-credit-single-class').value)){toast(tr('msg.selectSingleClassClass'),false);return;}
  // a private class needs a teacher either from the picked existing slot or the "New" fields, and a price to bill against
  if(_isPrivateCpkg){
    const _pvSel=document.getElementById('stu-pv-class');
    const _pvExisting=(_pvSel&&_pvSel.value)?C(parseInt(_pvSel.value)):null;
    const _pvTeacherId=_pvExisting?_pvExisting.teacherId:parseInt(document.getElementById('stu-pv-teacher').value);
    if(!DB.teachers.some(t=>t.id===_pvTeacherId)){toast(tr('msg.selectTeacher'),false);return;}
    const _pvAmount=parseFloat(document.getElementById('stu-credit-amount').value)||0;
    if(!(_pvAmount>0)){toast(tr('msg.enterPrivatePrice'),false);return;}
  }
  if(!(await requireConnection())) return; // no/slow connection — stop here, don't save, leave the form open so they can retry
  const id=document.getElementById('stu-id').value;
  const monthlyFee=calcMonthlyFee(selectedClassIds.length); // auto: 1 class RM160 · 2+ classes RM130 each
  const _bday=document.getElementById('stu-birthday').value;
  const _ageNum=(()=>{ const a=ageOf({birthday:_bday}); return typeof a==='number'?a:null; })();
  const vals={name:n,age:_ageNum,parent:document.getElementById('stu-parent').value,phone:document.getElementById('stu-phone').value,email:document.getElementById('stu-email').value,classIds:[...selectedClassIds],fee:monthlyFee,join:document.getElementById('stu-join').value,notes:document.getElementById('stu-notes').value,styleGrades:collectStudentGrades(),birthday:_bday,tshirtRedeemed:!!(document.getElementById('stu-tshirt')&&document.getElementById('stu-tshirt').checked)};
  let savedStu=null;
  let newLogin=null;   // set only on the add path — decides whether the welcome message is offered below
  let successMsg='';   // built now, but only ever shown to the counter once commitSave() confirms it's real
  // everything below is undone if the cloud save fails, so a failed save can never look like a success
  let priorStudentSnapshot=null;      // edit path: JSON snapshot to restore the student to on failure
  let addedStudent=null, addedLogin=null;
  const addedPaymentIds=[], addedAttendanceIds=[];
  const removedBillSnapshots=[];      // edit path: full records of any cancelled Unpaid bills, to restore on save failure
  let priorCredits=null;
  let createdPvCls=null;              // a brand-new private-class slot created via the credit-package section below, if any
  // Shared undo for anything above that already touched DB.* before we know the whole save will go
  // through — used both when a payment-id claim comes back unsafe partway through and when commitSave()
  // itself fails at the very end, so a half-finished edit never sits in memory looking real.
  const rollbackStudentSave=()=>{
    if(addedPaymentIds.length) DB.payments=DB.payments.filter(p=>!addedPaymentIds.includes(p.id));
    if(removedBillSnapshots.length) DB.payments.push(...removedBillSnapshots); // put back any bills we cancelled — the edit never actually saved
    if(addedAttendanceIds.length) DB.attendance=DB.attendance.filter(a=>!addedAttendanceIds.includes(a.id));
    if(priorCredits!==null && savedStu) savedStu.credits=priorCredits;
    if(addedLogin) DB.accounts=DB.accounts.filter(a=>a!==addedLogin);
    if(createdPvCls) DB.classes=DB.classes.filter(c=>c!==createdPvCls); // undo a brand-new private slot — the edit-path's own classIds revert via priorStudentSnapshot below
    if(addedStudent) DB.students=DB.students.filter(s=>s!==addedStudent);
    else if(priorStudentSnapshot && savedStu) Object.assign(savedStu,priorStudentSnapshot);
    // commitSave() already wrote the pre-rollback snapshot (student/login/payment still in it) to
    // localStorage via saveDB() BEFORE the cloud push was known to have failed — so without this,
    // localStorage keeps disagreeing with the just-corrected in-memory DB until the next successful
    // save happens to overwrite it. A reload in that window would restore the phantom half-saved
    // student instead of the rolled-back state. Re-save now so local storage matches reality again.
    saveDB();
    renderAdminStudents();
  };
  if(id){
    const s=DB.students.find(x=>x.id===parseInt(id));
    priorStudentSnapshot=JSON.parse(JSON.stringify(s));
    savedStu=s;
    // Some students — usually older records from before login accounts were auto-created on add —
    // have no matching entry in DB.accounts at all, which is why the welcome/WhatsApp prompt below
    // silently never appears for them. createStudentLogin() is already safe to call on a student who
    // already has a login (just returns it, no duplicate) and already respects one an admin
    // deliberately deleted (DB.suppressedStudentRefs) — so this only backfills the one real gap: a
    // student who's never had a login at all. Done here, before commitSave(), so a newly-created
    // account is saved to Supabase in this same commit rather than left stranded locally. Tracked via
    // the same addedLogin the rollback logic below already checks, so a failed save correctly undoes
    // this too — not just the brand-new-student path that variable was originally written for.
    const hadLoginAlready=DB.accounts.some(a=>a.role==='student'&&a.ref===s.id);
    createStudentLogin(s);
    if(!hadLoginAlready) addedLogin=DB.accounts.find(a=>a.role==='student'&&a.ref===s.id);
    const oldClassIds=[...(s.classIds||[])];
    Object.assign(s,vals);
    // Reward points: the counter/admin entered an AMOUNT and chose Add or Deduct. Points are otherwise
    // auto-derived (attendance x grade rate + birthday bonus - claimed rewards), so we move the stored
    // manual adjustment up or down to land on the new balance. Computed AFTER Object.assign so any grade
    // change in this same edit is already reflected in the auto-earned figure, keeping the balance exact.
    // Never let a deduction push the balance below zero.
    { const pv=document.getElementById('stu-points');
      const amt=Math.max(0,parseInt(pv&&pv.value)||0);
      if(amt>0){
        const cur=pointsBalance(s.id);                       // current balance (already reflects this edit's grades)
        const desired=(pointsOp==='deduct')?Math.max(0,cur-amt):cur+amt;
        const base=studentEarnedPoints(s.id)+studentBonusPoints(s.id)-studentRedeemedPoints(s.id);
        s.pointsAdjust=desired-base;
      } }
    // Each class a student takes is billed and paid independently — e.g. finishing Laowu's class but
    // not Wanqi's means only Laowu's fee is due, Wanqi's stays on its own cycle. So when classes are
    // added, we NEVER touch what's already billed for existing classes — we only create a fresh Unpaid
    // bill for each NEWLY added class, at the rate that now applies (RM160 if it's their only class,
    // RM130 each if they take 2+).
    const addedClassIds=selectedClassIds.filter(cid=>!oldClassIds.includes(cid));
    if(addedClassIds.length>0){
      const rate=classRateFor(s);
      const curMonth=new Date().toLocaleDateString('en-US',{month:'long'});
      for(const cid of addedClassIds){
        const cls=C(cid);
        const pid=await claimPaymentId();
        if(pid==null){ rollbackStudentSave(); return; }
        addedPaymentIds.push(pid);
        DB.payments.push({id:pid,kind:'class',studentId:s.id,classId:cid,month:curMonth,amount:rate,status:'Unpaid',date:'',method:'',notes:`New class fee for ${cls.name} — must be paid before joining`,earnedDate:toLocalISODate(new Date())});
      }
    }
    // A class REMOVED from the student's enrollment (unchecked here, or dropped via toggleEnrollment)
    // used to leave its Unpaid bill sitting in Payments forever — she's no longer on that teacher's
    // roster, but the stray bill kept showing up under that teacher whenever anyone searched her up.
    // Mirrors the same rule removeStudentData() already applies when a whole student is deleted: Paid
    // bills are real revenue and stay on file, but an Unpaid bill for a class she's not even taking
    // anymore isn't a real debt — cancel it. Snapshot each one first so a failed save can restore it.
    const removedClassIds=oldClassIds.filter(cid=>!selectedClassIds.includes(cid));
    if(removedClassIds.length>0){
      DB.payments=DB.payments.filter(p=>{
        if(p.studentId===s.id&&p.status==='Unpaid'&&p.classId&&removedClassIds.includes(p.classId)){
          removedBillSnapshots.push(p);
          return false;
        }
        return true;
      });
    }
    if(addedClassIds.length>0){
      const rate=classRateFor(s);
      successMsg=currentLang==='zh'?`已新增课程 · ${addedClassIds.length} 笔新课程学费（每笔 ${fmt(rate)}）已记为未付款 · 现有课程的缴费不受影响`:`Classes added · ${addedClassIds.length} new class fee${addedClassIds.length>1?'s':''} (${fmt(rate)} each) billed as Unpaid · existing classes' payments untouched`;
    }else{
      successMsg=tr('msg.studentUpdated')+fmt(monthlyFee);
    }
    if(removedBillSnapshots.length>0){
      successMsg+=currentLang==='zh'?` · 已取消 ${removedBillSnapshots.length} 笔已移除课程的未付款账单`:` · ${removedBillSnapshots.length} unpaid bill${removedBillSnapshots.length>1?'s':''} for the removed class${removedBillSnapshots.length>1?'es':''} cancelled`;
    }
  }else{
    // Reserve BOTH ids from the server before creating anything locally. This is the actual fix for
    // the "two counters, same student ID" bug: previously newId came from nid.students++ (whatever
    // this browser's own copy of the data happened to say), so two counters adding a student within
    // the same few seconds could compute the identical id — and whichever save landed second would
    // silently overwrite the other counter's brand-new student. claimServerIds() hands out a real,
    // server-issued id that no other browser can ever be given.
    const claimed=await claimServerIds(['students','student_login_id']);
    if(!claimed){ toast(lastCloudError||tr('msg.saveNeedsConnection'),false); return; }
    // Same collision this just fixed for the student id applies to each class's payment id too — two
    // counters (or two classes billed in the same save) could otherwise compute the same "next payment
    // id" locally. mergeArrayByKey() below keys payments by id, so two different records sharing one id
    // silently collapse into whichever one a later save pushes last — the other simply vanishes from
    // Supabase with no error shown, which is exactly the bug where a 2-class student ends up with only
    // 1 bill on record. claimPaymentId() (below) claims a real, server-issued id for every bill up
    // front, before anything is created locally, so a failed claim aborts cleanly here — same as the
    // claim above — instead of half-creating the student. Every OTHER payment-creation path in this
    // file goes through claimPaymentId() too now, so this is no longer the one exception.
    const billPids=[];
    for(let i=0;i<selectedClassIds.length;i++){
      const pid=await claimPaymentId();
      if(pid==null) return; // nothing local has been created yet at this point — a plain return is enough
      billPids.push(pid);
    }
    const newId=claimed.students;
    // Home branch: if they picked classes, use the first class's branch. Otherwise (a credit-only
    // student with no monthly class yet), fall back to the counter's own branch, or the admin's chosen
    // "Branch" dropdown — so every student is tied to a franchise even before joining a class.
    const homePlaceId=selectedClassIds.length>0 ? C(selectedClassIds[0]).placeId
      : (session&&session.role==='counter') ? franchiseScope
      : (parseInt(document.getElementById('stu-f-place').value)||null);
    const newStudent={id:newId,...vals,placeId:homePlaceId};
    DB.students.push(newStudent);
    addedStudent=newStudent;
    savedStu=newStudent;
    // auto-create the student's own login: fresh 6-digit username (reserved above), password from
    // their phone number. This id may have been suppressed by a PRIOR student who once held it and
    // was deleted (see deleteStudent). That suppression referred to that old, unrelated person —
    // this is a brand-new student, so clear it first or createStudentLogin() would refuse to make
    // their login. This also self-heals any database already poisoned by a delete that happened
    // before the deleteStudent fix.
    if(Array.isArray(DB.suppressedStudentRefs)) DB.suppressedStudentRefs=DB.suppressedStudentRefs.filter(r=>r!==newId);
    const preExistingLogin=DB.accounts.find(a=>a.role==='student'&&a.ref===newId);
    const login=createStudentLogin(newStudent,claimed.student_login_id);
    newLogin=login;
    if(!preExistingLogin) addedLogin=login; // only ours to roll back if it didn't already exist
    // new student: each class gets its own first-month bill; the one-time RM90 registration fee is
    // added to the first class's bill only
    if(selectedClassIds.length>0){
      const curMonth=new Date().toLocaleDateString('en-US',{month:'long'});
      const rate=classRateFor({classIds:selectedClassIds});
      const skipReg=document.getElementById('stu-returning')&&document.getElementById('stu-returning').checked;
      selectedClassIds.forEach((cid,idx)=>{
        const cls=C(cid);
        const addReg=(idx===0&&!skipReg);
        const amount=addReg?rate+REG_FEE:rate;
        const notes=addReg?`First class fee ${fmt(rate)} + RM${REG_FEE} registration fee (new student) — ${cls.name}`:`First class fee for ${cls.name}${idx===0&&skipReg?' (returning — no registration fee)':''}`;
        const pid=billPids[idx];
        addedPaymentIds.push(pid);
        DB.payments.push({id:pid,kind:'class',studentId:newId,classId:cid,month:curMonth,amount,status:'Unpaid',date:'',method:'',notes,earnedDate:toLocalISODate(new Date())});
      });
      // registration day counts as the first class — attendance is taken automatically
      const aid=await claimAttendanceId();
      if(aid==null){ rollbackStudentSave(); return; }
      addedAttendanceIds.push(aid);
      DB.attendance.push({id:aid,classId:selectedClassIds[0],date:toLocalISODate(new Date()),studentId:newId,status:'present'});
      const regTxt=skipReg?(currentLang==='zh'?'（回归学生 · 免注册费）':' (returning student · no registration fee)'):(currentLang==='zh'?`（含 RM${REG_FEE} 注册费）`:` (incl. RM${REG_FEE} registration)`);
      successMsg=currentLang==='zh'?`已新增学生 · 已自动创建登录账号（用户名 ${login?login.user:'—'}）· ${selectedClassIds.length} 笔课程学费账单已记为未付款${regTxt}· 已记录首次出席 (1/4)`:`Student added · login auto-created (username ${login?login.user:'—'}) · ${selectedClassIds.length} class fee bill${selectedClassIds.length>1?'s':''} created as Unpaid${regTxt} · first attendance taken (1/4)`;
    }else{
      // credit-only new student — no monthly class, so no class bills or first attendance (the credit package is billed below)
      successMsg=currentLang==='zh'?`已新增学生 · 已自动创建登录账号（用户名 ${login?login.user:'—'}）· 仅课时配套`:`Student added · login auto-created (username ${login?login.user:'—'}) · credit package only`;
    }
  }
  // optional: the counter can also sell a pre-paid credit package — record a one-off single class — or
  // set up/attach a private class — while registering the student
  const cpkgRaw=document.getElementById('stu-credit-pkg').value;
  const isSingleCpkg=cpkgRaw==='single';
  const isPrivateCpkg=cpkgRaw==='private';
  const cpkg=(isSingleCpkg||isPrivateCpkg)?0:(parseInt(cpkgRaw)||0);
  let creditMsg='';
  if(isPrivateCpkg && savedStu){
    // Resolve the slot: an existing recurring private class (its own teacher/day/room/time are
    // authoritative — the form's inputs are locked while one is picked) or a brand-new one built from
    // the form's fields, exactly mirroring how a new monthly class is created from Add Class.
    const pvSel=document.getElementById('stu-pv-class');
    const existingCls=(pvSel&&pvSel.value)?C(parseInt(pvSel.value)):null;
    const teacherId=existingCls?existingCls.teacherId:parseInt(document.getElementById('stu-pv-teacher').value);
    const day=existingCls?existingCls.day:document.getElementById('stu-pv-day').value;
    const start=existingCls?existingCls.start:document.getElementById('stu-pv-start').value;
    const end=existingCls?existingCls.end:document.getElementById('stu-pv-end').value;
    if(!existingCls && document.getElementById('stu-pv-room').value==='Custom' && !document.getElementById('stu-pv-room-custom').value.trim()){toast(tr('msg.enterRoomName'),false); rollbackStudentSave(); return;}
    const room=existingCls?existingCls.room:readRoomValue('stu-pv-room','Private Room');
    const rate=parseFloat(document.getElementById('stu-credit-amount').value)||0;
    const placeId=existingCls?existingCls.placeId
      :((session&&session.role==='counter')?franchiseScope:(parseInt(document.getElementById('stu-f-place').value)||savedStu.placeId||null));
    // only a brand-new slot needs a clash check — reusing an existing one's own slot is the whole point
    // of picking it, not a clash with itself. Checked against the nearest upcoming date on that weekday
    // since this is a recurring slot picked by weekday, not a one-off booking on a specific date.
    if(!existingCls && !validateBookingTimes({date:nextDateForWeekday(day),start,end,room,placeId,teacherId})){ rollbackStudentSave(); return; }
    let classId;
    if(existingCls){
      classId=existingCls.id;
    }else{
      createdPvCls={id:nid.classes++,name:`Private — ${savedStu.name}`,style:'',placeId,teacherId,day,room,start,end,max:1,difficulty:'Private',rate};
      DB.classes.push(createdPvCls);
      classId=createdPvCls.id;
    }
    savedStu.classIds=savedStu.classIds||[];
    const alreadyEnrolled=savedStu.classIds.includes(classId);
    if(!alreadyEnrolled) savedStu.classIds.push(classId);
    if(alreadyEnrolled){
      // Already on this exact slot (e.g. an admin editing the student and re-picking their own private
      // class just to change the price) — nothing new to bill or attend; update the slot's own rate so
      // it applies from the next 4-attendance cycle onward (checkAttendanceBilling reads cls.rate fresh
      // every time it auto-bills, so no existing Unpaid/Paid bill needs to be touched here).
      if(existingCls) existingCls.rate=rate;
      creditMsg=currentLang==='zh'?`✅ 私教课价格已更新为 RM${rate}`:`✅ Private class price updated to RM${rate}`;
    }else{
      // First session — same treatment a brand-new monthly class gets on registration day: mark it
      // attended now so the 4-attendance auto-bill cycle starts immediately, and record this first
      // session's own fee (mirrors "First class fee" for a monthly class; later cycles are auto-billed
      // by checkAttendanceBilling once this bill or a later Paid one gets matched to a cycle).
      const addCreditReg=!id && !!(document.getElementById('stu-credit-regfee')&&document.getElementById('stu-credit-regfee').checked);
      const cstatus=document.getElementById('stu-credit-status').value||'Paid';
      const cmethod=document.getElementById('stu-credit-method').value||'Bank Transfer';
      const cdate=document.getElementById('stu-credit-date').value||toLocalISODate(new Date());
      const camount=rate+(addCreditReg?REG_FEE:0);
      const cpid=await claimPaymentId();
      if(cpid==null){ rollbackStudentSave(); return; }
      addedPaymentIds.push(cpid);
      // only commit the rate change onto an existing (shared) slot once the payment id claim above has
      // actually succeeded — a failed claim triggers rollbackStudentSave(), which undoes a brand-new
      // createdPvCls wholesale, but has no snapshot for a mutated pre-existing class row, so this line
      // must not run until we know the rest of this booking is going through
      if(existingCls) existingCls.rate=rate;
      const cnotes=addCreditReg?`Private class — ${room} ${start}–${end} + RM${REG_FEE} registration fee (new student)`:`Private class — ${room} ${start}–${end}`;
      DB.payments.push({id:cpid,kind:'private',studentId:savedStu.id,privateName:null,teacherId,classId,placeId,
        room,rentStart:start,rentEnd:end,teacherEarn:privateTeacherEarnFor({rate}),
        month:'Private Class',amount:camount,status:cstatus,date:cdate,method:cmethod,notes:cnotes,earnedDate:cdate});
      const aid=await claimAttendanceId();
      if(aid==null){ rollbackStudentSave(); return; }
      addedAttendanceIds.push(aid);
      DB.attendance.push({id:aid,classId,date:cdate,studentId:savedStu.id,status:'present'});
      creditMsg=(currentLang==='zh'?`🥇 已为 ${savedStu.name} 新增私教课 · RM${camount}`:`🥇 Private class added for ${savedStu.name} · RM${camount}`)+(addCreditReg?(currentLang==='zh'?`（含 RM${REG_FEE} 注册费）`:` (incl. RM${REG_FEE} registration)`):'');
    }
  }else if((cpkg>0||isSingleCpkg) && savedStu){
    let camount=parseFloat(document.getElementById('stu-credit-amount').value)||(isSingleCpkg?SINGLE_FEE:creditPkgPrice(cpkg));
    const cstatus=document.getElementById('stu-credit-status').value||'Paid';
    const cmethod=document.getElementById('stu-credit-method').value||'Bank Transfer';
    const cdate=document.getElementById('stu-credit-date').value||toLocalISODate(new Date());
    // optional one-time RM90 registration fee — only offered/applied for a brand-new, credit-only student (no monthly class)
    const addCreditReg=!id && !!(document.getElementById('stu-credit-regfee')&&document.getElementById('stu-credit-regfee').checked);
    if(addCreditReg) camount+=REG_FEE;
    const cpid=await claimPaymentId();
    if(cpid==null){ rollbackStudentSave(); return; }
    addedPaymentIds.push(cpid);
    if(isSingleCpkg){
      // A single class is one-off — unlike a credit package, there's no balance to top up and no expiry
      // to set. classId (not null) is what lets renderTeacherSalary() find this payment later and
      // credit RM25 to whichever teacher actually teaches that class — see the validation above that
      // blocks saving without a class picked, specifically so this can never silently end up unclaimed.
      const scCls=C(parseInt(document.getElementById('stu-credit-single-class').value));
      const cnotes=addCreditReg?`Single class — ${scCls.name} + RM${REG_FEE} registration fee (new student)`:`Single class — ${scCls.name}`;
      DB.payments.push({id:cpid,kind:'class',studentId:savedStu.id,classId:scCls.id,month:'Single Class',amount:camount,status:cstatus,date:cdate,method:cmethod,notes:cnotes,earnedDate:cdate});
      creditMsg=(currentLang==='zh'?`🎫 已为 ${savedStu.name} 记录单堂课（${scCls.name}）· RM${camount}`:`🎫 Single class recorded for ${savedStu.name} (${scCls.name}) · RM${camount}`)+(addCreditReg?(currentLang==='zh'?`（含 RM${REG_FEE} 注册费）`:` (incl. RM${REG_FEE} registration)`):'');
    }else{
      const cnotes=addCreditReg?`${cpkg}-class credit package + RM${REG_FEE} registration fee (new student)`:`${cpkg}-class credit package`;
      priorCredits=creditsOf(savedStu);
      savedStu.credits=priorCredits+cpkg; // top up the student's credit balance
      savedStu.creditExpiry=addDaysISO(cdate,CREDIT_PKG_DAYS[cpkg]||56);
      DB.payments.push({id:cpid,kind:'credit',studentId:savedStu.id,classId:null,creditPkg:cpkg,month:'Credit Package',amount:camount,status:cstatus,date:cdate,method:cmethod,notes:cnotes,earnedDate:cdate});
      creditMsg=tr('msg.creditsSold').replace('{n}',cpkg).replace('{s}',savedStu.name).replace('{b}',savedStu.credits)+(addCreditReg?(currentLang==='zh'?`（含 RM${REG_FEE} 注册费）`:` (incl. RM${REG_FEE} registration)`):'');
    }
  }
  if(!await commitSave()){
    // cloud never confirmed it — undo everything above rather than leaving a phantom student/login/
    // bills sitting only in local memory until a later reload silently erases them
    rollbackStudentSave();
    return; // save failed — keep the form open so nothing the counter typed is lost
  }
  if(successMsg) toast(successMsg);
  if(creditMsg) toast(creditMsg);
  closeM('m-student');
  // Only now — the student is confirmed saved to the shared database. Offering the welcome message any
  // earlier could hand a parent credentials for a record that then failed to save and does not exist.
  if(!id) offerWelcomeWhatsApp(savedStu,newLogin);
  else offerWelcomeWhatsApp(savedStu,DB.accounts.find(a=>a.role==='student'&&a.ref===savedStu.id),true);
  if(session&&session.role==='teacher') refreshTeacherViews(); // teacher-created student: refresh their own page
  else{
    // a brand-new student must always be visible right away — clear any leftover Branch/Teacher filter
    // on the Students page that could otherwise hide them from view immediately after adding
    if(!id){ stuPlaceFilter='all'; stuTeacherFilter='all'; }
    renderAdminStudents();
  }
}
async function saveTeacher(){
  const n=document.getElementById('tch-name').value.trim();
  if(!n){toast(tr('msg.enterTeacherName'),false);return;}
  if(selectedTeacherSpecs.length===0){toast(tr('msg.selectSpec'),false);return;}
  const id=document.getElementById('tch-id').value;
  const vals={name:n,phone:document.getElementById('tch-phone').value,email:document.getElementById('tch-email').value,specs:[...selectedTeacherSpecs],status:document.getElementById('tch-status').value,photo:document.getElementById('tch-photo').value||'',instagram:document.getElementById('tch-instagram').value.trim(),xiaohongshu:document.getElementById('tch-xiaohongshu').value.trim(),video:document.getElementById('tch-video').value.trim(),quote:document.getElementById('tch-quote').value.trim()};
  // what the video/photo fields pointed at BEFORE this edit — used to clean up a replaced/cleared upload
  const oldVideo=id?((DB.teachers.find(x=>x.id===parseInt(id))||{}).video||''):'';
  const oldPhoto=id?((DB.teachers.find(x=>x.id===parseInt(id))||{}).photo||''):'';
  let done;
  if(id){
    const t=DB.teachers.find(x=>x.id===parseInt(id));
    Object.assign(t,vals);
    createTeacherLogin(t); // keep the account name in sync
    done=()=>toast(tr('msg.teacherUpdated'));
  }else{
    const nt={id:nid.teachers++,...vals};
    DB.teachers.push(nt);
    // a brand-new teacher ALWAYS gets a fresh login — clear any stale suppression on this (possibly reused) id first,
    // otherwise createTeacherLogin() would silently skip it and no account would appear.
    if(Array.isArray(DB.suppressedTeacherRefs)) DB.suppressedTeacherRefs=DB.suppressedTeacherRefs.filter(r=>r!==nt.id);
    const login=createTeacherLogin(nt); // auto-create the teacher's login
    done=()=>toast((tr('msg.teacherAdded'))+(login?(currentLang==='zh'?` · 账号：${login.user} · 密码：${login.pass}`:` · login: ${login.user} · password: ${login.pass}`):''));
  }
  if(!await commitSave()) return; // save failed — leave the form open with their input intact so they can retry
  dropOrphanMedia(oldVideo);      // fire-and-forget: cleanup must never hold up the UI
  dropOrphanMedia(oldPhoto);
  done();
  closeM('m-teacher');
  renderAdminTeachers();
}
function saveTeacherClass(){
  const id=document.getElementById('tcls-id').value;
  const name=document.getElementById('tcls-name').value.trim();
  if(!name){toast(tr('msg.enterClassName'),false);return;}
  if(document.getElementById('tcls-room').value==='Custom' && !document.getElementById('tcls-room-custom').value.trim()){toast(tr('msg.enterRoomName'),false);return;}
  const _tclsDiff=readSelectSafe(document.getElementById('tcls-diff'),'All Levels');
  const vals={
    name,
    style:document.getElementById('tcls-style').value,
    difficulty:_tclsDiff,
    placeId:parseInt(document.getElementById('tcls-place').value),
    day:document.getElementById('tcls-day').value,
    room:readRoomValue('tcls-room','Big Room'),
    start:document.getElementById('tcls-start').value,
    end:document.getElementById('tcls-end').value,
    max:parseInt(document.getElementById('tcls-max').value)||15,
    // same billing-rate rule as the admin Add/Edit Class form — only meaningful (and kept) for Private
    rate:_tclsDiff==='Private'?(parseFloat(document.getElementById('tcls-rate').value)||0):undefined
  };
  // teachers edit their own classes here, so the same clash rules apply — the teacherId isn't in
  // vals on this form (it's set from the session below), so add it for the conflict check
  if(!validateClassTimes({...vals,teacherId:(id?(DB.classes.find(x=>x.id===parseInt(id))||{}).teacherId:session.ref)},id)) return;
  if(id){
    const c=DB.classes.find(x=>x.id===parseInt(id));
    if(!c)return;
    Object.assign(c,vals);
    toast(tr('msg.classUpdated'));
  }else{
    DB.classes.push({id:nid.classes++,teacherId:session.ref,...vals});
    toast(tr('msg.newClassAdded'));
  }
  closeM('m-teacher-class');
  renderTeacherSchedule();
}
async function saveStudentProfile(){
  const id=parseInt(document.getElementById('sprof-id').value);
  const s=DB.students.find(x=>x.id===id);
  if(!s)return;
  const _b=document.getElementById('sprof-birthday').value;
  const _a=ageOf({birthday:_b});
  const patch={
    birthday:_b,
    age:(typeof _a==='number'?_a:s.age),
    parent:document.getElementById('sprof-parent').value,
    phone:document.getElementById('sprof-phone').value,
    email:document.getElementById('sprof-email').value
  };
  const savedOk=await withBusy(tr('msg.busySaving'),()=>updateStudentRecord(id,patch));
  if(!savedOk){ toast(tr('msg.saveNeedsConnection'),false); return; } // failed — leave the form open so nothing typed is lost
  Object.assign(s,patch);
  saveDB();
  closeM('m-student-profile');
  toast(tr('msg.profileUpdated'));
  renderStudentClasses();
}
function payClassOptions(){
  const sid=parseInt(document.getElementById('pay-student').value);
  const s=DB.students.find(x=>x.id===sid);
  const sel=document.getElementById('pay-class');
  if(!sel) return;
  // Always show EVERY class in the operating branch (counter: their own branch; admin: all
  // branches) for ANY student — whether or not, and wherever, they're enrolled — so the counter can
  // bill any class for any student.
  const classes=scopedClasses();
  const prev=sel.value;
  sel.innerHTML=classes.map(c=>`<option value="${c.id}">${c.name} — ${T(c.teacherId).name} · ${Pl(c.placeId).name}</option>`).join('')||`<option value="">${currentLang==='zh'?'无课程':'No classes'}</option>`;
  cacheSelectOptions('pay-class');   // payClassOptions() rewrites this list on every student change
  // Default to the STUDENT'S OWN class rather than silently leaving whatever class happens to sort
  // first in the branch. This is what caused real bills to be recorded against a totally unrelated
  // teacher/class: autofillPayAmount() reads the STUDENT's own rate (RM160/RM130), not the class, so
  // the amount on screen looks correct even when this dropdown was never touched by the counter — the
  // wrong classId only surfaced later, back on the Payments list, as an unrelated teacher/class on an
  // otherwise-correct-looking bill (see Royce Tang / Sun Kids 6.00pm-Burger vs. her actual Sun Kid
  // 2.00pm-Wanqi class, reported 2026-08-18). `prev` is only kept when it's actually one of THIS
  // student's own classes (e.g. re-opening the same student, or switching between their own 2
  // classes); otherwise default to their first enrolled class, falling back to the old
  // keep-prev-if-still-valid behavior only when the student has no classes of their own to offer (a
  // credit-only/trial-only student being billed for a one-off single class).
  const ownIds=s?(s.classIds||[]).filter(cid=>classes.some(c=>c.id===cid)):[];
  if(ownIds.length&&ownIds.includes(parseInt(prev))) sel.value=prev;
  else if(ownIds.length) sel.value=String(ownIds[0]);
  else if([...sel.options].some(o=>o.value===prev)) sel.value=prev;
  onPayClassChange();
}
function onPayStudentChange(){ payClassOptions(); }
function autofillPayAmount(){
  const amt=document.getElementById('pay-amount');
  if(!amt||amt.dataset.touched) return;
  const m=document.getElementById('pay-month').value;
  if(m==='Single Class'){ amt.value=SINGLE_FEE; return; } // drop-in / single-class fee RM50
  if(m==='Trial Class'){ amt.value=TRIAL_FEE; return; } // trial-class fee RM60
  const s=DB.students.find(x=>x.id===parseInt(document.getElementById('pay-student').value));
  if(s) amt.value=classRateFor(s); // monthly rate (RM160 / RM130)
}
// A trial student isn't on the roster yet, so there's nothing to pick from — the counter just types
// the name. Swapping the picker out (rather than adding a second field) keeps one "Student" answer.
function isTrialPay(){ const m=document.getElementById('pay-month'); return !!m&&m.value==='Trial Class'; }
function syncTrialStudentField(){
  const trial=isTrialPay();
  const pick=document.getElementById('pay-student-pick');
  const txt=document.getElementById('pay-student-trial');
  if(pick) pick.style.display=trial?'none':'';
  if(txt) txt.style.display=trial?'':'none';
}
function onPayMonthChange(){ syncTrialStudentField(); payClassOptions(); }
function onPayClassChange(){ autofillPayAmount(); }
const ROOMS=['Big Room','Small Room','Private Room'];
function onPayKindChange(){
  const kind=document.getElementById('pay-kind').value;
  // "Pay in Advance" is saved as the exact same kind:'class' record as "Single Class" (see the fall-
  // through branch at the end of savePayment()) — it just shows the same fields, pre-filled for the
  // advance-payment case. Keeping it out of the schema means the auto-biller's prepayment lookup
  // (checkAttendanceBilling) already recognizes it with no extra logic needed.
  document.getElementById('pay-fields-class').style.display=(kind==='class'||kind==='advance')?'':'none';
  document.getElementById('pay-fields-credit').style.display=(kind==='credit')?'':'none';
  document.getElementById('pay-fields-rental').style.display=(kind==='rental')?'':'none';
  document.getElementById('pay-fields-danceshow').style.display=(kind==='danceshow')?'':'none';
  if(kind==='advance') applyAdvancePayDefaults();
}
function applyAdvancePayDefaults(){
  // Pre-fill the shared class-payment fields for the common advance-payment case: paying now for the
  // NEXT cycle, before the auto-biller has even raised that bill. Never overrides something the
  // counter already typed/picked — only fills in fields still at their untouched default.
  const pm=document.getElementById('pay-month');
  if(pm&&!pm.dataset.touched){
    const upcoming=MONTHS_EN[(new Date().getMonth()+1)%12];
    if([...pm.options].some(o=>o.value===upcoming)){ pm.value=upcoming; onPayMonthChange(); }
  }
  const st=document.getElementById('pay-status');
  if(st) st.value='Paid'; // the whole point of "Pay in Advance" is recording money already collected
  const nt=document.getElementById('pay-notes');
  if(nt&&!nt.value.trim()) nt.value='Paid in advance';
  autofillPayAmount();
}
// Studio's cut is pct% of whatever's left after paying each performer their per-person amount;
// the teacher keeps the total minus that cut. See supabase_setup.sql-style comment for the same
// formula used again in renderTeacherSalary() so a teacher's own salary page matches this preview.
// The rule: total charged minus a flat dancer wage per show, then split. All-own-students shows split
// 7:3 (the teacher who booked it keeps 70%); a lineup with outside dancers splits 6:4 (60%) — the
// studio's cut is smaller because it isn't the one vouching for dancers it didn't train.
function danceShowTeacherEarn(total,wage,allOwn){
  const remaining=Math.max(0,total-wage);
  return remaining*((allOwn?70:60)/100);
}
// Unchanged — kept only so payments recorded before this pricing rule still show the payout they
// actually received, rather than being silently recalculated under today's rule.
function danceShowTeacherEarnLegacy(total,count,perPerson,pct){
  const net=total-(count*perPerson);
  return total-(net*(pct/100));
}
function onDanceShowChange(){
  const count=parseFloat(document.getElementById('pay-ds-count').value)||0;
  const perPerson=parseFloat(document.getElementById('pay-ds-perperson').value)||0;
  const totalEl=document.getElementById('pay-ds-total');
  if(totalEl&&!totalEl.dataset.touched) totalEl.value=(count*perPerson)||'';
  const t=parseFloat(totalEl.value)||0;
  // Dancer Wage defaults to the same count × per-person math as Total Payment — it's usually the
  // same rate paid out to each dancer as they're charged for — but a manual edit here overrides that,
  // exactly like Total Payment's own "touched" escape hatch.
  const wageEl=document.getElementById('pay-ds-wage');
  if(wageEl&&!wageEl.dataset.touched) wageEl.value=(count*perPerson)||'';
  const wage=parseFloat(wageEl.value)||0;
  const allOwn=document.getElementById('pay-ds-allown').value==='1';
  const earn=danceShowTeacherEarn(t,wage,allOwn);
  const remaining=Math.max(0,t-wage);
  const studioEarn=remaining-earn;
  const el=document.getElementById('pay-ds-earn-preview');
  if(el) el.textContent=fmt(earn);
  const bd=document.getElementById('pay-ds-breakdown');
  if(bd) bd.innerHTML=`${tr('page.dsTotal')} ${fmt(t)} − ${tr('page.dsWage')} ${fmt(wage)} = ${fmt(remaining)}<br>${allOwn?'7:3':'6:4'} — ${tr('page.dsStudioKeeps')} ${fmt(studioEarn)}`;
  const warn=document.getElementById('pay-ds-earn-warning');
  if(warn){
    if(wage>=t&&t>0){ warn.textContent=tr('msg.dsWageExceedsTotal'); warn.style.display='block'; }
    else warn.style.display='none';
  }
}
function onCreditPkgChange(){
  const amt=document.getElementById('pay-credit-amount');
  if(!amt||amt.dataset.touched) return;
  amt.value=creditPkgPrice(parseInt(document.getElementById('pay-credit-pkg').value));
}
function openRecordPayment(){
  document.getElementById('pay-kind').value='class';
  onPayKindChange();
  populateSel(); // fills student/class/date/month for the class form
  const amt=document.getElementById('pay-amount'); if(amt){ amt.value=''; delete amt.dataset.touched; }
  const trialName=document.getElementById('pay-student-trial'); if(trialName) trialName.value='';
  syncTrialStudentField();
  document.getElementById('pay-notes').value='';
  // credit package defaults — reuse the same (scoped) student list as the class form
  const cs=document.getElementById('pay-credit-student');
  if(cs){
    // mirror the FULL student list, not pay-student's current DOM — that may be mid-filter
    const all=selectFullList['pay-student'];
    cs.innerHTML=all&&all.length
      ? all.map(o=>`<option value="${H(o.value)}">${H(o.label)}</option>`).join('')
      : document.getElementById('pay-student').innerHTML;
    cacheSelectOptions('pay-credit-student');
  }
  const ca=document.getElementById('pay-credit-amount'); if(ca){ delete ca.dataset.touched; ca.value=creditPkgPrice(parseInt(document.getElementById('pay-credit-pkg').value)); }
  const cd=document.getElementById('pay-credit-date'); if(cd&&!cd.value) cd.value=toLocalISODate(new Date());
  // rental defaults
  document.getElementById('pay-rent-amount').value='';
  setRoomValue('pay-rent-room','Big Room');
  const rd=document.getElementById('pay-rent-date'); if(rd&&!rd.value) rd.value=toLocalISODate(new Date());
  const rp=document.getElementById('pay-rent-phone'); if(rp) rp.value='';
  const rcn=document.getElementById('pay-rent-custname'); if(rcn) rcn.value='';
  // dance show defaults — teacher list spans EVERY branch, not just the counter's own
  const dst=document.getElementById('pay-ds-teacher');
  if(dst) dst.innerHTML=[...DB.teachers].sort((a,b)=>a.name.localeCompare(b.name))
    .map(t=>`<option value="${t.id}">${H(t.name)}</option>`).join('')||'<option value="">No teachers yet</option>';
  document.getElementById('pay-ds-count').value=1;
  document.getElementById('pay-ds-perperson').value=300;
  const dsTotalEl=document.getElementById('pay-ds-total');
  dsTotalEl.value=''; delete dsTotalEl.dataset.touched;
  const dsWageEl=document.getElementById('pay-ds-wage');
  dsWageEl.value=''; delete dsWageEl.dataset.touched;
  document.getElementById('pay-ds-allown').value='1';
  document.getElementById('pay-ds-notes').value='';
  const dsd=document.getElementById('pay-ds-date'); if(dsd) dsd.value=toLocalISODate(new Date());
  onDanceShowChange();
  resetSelectFilters();
  openM('m-payment');
}
async function savePayment(){
  const kind=document.getElementById('pay-kind').value;
  if(kind==='credit'){
    const sid=parseInt(document.getElementById('pay-credit-student').value);
    const s=DB.students.find(x=>x.id===sid);
    if(!s){ toast(tr('msg.selectStudent'),false); return; }
    const pkg=parseInt(document.getElementById('pay-credit-pkg').value)||10;
    const amount=parseFloat(document.getElementById('pay-credit-amount').value)||0;
    const status=document.getElementById('pay-credit-status').value;
    const method=document.getElementById('pay-credit-method').value;
    const date=document.getElementById('pay-credit-date').value;
    const payDate=date||toLocalISODate(new Date());
    if(!(await requireConnection())) return; // no/slow connection — stop here, don't save, leave the form open so they can retry
    const prevCredits=creditsOf(s), prevExpiry=creditExpiryOf(s);
    const cpid=await claimPaymentId();
    if(cpid==null) return; // nothing has been touched yet at this point
    s.credits=prevCredits+pkg; // top up the student's credit balance
    s.creditExpiry=addDaysISO(payDate,CREDIT_PKG_DAYS[pkg]||56);
    const newRec={id:cpid,kind:'credit',studentId:sid,classId:null,creditPkg:pkg,month:'Credit Package',amount,status,date,method,notes:`${pkg}-class credit package`,earnedDate:payDate};
    DB.payments.push(newRec);
    if(!await commitSave()){
      // cloud never confirmed it — undo both the payment row and the credit top-up rather than
      // leaving them sitting only in local memory until a later reload silently erases them
      DB.payments=DB.payments.filter(p=>p!==newRec); s.credits=prevCredits; s.creditExpiry=prevExpiry;
      renderAdminPayments(); return;
    }
    closeM('m-payment');
    toast(tr('msg.creditsSold').replace('{n}',pkg).replace('{s}',s.name).replace('{b}',s.credits));
    renderAdminPayments(); return;
  }
  if(kind==='rental'){
    if(document.getElementById('pay-rent-room').value==='Custom' && !document.getElementById('pay-rent-room-custom').value.trim()){toast(tr('msg.enterRoomName'),false);return;}
    const start=document.getElementById('pay-rent-start').value;
    const end=document.getElementById('pay-rent-end').value;
    const room=readRoomValue('pay-rent-room','Big Room');
    const method=document.getElementById('pay-rent-method').value;
    const amount=parseFloat(document.getElementById('pay-rent-amount').value)||0;
    const date=document.getElementById('pay-rent-date').value;
    const status=document.getElementById('pay-rent-status').value;
    const phone=(document.getElementById('pay-rent-phone').value||'').trim();
    const custName=(document.getElementById('pay-rent-custname').value||'').trim();
    const payDate=date||toLocalISODate(new Date());
    // the room must actually be free for that slot on that date (no teacher on a rental)
    if(!validateBookingTimes({date:payDate,start,end,room,placeId:franchiseScope||null})) return;
    if(!(await requireConnection())) return; // no/slow connection — stop here, don't save, leave the form open so they can retry
    // rentals aren't tied to a student/class — they belong to the counter's branch (admin: no scope).
    // custName covers walk-in renters who aren't in DB.students at all — same idea as a Trial Class
    // payment's typed-in name (isTrialPay()), just for the Rental form.
    const rpid=await claimPaymentId();
    if(rpid==null) return; // nothing has been touched yet at this point
    const newRec={id:rpid,kind:'rental',studentId:null,classId:null,placeId:franchiseScope||null,room,rentStart:start,rentEnd:end,phone,custName,month:'Rental',amount,status,date,method,notes:`Room rental — ${room} ${start}–${end}`,earnedDate:payDate};
    DB.payments.push(newRec);
    if(!await commitSave()){ DB.payments=DB.payments.filter(p=>p!==newRec); renderAdminPayments(); return; }
    closeM('m-payment');
    document.getElementById('pay-rent-amount').value='';
    toast(tr('msg.paymentRecorded'));renderAdminPayments();
    // Show the receipt photo FIRST, before touching window.open() below — opening the WhatsApp tab
    // steals focus in most browsers, so if that ran first the photo modal would open correctly but sit
    // hidden behind the new tab until you switched back, which looks exactly like "nothing happened."
    // Doing this first guarantees it's the front-and-center thing in THIS tab regardless of what the
    // WhatsApp tab does next.
    if(status==='Paid') await showRentalReceiptModal(newRec); // await so it's fully open (logo drawn in) before the WhatsApp tab below can steal focus
    // Phone is optional — only open a WhatsApp chat with the text receipt if the counter typed one.
    if(phone){
      const wa=phoneToWaNumber(phone);
      if(wa) openWhatsApp(wa,buildRentalReceiptText(newRec));
      else toast('⚠️ Rental saved, but that phone number doesn\'t look valid — receipt wasn\'t sent via WhatsApp.',false);
    }
    return;
  }
  if(kind==='danceshow'){
    const teacherId=parseInt(document.getElementById('pay-ds-teacher').value);
    const teacher=DB.teachers.find(t=>t.id===teacherId);
    if(!teacher){ toast(tr('msg.selectTeacher'),false); return; }
    const count=parseFloat(document.getElementById('pay-ds-count').value)||0;
    const perPerson=parseFloat(document.getElementById('pay-ds-perperson').value)||0;
    const total=parseFloat(document.getElementById('pay-ds-total').value)||0;
    const wage=parseFloat(document.getElementById('pay-ds-wage').value)||0;
    const allOwn=document.getElementById('pay-ds-allown').value==='1';
    const method=document.getElementById('pay-ds-method').value;
    const status=document.getElementById('pay-ds-status').value;
    const date=document.getElementById('pay-ds-date').value;
    const notes=document.getElementById('pay-ds-notes').value;
    const payDate=date||toLocalISODate(new Date());
    const teacherEarn=danceShowTeacherEarn(total,wage,allOwn);
    if(wage>=total&&total>0){ toast(tr('msg.dsWageExceedsTotal'),false); return; }
    if(!(await requireConnection())) return; // no/slow connection — stop here, don't save, leave the form open so they can retry
    // dance shows aren't tied to a student/class — they belong to the counter's branch, but the
    // performing teacher can be from ANY branch (the picker lists every teacher, unscoped)
    const dspid=await claimPaymentId();
    if(dspid==null) return; // nothing has been touched yet at this point
    const newRec={id:dspid,kind:'danceshow',studentId:null,classId:null,teacherId,placeId:franchiseScope||null,
      dsCount:count,dsPerPerson:perPerson,dsWage:wage,dsAllOwn:allOwn,teacherEarn,
      month:'Dance Show',amount:total,status,date,method,notes:notes||`Dance Show — ${count} person(s) × RM${perPerson}`,earnedDate:payDate};
    DB.payments.push(newRec);
    if(!await commitSave()){ DB.payments=DB.payments.filter(p=>p!==newRec); renderAdminPayments(); return; }
    closeM('m-payment');
    toast(tr('msg.paymentRecorded'));renderAdminPayments();
    return;
  }
  const payDate=document.getElementById('pay-date').value||toLocalISODate(new Date());
  const classId=parseInt(document.getElementById('pay-class').value)||null;
  const rec={kind:'class',studentId:parseInt(document.getElementById('pay-student').value),classId,month:document.getElementById('pay-month').value,amount:parseFloat(document.getElementById('pay-amount').value)||0,status:document.getElementById('pay-status').value,date:document.getElementById('pay-date').value,method:document.getElementById('pay-method').value,notes:document.getElementById('pay-notes').value,earnedDate:payDate};
  if(isTrialPay()){
    // No student record exists for a trial — keep the typed name on the payment and stamp the branch
    // from the billed class, since scopedPayments() falls back to placeId when there's no studentId.
    const typed=(document.getElementById('pay-student-trial').value||'').trim();
    if(!typed){ toast(tr('msg.typeTrialName'),false); return; }
    const cls=classId?C(classId):null;
    rec.studentId=null;
    rec.trialName=typed;
    rec.placeId=(cls&&cls.id)?cls.placeId:(franchiseScope||null);
  }else if(!DB.students.some(s=>s.id===rec.studentId)){
    toast(tr('msg.selectStudent'),false); return;
  }
  if(!(await requireConnection())) return; // no/slow connection — stop here, don't save, leave the form open so they can retry
  const gpid=await claimPaymentId();       // claim a real id from the server instead of nid.payments++
  if(gpid==null) return;
  rec.id=gpid;
  DB.payments.push(rec);
  if(!await commitSave()){ DB.payments=DB.payments.filter(p=>p!==rec); renderAdminPayments(); return; }
  closeM('m-payment');['pay-amount','pay-notes','pay-student-trial'].forEach(id=>document.getElementById(id).value='');
  toast(tr('msg.paymentRecorded'));renderAdminPayments();
}
// ══════════ ADMIN — ACCOUNTS MANAGEMENT (admin only) ══════════
function nameToUsername(name){
  // username follows the student's name — spaces and upper/lower case don't matter, only the words
  const base=(name||'').toLowerCase().replace(/[^a-z0-9]/g,'');
  return base||'student';
}
// ══════════ QR ENCODER (byte mode, versions 1-10, ECC L/M) ══════════
// Inlined rather than pulled from a CDN: the app is one self-contained file behind a service worker,
// and a QR *image API* would mean posting a student's password to someone else's server. This encodes
// locally — the credentials never leave the iPad.
var QR=(function(){
  var EXP=new Uint8Array(512), LOG=new Uint8Array(256);
  (function(){ var x=1; for(var i=0;i<255;i++){ EXP[i]=x; LOG[x]=i; x<<=1; if(x&0x100) x^=0x11d; }
                for(var i=255;i<512;i++) EXP[i]=EXP[i-255]; })();
  function gmul(a,b){ return (a===0||b===0)?0:EXP[LOG[a]+LOG[b]]; }
  function polyMul(a,b){
    var r=new Array(a.length+b.length-1).fill(0);
    for(var i=0;i<a.length;i++) for(var j=0;j<b.length;j++) r[i+j]^=gmul(a[i],b[j]);
    return r;
  }
  function genPoly(deg){ var p=[1]; for(var i=0;i<deg;i++) p=polyMul(p,[1,EXP[i]]); return p; }
  function rsEncode(data,ecLen){
    var gen=genPoly(ecLen), res=data.concat(new Array(ecLen).fill(0));
    for(var i=0;i<data.length;i++){
      var c=res[i];
      if(c!==0) for(var j=0;j<gen.length;j++) res[i+j]^=gmul(gen[j],c);
    }
    return res.slice(data.length);
  }
  // [ecPerBlock, blocks1, data1, blocks2, data2] for versions 1..10
  var RS={
    L:[[7,1,19,0,0],[10,1,34,0,0],[15,1,55,0,0],[20,1,80,0,0],[26,1,108,0,0],
       [18,2,68,0,0],[20,2,78,0,0],[24,2,97,0,0],[30,2,116,0,0],[18,2,68,2,69]],
    M:[[10,1,16,0,0],[16,1,28,0,0],[26,1,44,0,0],[18,2,32,0,0],[24,2,43,0,0],
       [16,4,27,0,0],[18,4,31,0,0],[22,2,38,2,39],[22,3,36,2,37],[26,4,43,1,44]]
  };
  var ALIGN=[[],[6,18],[6,22],[6,26],[6,30],[6,34],[6,22,38],[6,24,42],[6,26,46],[6,28,50]];
  var ECLBITS={L:1,M:0};

  function capacity(v,ecl){ var r=RS[ecl][v-1]; return r[1]*r[2]+r[3]*r[4]; }

  function fmtBits(ecl,mask){
    var d=(ECLBITS[ecl]<<3)|mask, rem=d;
    for(var i=0;i<10;i++) rem=(rem<<1)^(((rem>>>9)&1)*0x537);
    return ((d<<10)|rem)^0x5412;
  }
  function verBits(v){
    var rem=v;
    for(var i=0;i<12;i++) rem=(rem<<1)^(((rem>>>11)&1)*0x1f25);
    return (v<<12)|rem;
  }

  function encodeData(bytes,v,ecl){
    var bits=[];
    function push(val,len){ for(var i=len-1;i>=0;i--) bits.push((val>>>i)&1); }
    push(4,4);                       // byte mode
    push(bytes.length, v<10?8:16);   // char count
    bytes.forEach(function(b){ push(b,8); });
    var cap=capacity(v,ecl)*8;
    for(var i=0;i<4&&bits.length<cap;i++) bits.push(0);   // terminator
    while(bits.length%8) bits.push(0);
    var pads=[0xEC,0x11], p=0;
    while(bits.length<cap){ push(pads[p++%2],8); }
    var cws=[];
    for(var i=0;i<bits.length;i+=8){
      var b=0; for(var j=0;j<8;j++) b=(b<<1)|bits[i+j];
      cws.push(b);
    }
    return cws;
  }

  function interleave(cws,v,ecl){
    var r=RS[ecl][v-1], ecLen=r[0], nb1=r[1], d1=r[2], nb2=r[3], d2=r[4];
    var blocks=[], ecs=[], off=0;
    for(var i=0;i<nb1;i++){ var b=cws.slice(off,off+d1); off+=d1; blocks.push(b); ecs.push(rsEncode(b,ecLen)); }
    for(var i=0;i<nb2;i++){ var b=cws.slice(off,off+d2); off+=d2; blocks.push(b); ecs.push(rsEncode(b,ecLen)); }
    var out=[], maxD=Math.max(d1,d2);
    for(var i=0;i<maxD;i++) blocks.forEach(function(b){ if(i<b.length) out.push(b[i]); });
    for(var i=0;i<ecLen;i++) ecs.forEach(function(e){ out.push(e[i]); });
    return out;
  }

  function buildMatrix(v){
    var n=17+4*v;
    var m=[], fn=[];
    for(var i=0;i<n;i++){ m.push(new Array(n).fill(0)); fn.push(new Array(n).fill(0)); }
    function setFn(r,c,val){ if(r<0||c<0||r>=n||c>=n) return; m[r][c]=val; fn[r][c]=1; }
    // finder patterns + separators
    [[0,0],[0,n-7],[n-7,0]].forEach(function(p){
      for(var r=-1;r<=7;r++) for(var c=-1;c<=7;c++){
        var inB=(r>=0&&r<=6&&(c===0||c===6))||(c>=0&&c<=6&&(r===0||r===6))||(r>=2&&r<=4&&c>=2&&c<=4);
        setFn(p[0]+r,p[1]+c,inB?1:0);
      }
    });
    // alignment patterns
    var ap=ALIGN[v-1];
    for(var i=0;i<ap.length;i++) for(var j=0;j<ap.length;j++){
      var r=ap[i], c=ap[j];
      if((r<=8&&c<=8)||(r<=8&&c>=n-9)||(r>=n-9&&c<=8)) continue;
      for(var dr=-2;dr<=2;dr++) for(var dc=-2;dc<=2;dc++)
        setFn(r+dr,c+dc,(Math.max(Math.abs(dr),Math.abs(dc))!==1)?1:0);
    }
    // timing
    for(var i=8;i<n-8;i++){ setFn(6,i,(i%2===0)?1:0); setFn(i,6,(i%2===0)?1:0); }
    setFn(n-8,8,1);   // dark module
    // reserve format areas
    for(var i=0;i<9;i++){ if(!fn[8][i]) setFn(8,i,0); if(!fn[i][8]) setFn(i,8,0); }
    for(var i=0;i<8;i++){ setFn(8,n-1-i,0); setFn(n-1-i,8,0); }
    // reserve version areas
    if(v>=7) for(var i=0;i<6;i++) for(var j=0;j<3;j++){ setFn(n-11+j,i,0); setFn(i,n-11+j,0); }
    return {m:m,fn:fn,n:n};
  }

  function placeData(g,cws){
    var n=g.n, bits=[];
    cws.forEach(function(b){ for(var i=7;i>=0;i--) bits.push((b>>>i)&1); });
    var idx=0, up=true;
    for(var right=n-1;right>0;right-=2){
      if(right===6) right=5;   // the vertical timing column is skipped entirely
      for(var vert=0;vert<n;vert++){
        var r=up?(n-1-vert):vert;
        for(var k=0;k<2;k++){
          var c=right-k;
          if(g.fn[r][c]) continue;
          g.m[r][c]=idx<bits.length?bits[idx++]:0;
        }
      }
      up=!up;
    }
  }

  function maskFn(k,r,c){
    switch(k){
      case 0: return (r+c)%2===0;
      case 1: return r%2===0;
      case 2: return c%3===0;
      case 3: return (r+c)%3===0;
      case 4: return (Math.floor(r/2)+Math.floor(c/3))%2===0;
      case 5: return ((r*c)%2)+((r*c)%3)===0;
      case 6: return (((r*c)%2)+((r*c)%3))%2===0;
      case 7: return (((r+c)%2)+((r*c)%3))%2===0;
    }
  }

  function applyFormat(g,ecl,mask){
    var n=g.n, bits=fmtBits(ecl,mask);
    // (row, col) — the spec is usually written (x=col, y=row), so these are easy to transpose
    for(var i=0;i<=5;i++) g.m[i][8]=(bits>>>i)&1;
    g.m[7][8]=(bits>>>6)&1;
    g.m[8][8]=(bits>>>7)&1;
    g.m[8][7]=(bits>>>8)&1;
    for(var i=9;i<15;i++) g.m[8][14-i]=(bits>>>i)&1;
    // second copy
    for(var i=0;i<8;i++) g.m[8][n-1-i]=(bits>>>i)&1;
    for(var i=8;i<15;i++) g.m[n-15+i][8]=(bits>>>i)&1;
    g.m[n-8][8]=1;   // dark module
    if(g.n>=45){ // version >= 7
      var vb=verBits((n-17)/4);
      for(var i=0;i<18;i++){
        var b=(vb>>>i)&1, a=Math.floor(i/3), bcol=i%3;
        g.m[n-11+bcol][a]=b; g.m[a][n-11+bcol]=b;
      }
    }
  }

  function penalty(m,n){
    var p=0, i, j, k;
    // rule 1: runs of 5+
    for(i=0;i<n;i++) for(k=0;k<2;k++){
      var run=1;
      for(j=1;j<n;j++){
        var a=k?m[j][i]:m[i][j], b=k?m[j-1][i]:m[i][j-1];
        if(a===b) run++; else { if(run>=5) p+=3+(run-5); run=1; }
      }
      if(run>=5) p+=3+(run-5);
    }
    // rule 2: 2x2 blocks
    for(i=0;i<n-1;i++) for(j=0;j<n-1;j++){
      var v=m[i][j];
      if(v===m[i][j+1]&&v===m[i+1][j]&&v===m[i+1][j+1]) p+=3;
    }
    // rule 3: finder-like patterns
    var pat1=[1,0,1,1,1,0,1,0,0,0,0], pat2=[0,0,0,0,1,0,1,1,1,0,1];
    for(i=0;i<n;i++) for(j=0;j<=n-11;j++) for(k=0;k<2;k++){
      var ok1=true, ok2=true;
      for(var x=0;x<11;x++){
        var v=k?m[j+x][i]:m[i][j+x];
        if(v!==pat1[x]) ok1=false;
        if(v!==pat2[x]) ok2=false;
      }
      if(ok1) p+=40;
      if(ok2) p+=40;
    }
    // rule 4: dark ratio
    var dark=0;
    for(i=0;i<n;i++) for(j=0;j<n;j++) if(m[i][j]) dark++;
    p+=Math.floor(Math.abs(dark*100/(n*n)-50)/5)*10;
    return p;
  }

  function encode(text,ecl){
    ecl=ecl||'M';
    var bytes=[];
    // UTF-8
    for(var i=0;i<text.length;i++){
      var c=text.charCodeAt(i);
      if(c<0x80) bytes.push(c);
      else if(c<0x800){ bytes.push(0xC0|(c>>6),0x80|(c&0x3F)); }
      else { bytes.push(0xE0|(c>>12),0x80|((c>>6)&0x3F),0x80|(c&0x3F)); }
    }
    var v=0;
    for(var i=1;i<=10;i++){
      var over=(i<10?2:3); // mode+count bytes overhead
      if(bytes.length+over<=capacity(i,ecl)){ v=i; break; }
    }
    if(!v) throw new Error('QR: text too long');
    var cws=encodeData(bytes,v,ecl);
    var inter=interleave(cws,v,ecl);
    var best=null, bestP=Infinity;
    for(var mask=0;mask<8;mask++){
      var g=buildMatrix(v);
      placeData(g,inter);
      for(var r=0;r<g.n;r++) for(var c=0;c<g.n;c++)
        if(!g.fn[r][c]&&maskFn(mask,r,c)) g.m[r][c]^=1;
      applyFormat(g,ecl,mask);
      var p=penalty(g.m,g.n);
      if(p<bestP){ bestP=p; best=g; }
    }
    return best.m;
  }

  // Draw to an existing <canvas>, sized to fill it, with a quiet zone.
  function draw(canvas,text,ecl){
    var m=encode(text,ecl), n=m.length, quiet=4, total=n+quiet*2;
    var px=Math.max(2,Math.floor(canvas.width/total));
    var size=px*total;
    canvas.width=size; canvas.height=size;
    var ctx=canvas.getContext('2d');
    ctx.fillStyle='#fff'; ctx.fillRect(0,0,size,size);
    ctx.fillStyle='#000';
    for(var r=0;r<n;r++) for(var c=0;c<n;c++)
      if(m[r][c]) ctx.fillRect((c+quiet)*px,(r+quiet)*px,px,px);
    return size;
  }
  return {encode:encode,draw:draw};
})();

function phoneToWaNumber(phone){
  // wa.me wants bare international digits. Supports Malaysian mobiles (60 + 1X + subscriber, e.g.
  // 60123456789) and Singapore mobiles (65 + 8-digit subscriber starting 8 or 9, e.g. 6581234567).
  // Accepts the many ways a counter might type it — "+60 12-345 6789", "012-345 6789", "12 3456789",
  // "601123456789", "+65 8123 4567", "8123 4567", "6591234567" — and returns '' when it can't be
  // made into a plausible mobile number for either country.
  let d=(phone||'').replace(/\D/g,'');
  if(!d) return '';
  if(d.startsWith('65')){
    // explicit Singapore country code typed — check just the part after it
    const sg=d.slice(2);
    return /^[89]\d{7}$/.test(sg) ? '65'+sg : '';
  }
  if(d.startsWith('60')) d=d.slice(2);           // strip Malaysian country code if present
  else if(d.startsWith('0')) d=d.slice(1);       // strip local trunk 0 (Malaysian style)
  // a Malaysian mobile subscriber part starts with 1 and is 9–10 digits total (e.g. 123456789 / 1123456789)
  if(/^1\d{8,9}$/.test(d)) return '60'+d;
  // no country code typed and it looks like a bare Singapore mobile (8 digits, starts 8 or 9)
  if(/^[89]\d{7}$/.test(d)) return '65'+d;
  return '';                                     // not a valid mobile → caller lets the user re-enter
}
function isValidWaPhone(phone){ return !!phoneToWaNumber(phone); }
var welcomeText='';
var welcomeStudent=null; // remembered so the "rewrite phone" retry can rebuild the wa.me link
// The counter's own browser isn't always on the studio's real student-facing domain (bookmarks,
// preview URLs, etc.), so location.origin can't be trusted here — a student login link built from
// whatever domain happens to be in the address bar could point somewhere that isn't the live app.
// This is fixed to the studio's actual domain instead.
var STUDENT_APP_ORIGIN='https://mobile.bdancestudio.com.my';
function buildWelcomeText(login){
  // The congratulations message sent to the parent/student on WhatsApp.
  return "Congratulations! \uD83C\uDF89 Your student ID and password have been created.\n\n"+
         "Student ID (Username): "+login.user+
         "\nPassword: "+login.pass+
         "\n\nPlease log in to our web app to discover more:\n"+STUDENT_APP_ORIGIN;
}
function waLink(wa,text){ return 'https://wa.me/'+wa+'?text='+encodeURIComponent(text); }
function openWhatsApp(wa,text){ try{ window.open(waLink(wa,text),'_blank','noopener'); }catch(e){} }
// The message sent to the renter's WhatsApp right after a Rental payment is recorded.
function buildRentalReceiptText(rec){
  const placeName=rec.placeId?Pl(rec.placeId).name:'B Dance Studio';
  const dateLabel=rec.date?new Date(rec.date+'T00:00:00').toLocaleDateString('en-MY',{year:'numeric',month:'long',day:'numeric'}):rec.date;
  // *asterisks* are WhatsApp's own bold-text markup — renders bold in the actual message, no image needed.
  const greeting=rec.custName?("Hi "+rec.custName+"! 🧾"):"🧾";
  return greeting+" Here's your rental receipt from *"+placeName+"*.\n\n"+
         "Room: *"+rec.room+"*"+
         "\nDate: *"+dateLabel+"*"+
         "\nTime: *"+rec.rentStart+"–"+rec.rentEnd+"*"+
         "\nAmount: *"+fmt(rec.amount)+"*"+
         "\nStatus: *"+rec.status+"*"+
         "\n\nThank you for renting with us!";
}
// ── Rental receipt IMAGE — for walk-in renters who aren't a student and just want proof of payment.
// wa.me can only pre-fill TEXT into WhatsApp (no API can pre-attach a photo to a specific chat without
// WhatsApp's paid Business API), so this draws an actual receipt image and hands it to the device's
// native share sheet — the counter picks WhatsApp there and it's sent as a real photo, same as
// attaching one manually, just one tap via the OS share sheet on devices that support it (iPad/iPhone
// Safari do). Where that isn't supported it downloads the PNG instead, so the counter can still attach
// it by hand in the WhatsApp chat that openWhatsApp() already opened.
function roundRectPath(ctx,x,y,w,h,r){
  ctx.beginPath();
  ctx.moveTo(x+r,y);
  ctx.arcTo(x+w,y,x+w,y+h,r);
  ctx.arcTo(x+w,y+h,x,y+h,r);
  ctx.arcTo(x,y+h,x,y,r);
  ctx.arcTo(x,y,x+w,y,r);
  ctx.closePath();
}
// Borrows the studio's actual logo image already sitting in the nav bar (.tlogo img — a real base64
// PNG, not an emoji) — same trick showBusy() already uses to put it on the loading overlay — instead
// of shipping a second copy of that PNG anywhere else in this file. Resolves null if it's missing or
// fails to load, so a broken/blocked image never breaks the receipt — it just falls back to text only.
function loadStudioLogoImage(){
  return new Promise(resolve=>{
    const src=document.querySelector('.tlogo img');
    if(!src||!src.src){ resolve(null); return; }
    const im=new Image();
    im.onload=()=>resolve(im);
    im.onerror=()=>resolve(null);
    im.src=src.src;
  });
}
async function renderRentalReceiptCanvas(rec){
  const placeName=rec.placeId?Pl(rec.placeId).name:'B Dance Studio';
  const dateLabel=rec.date?new Date(rec.date+'T00:00:00').toLocaleDateString('en-MY',{year:'numeric',month:'long',day:'numeric'}):(rec.date||'—');
  const rows=[['Receipt No.','#RCP-'+String(rec.id).padStart(5,'0')],['Date',dateLabel]];
  if(rec.custName) rows.push(['Renting To',rec.custName]);
  rows.push(['Room',rec.room||'—'],['Time',(rec.rentStart||'—')+'–'+(rec.rentEnd||'—')],['Method',rec.method||'—'],['Status',rec.status||'—']);
  const logoImg=await loadStudioLogoImage();

  const W=360,PAD=24,RH=26,headerH=76,gap=18,amountBoxH=56,footerH=54;
  const H=PAD+headerH+gap+rows.length*RH+gap+amountBoxH+gap+footerH+PAD;
  const canvas=document.createElement('canvas');
  const DPR=Math.max(1,window.devicePixelRatio||1);
  canvas.width=W*DPR; canvas.height=H*DPR;
  const ctx=canvas.getContext('2d');
  ctx.scale(DPR,DPR);
  ctx.fillStyle='#fff'; ctx.fillRect(0,0,W,H);

  let y=PAD;
  // Studio logo + wordmark, centered as one group — falls back to just the wordmark if the logo image
  // couldn't be loaded for any reason.
  ctx.font="bold 20px Arial, sans-serif";
  const wordmark='B DANCE STUDIO';
  const textW=ctx.measureText(wordmark).width;
  const iconH=logoImg?26:0, iconGap=logoImg?8:0;
  const iconW=logoImg?(logoImg.naturalWidth/logoImg.naturalHeight)*iconH:0;
  const groupW=iconW+iconGap+textW;
  let gx=(W-groupW)/2;
  if(logoImg){ ctx.drawImage(logoImg,gx,y+2,iconW,iconH); gx+=iconW+iconGap; }
  ctx.textAlign='left'; ctx.textBaseline='alphabetic'; ctx.fillStyle='#c9500f';
  ctx.fillText(wordmark,gx,y+20);
  y+=28;
  ctx.textAlign='center'; ctx.fillStyle='#666'; ctx.font="11px 'Courier New', monospace";
  ctx.fillText('RENTAL RECEIPT — '+placeName.toUpperCase(),W/2,y+12); y+=28;

  const dashedLine=yy=>{ ctx.save(); ctx.strokeStyle='#c9500f'; ctx.setLineDash([4,3]); ctx.beginPath(); ctx.moveTo(PAD,yy); ctx.lineTo(W-PAD,yy); ctx.stroke(); ctx.restore(); };
  dashedLine(y); y+=gap;

  rows.forEach(([label,value])=>{
    ctx.textAlign='left'; ctx.font="13px 'Courier New', monospace"; ctx.fillStyle='#333';
    ctx.fillText(label,PAD,y+14);
    ctx.textAlign='right'; ctx.font="bold 13px 'Courier New', monospace"; ctx.fillStyle='#111';
    ctx.fillText(value,W-PAD,y+14);
    y+=RH;
  });
  dashedLine(y); y+=gap;

  ctx.fillStyle='#fff2e8'; ctx.strokeStyle='#ffcda3';
  roundRectPath(ctx,PAD,y,W-PAD*2,amountBoxH,8); ctx.fill(); ctx.stroke();
  ctx.fillStyle='#c9500f'; ctx.textAlign='center'; ctx.font="bold 22px 'Courier New', monospace";
  ctx.fillText(fmt(rec.amount),W/2,y+amountBoxH/2+7);
  y+=amountBoxH+gap;
  dashedLine(y); y+=gap;

  ctx.fillStyle='#888'; ctx.textAlign='center'; ctx.font="11px 'Courier New', monospace";
  ctx.fillText('Thank you for renting with us!',W/2,y+14);
  ctx.fillText('This is a computer-generated receipt.',W/2,y+30);
  return canvas;
}
async function sendRentalReceiptImage(rec){
  try{
    const canvas=await renderRentalReceiptCanvas(rec);
    const blob=await new Promise(resolve=>canvas.toBlob(resolve,'image/png'));
    if(!blob) return;
    const filename='receipt-RCP-'+String(rec.id).padStart(5,'0')+'.png';
    const file=new File([blob],filename,{type:'image/png'});
    if(navigator.canShare && navigator.canShare({files:[file]})){
      // Native share sheet — the counter picks WhatsApp there and the receipt goes as a real photo.
      await navigator.share({files:[file],title:'Rental Receipt'});
    }else{
      // No file-sharing support (most desktop browsers) — download it instead so the counter can
      // attach it by hand in the WhatsApp chat openWhatsApp() already opened.
      const url=URL.createObjectURL(blob);
      const a=document.createElement('a'); a.href=url; a.download=filename;
      document.body.appendChild(a); a.click();
      setTimeout(()=>{ document.body.removeChild(a); URL.revokeObjectURL(url); },1000);
      toast('🧾 Receipt image downloaded — attach it in the WhatsApp chat that just opened.',true);
    }
  }catch(e){
    // Share sheet cancelled by the counter, or the browser doesn't support any of this — no-op. The
    // text receipt from openWhatsApp() has already gone out either way, so nothing is lost.
  }
}
// Always shows the rental as an actual photo in-app, regardless of whether the device supports the
// native share sheet — a long-press (iPad/iPhone) or right-click (desktop) on the image saves it to
// Photos/disk from here even when the "Share / Save Photo" button below can't hand it off directly.
// This is the fallback that always works, on any device, for any way the counter wants to send it on
// (WhatsApp, SMS, Telegram, AirDrop…) — not just the auto-opened WhatsApp chat.
let pendingRentalReceipt=null;
async function showRentalReceiptModal(rec){
  pendingRentalReceipt=rec;
  const canvas=await renderRentalReceiptCanvas(rec);
  if(pendingRentalReceipt!==rec) return; // superseded by a newer rental saved while the logo was loading
  document.getElementById('receipt-body').innerHTML=`
    <div id="receipt-print-area" style="text-align:center">
      <img src="${canvas.toDataURL('image/png')}" style="max-width:100%;border-radius:6px;box-shadow:0 2px 10px rgba(0,0,0,.15)"/>
    </div>
    <div style="text-align:center;font-size:11.5px;color:var(--muted);margin-top:10px">📱 Press and hold the photo to save it, then attach it anywhere — or tap Share below if your device supports it.</div>`;
  const shareBtn=document.getElementById('receipt-share-btn'); if(shareBtn) shareBtn.style.display='';
  openM('m-receipt');
}
function shareCurrentRentalReceipt(){ if(pendingRentalReceipt) sendRentalReceiptImage(pendingRentalReceipt); }
function offerWelcomeWhatsApp(student,login,isEdit){
  if(!student||!login) return;
  welcomeStudent=student;
  var link=STUDENT_APP_ORIGIN+'/?u='+encodeURIComponent(login.user)+'&p='+encodeURIComponent(login.pass);
  welcomeText=buildWelcomeText(login);
  document.getElementById('welcome-title').textContent=tr(isEdit?'page.welcomeEditTitle':'page.welcomeTitle');
  document.getElementById('welcome-sub').textContent=tr(isEdit?'page.welcomeEditSub':'page.welcomeSub').replace('{n}',student.name);
  document.getElementById('welcome-ul').textContent=tr('login.username');
  document.getElementById('welcome-pl').textContent=tr('login.password');
  document.getElementById('welcome-user').textContent=login.user;
  document.getElementById('welcome-pass').textContent=login.pass;
  document.getElementById('welcome-qrnote').textContent=tr('page.welcomeQrNote');
  document.getElementById('welcome-skip').textContent=tr('page.welcomeDone');
  document.getElementById('welcome-copy').textContent='\uD83D\uDCCB '+tr('page.welcomeCopy');
  document.getElementById('welcome-send').textContent=tr('page.welcomeSend');
  document.getElementById('welcome-phone-note').textContent=tr('page.welcomePhoneInvalid');
  document.getElementById('welcome-phone-go').textContent=tr('page.welcomeSend');
  // The QR is the point of this dialog: the student is standing at the counter, so the credentials
  // never have to travel over anything. Scanning opens the app with both fields already filled.
  try{ QR.draw(document.getElementById('welcome-qr'),link,'M'); }catch(e){}
  var wa=phoneToWaNumber(student.phone);
  var send=document.getElementById('welcome-send');
  var phoneRow=document.getElementById('welcome-phone-row');
  if(wa){
    // valid number → wire the fallback link AND auto-open WhatsApp in a new tab.
    phoneRow.style.display='none';
    send.style.display='';
    send.href=waLink(wa,welcomeText);
    document.getElementById('m-welcome').classList.add('open');
    // Desktop opens the tab right away. On iPad Safari the popup may be blocked (the original tap is
    // already spent after awaiting the save) — the WhatsApp button in the dialog is the backup.
    openWhatsApp(wa,welcomeText);
  }else{
    // no / invalid number → don't open anything; show an editable field so the counter can rewrite it.
    send.style.display='none';
    phoneRow.style.display='';
    var inp=document.getElementById('welcome-phone-input');
    inp.value=student.phone||'';
    document.getElementById('m-welcome').classList.add('open');
    setTimeout(function(){ try{ inp.focus(); }catch(e){} },60);
  }
}
// Counter rewrote the phone number in the welcome dialog → validate, save it, and open WhatsApp.
function retryWelcomeWhatsApp(){
  var val=document.getElementById('welcome-phone-input').value;
  var wa=phoneToWaNumber(val);
  if(!wa){ toast(tr('page.welcomePhoneInvalid'),false); return; }
  var login=welcomeStudent?DB.accounts.find(function(a){return a.role==='student'&&a.ref===welcomeStudent.id;}):null;
  if(welcomeStudent){
    welcomeStudent.phone=val;                                  // keep the corrected number on the student
    if(login) login.pass=phoneToPassword(val);                 // password tracks the phone number
    try{ commitSave(); }catch(e){}                             // fire-and-forget: persist the correction
  }
  if(login){ welcomeText=buildWelcomeText(login); document.getElementById('welcome-pass').textContent=login.pass; }
  var send=document.getElementById('welcome-send');
  send.style.display=''; send.href=waLink(wa,welcomeText);
  document.getElementById('welcome-phone-row').style.display='none';
  openWhatsApp(wa,welcomeText);
}
function copyWelcome(btn){
  var label=btn.textContent;
  var done=function(){ btn.textContent='\u2713 '+tr('page.welcomeCopied'); setTimeout(function(){ btn.textContent=label; },1500); };
  var fallback=function(){   // older iPad Safari / any non-secure context has no navigator.clipboard
    var ta=document.createElement('textarea'); ta.value=welcomeText;
    ta.style.position='fixed'; ta.style.opacity='0'; document.body.appendChild(ta);
    ta.select(); try{ document.execCommand('copy'); }catch(e){} document.body.removeChild(ta);
  };
  if(navigator.clipboard&&navigator.clipboard.writeText)
    navigator.clipboard.writeText(welcomeText).then(done,function(){ fallback(); done(); });
  else { fallback(); done(); }
}
// A student arriving from the QR lands straight on the student sign-in with both fields filled.
function applyLoginLink(){
  var u,pw;
  try{ var q=new URLSearchParams(location.search); u=q.get('u'); pw=q.get('p'); }catch(e){ return; }
  if(!u||!pw) return;
  // Strip the credentials from the address bar before anything else. Left there they sit in the
  // student's history, in any screenshot, and in whatever they paste into a class group chat later.
  try{ history.replaceState(null,'',location.pathname); }catch(e){}
  showLoginFromSite();
  chooseRole('student');
  // AFTER chooseRole — showCredScreen() clears both fields on the way in
  document.getElementById('login-user').value=u;
  document.getElementById('login-pass').value=pw;
}
// When there's no phone to build a password from, the password has to be unguessable. It used to
// fall back to the constant 'student123' (and 'teacher123' for staff), which anyone who opened this
// file could read — so every account created without a phone number shared one known password.
// The counter doesn't need to predict it: the welcome dialog shows it on screen after saving.
function randomPassword(){
  const a='ABCDEFGHJKLMNPQRSTUVWXYZ23456789';   // no I/O/0/1 — these get read aloud at the counter
  let out='';
  const rnd=(window.crypto&&window.crypto.getRandomValues)
    ? Array.from(window.crypto.getRandomValues(new Uint32Array(8)))
    : Array.from({length:8},()=>Math.floor(Math.random()*4294967296));
  rnd.forEach(n=>{ out+=a[n%a.length]; });
  return out;
}
function phoneToPassword(phone){
  // password is the student's phone number in local form, starting 0 (e.g. 01234567890 for a
  // Malaysian number, 081234567 for a Singapore one) — whichever country code, if any, was typed.
  let d=(phone||'').replace(/\D/g,'');
  if(d.startsWith('60')) d='0'+d.slice(2);        // +60 12-345 6789 → 0123456789
  else if(d.startsWith('65')) d='0'+d.slice(2);   // +65 8123 4567 → 081234567
  else if(d&&!d.startsWith('0')) d='0'+d;         // guarantee a leading 0
  return d||randomPassword();                      // no phone → random, never a shared constant
}
function nextStudentLoginId(){
  // student logins are sequential 6-digit IDs starting at 600001. A deleted student's ID is reused
  // first (e.g. 600001 gets deleted while 600002–600007 still exist → the next new student becomes
  // 600001 again); once every gap is filled, new IDs continue upward past the current highest one.
  const used=new Set();
  DB.accounts.forEach(a=>{ if(a.role==='student'&&/^6\d{5}$/.test(a.user||'')) used.add(parseInt(a.user,10)); });
  let id=600001;
  while(used.has(id)) id++;
  return String(id);
}
function createStudentLogin(student,claimedLoginId){
  // exactly one login per student; created automatically when a counter or admin adds the student.
  // claimedLoginId, when given, is a login id already reserved atomically from the server (see
  // claimServerIds()) — pass it whenever this is being called for a BRAND-NEW student, so two
  // counters adding students at once can never be handed the same 6-digit login id. Callers that
  // only backfill a login for an existing student (nothing racing to create it at that exact
  // moment) may omit it and fall back to the local nextStudentLoginId() as before.
  if(!DB.suppressedStudentRefs) DB.suppressedStudentRefs=[];
  const existing=DB.accounts.find(a=>a.role==='student'&&a.ref===student.id);
  if(existing){ existing.name=student.name; return existing; }
  if(DB.suppressedStudentRefs.includes(student.id)) return null; // admin deleted this login on purpose
  // username = a fresh 6-digit ID; password = their phone number (or a random one if none)
  const acc={user:claimedLoginId?String(claimedLoginId):nextStudentLoginId(),pass:phoneToPassword(student.phone),role:'student',name:student.name,ref:student.id};
  DB.accounts.push(acc);
  return acc;
}
function ensureStudentLogins(){
  // guarantee every student in the roster has a login so admin can view all IDs + passwords
  DB.students.forEach(s=>createStudentLogin(s));
}
function createTeacherLogin(teacher){
  // one login per teacher, auto-created when a teacher is added
  if(!DB.suppressedTeacherRefs) DB.suppressedTeacherRefs=[];
  const existing=DB.accounts.find(a=>a.role==='teacher'&&a.ref===teacher.id);
  if(existing){ existing.name=teacher.name; return existing; }
  if(DB.suppressedTeacherRefs.includes(teacher.id)) return null;
  let base=nameToUsername(teacher.name), u=base, n=1;
  while(DB.accounts.find(a=>a.user===u)) u=base+(++n);
  // password is the teacher's own name + 123 — easy for the front desk to read out when a teacher
  // is added, and the teacher can change it any time from their own account settings afterwards.
  const acc={user:u,pass:nameToUsername(teacher.name)+'123',role:'teacher',name:teacher.name,ref:teacher.id};
  DB.accounts.push(acc);
  return acc;
}
function ensureTeacherLogins(){
  // every rostered teacher should have a login. First clear any stale suppression on LIVE teacher ids
  // (e.g. an id freed by a delete and later reused by recomputeNid), otherwise createTeacherLogin() would
  // skip it and the teacher would show up with no account. Then guarantee a login for each teacher.
  if(Array.isArray(DB.suppressedTeacherRefs) && DB.suppressedTeacherRefs.length){
    const liveIds=new Set(DB.teachers.map(t=>t.id));
    DB.suppressedTeacherRefs=DB.suppressedTeacherRefs.filter(r=>!liveIds.has(r));
  }
  // Prune orphaned teacher accounts — a login whose `ref` no longer matches any teacher in
  // DB.teachers. deleteTeacher() already cleans its own account up, but a teacher row removed some
  // other way (direct edit in Supabase, a bad merge, etc.) can leave its old login behind forever,
  // since nothing else ever revisits DB.accounts to check it's still pointing at someone real. That's
  // how a renamed/recreated "Bear Teo" ends up with two accounts (bearteo, bearteo2) sharing the same
  // display name in Accounts while the Teacher dropdown — which reads DB.teachers, not DB.accounts —
  // correctly shows only the one teacher that's actually still on the roster.
  const liveTeacherIds=new Set(DB.teachers.map(t=>t.id));
  DB.accounts=DB.accounts.filter(a=>!(a.role==='teacher'&&!liveTeacherIds.has(a.ref)));
  DB.teachers.forEach(t=>createTeacherLogin(t));
}
function verifyRewardCode(){
  const el=document.getElementById('rc-input');
  const code=((el&&el.value)||'').trim().toUpperCase();
  if(!code){ return; }
  let found=null, student=null;
  for(const s of DB.students){
    const rd=(s.redemptions||[]).find(r=>r.code===code&&!r.collected);
    if(rd){ found=rd; student=s; break; }
  }
  if(!found){
    // was it already collected?
    const already=DB.students.some(s=>(s.redemptions||[]).some(r=>r.code===code&&r.collected));
    toast(already?tr('msg.codeUsed'):tr('msg.codeInvalid'),false);
    return;
  }
  const prevCommitted=committedPoints(student); // carry forward: spentPoints if already locked, else sum of previously-collected
  found.collected=true; found.collectedDate=toLocalISODate(new Date());
  student.spentPoints=prevCommitted+(found.cost||0); // deduct the points NOW, at claim — locked so later edits/deletes don't refund
  saveDB(); if(typeof cloudSave==='function') cloudSave();
  if(el) el.value='';
  toast(tr('msg.codeOk').replace('{r}',found.name).replace('{s}',student.name));
  renderAdminStudents(document.getElementById('stu-search-input')?document.getElementById('stu-search-input').value:'');
}
// ── Redemption history (Counter / Admin) — branch-scoped view + delete ──
function redemptionHistoryRows(){
  const rows=[];
  scopedStudents().forEach(s=>{ (s.redemptions||[]).forEach(r=>rows.push({s,r})); });
  rows.sort((a,b)=>{ const d=(b.r.date||'').localeCompare(a.r.date||''); return d!==0?d:String(b.r.id).localeCompare(String(a.r.id)); });
  return rows;
}
function renderRedemptionBody(){
  const body=document.getElementById('m-redemptions-body');
  const rows=redemptionHistoryRows();
  if(!rows.length){ body.innerHTML=`<div class="empty">${tr('page.noRedemptions')}</div>`; return; }
  body.innerHTML=rows.map(({s,r})=>{
    const status=r.collected
      ? `<span class="tag" style="background:rgba(46,204,113,.15);color:#2ecc71">✓ ${tr('page.collected')}</span>`
      : `<span class="tag" style="background:rgba(243,156,18,.15);color:var(--gold)">● ${tr('page.pending')}</span> <span style="font-family:'JetBrains Mono',monospace;letter-spacing:1px">${r.code||''}</span>`;
    return `<div style="display:flex;align-items:center;gap:12px;padding:10px 0;border-bottom:1px solid var(--border)">
      <div style="font-size:22px">${r.icon||'🎁'}</div>
      <div style="flex:1;min-width:0">
        <div style="font-weight:600">${r.name}</div>
        <div style="color:var(--muted);font-size:12px">${s.name} · ${r.date||'—'} · ${r.cost} ${tr('page.pts')}</div>
        <div style="margin-top:4px">${status}</div>
      </div>
      <button class="btn btn-o btn-s" title="${tr('common.delete')}" onclick="deleteRedemption(${s.id},'${r.id}')">🗑</button>
    </div>`;
  }).join('');
}
function openRedemptionHistory(){
  document.getElementById('m-redemptions-title').textContent=tr('page.redemptionHistory');
  document.getElementById('m-redemptions-note').textContent=tr('page.redemptionHistoryNote');
  renderRedemptionBody();
  document.getElementById('m-redemptions').classList.add('open');
}
function deleteRedemption(sid,rdId){
  askConfirm(tr('msg.confirmDeleteRedemption'),async()=>{
    const s=DB.students.find(x=>x.id===sid); if(!s) return;
    const rec=(s.redemptions||[]).find(r=>String(r.id)===String(rdId));
    // a CLAIMED reward keeps its points deducted (lock the tally so removing the row can't refund it);
    // a still-PENDING reward simply returns its held points when the row is removed
    if(rec&&rec.collected) s.spentPoints=committedPoints(s);
    s.redemptions=(s.redemptions||[]).filter(r=>String(r.id)!==String(rdId));
    if(!await commitSave()) return;
    toast(tr('msg.redemptionDeleted'));
    renderRedemptionBody();
    const si=document.getElementById('stu-search-input'); if(si&&typeof renderAdminStudents==='function') renderAdminStudents(si.value);
  });
}
function pruneOrphans(){
  // remove records left behind by a deleted student (attendance / bills / credit uses with no matching student)
  const ids=new Set(DB.students.map(s=>s.id));
  DB.attendance=(DB.attendance||[]).filter(a=>ids.has(a.studentId));
  DB.payments=(DB.payments||[]).filter(p=>!p.studentId||ids.has(p.studentId)); // keep rental payments (no student)
  if(Array.isArray(DB.creditUsages)) DB.creditUsages=DB.creditUsages.filter(c=>ids.has(c.studentId));
}
function migrateCreditUses(){
  // credit use is no longer a payment — it lives on the paidByCredit attendance record and drives salary from there.
  // Strip any legacy credit-use "payment" rows so they stop appearing in the Payments list (idempotent).
  if(Array.isArray(DB.payments)) DB.payments=DB.payments.filter(p=>p.kind!=='credit-use');
}
function removeStudentData(id){
  // Strips everything tied to a student: record, login, attendance, credit uses, and unpaid bills.
  // Paid payments are the one exception — those are real revenue that already happened, so they're
  // kept on file for accounting even after the student (and their unpaid bills) are gone.
  // No confirm, no save, no re-render — callers (single delete + bulk delete) handle those so a
  // bulk delete can remove many students and then commit/refresh just once.
  DB.students=DB.students.filter(x=>x.id!==id);
  DB.accounts=DB.accounts.filter(a=>!(a.role==='student'&&a.ref===id));
  DB.attendance=DB.attendance.filter(a=>a.studentId!==id);
  DB.payments=DB.payments.filter(p=>p.studentId!==id||p.status==='Paid');
  if(Array.isArray(DB.creditUsages)) DB.creditUsages=DB.creditUsages.filter(c=>c.studentId!==id);
  // Clear (never keep) any suppression on this freed id — see the long note that used to live here:
  // recomputeNid() reuses freed ids, and a lingering suppression would block the next new student's login.
  if(Array.isArray(DB.suppressedStudentRefs)) DB.suppressedStudentRefs=DB.suppressedStudentRefs.filter(r=>r!==id);
}
function deleteStudent(id){
  askConfirm(tr('msg.confirmDeleteStudent'),async()=>{
    removeStudentData(id);
    if(!await commitSave()) return; // shared DB never received it — say so instead of claiming the student is gone
    toast(tr('msg.studentDeleted'));
    renderAdminStudents();
  });
}
// ── Multi-select bulk delete (admin, Students page) ─────────────────────────────────────────────
let selectedStudentIds=new Set();
let visibleStudentIds=[];
function toggleStudentSelect(id,checked){ if(checked) selectedStudentIds.add(id); else selectedStudentIds.delete(id); updateBulkStudentBar(); }
function toggleAllStudents(checked){ visibleStudentIds.forEach(id=>{ if(checked) selectedStudentIds.add(id); else selectedStudentIds.delete(id); }); const si=document.getElementById('stu-search-input'); renderAdminStudents(si?si.value:''); }
function updateBulkStudentBar(){
  const n=selectedStudentIds.size;
  const btn=document.getElementById('bulk-del-students'), cnt=document.getElementById('bulk-del-count');
  if(cnt) cnt.textContent=n;
  if(btn) btn.disabled=(n===0);
  const tbtn=document.getElementById('bulk-tshirt-students'), tcnt=document.getElementById('bulk-tshirt-count');
  if(tcnt) tcnt.textContent=n;
  if(tbtn) tbtn.disabled=(n===0);
  const head=document.getElementById('stu-select-all');
  if(head) head.checked=(visibleStudentIds.length>0 && visibleStudentIds.every(id=>selectedStudentIds.has(id)));
}
function deleteSelectedStudents(){
  if(!session||session.role!=='admin') return;
  const ids=[...selectedStudentIds];
  if(!ids.length) return;
  askConfirm(tr('msg.confirmDeleteSelected').replace('{n}',ids.length),async()=>{
    ids.forEach(id=>removeStudentData(id));
    if(!await commitSave()) return;
    selectedStudentIds.clear();
    toast(tr('msg.selectedDeleted').replace('{n}',ids.length));
    const si=document.getElementById('stu-search-input'); renderAdminStudents(si?si.value:'');
  });
}
// ── Multi-select bulk "free t-shirt collected" tick (admin + counter, Students page) ───────────
// Same selectedStudentIds set the bulk-delete bar uses — tick students' checkboxes once, then hit
// this to stamp tshirtRedeemed=true on all of them in one save, instead of opening each student's
// Edit form individually just to tick one checkbox.
function tickTshirtSelected(){
  if(!session||(session.role!=='admin'&&session.role!=='counter')) return;
  const ids=[...selectedStudentIds];
  if(!ids.length) return;
  askConfirm(tr('msg.confirmTickTshirtSelected').replace('{n}',ids.length),async()=>{
    // Snapshot each student's PRIOR value before mutating, and roll back on a failed cloud save —
    // mirrors saveStudent()'s rollbackStudentSave(). Without this, a dropped connection here left
    // s.tshirtRedeemed=true in memory (and in localStorage, since commitSave() calls saveDB() before
    // it even attempts the cloud push) even though the shared database never actually got the change.
    // That's exactly the bug reported: this browser's Edit Student form kept showing the shirt as
    // collected (it's reading its own now-stale local copy) while the student's mobile app — which
    // reads the real, untouched value straight from Supabase — correctly still showed "not collected".
    const priorVals=ids.map(id=>{ const s=DB.students.find(x=>x.id===id); return s?{s,prior:s.tshirtRedeemed}:null; }).filter(Boolean);
    priorVals.forEach(({s})=>{ s.tshirtRedeemed=true; });
    if(!await commitSave()){
      priorVals.forEach(({s,prior})=>{ s.tshirtRedeemed=prior; });
      saveDB(); // re-persist the rollback to localStorage — see comment above on why this is needed
      const si=document.getElementById('stu-search-input'); renderAdminStudents(si?si.value:'');
      return;
    }
    selectedStudentIds.clear();
    toast(tr('msg.selectedTshirtTicked').replace('{n}',ids.length));
    const si=document.getElementById('stu-search-input'); renderAdminStudents(si?si.value:'');
  });
}
function deleteTeacher(id){
  // deleting a teacher removes their record AND their auto-created login account.
  // We must NOT "suppress" the ref: the teacher is already gone from DB.teachers so ensureTeacherLogins()
  // can't recreate the login — and recomputeNid() can later reuse this freed id, which would then wrongly
  // block a brand-new teacher's auto-account. So we actively clear any suppression for this id.
  askConfirm(tr('msg.confirmDeleteTeacher'),async()=>{
    const oldVideo=((DB.teachers.find(x=>x.id===id))||{}).video||'';
    DB.teachers=DB.teachers.filter(x=>x.id!==id);
    DB.accounts=DB.accounts.filter(a=>!(a.role==='teacher'&&a.ref===id));
    if(Array.isArray(DB.suppressedTeacherRefs)) DB.suppressedTeacherRefs=DB.suppressedTeacherRefs.filter(r=>r!==id);
    if(!await commitSave()) return;
    dropOrphanMedia(oldVideo);
    toast(tr('msg.teacherDeleted'));
    renderAdminTeachers();
  });
}
let accStudentPlaceFilter='all';
let accStudentDayFilter='all';
function renderAccounts(){
  const host=document.getElementById('page-accounts');
  if(!session||session.role!=='admin'){ host.innerHTML=`<div class="stitle">${tr('title.accounts')}</div><div class="empty">${tr('page.adminOnly')}</div>`; return; }
  ensureStudentLogins();
  ensureTeacherLogins();
  ensureRewards();
  ensureStyles();
  const dash='—';
  const esc=v=>String(v==null?'':v).replace(/"/g,'&quot;');
  const pi=DB.paymentInfo||{};
  const styleRows=styleList().map((st,i)=>{
    const inUse=DB.classes.filter(c=>c.style===st).length;
    const useLabel=inUse?`${inUse} ${inUse===1?tr('common.class'):tr('page.classesWord')}`:tr('page.styleUnused');
    return `<tr>
    <td><input class="finput" style="margin:0" id="st-name-${i}" value="${esc(st)}"/></td>
    <td style="color:var(--muted);font-size:12px">${useLabel}</td>
    <td style="display:flex;gap:4px;flex-wrap:wrap"><button class="btn btn-g btn-s" onclick="guardedOnce('style-${i}',()=>saveStyleRow(${i}))">${tr('common.save')}</button><button class="btn btn-d btn-s" onclick="deleteStyle(${i})">${tr('common.delete')}</button></td>
  </tr>`;
  }).join('')||`<tr><td colspan="3" class="empty">${dash}</td></tr>`;
  const rewardRows=rewardsList().map(r=>`<tr>
    <td><input class="finput" style="margin:0;width:60px;text-align:center;font-size:18px" id="rw-icon-${r.id}" value="${esc(r.icon)}"/></td>
    <td><input class="finput" style="margin:0" id="rw-name-${r.id}" value="${esc(rewardName(r))}"/></td>
    <td><input class="finput" style="margin:0;width:100px" type="number" min="0" id="rw-cost-${r.id}" value="${r.cost}"/></td>
    <td style="display:flex;gap:4px;flex-wrap:wrap"><button class="btn btn-g btn-s" onclick="guardedOnce('reward-${r.id}',()=>saveRewardRow('${r.id}'))">${tr('common.save')}</button><button class="btn btn-d btn-s" onclick="deleteReward('${r.id}')">${tr('common.delete')}</button></td>
  </tr>`).join('')||`<tr><td colspan="4" class="empty">${dash}</td></tr>`;
  const counters=DB.accounts.filter(a=>a.role==='counter');
  const teachers=DB.accounts.filter(a=>a.role==='teacher');
  const students=DB.accounts.filter(a=>a.role==='student');
  // The Accounts bar shows just the first few student logins as a preview; full search + franchise/day
  // filtering lives in the "Show all student accounts" modal (openStudentAccounts), so no filtering here.

  const counterRows=counters.map(a=>`<tr>
    <td>${a.placeId?Pl(a.placeId).name:dash}</td>
    <td><input class="finput" style="margin:0" id="cacc-user-${a.placeId}" value="${a.user}"/></td>
    <td><input class="finput" style="margin:0" id="cacc-pass-${a.placeId}" value="${a.pass}"/></td>
    <td style="color:var(--muted)">${a.pwChanged||dash}</td>
    <td style="display:flex;gap:4px;flex-wrap:wrap"><button class="btn btn-g btn-s" onclick="guardedOnce('counteracct-${a.user}',()=>saveCounterAccount('${a.user}',${a.placeId}))">${tr('common.save')}</button><button class="btn btn-d btn-s" onclick="deleteAccount('${a.user}')">${tr('common.delete')}</button></td>
  </tr>`).join('')||`<tr><td colspan="5" class="empty">${dash}</td></tr>`;

  const teacherRows=teachers.map(a=>`<tr>
    <td><div class="ncell"><div class="avatar">${ini(a.name)}</div>${a.name}</div></td>
    <td style="font-family:'JetBrains Mono',monospace">${a.user}</td>
    <td><input class="finput" style="margin:0" id="tpass-${a.ref}" value="${a.pass}"/></td>
    <td style="color:var(--muted)">${a.pwChanged||dash}</td>
    <td style="display:flex;gap:4px;flex-wrap:wrap"><button class="btn btn-g btn-s" onclick="guardedOnce('acctpass-${a.user}',()=>saveAccountPassword('${a.user}','tpass-${a.ref}'))">${tr('common.save')}</button><button class="btn btn-d btn-s" onclick="deleteAccount('${a.user}')">${tr('common.delete')}</button></td>
  </tr>`).join('')||`<tr><td colspan="5" class="empty">${dash}</td></tr>`;

  const stuRowHTML=a=>`<tr>
    <td><div class="ncell"><div class="avatar">${ini(a.name)}</div>${a.name}</div></td>
    <td style="font-family:'JetBrains Mono',monospace">${a.user}</td>
    <td><input class="finput" style="margin:0" id="spass-${a.ref}" value="${String(a.pass).replace(/"/g,'&quot;')}"/></td>
    <td style="color:var(--muted)">${a.pwChanged||dash}</td>
    <td style="display:flex;gap:4px;flex-wrap:wrap"><button class="btn btn-g btn-s" onclick="guardedOnce('acctpass-${a.user}',()=>saveAccountPassword('${a.user}','spass-${a.ref}'))">${tr('common.save')}</button><button class="btn btn-d btn-s" onclick="deleteAccount('${a.user}')">${tr('common.delete')}</button></td>
  </tr>`;
  const STU_PREVIEW=5;
  const studentsSorted=[...students].sort((a,b)=>String(a.user).localeCompare(String(b.user)));
  const studentPreview=studentsSorted.slice(0,STU_PREVIEW);
  const studentRows=studentPreview.map(stuRowHTML).join('')||`<tr><td colspan="5" class="empty">${dash}</td></tr>`;
  const moreCount=studentsSorted.length-studentPreview.length;

  host.innerHTML=`
    <div class="stitle">${tr('title.accounts')}</div>
    <div class="role-banner"><div class="ri">🔑</div><div><div class="rn">${tr('page.accountsBar')}</div><div class="rs">${tr('page.accountsBarIntro')}</div></div></div>

    <div class="stitle" style="font-size:15px">🧾 ${tr('page.counterAccounts')}</div>
    <div style="color:var(--muted);font-size:12px;margin-bottom:8px">${tr('page.accountsIntro')}</div>
    <div class="twrap" style="margin-bottom:24px"><table>
      <thead><tr><th>${tr('common.franchise2')}</th><th>${tr('common.username')}</th><th>${tr('common.password')}</th><th>${tr('page.passwordChanged')}</th><th></th></tr></thead>
      <tbody>${counterRows}</tbody></table></div>

    <div class="stitle" style="font-size:15px">🎓 ${tr('page.teacherAccounts')}</div>
    <div class="twrap" style="margin-bottom:24px"><table>
      <thead><tr><th>${tr('common.teacher')}</th><th>${tr('common.username')}</th><th>${tr('common.password')}</th><th>${tr('page.passwordChanged')}</th><th></th></tr></thead>
      <tbody>${teacherRows}</tbody></table></div>

    <div class="stitle" style="font-size:15px">👤 ${tr('page.studentAccounts')}</div>
    <div style="color:var(--muted);font-size:12px;margin-bottom:8px">${tr('page.studentAccountsIntro')}</div>
    <div class="twrap"><table>
      <thead><tr><th>${tr('common.student')}</th><th>${tr('common.username')}</th><th>${tr('common.password')}</th><th>${tr('page.passwordChanged')}</th><th></th></tr></thead>
      <tbody>${studentRows}</tbody></table></div>
    <div style="display:flex;align-items:center;gap:10px;flex-wrap:wrap;margin-top:8px">
      <button class="btn btn-o btn-s" onclick="openStudentAccounts()">🔍 ${tr('page.showAllStudentAccounts')}</button>
      <span style="color:var(--muted);font-size:11.5px">${moreCount>0?tr('page.moreStudentAccounts').replace('{n}',moreCount):tr('page.allStudentAccountsShown').replace('{n}',studentsSorted.length)}</span>
    </div>

    <div class="stitle" style="font-size:15px;margin-top:26px">💳 ${tr('page.payDetailsTitle')}</div>
    <div style="color:var(--muted);font-size:12px;margin-bottom:8px">${tr('page.payDetailsIntro')}</div>
    <div class="scard" style="margin-bottom:24px">
      <div class="frow">
        <div class="fg"><label>${tr('page.bankName')}</label><input class="finput" id="pi-bankName" value="${esc(pi.bankName)}"/></div>
        <div class="fg"><label>${tr('page.accountName')}</label><input class="finput" id="pi-accountName" value="${esc(pi.accountName)}"/></div>
      </div>
      <div class="frow">
        <div class="fg"><label>${tr('page.accountNumber')}</label><input class="finput" id="pi-accountNumber" value="${esc(pi.accountNumber)}"/></div>
        <div class="fg"><label>DuitNow</label><input class="finput" id="pi-duitnow" value="${esc(pi.duitnow)}"/></div>
      </div>
      <div class="frow">
        <div class="fg"><label>${tr('page.tngName')}</label><input class="finput" id="pi-tngName" value="${esc(pi.tngName)}"/></div>
        <div class="fg"><label>${tr('page.tngNumber')}</label><input class="finput" id="pi-tngNumber" value="${esc(pi.tngNumber)}"/></div>
      </div>
      <div class="fg"><label>${tr('page.qrUpload')}</label>
        <div style="color:var(--muted);font-size:12px;margin-bottom:8px">${tr('page.qrUploadNote')}</div>
        <div style="display:flex;flex-direction:column;gap:12px">
          ${DB.places.map(pl=>`
            <div style="display:flex;align-items:center;gap:12px;flex-wrap:wrap;padding:10px;background:var(--card);border:1px solid var(--border);border-radius:8px">
              <div style="min-width:100px;font-size:12px;font-weight:700;color:var(--gold)">🏢 ${esc(pl.name)}</div>
              <div id="pi-qr-preview-${pl.id}" style="width:100px;height:100px;border-radius:8px;background:#fff center/contain no-repeat;flex:none;border:1px solid var(--border);display:flex;align-items:center;justify-content:center;font-size:10px;color:#666${pl.qrImage?`;background-image:url('${pl.qrImage.replace(/'/g,"%27")}')`:''}">${pl.qrImage?'':tr('page.qrNone')}</div>
              <input type="file" id="pi-qr-file-${pl.id}" accept="image/*" onchange="handlePaymentQR(this,${pl.id})"/>
              <button type="button" class="btn btn-o btn-s" onclick="clearPaymentQR(${pl.id})">✕</button>
              <input type="hidden" id="pi-qrImage-${pl.id}" value="${esc(pl.qrImage)}"/>
            </div>
          `).join('')}
        </div>
      </div>
      <div style="margin-top:6px"><button class="btn btn-g btn-s" onclick="guardedOnce('paymentinfo',savePaymentInfo)">💾 ${tr('page.savePayDetails')}</button></div>
    </div>

    <div class="stitle" style="font-size:15px">🎁 ${tr('page.rewardsManageTitle')}</div>
    <div style="color:var(--muted);font-size:12px;margin-bottom:8px">${tr('page.rewardsManageIntro')}</div>
    <div class="twrap" style="margin-bottom:10px"><table>
      <thead><tr><th style="width:64px">${tr('page.rewardIcon')}</th><th>${tr('page.rewardName')}</th><th style="width:110px">${tr('page.points')}</th><th></th></tr></thead>
      <tbody>${rewardRows}</tbody></table></div>
    <div class="frow" style="align-items:flex-end;margin-bottom:24px">
      <div class="fg" style="max-width:80px"><label>${tr('page.rewardIcon')}</label><input class="finput" id="rw-new-icon" style="text-align:center;font-size:18px" value="🎁"/></div>
      <div class="fg"><label>${tr('page.rewardName')}</label><input class="finput" id="rw-new-name" placeholder="${tr('page.rewardName')}"/></div>
      <div class="fg" style="max-width:120px"><label>${tr('page.points')}</label><input class="finput" id="rw-new-cost" type="number" min="0" value="100"/></div>
      <div class="fg" style="max-width:160px"><button class="btn btn-o btn-s" onclick="addReward()">➕ ${tr('page.addReward')}</button></div>
    </div>

    <div class="stitle" style="font-size:15px;margin-top:26px">💃 ${tr('page.stylesTitle')}</div>
    <div style="color:var(--muted);font-size:12px;margin-bottom:8px">${tr('page.stylesIntro')}</div>
    <div class="twrap" style="margin-bottom:10px"><table>
      <thead><tr><th>${tr('page.styleName')}</th><th style="width:120px">${tr('page.styleInUse')}</th><th></th></tr></thead>
      <tbody>${styleRows}</tbody></table></div>
    <div class="frow" style="align-items:flex-end;margin-bottom:24px">
      <div class="fg"><label>${tr('page.styleName')}</label><input class="finput" id="st-new-name" placeholder="${tr('page.styleName')}"/></div>
      <div class="fg" style="max-width:160px"><button class="btn btn-o btn-s" onclick="addStyle()">➕ ${tr('page.addStyle')}</button></div>
    </div>

    <div class="stitle" style="font-size:15px;margin-top:26px">🗄️ ${tr('page.database')}</div>
    <div class="role-banner"><div class="ri">🗄️</div><div><div class="rn">${tr('page.dbTitle')}</div><div class="rs">${tr('page.dbIntro')}</div></div></div>
    <div style="display:flex;gap:10px;flex-wrap:wrap;margin-bottom:8px">
      <button class="btn btn-g btn-s" onclick="exportDatabaseCSV()">⬇️ ${tr('page.dbExport')}</button>
      <label class="btn btn-o btn-s" style="cursor:pointer;display:inline-flex;align-items:center">⬆️ ${tr('page.dbImport')}<input type="file" accept=".csv,text/csv" style="display:none" onchange="handleDbFile(this)"/></label>
      ${cloudActive?`<button class="btn btn-o btn-s" onclick="cloudRefresh()">☁️ ${tr('page.dbRefresh')}</button>`:''}
      ${(cloudActive&&session&&session.role==='admin')?`<button class="btn btn-o btn-s" onclick="repairClassDifficulty()">${tr('page.dbFixDifficulty')}</button>`:''}
      ${(cloudActive&&session&&session.role==='admin')?`<button class="btn btn-o btn-s" onclick="repairAdvanceBilling()">${tr('page.dbFixBilling')}</button>`:''}
      <button class="btn btn-d btn-s" onclick="resetDatabase()">♻️ ${tr('page.dbReset')}</button>
    </div>
    <div style="color:var(--muted);font-size:11.5px">${cloudActive?('☁️ '+tr('page.dbCloud')):('💾 '+tr('page.dbAutosave')+(lastCloudError?`<br>⚠️ ${tr('page.dbCloudError')}: ${lastCloudError}`:''))}</div>`;
}
// ── Full student-accounts browser (opened from the Accounts bar preview) ──
function openStudentAccounts(){
  document.getElementById('sacc-title').textContent=tr('page.studentAccounts');
  document.getElementById('sacc-sub').textContent=tr('page.studentAccountsModalIntro');
  document.getElementById('sacc-search').placeholder='🔍 '+tr('common.searchByNameOrId');
  document.getElementById('sacc-fplace-l').textContent=tr('common.filterByFranchise');
  document.getElementById('sacc-fday-l').textContent=tr('common.filterByDay');
  document.getElementById('sacc-h-name').textContent=tr('common.student');
  document.getElementById('sacc-h-user').textContent=tr('common.username');
  document.getElementById('sacc-h-pass').textContent=tr('common.password');
  document.getElementById('sacc-h-changed').textContent=tr('page.passwordChanged');
  document.getElementById('sacc-close').textContent=tr('page.welcomeDone');
  const fp=document.getElementById('sacc-fplace');
  fp.innerHTML=`<option value="all">${tr('common.allFranchises')}</option>`+DB.places.map(pl=>`<option value="${pl.id}">${pl.name}</option>`).join('');
  fp.value=accStudentPlaceFilter;
  const fd=document.getElementById('sacc-fday');
  fd.innerHTML=`<option value="all">${tr('common.allDays')}</option>`+DAYS.map(d=>`<option value="${d}">${tr('common.days.'+d)}</option>`).join('');
  fd.value=accStudentDayFilter;
  renderStudentAccountsModal();
  document.getElementById('m-student-accounts').classList.add('open');
}
function renderStudentAccountsModal(){
  const dash='—';
  const q=(document.getElementById('sacc-search').value||'').trim().toLowerCase();
  accStudentPlaceFilter=document.getElementById('sacc-fplace').value;
  accStudentDayFilter=document.getElementById('sacc-fday').value;
  let students=DB.accounts.filter(a=>a.role==='student');
  if(accStudentPlaceFilter!=='all'){
    const pid=parseInt(accStudentPlaceFilter);
    students=students.filter(a=>{ const s=DB.students.find(x=>x.id===a.ref); return s&&SC(s).some(c=>c.placeId===pid); });
  }
  if(accStudentDayFilter!=='all'){
    students=students.filter(a=>{ const s=DB.students.find(x=>x.id===a.ref); return s&&SC(s).some(c=>c.day===accStudentDayFilter); });
  }
  if(q) students=students.filter(a=>(a.name||'').toLowerCase().includes(q)||String(a.user||'').toLowerCase().includes(q));
  students=students.sort((a,b)=>String(a.user).localeCompare(String(b.user)));
  const rows=students.map(a=>`<tr>
    <td><div class="ncell"><div class="avatar">${ini(a.name)}</div>${a.name}</div></td>
    <td style="font-family:'JetBrains Mono',monospace">${a.user}</td>
    <td><input class="finput" style="margin:0" id="smpass-${a.ref}" value="${String(a.pass).replace(/"/g,'&quot;')}"/></td>
    <td style="color:var(--muted)">${a.pwChanged||dash}</td>
    <td style="display:flex;gap:4px;flex-wrap:wrap"><button class="btn btn-g btn-s" onclick="guardedOnce('acctpass-${a.user}',()=>saveAccountPassword('${a.user}','smpass-${a.ref}'))">${tr('common.save')}</button><button class="btn btn-d btn-s" onclick="deleteAccount('${a.user}')">${tr('common.delete')}</button></td>
  </tr>`).join('')||`<tr><td colspan="5" class="empty">${tr('page.noStudentsFound')}</td></tr>`;
  document.getElementById('sacc-tbody').innerHTML=rows;
}
function saveAccountPassword(user,inputId){
  if(!session||session.role!=='admin') return; // admin can change teacher & student passwords
  const acc=DB.accounts.find(a=>a.user===user);
  if(!acc) return;
  const el=document.getElementById(inputId);
  const np=el?el.value:'';
  if(!np){ toast(tr('msg.nameUserEmpty'),false); return; }
  if(np!==acc.pass) acc.pwChanged=toLocalISODate(new Date());
  acc.pass=np;
  toast(tr('msg.accountUpdated'));
  renderAccounts();
  const macc=document.getElementById('m-student-accounts');
  if(macc&&macc.classList.contains('open')) renderStudentAccountsModal();
}
function saveCounterAccount(oldUser,placeId){
  if(!session||session.role!=='admin') return;
  const acc=DB.accounts.find(a=>a.user===oldUser&&a.role==='counter');
  if(!acc) return;
  const nu=document.getElementById('cacc-user-'+placeId).value.trim();
  const np=document.getElementById('cacc-pass-'+placeId).value;
  if(!nu||!np){ toast(tr('msg.nameUserEmpty'),false); return; }
  if(nu!==acc.user&&DB.accounts.find(a=>a.user===nu)){ toast(tr('msg.userTaken'),false); return; }
  if(np!==acc.pass) acc.pwChanged=toLocalISODate(new Date());
  acc.user=nu; acc.pass=np;
  toast(tr('msg.accountUpdated'));
  renderAccounts();
}
function deleteAccount(user){
  if(!session||session.role!=='admin') return;
  const acc=DB.accounts.find(a=>a.user===user);
  if(!acc) return;
  askConfirm(tr('msg.confirmDeleteAccount'),async()=>{
    DB.accounts=DB.accounts.filter(a=>a.user!==user);
    // a deleted student login must stay deleted (don't let ensureStudentLogins recreate it)
    if(acc.role==='student'){ if(!DB.suppressedStudentRefs) DB.suppressedStudentRefs=[]; if(!DB.suppressedStudentRefs.includes(acc.ref)) DB.suppressedStudentRefs.push(acc.ref); }
    if(acc.role==='teacher'){ if(!DB.suppressedTeacherRefs) DB.suppressedTeacherRefs=[]; if(!DB.suppressedTeacherRefs.includes(acc.ref)) DB.suppressedTeacherRefs.push(acc.ref); }
    if(!await commitSave()) return; // a login that is only deleted on this device is still a working login everywhere else
    toast(tr('msg.accountDeleted'));
    renderAccounts();
    const macc=document.getElementById('m-student-accounts');
    if(macc&&macc.classList.contains('open')) renderStudentAccountsModal();
  });
}

async function savePaymentInfo(){
  if(!session||session.role!=='admin') return;
  if(!DB.paymentInfo||typeof DB.paymentInfo!=='object') DB.paymentInfo={};
  const g=id=>{ const el=document.getElementById(id); return el?el.value.trim():''; };
  DB.paymentInfo.bankName=g('pi-bankName');
  DB.paymentInfo.accountName=g('pi-accountName');
  DB.paymentInfo.accountNumber=g('pi-accountNumber');
  DB.paymentInfo.duitnow=g('pi-duitnow');
  DB.paymentInfo.tngName=g('pi-tngName');
  DB.paymentInfo.tngNumber=g('pi-tngNumber');
  const oldQrImages=DB.places.map(pl=>pl.qrImage||'').filter(Boolean);
  DB.places.forEach(pl=>{ const el=document.getElementById('pi-qrImage-'+pl.id); if(el) pl.qrImage=el.value; });
  if(!await commitSave()) return;
  oldQrImages.forEach(dropOrphanMedia);
  toast(tr('msg.payDetailsSaved'));
  renderAccounts();
}
async function saveRewardRow(id){
  if(!session||session.role!=='admin') return;
  ensureRewards();
  const r=DB.rewards.find(x=>x.id===id); if(!r) return;
  const iconEl=document.getElementById('rw-icon-'+id), nameEl=document.getElementById('rw-name-'+id), costEl=document.getElementById('rw-cost-'+id);
  if(iconEl) r.icon=iconEl.value.trim()||'🎁';
  if(nameEl){ const typed=nameEl.value.trim(); if(typed&&typed!==rewardName(r)){ r.name=typed; delete r.key; } }
  if(costEl){ const c=parseInt(costEl.value,10); r.cost=(isNaN(c)||c<0)?0:c; }
  if(!await commitSave()) return;
  toast(tr('msg.rewardSaved'));
  renderAccounts();
}
function deleteReward(id){
  if(!session||session.role!=='admin') return;
  askConfirm(tr('msg.confirmDeleteReward'),async()=>{
    ensureRewards();
    DB.rewards=DB.rewards.filter(x=>x.id!==id);
    if(!await commitSave()) return;
    toast(tr('msg.rewardDeleted'));
    renderAccounts();
  });
}
async function addReward(){
  if(!session||session.role!=='admin') return;
  ensureRewards();
  const iconEl=document.getElementById('rw-new-icon'), nameEl=document.getElementById('rw-new-name'), costEl=document.getElementById('rw-new-cost');
  const icon=(iconEl&&iconEl.value.trim())||'🎁';
  const name=nameEl?nameEl.value.trim():'';
  const c=costEl?parseInt(costEl.value,10):NaN;
  const cost=(isNaN(c)||c<0)?0:c;
  if(!name){ toast(tr('msg.nameUserEmpty'),false); return; }
  DB.rewards.push({id:'rw'+Date.now(),icon,name,cost});
  if(!await commitSave()) return;
  toast(tr('msg.rewardAdded'));
  renderAccounts();
}

// ── Dance Styles manager (admin only) ───────────────────────────────────────────────────────────
// Styles are plain strings shared by classes (c.style), teacher specialities (t.specs[]) and student
// grades (s.styleGrades keys). Add is trivial; Rename cascades the new name across all three so nothing
// is orphaned; Delete is blocked while any class still uses the style, then clears leftover references.
async function addStyle(){
  if(!session||session.role!=='admin') return;
  ensureStyles();
  const el=document.getElementById('st-new-name');
  const name=el?el.value.trim():'';
  if(!name){ toast(tr('msg.styleNameNeeded'),false); return; }
  if(DB.styles.some(s=>s.toLowerCase()===name.toLowerCase())){ toast(tr('msg.styleExists'),false); return; }
  DB.styles.push(name);
  if(!await commitSave()) return;
  toast(tr('msg.styleAdded'));
  renderAccounts();
}
async function saveStyleRow(i){
  if(!session||session.role!=='admin') return;
  ensureStyles();
  const old=DB.styles[i]; if(old==null) return;
  const el=document.getElementById('st-name-'+i);
  const name=el?el.value.trim():'';
  if(!name){ toast(tr('msg.styleNameNeeded'),false); return; }
  if(name===old){ toast(tr('msg.styleSaved')); return; }
  if(DB.styles.some((s,idx)=>idx!==i&&s.toLowerCase()===name.toLowerCase())){ toast(tr('msg.styleExists'),false); return; }
  DB.styles[i]=name;
  DB.classes.forEach(c=>{ if(c.style===old) c.style=name; });
  DB.teachers.forEach(t=>{ if(Array.isArray(t.specs)) t.specs=t.specs.map(x=>x===old?name:x); });
  DB.students.forEach(s=>{ if(s.styleGrades&&Object.prototype.hasOwnProperty.call(s.styleGrades,old)){ if(!(name in s.styleGrades)) s.styleGrades[name]=s.styleGrades[old]; delete s.styleGrades[old]; } });
  if(!await commitSave()) return;
  toast(tr('msg.styleSaved'));
  renderAccounts();
}
function deleteStyle(i){
  if(!session||session.role!=='admin') return;
  ensureStyles();
  const name=DB.styles[i]; if(name==null) return;
  const used=DB.classes.filter(c=>c.style===name).length;
  if(used>0){ toast(tr('msg.styleInUse').replace('{n}',used),false); return; }
  askConfirm(tr('msg.confirmDeleteStyle').replace('{s}',name),async()=>{
    ensureStyles();
    const j=DB.styles.indexOf(name); if(j===-1) return; // re-find in case the list shifted
    DB.styles.splice(j,1);
    DB.teachers.forEach(t=>{ if(Array.isArray(t.specs)) t.specs=t.specs.filter(x=>x!==name); });
    DB.students.forEach(s=>{ if(s.styleGrades&&Object.prototype.hasOwnProperty.call(s.styleGrades,name)) delete s.styleGrades[name]; });
    if(!await commitSave()) return;
    toast(tr('msg.styleDeleted'));
    renderAccounts();
  });
}

let pendingConfirmAction=null;
let pendingConfirmCancel=null;
// opts (all optional): {label: confirm-button text, danger: false for a neutral (non-destructive)
// green button instead of the default red "Delete" styling, onCancel: run if the counter backs out}
// — every pre-existing 2-arg call site keeps behaving exactly as before (red "Delete" button).
function askConfirm(msg,onYes,opts){
  opts=opts||{};
  pendingConfirmAction=onYes;
  pendingConfirmCancel=opts.onCancel||null;
  document.getElementById('confirm-msg').textContent=msg;
  const btn=document.getElementById('confirm-yes-btn');
  btn.textContent=opts.label||'Delete'; // unchanged default — matches every pre-existing call site exactly
  btn.className='btn '+(opts.danger===false?'btn-g':'btn-d');
  document.getElementById('m-confirm').classList.add('open');
}
function runPendingConfirm(){
  const action=pendingConfirmAction;
  pendingConfirmAction=null; pendingConfirmCancel=null;
  document.getElementById('m-confirm').classList.remove('open');
  if(action) action();
}
function cancelPendingConfirm(){
  const onCancel=pendingConfirmCancel;
  pendingConfirmAction=null; pendingConfirmCancel=null;
  closeM('m-confirm');
  if(onCancel) onCancel();
}
function delItem(arr,id,render){
  askConfirm(tr('msg.confirmDelete'),()=>{
    DB[arr]=DB[arr].filter(x=>x.id!==id);
    toast(tr('msg.deleted'));
    render();
  });
}

// ══════════ DATABASE BRIDGE — connect database_all.csv with the app (import / export / persist) ══════════
const DB_TABLES=['places','accounts','paymentInfo','teachers','classes','students','payments','attendance','creditUsages'];
const NUMERIC_COLS=new Set(['id','age','fee','max','salary','teacherId','classId','studentId','placeId','ref','amount','creditPkg','billCycle','credits','grade']);
const BOOL_COLS=new Set(['extra','single','paidByCredit','credit','allDay']);
const LS_KEY='bdance_db_v1';

function csvEscape(v){ const s=(v===null||v===undefined)?'':String(v); return /[",\n]/.test(s)?'"'+s.replace(/"/g,'""')+'"':s; }
function cellStr(v){ if(v===null||v===undefined) return ''; if(typeof v==='object') return JSON.stringify(v); return String(v); }
function dbToCombinedCSV(){
  const rows=[]; const cols=['_table'];
  DB_TABLES.forEach(t=>{ const v=DB[t]; const items=Array.isArray(v)?v:(v&&typeof v==='object'?[v]:[]);
    items.forEach(row=>{ rows.push([t,row]); Object.keys(row).forEach(k=>{ if(!cols.includes(k)) cols.push(k); }); }); });
  const lines=[cols.map(csvEscape).join(',')];
  rows.forEach(([t,row])=>lines.push(cols.map(c=> c==='_table'?csvEscape(t):(c in row?csvEscape(cellStr(row[c])):'')).join(',')));
  return lines.join('\n');
}
function parseCSV(text){
  const rows=[]; let field='',row=[],i=0,q=false; text=text.replace(/\r\n/g,'\n').replace(/\r/g,'\n');
  while(i<text.length){ const ch=text[i];
    if(q){ if(ch==='"'){ if(text[i+1]==='"'){ field+='"'; i+=2; continue; } q=false; i++; continue; } field+=ch; i++; continue; }
    if(ch==='"'){ q=true; i++; continue; }
    if(ch===','){ row.push(field); field=''; i++; continue; }
    if(ch==='\n'){ row.push(field); rows.push(row); row=[]; field=''; i++; continue; }
    field+=ch; i++; }
  if(field.length||row.length){ row.push(field); rows.push(row); }
  return rows;
}
function coerce(col,val){
  if(val===undefined||val==='') return undefined;
  const t=val.trim();
  if(t.startsWith('[')||t.startsWith('{')){ try{ return JSON.parse(t); }catch(e){} }
  if(NUMERIC_COLS.has(col)&&/^-?\d+(\.\d+)?$/.test(t)) return Number(t);
  if(BOOL_COLS.has(col)){ if(t==='true') return true; if(t==='false') return false; }
  return val;
}
function combinedCSVtoDB(text){
  const rows=parseCSV(text).filter(r=>r.length&&r.some(c=>c!==''));
  if(!rows.length) throw new Error('empty');
  const header=rows[0], ti=header.indexOf('_table');
  if(ti<0) throw new Error('no _table column');
  const grouped={};
  for(let r=1;r<rows.length;r++){ const cells=rows[r]; const table=cells[ti]; if(!table) continue;
    const obj={}; header.forEach((col,ci)=>{ if(col==='_table') return; const v=coerce(col,cells[ci]); if(v!==undefined) obj[col]=v; });
    // A blank spreadsheet cell makes coerce() return undefined, so the key above is simply never set
    // on `obj` — fine for most fields (an admin genuinely clearing an optional value), but classes'
    // `difficulty` has no such thing as a legitimate blank: every class always has a real level. A
    // missing key here survives all the way to the next whole-database save (api/db.js's
    // toRowFull()), which writes an explicit NULL into the real column for every class the import
    // touched — silently erasing a value that was correct moments before, for potentially the whole
    // schedule at once if a blank/old export gets re-imported. Stamp it here, at the one place this
    // specific loss can start, instead of only relying on the server-side backstop to catch it later.
    if(table==='classes'&&(obj.difficulty===undefined||obj.difficulty==='')) obj.difficulty='All Levels';
    (grouped[table]=grouped[table]||[]).push(obj); }
  const newDB={};
  DB_TABLES.forEach(t=>{ if(t==='paymentInfo') newDB[t]=(grouped[t]&&grouped[t][0])||DB.paymentInfo||{}; else newDB[t]=grouped[t]||[]; });
  Object.keys(grouped).forEach(t=>{ if(!(t in newDB)) newDB[t]=grouped[t]; });
  return newDB;
}
function recomputeNid(){ ['teachers','classes','students','payments','attendance','creditUsages'].forEach(t=>{ const arr=DB[t]||[]; nid[t]=arr.reduce((m,x)=>Math.max(m,(typeof x.id==='number'?x.id:0)),0)+1; }); }
function applyDB(newDB){ Object.keys(newDB).forEach(k=>{ DB[k]=newDB[k]; }); recomputeNid(); saveDB(); }

function stampPaymentTeachers(){
  // attach each payment's teacher (from its class) so it shows in the payment database / CSV / Supabase
  DB.payments.forEach(p=>{
    if(p.classId){ const c=C(p.classId); if(c){ p.teacherId=c.teacherId; p.teacherName=(T(c.teacherId)||{}).name||''; } }
  });
}
const PENDING_SYNC_KEY='bdance_pending_sync';
function saveDB(){ try{ stampPaymentTeachers(); localStorage.setItem(LS_KEY,JSON.stringify({db:DB,nid,ts:Date.now()})); try{ localStorage.setItem(PENDING_SYNC_KEY,'1'); }catch(e){} return true; }catch(e){ return false; } }
function loadDB(){ try{ const raw=localStorage.getItem(LS_KEY); if(!raw) return false; const p=JSON.parse(raw); if(!p||!p.db) return false;
  if(!Array.isArray(p.db.accounts)||p.db.accounts.length===0) return false;
  Object.keys(p.db).forEach(k=>{ DB[k]=p.db[k]; }); if(p.nid) Object.keys(p.nid).forEach(k=>{ nid[k]=p.nid[k]; }); recomputeNid(); return true; }catch(e){ return false; } }
function clearDB(){ try{ localStorage.removeItem(LS_KEY); }catch(e){} }
try{ window.addEventListener('beforeunload',saveDB); }catch(e){}
window.addEventListener('scroll',()=>{ const btt=document.getElementById('back-to-top'); if(btt) btt.classList.toggle('show',window.scrollY>480); },{passive:true});

function downloadFile(name,text,mime){ const blob=new Blob([text],{type:mime||'text/csv;charset=utf-8'}); const url=URL.createObjectURL(blob);
  const a=document.createElement('a'); a.href=url; a.download=name; document.body.appendChild(a); a.click();
  setTimeout(()=>{ document.body.removeChild(a); URL.revokeObjectURL(url); },100); }
function exportDatabaseCSV(){ ensureStudentExtras(); stampPaymentTeachers(); downloadFile('database_all.csv',dbToCombinedCSV()); toast(tr('msg.dbExported')); }
// The combined CSV above is what Import/Export round-trips as a backup (see combinedCSVtoDB()) — it
// HAS to stay one flat file with a _table column for that to keep working. But opened in Sheets/Excel
// it's one giant tab with every table's columns unioned together and mostly blank cells, which is what
// this exists to fix: same DB_TABLES, same data, but each table gets its own worksheet tab (a
// "students" tab, a "payments" tab, etc.) — nothing to reconcile by eye, just open the tab you want.
// Not read back in anywhere, so its layout is free to be whatever's most readable.
function exportDatabaseXLSX(){
  if(typeof XLSX==='undefined'){
    toast(currentLang==='zh'?'⚠️ Excel 导出功能仍在加载，请稍等几秒后重试（需要网络连接）':'⚠️ Excel export is still loading — try again in a few seconds (needs an internet connection)',false);
    return;
  }
  ensureStudentExtras(); stampPaymentTeachers();
  const wb=XLSX.utils.book_new();
  DB_TABLES.forEach(t=>{
    const v=DB[t];
    const items=Array.isArray(v)?v:(v&&typeof v==='object'?[v]:[]);
    // json_to_sheet writes each object's own keys as columns — a nested value (e.g. a student's
    // classIds array) would otherwise come out as "[object Object]", so flatten those to JSON text first.
    const rows=items.map(row=>{
      const flat={};
      Object.keys(row).forEach(k=>{ const val=row[k]; flat[k]=(val!==null&&typeof val==='object')?JSON.stringify(val):val; });
      return flat;
    });
    const ws=rows.length?XLSX.utils.json_to_sheet(rows):XLSX.utils.aoa_to_sheet([[]]);
    XLSX.utils.book_append_sheet(wb,ws,t.slice(0,31)); // Excel caps sheet names at 31 chars — every table name here is well under that
  });
  XLSX.writeFile(wb,'database_all.xlsx');
  toast(tr('msg.dbExported'));
}
function importDatabaseCSVText(text){
  try{ applyDB(combinedCSVtoDB(text)); ensureStudentExtras(); toast(tr('msg.dbImported'));
    if(session&&currentPageId) showPage(currentPageId); else renderSiteScreen(); }
  catch(e){ toast(tr('msg.dbImportFail'),false); }
}
function handleDbFile(input){ const f=input.files&&input.files[0]; if(!f) return; const rd=new FileReader();
  rd.onload=e=>{ importDatabaseCSVText(String(e.target.result)); input.value=''; }; rd.readAsText(f); }
function resetDatabase(){ askConfirm(tr('msg.confirmReset'),()=>{ clearDB(); location.reload(); }); }

// ── Shared cloud database (Airtable via the Netlify function) — falls back to this browser when offline/standalone ──
const CLOUD_URL='/api/db';
const CLOUD_TIMEOUT_MS=10000; // a "network too slow" connection must fail this loud+fast, not hang forever
let cloudActive=false, lastCloudPush='', lastCloudError='';
// ── Stale-tab detector ──────────────────────────────────────────────────────────────────────────
// A tab that's been open since before the last deploy keeps running its OLD in-memory JS forever —
// nothing about a normal page load re-checks that, and this app has no build step to stamp a version
// number into. That's not just "missing a nice-to-have banner": it's how an already-fixed bug (e.g.
// the 2026-08-19 class-difficulty-reverts-to-null fix in _cloudSaveInner()) can keep silently
// recurring on a front-desk device that's been left open for days, even though the deployed code is
// correct — the browser tab itself is the thing still running the buggy version. `/index.html` is
// served with `Cache-Control: public, max-age=0, must-revalidate` (see vercel.json), so Vercel's CDN
// always sends a fresh ETag/Last-Modified on every request — comparing that against what THIS tab
// booted with is a reliable, zero-infrastructure way to detect "a newer deploy exists."
let appVersionTag=null, updateAvailable=false;
async function fetchAppVersionTag(){
  try{
    const r=await fetch('/index.html',{method:'HEAD',cache:'no-store'});
    if(!r.ok) return null;
    return r.headers.get('etag')||r.headers.get('last-modified')||null;
  }catch(e){ return null; }
}
function showUpdateBanner(){
  if(updateAvailable) return; // already showing — no need to touch the DOM again every poll
  updateAvailable=true;
  const bar=document.getElementById('update-banner');
  if(bar) bar.style.display='block';
}
// What we last knew was actually on the cloud (our last successful pull OR push). Used as the
// "base" side of the 3-way merge in cloudSave() below — see the comment there for why this matters
// with several counters/teachers/admin all editing at once.
let lastSyncedDB=null;
async function fetchWithTimeout(url,opts){
  const ctrl=new AbortController();
  const timer=setTimeout(()=>ctrl.abort(),CLOUD_TIMEOUT_MS);
  try{ return await fetch(url,{...opts,signal:ctrl.signal}); }
  finally{ clearTimeout(timer); }
}
// ── 3-way merge: reconciles OUR local edits with whatever changed on the cloud since our last sync,
// instead of a save from one device blindly overwriting a save made moments earlier by someone else.
// base   = what we last knew was on the cloud (our last successful pull/push)
// local  = our in-memory DB right now (may include edits made since base)
// remote = what's actually on the cloud right now (may include edits pushed by someone else since base)
const ID_TABLES=['places','teachers','classes','students','payments','attendance','creditUsages','rewards'];
// Per-FIELD 3-way merge for a single record (a teacher, a student, ...) — same rule mergeDB() applies
// across a whole table, just applied to the keys inside one record. Without this, mergeArrayByKey()
// used to treat "this record changed locally" as "push the WHOLE local record, every field" — so
// editing just one field (e.g. a teacher's specialties) on a browser tab whose in-memory copy of some
// OTHER field (e.g. photo) was stale or blank would silently overwrite that field on the cloud too,
// with no error, because as far as the save was concerned it succeeded. That's exactly how a routine,
// unrelated edit erased every teacher's photo at once. Merging field-by-field means an edit to one
// field can never carry a stale value on some other, untouched field along with it.
function mergeRecordFields(baseItem,localItem,remoteItem){
  const b=baseItem||{}, l=localItem||{}, r=remoteItem||{};
  const out={};
  new Set([...Object.keys(b),...Object.keys(l),...Object.keys(r)]).forEach(k=>{
    const bV=b[k], lV=l[k], rV=r[k];
    out[k]=(JSON.stringify(lV)!==JSON.stringify(bV))?lV:(rV!==undefined?rV:lV);
  });
  return out;
}
function mergeArrayByKey(base,local,remote,keyFn){
  base=Array.isArray(base)?base:[]; local=Array.isArray(local)?local:[]; remote=Array.isArray(remote)?remote:[];
  const toMap=arr=>{ const m=new Map(); arr.forEach(x=>{ if(x!=null) m.set(keyFn(x),x); }); return m; };
  const b=toMap(base), l=toMap(local), r=toMap(remote);
  const keys=new Set([...b.keys(),...l.keys(),...r.keys()]);
  const content=new Map();
  keys.forEach(k=>{
    if(l.has(k)){
      const localItem=l.get(k);
      if(!b.has(k)){
        content.set(k,localItem); // brand new locally this session — nothing to diff against, keep as-is
      }else if(JSON.stringify(localItem)!==JSON.stringify(b.get(k))){
        // changed locally — merge field-by-field against remote rather than pushing the whole record,
        // so this edit can't silently drag a stale/blank OTHER field along with it (see note above)
        content.set(k, r.has(k)?mergeRecordFields(b.get(k),localItem,r.get(k)):localItem);
      }
      else if(r.has(k)) content.set(k,r.get(k)); // unchanged by us — take whatever's on the cloud now
      // else: unchanged by us AND gone from the cloud → someone else deleted it, drop it
    }else if(b.has(k)){
      // it was in our baseline but we don't have it any more → we deleted it locally, honor that
    }else if(r.has(k)){
      content.set(k,r.get(k)); // brand new on the cloud, we never had it → keep it
    }
  });
  // The block above resolves each RECORD correctly, but says nothing about array ORDER — a plain
  // reorder (e.g. dragging instructors into a new sequence) never changes any record's own fields, so
  // it's invisible to that logic. Figure out separately whether local or remote actually changed the
  // relative order of the ids both sides still agree exist, and use whichever side did. Neither
  // reordering → keep base's order, exactly as before.
  const seqOf=arr=>arr.map(keyFn);
  const reordered=(baseSeq,otherSeq)=>{
    const otherSet=new Set(otherSeq), baseSet=new Set(baseSeq);
    const a=baseSeq.filter(k=>otherSet.has(k));
    const c=otherSeq.filter(k=>baseSet.has(k));
    return JSON.stringify(a)!==JSON.stringify(c);
  };
  const baseSeq=seqOf(base), localSeq=seqOf(local), remoteSeq=seqOf(remote);
  const orderSeq=reordered(baseSeq,localSeq)?localSeq:(reordered(baseSeq,remoteSeq)?remoteSeq:baseSeq);
  const out=[]; const used=new Set();
  orderSeq.forEach(k=>{ if(content.has(k)&&!used.has(k)){ out.push(content.get(k)); used.add(k); } });
  content.forEach((v,k)=>{ if(!used.has(k)) out.push(v); }); // anything the chosen order didn't mention (e.g. brand new on the other side)
  return out;
}
function mergePrimitiveArray(base,local,remote){
  base=Array.isArray(base)?base:[]; local=Array.isArray(local)?local:[]; remote=Array.isArray(remote)?remote:[];
  const bS=new Set(base), lS=new Set(local), rS=new Set(remote);
  const out=[];
  new Set([...bS,...lS,...rS]).forEach(v=>{
    if(lS.has(v)&&!bS.has(v)) out.push(v);            // added locally
    else if(lS.has(v)&&bS.has(v)&&rS.has(v)) out.push(v); // unchanged, still present remotely
    else if(!lS.has(v)&&bS.has(v)){ /* removed locally — honor */ }
    else if(!lS.has(v)&&!bS.has(v)&&rS.has(v)) out.push(v); // added remotely
  });
  return out;
}
function mergeDB(base,local,remote){
  base=base||{}; local=local||{}; remote=remote||{};
  const out={};
  new Set([...Object.keys(base),...Object.keys(local),...Object.keys(remote)]).forEach(k=>{
    const bV=base[k], lV=local[k], rV=remote[k];
    if(k==='accounts'){ out[k]=mergeArrayByKey(bV,lV,rV,x=>x.user); return; }
    if(ID_TABLES.includes(k)){ out[k]=mergeArrayByKey(bV,lV,rV,x=>x.id); return; }
    if(Array.isArray(lV)&&(!lV.length||typeof lV[0]!=='object')){ out[k]=mergePrimitiveArray(bV,lV,rV); return; }
    // plain object or unrecognized shape — whole-value: local wins only if it actually changed since base
    out[k]=(JSON.stringify(lV)!==JSON.stringify(bV))?lV:(rV!==undefined?rV:lV);
  });
  return out;
}
// Checks whether every record WE hold locally (in each id-keyed table, plus accounts) is already
// present in a fresh copy pulled from the server — used by verifyPushLanded() in _cloudSaveInner
// below to recover from a save that LOOKS like it failed client-side (a timeout, a dropped
// connection, or a non-ok HTTP response) but may well have actually written through. On Vercel, a
// function invocation is not necessarily killed just because the browser's fetch stopped waiting for
// it — it can keep running and finish writing to Supabase after CLOUD_TIMEOUT_MS has already elapsed
// here. Without this check, that race shows the counter a false "Could not save" (and the caller
// rolls back the student/payment/login it just added) even though the record is sitting in Supabase
// correctly — exactly the report that motivated adding this. Deliberately lenient: it only confirms
// EXISTENCE of each record we have, not byte-for-byte equality, since another device's concurrent
// edit to some unrelated field of the same record is not evidence that OUR write failed.
function remoteHasOurWrites(remoteDb,localDb){
  if(!remoteDb||!localDb) return false;
  for(const k of [...ID_TABLES,'accounts']){
    const localArr=Array.isArray(localDb[k])?localDb[k]:[];
    if(!localArr.length) continue;
    const remoteArr=Array.isArray(remoteDb[k])?remoteDb[k]:[];
    const keyFn=k==='accounts'?(x=>x&&x.user):(x=>x&&x.id);
    const remoteKeys=new Set(remoteArr.filter(x=>x!=null).map(keyFn));
    for(const item of localArr){
      if(item==null) continue;
      if(!remoteKeys.has(keyFn(item))) return false;
    }
  }
  return true;
}
async function _cloudLoadInner(){
  // The very first network call on every page load — including this public intro page, often the
  // first hit of the day — so the most likely of any call to land on a cold cloud function. A single
  // attempt with no retry showed "No internet connection" even on a fine connection, purely because
  // the function hadn't woken up yet. Retry once, same as requireConnection(), before declaring offline.
  const timeouts=[CLOUD_TIMEOUT_MS,6000];
  for(let i=0;i<timeouts.length;i++){
    try{
      const ctrl=new AbortController();
      const timer=setTimeout(()=>ctrl.abort(),timeouts[i]);
      const r=await fetch(CLOUD_URL,{method:'GET',signal:ctrl.signal,headers:sessionToken?{'Authorization':'Bearer '+sessionToken}:{}});
      clearTimeout(timer);
      if(!r.ok){
        let t=''; try{ t=(await r.text()||'').slice(0,220); }catch(e){}
        lastCloudError='HTTP '+r.status+(t?' — '+t:'');
        if(i<timeouts.length-1) continue; // try again before giving up
        setConnectionState(false); return false;
      }
      const j=await r.json();
      if(j&&j.error){
        lastCloudError=String(j.error);
        if(i<timeouts.length-1) continue;
        setConnectionState(false); return false;
      }
      setConnectionState(true); lastCloudError='';
      if(j&&j.data){
        const parsed=JSON.parse(j.data);
        if(parsed&&parsed.db){
          // ── Public (signed-out) response ──────────────────────────────
          // This is only the landing-page content — no students, payments or accounts. It must NEVER
          // become lastSyncedDB: that value is the baseline a later 3-way merge treats as "everything
          // that existed", so seeding it from a partial snapshot would make the next save look like a
          // deliberate deletion of every record it doesn't contain. Copy the keys in so the page can
          // draw, flag the state as incomplete, and leave the sync machinery untouched.
          if(j.scope==='public'){
            dbIsPublicOnly=true;
            Object.keys(parsed.db).forEach(k=>{ DB[k]=parsed.db[k]; });
            setConnectionState(true); lastCloudError='';
            return true;
          }
          dbIsPublicOnly=false;
          // A pull must NEVER silently destroy local edits that haven't been pushed yet. If this device
          // has unsynced changes (its state differs from the last thing we successfully pushed), MERGE the
          // cloud copy in — exactly like a save does — instead of overwriting. Overwriting here was how
          // freshly-entered data could vanish and an older cloud snapshot "come back" after a manual
          // Refresh or a reload that pulled before the new data had a chance to sync.
          const localPayload=JSON.stringify({db:DB,nid});
          const hasUnsynced=(lastCloudPush!=='' && localPayload!==lastCloudPush);
          if(hasUnsynced && lastSyncedDB){
            const merged=mergeDB(lastSyncedDB.db,DB,parsed.db);
            Object.keys(merged).forEach(k=>{ DB[k]=merged[k]; });
            if(parsed.nid) Object.keys(parsed.nid).forEach(k=>{ if(!nid[k]||nid[k]<parsed.nid[k]) nid[k]=parsed.nid[k]; });
            recomputeNid();
            try{ localStorage.setItem(PENDING_SYNC_KEY,'1'); }catch(e){} // keep the merged-in local edits queued to push on the next save
            return true; // baseline stays as the last synced state; the next cloudSave pushes the merged result
          }
          // no unsynced local edits on this device — safe to take the cloud copy verbatim
          Object.keys(parsed.db).forEach(k=>{ DB[k]=parsed.db[k]; });
          if(parsed.nid) Object.keys(parsed.nid).forEach(k=>{ nid[k]=parsed.nid[k]; });
          recomputeNid();
          lastCloudPush=JSON.stringify({db:DB,nid});
          lastSyncedDB=JSON.parse(lastCloudPush); // this is now our known-good baseline for future merges
          return true;
        }
      }
      // cloud reachable but empty → seed it with the current (default) data
      lastCloudPush=''; lastSyncedDB=null; _cloudSaveInner();
      return true;
    }catch(e){
      lastCloudError=e&&e.name==='AbortError'?'Request timed out — network too slow':String(e&&e.message||e);
      if(i<timeouts.length-1) continue; // timed out or failed — fall through and try once more
      setConnectionState(false); return false;
    }
  }
  setConnectionState(false); return false;
}
// Always ATTEMPTS the push (never gated on a stale cloudActive flag) so a connection that comes back
// after being offline is picked up automatically on the very next autosave tick, with no reload needed.
// Vercel caps a function REQUEST/RESPONSE BODY at 4.5MB (this app runs on Vercel now — see api/db.js;
// the old 6MB figure here was a leftover from when it ran on Netlify, which had a looser cap. Past
// this limit Vercel rejects the call itself, before db.js ever runs, with a real HTTP 413 — that's a
// server error, not a dropped connection, but the previous 6MB guard let a 4.5–6MB payload sail past
// this check and hit the platform wall anyway, with no friendly warning and no way to recover short
// of shrinking the data. Set a bit under the real cap for headroom.
const CLOUD_BODY_LIMIT=4.4*1024*1024;
// Remembers the last local snapshot that was too big to save, so the 4s autosave (below) doesn't
// hammer Vercel with the exact same doomed request forever — it only retries once the data actually
// changes. Cleared on a successful save.
let lastTooLargePayload=null;
async function _cloudSaveInner(){
  // Captured during the pull-and-merge step below (the `baseline` used there), then read again by
  // verifyPushLanded() after a failed/ambiguous POST response — see the comment on
  // changedRecordsMatchRemote() further down for what this is actually for.
  let baselineForVerify=null;
  try{
    // Nobody signed in — there is nothing to save, and the intro page never edits anything. Without
    // this the background autosave kept firing a staff-only request from the sign-in screen, got
    // refused, and popped "Session expired" at someone who hadn't even signed in yet.
    if(!session){ if(!cloudActive) setConnectionState(true); return true; }
    // Belt and braces on top of the check above: never push a partial snapshot, whatever the session
    // says. Reaching here with only landing-page data would mean pushing a database with no students.
    if(dbIsPublicOnly){ if(!cloudActive) setConnectionState(true); return true; }
    // A student never pushes the whole database — their own changes (reward redemptions, birthday
    // claims, profile edits) go through updateStudentRecord(), which the server scopes to their own
    // record. Without this, the background autosave would keep firing a staff-only request every few
    // seconds and be refused, painting the screen with a connection error that isn't real.
    if(session.role==='student'){ if(!cloudActive) setConnectionState(true); return true; }
    // A real studio always has at least one account (admin, at minimum). An empty accounts array can
    // only mean the in-memory copy this browser is holding is broken — never Supabase's actual state
    // being intentionally wiped to nothing. Refuse to push it rather than overwrite every login on
    // record with a save that's obviously corrupt.
    if(!Array.isArray(DB.accounts)||DB.accounts.length===0){
      lastCloudError='Refused to save: no accounts in memory — reload and sign in again before making changes.';
      return false;
    }
    stampPaymentTeachers();
    const localPayload=JSON.stringify({db:DB,nid});
    if(localPayload===lastCloudPush){ if(!cloudActive) setConnectionState(true); return true; } // nothing changed since last successful push
    // This exact snapshot already failed for being too big, and nothing has changed since — skip the
    // pull-and-merge round trip and the doomed-to-fail push instead of retrying every 4s forever.
    // Reverting or replacing the oversized field (a photo, a poster) changes localPayload and lifts this.
    if(localPayload===lastTooLargePayload) return false;
    // With an admin, several branch counters and multiple teachers all in this database at once,
    // a plain "push our whole snapshot" can silently erase someone else's save made moments earlier
    // if we haven't reloaded since. So right before pushing, pull the freshest cloud copy and
    // 3-way merge it against our last-known baseline — combining the two instead of one clobbering
    // the other. Retry the pull like every other cloud call in the app (a cold function is not proof
    // of being offline) — and if it genuinely never succeeds, ABORT rather than fall through to
    // pushing the unmerged local snapshot: that used to "save anyway", but a push with no merge is a
    // blind overwrite of the shared database, silently erasing anything anyone else added since our
    // last sync. Failing this save (the counter can just retry) is far safer than that.
    let mergePulled=false;
    let removedIds={};
    const pullTimeouts=[CLOUD_TIMEOUT_MS,6000];
    for(let pi=0;pi<pullTimeouts.length&&!mergePulled;pi++){
      try{
        const ctrl=new AbortController();
        const timer=setTimeout(()=>ctrl.abort(),pullTimeouts[pi]);
        // '?fresh=1' — this pull feeds the 3-way merge below, whose whole job is to decide what's
        // "unchanged since our baseline" vs "someone else's edit." A cached (up to 1h stale) config
        // snapshot here would make a class/teacher/place edited directly in Supabase look unchanged,
        // and the merge would then push that stale value right back over the real one — silently
        // reverting a real edit, not just delaying its display. See db.js's getConfigGroup() comment.
        const rr=await fetch(CLOUD_URL+'?fresh=1',{method:'GET',signal:ctrl.signal,headers:sessionToken?{'Authorization':'Bearer '+sessionToken}:{}});
        clearTimeout(timer);
        if(rr.ok){
          const jj=await rr.json();
          if(jj&&jj.data){
            const remote=JSON.parse(jj.data);
            if(remote&&remote.db){
              const baseline=lastSyncedDB||remote;
              baselineForVerify=baseline;
              const mergedDb=mergeDB(baseline.db,DB,remote.db);
              // The merge treats "in the cloud but missing from what's in memory here" as an intentional
              // deletion — usually right (a counter deleted a student, it should stay deleted), but if
              // this browser's memory is wrong for any reason, that same rule would carry the wrongness
              // through as a mass deletion. A whole table going from real data to nothing in one save is
              // never a legitimate single action, so refuse rather than push it.
              // Checked against OUR OWN last-known-good record, not the response that just arrived — a
              // scoped or partial response (missing fields entirely, not just empty) must never be read
              // as "the cloud says these are gone." Only this device's own confirmed history counts.
              const wiped=Object.keys(baseline.db).filter(k=>Array.isArray(baseline.db[k])&&baseline.db[k].length>=2&&Array.isArray(mergedDb[k])&&mergedDb[k].length===0);
              if(wiped.length){
                lastCloudError='Refused to save — this would erase all '+wiped.join(', ')+', which still have real data in the cloud. Reload the page and try again.';
                return false;
              }
              [...ID_TABLES,'accounts'].forEach(k=>{
                const keyFn=k==='accounts'?(x=>x&&x.user):(x=>x&&x.id);
                const baseArr=Array.isArray(baseline.db[k])?baseline.db[k]:[];
                const mergedArr=Array.isArray(mergedDb[k])?mergedDb[k]:[];
                const mergedKeys=new Set(mergedArr.filter(x=>x!=null).map(keyFn));
                const gone=baseArr.filter(x=>x!=null).map(keyFn).filter(kk=>!mergedKeys.has(kk));
                if(gone.length) removedIds[k]=gone;
              });
              const mergedNid={};
              new Set([...Object.keys(nid),...Object.keys(remote.nid||{})]).forEach(k=>{
                mergedNid[k]=Math.max(nid[k]||0,(remote.nid||{})[k]||0);
              });
              Object.keys(mergedDb).forEach(k=>{ DB[k]=mergedDb[k]; });
              nid=mergedNid;
            }
          }
          mergePulled=true;
        }
      }catch(e){ /* timed out or failed — try again below, or give up after the last attempt */ }
    }
    if(!mergePulled){
      lastCloudError=lastCloudError||'Could not reach the database to merge before saving — request timed out';
      setConnectionState(false); return false;
    }
    const payload=JSON.stringify({db:DB,nid});
    if(payload===lastCloudPush){ lastSyncedDB=JSON.parse(payload); if(!cloudActive) setConnectionState(true); return true; } // merge found nothing new to push after all
    // The database is JSON-encoded TWICE on the way out: once into `payload`, then again as the value
    // of {data:payload} — every quote inside the DB becomes \" in the body. So what Netlify measures is
    // bigger than the DB itself, and a POST can cross the cap while the GET (encoded once) still fits:
    // saving breaks while loading keeps working. Measure the real body and name the real problem.
    const body=JSON.stringify({data:payload});
    const mb=(new Blob([body]).size/1048576);
    if(mb*1048576>CLOUD_BODY_LIMIT){
      lastTooLargePayload=localPayload; // stop the 4s autosave from retrying this exact snapshot
      lastCloudError='Database too large to save — this request is '+mb.toFixed(2)+' MB and the limit is '+(CLOUD_BODY_LIMIT/1048576).toFixed(2)+' MB. Something large is stored inline (an event poster or teacher photo pasted in as base64). Move it to Supabase Storage and save again.';
      setConnectionState(false); return false;
    }
    const markPushSuccess=()=>{ lastTooLargePayload=null; lastCloudPush=payload; lastSyncedDB=JSON.parse(payload); try{ localStorage.setItem(PENDING_SYNC_KEY,'0'); }catch(e){} lastCloudError=''; setConnectionState(true); };
    // Checks whether the push we just attempted actually landed, even though we didn't get a clean
    // "ok" response for it. Used for BOTH a thrown fetch error (AbortError from our own client-side
    // timeout, OR any other network-level failure — e.g. the platform itself dropping the connection
    // mid-request when a Vercel function invocation runs past ITS OWN limit, which throws a plain
    // "Failed to fetch" / TypeError, not an AbortError, so gating this on AbortError alone missed that
    // case — see migration plan item 12's follow-up) and a non-2xx HTTP response that isn't a definite
    // rejection (401/403/413), since `saveWholeDb()` on the server saves several tables in stages and
    // can legitimately have committed some or all of them to Supabase before erroring out or being cut
    // off. Retries the verification GET itself once (same pattern as every other cloud call in this
    // file) since a Supabase project that's genuinely slow enough to blow the save's own budget can
    // just as easily blow a single verification attempt's budget too.
    // remoteHasOurWrites() only proves a record with the right id still EXISTS on the cloud — which is
    // true for almost every edit, since editing a teacher/class/student never removes or adds the row
    // itself, only changes a field on it. That made verifyPushLanded() report success for a save that
    // genuinely failed server-side (saveWholeDb() throwing partway through — a bad column, a
    // constraint, anything) as long as the record predates this save, which it normally does: the
    // teacher/class was already there before the edit. A reorder (saveArrangeTeachers()'s `sortOrder`)
    // is the clearest case — the teacher rows never stop existing, only their order should change — but
    // the same blind spot applies to any field-only edit whatsoever. This is what turned a real,
    // reported server error into a silent "✅ saved" while nothing about the field itself had actually
    // changed on the cloud, which then reappeared exactly as it was before on the very next reload —
    // looking exactly like the edit had "reverted", because it never landed in the first place.
    // Closes that gap: for every record this device actually changed since its last confirmed baseline
    // (the same diff mergeDB()/mergeArrayByKey() used to decide what was "ours" to push), require the
    // record now on the cloud to be BYTE-FOR-BYTE what we tried to push — not merely present. A record
    // no other device touched should come back identical after a save that truly landed; if it comes
    // back different (or missing), the save didn't actually take, whatever the HTTP status implied.
    function changedRecordsMatchRemote(remoteDb){
      if(!baselineForVerify||!baselineForVerify.db) return true; // never got a merge baseline this attempt — nothing to compare, don't block on it
      for(const k of [...ID_TABLES,'accounts']){
        const keyFn=k==='accounts'?(x=>x&&x.user):(x=>x&&x.id);
        const baseArr=Array.isArray(baselineForVerify.db[k])?baselineForVerify.db[k]:[];
        const oursArr=Array.isArray(DB[k])?DB[k]:[];
        const remoteArr=Array.isArray(remoteDb[k])?remoteDb[k]:[];
        const baseByKey=new Map(baseArr.filter(x=>x!=null).map(x=>[keyFn(x),x]));
        const remoteByKey=new Map(remoteArr.filter(x=>x!=null).map(x=>[keyFn(x),x]));
        for(const item of oursArr){
          if(item==null) continue;
          const kk=keyFn(item);
          const baseItem=baseByKey.get(kk);
          // unchanged since baseline (or brand new but identical to what baseline already implied) —
          // nothing this save was responsible for landing, skip it
          if(baseItem!==undefined&&JSON.stringify(item)===JSON.stringify(baseItem)) continue;
          const remoteItem=remoteByKey.get(kk);
          if(remoteItem===undefined||JSON.stringify(remoteItem)!==JSON.stringify(item)) return false;
        }
      }
      return true;
    }
    async function verifyPushLanded(){
      const vTimeouts=[CLOUD_TIMEOUT_MS,6000];
      for(let vi=0;vi<vTimeouts.length;vi++){
        try{
          const vctrl=new AbortController();
          const vtimer=setTimeout(()=>vctrl.abort(),vTimeouts[vi]);
          const vr=await fetch(CLOUD_URL,{method:'GET',headers:authHeaders(),signal:vctrl.signal});
          clearTimeout(vtimer);
          if(vr&&vr.ok){
            const vj=await vr.json().catch(()=>null);
            if(vj&&vj.data){
              const remoteNow=JSON.parse(vj.data);
              if(remoteNow&&remoteNow.db&&remoteHasOurWrites(remoteNow.db,DB)&&changedRecordsMatchRemote(remoteNow.db)){
                const stillThere=Object.keys(removedIds).some(k=>{
                  const keyFn=k==='accounts'?(x=>x&&x.user):(x=>x&&x.id);
                  const arr=Array.isArray(remoteNow.db[k])?remoteNow.db[k]:[];
                  const keys=new Set(arr.filter(x=>x!=null).map(keyFn));
                  return removedIds[k].some(id=>keys.has(id));
                });
                if(!stillThere) return true;
              }
              return false; // reached the server fine and our writes genuinely aren't there — no point retrying
            }
          }
        }catch(e){ /* this verification attempt itself timed out/failed — try again below, or give up */ }
      }
      return false;
    }
    let r;
    try{
      r=await fetchWithTimeout(CLOUD_URL,{method:'POST',headers:authHeaders(),body});
    }catch(e){
      // The browser gave up waiting (or the connection was dropped from the platform side), but that's
      // not proof the write didn't happen — a Vercel function invocation is not necessarily killed just
      // because the client's fetch stopped waiting; it can keep running and finish writing to Supabase
      // after we've already given up here. Reporting failure in that case (and letting the caller roll
      // back the student/payment/login it just added) is exactly how "Could not save" can show on
      // screen while Supabase already has the record — see migration plan items 10 and 12. Before
      // giving up, check whether everything we were trying to save is already there.
      if(await verifyPushLanded()){ markPushSuccess(); return true; }
      lastCloudError=e&&e.name==='AbortError'?'Request timed out — network too slow':String(e&&e.message||e);
      setConnectionState(false); return false;
    }
    if(r&&r.ok){ markPushSuccess(); return true; }
    // A non-ok reply is NOT a network failure — it is the server telling us what went wrong. Capture it,
    // or the Database page shows an empty "Cloud sync error" and the red banner blames the WiFi for a 413/502.
    let t=''; try{ t=(await r.text()||'').slice(0,220); }catch(e){}
    lastCloudError='HTTP '+(r?r.status:'?')+(t?' — '+t:'')+' · payload '+mb.toFixed(2)+' MB';
    // 401/403 is the server refusing the session, not the connection dropping — blaming the WiFi
    // here would send them to reset a router when they just need to sign in again. Neither can have
    // written anything (auth is checked before any table write), so there's nothing to verify.
    if(r&&(r.status===401||r.status===403)){ handleAuthExpiry(r.status); return false; }
    // A raw 413 from the platform itself (not our own size check above) means the request was rejected
    // before the server ever ran, so nothing was written either — same backoff as before, no point
    // verifying. Any OTHER non-ok status (500/502/504 — a genuine server-side error, or the function
    // being cut off mid-save) CAN have partially or fully written before failing, so check first.
    if(r&&r.status===413){ lastTooLargePayload=localPayload; setConnectionState(false); return false; }
    if(await verifyPushLanded()){ markPushSuccess(); return true; }
    setConnectionState(false); return false;
  }catch(e){ lastCloudError=e&&e.name==='AbortError'?'Request timed out — network too slow':String(e&&e.message||e); setConnectionState(false); return false; }
}
// ── Sync mutex ─────────────────────────────────────────────────────────────
// Every cloud pull (cloudLoad) and push (cloudSave) runs one-at-a-time through this single promise
// chain. Without it, two quick actions — deleting two records in a row, or a delete landing on top of
// the 4s autosave / 45s refresh — launch overlapping saves whose pull → merge → push steps interleave.
// A delayed push can then re-write a record another push just removed, so the row comes back in
// Supabase even though the screen already showed "Deleted". Serialising them means each save sees the
// previous one's pushed result as its baseline, so a delete can't be silently resurrected. (The
// re-entrant seed-save inside cloudLoad calls _cloudSaveInner directly, so it can't deadlock here.)
let _syncChain=Promise.resolve();
function _withSyncLock(fn){
  const run=_syncChain.then(fn,fn);   // wait for whatever's already queued (success OR failure), then run
  _syncChain=run.then(()=>{},()=>{}); // keep the chain alive no matter how this run ends
  return run;
}
async function cloudSave(){ return _withSyncLock(_cloudSaveInner); }
async function cloudLoad(){ return _withSyncLock(_cloudLoadInner); }
// Saves locally (always — the data is never lost) AND requires a successful cloud push before the
// caller is allowed to treat the action as complete. If there's no connection (or the request fails/
// times out), this shows the offline banner + a clear error and returns false so the caller can stop
// right there — leave its modal open, not advance to the next step — instead of silently letting the
// user believe it saved when the shared database never actually received it.
async function commitSave(){
  saveDB();
  const ok=await withBusy(tr('msg.busySaving'),()=>cloudSave());
  if(!ok) toast(tr('msg.saveNeedsConnection'),false);
  return ok;
}
async function cloudRefresh(){ // manual pull to see others' latest changes
  const ok=await withBusy(tr('msg.busyLoading'),()=>cloudLoad());
  if(ok&&currentPageId) showPage(currentPageId);
  toast(ok?tr('msg.cloudRefreshed'):tr('msg.dbImportFail'), ok);
}
// One-off repair, run from the Database settings screen by an admin: writes 'All Levels' into the
// REAL Postgres `difficulty` column for every class that's genuinely NULL there (server-side action
// 'backfill-class-difficulty' in api/db.js — see that function's own comment for exactly what it
// touches and what it never overwrites). The API's own read path (classFromRow() in api/db.js)
// already makes every device SEE 'All Levels' for these classes even before this is run — this
// button is what makes that real in the database itself, instead of it only ever being patched on
// the way out on every read. After a successful run, pulls fresh from the cloud so this device's own
// screen (and the classes list) reflect the now-real values immediately, without waiting for the
// next autosave/poll cycle.
// Replays every student's REAL attendance history for each class against their payment history,
// using the exact same month-matching rule checkAttendanceBilling() now uses live (see there) —
// this is the backfill for students whose billing history was already corrupted by the OLD version
// of that rule, which matched ANY unclaimed Paid payment to a completed cycle regardless of which
// month it was actually labeled for. That could let a payment meant for the CURRENT month's classes
// (e.g. a new student's first-month fee) get silently consumed settling a LATER cycle's obligation,
// leaving nothing left to reconcile once the real next cycle came due — so its bill would never
// auto-raise, and nothing about it would look wrong in the payment history (no new row was created;
// an existing Paid row was just mis-tagged).
// For each (student, class): first releases the billCycle tag on any manually-claimed (non-auto-
// billed) payment, so it's back in the pool to be matched correctly; then walks the student's actual
// attendance in date order (carryover counts as a head start, exactly like presentCountForClass())
// to find the REAL date each 4-class cycle completed, and re-runs the same reconcile-or-bill logic
// checkAttendanceBilling() runs live, cycle by cycle, in chronological order. Paid amounts, dates,
// and methods are never touched — only which cycle an already-paid record is credited against, and
// any Unpaid bill that was missing entirely.
async function repairAdvanceBilling(){
  if(!session||session.role!=='admin') return;
  askConfirm(tr('msg.confirmFixBilling'),async()=>{
  toast(tr('msg.billingFixing'));
  try{
    const pairs=new Set();
    DB.students.forEach(s=>{ SC(s).forEach(c=>pairs.add(s.id+'|'+c.id)); });
    // A private-class slot may no longer be in a student's classIds (e.g. it ended), but its past
    // bills still live in DB.payments — include any (student,class) a private payment ever referenced.
    DB.payments.forEach(p=>{ if(p.kind==='private'&&p.studentId&&p.classId) pairs.add(p.studentId+'|'+p.classId); });
    let studentsFixed=0, billsCreated=0, claimsFixed=0, billsRemoved=0;
    for(const key of pairs){
      const [sidStr,cidStr]=key.split('|');
      const studentId=parseInt(sidStr), classId=parseInt(cidStr);
      const s=DB.students.find(x=>x.id===studentId);
      const cls=DB.classes.find(c=>c.id===classId);
      if(!s||!cls) continue;
      const isPrivateCls=cls.difficulty==='Private';
      if(isPrivateCls && !(cls.rate>0)) continue; // same "don't invent a number" rule checkAttendanceBilling follows
      const payKind=isPrivateCls?'private':'class';
      const rate=isPrivateCls?cls.rate:classRateFor(s);
      let touchedThisPair=false;
      DB.payments.filter(p=>p.studentId===studentId&&p.classId===classId&&p.kind===payKind&&p.billCycle!=null&&!/Auto-billed/.test(p.notes||''))
        .forEach(p=>{ p.billCycle=null; touchedThisPair=true; });
      const records=DB.attendance.filter(a=>a.studentId===studentId&&a.classId===classId&&counted(a)).sort((a,b)=>a.date<b.date?-1:(a.date>b.date?1:0));
      let cum=rawCarryTotal(studentId,classId);
      const cycleDates=[];
      records.forEach(a=>{ cum+=attWeight(a); while(cum>=(cycleDates.length+1)*4-1e-9) cycleDates.push(a.date); });
      // Preserve genuine generated bills, but remove only generated Unpaid bills beyond the number
      // of completed cycles. Critically, do NOT let a legacy billCycle tag on a manual/first-class
      // payment count as an invoice here — that is what hid Zhi Yan's missing bill.
      let excessAutoBills=DB.payments.filter(p=>p.studentId===studentId&&p.classId===classId&&p.kind===payKind&&isAutoGeneratedCycleBill(p)).length-cycleDates.length;
      if(excessAutoBills>0){
        DB.payments=DB.payments.filter(p=>{
          const surplus=p.studentId===studentId&&p.classId===classId&&p.kind===payKind&&isAutoGeneratedCycleBill(p)&&p.status!=='Paid'&&excessAutoBills>0;
          if(surplus){ excessAutoBills--; billsRemoved++; touchedThisPair=true; return false; }
          return true;
        });
      }
      for(let idx=0;idx<cycleDates.length;idx++){
        const cyc=idx+1;
        const autoBilledNow=DB.payments.filter(p=>p.studentId===studentId&&p.classId===classId&&p.kind===payKind&&isAutoGeneratedCycleBill(p)).length;
        if(autoBilledNow>=cyc) continue; // this cycle already has a real bill/claim — nothing to do
        const dateOfCompletion=cycleDates[idx];
        const nm=billingMonthForCycle(studentId,classId,payKind,cyc,dateOfCompletion);
        // Repair labels left by the old "month after completion" rule. The invoice itself is
        // still valid and unpaid; only its month label is corrected (e.g. October → September).
        const existingCycleBill=DB.payments.find(p=>p.studentId===studentId&&p.classId===classId&&p.kind===payKind&&isAutoGeneratedCycleBill(p)&&Number(p.billCycle)===cyc);
        if(existingCycleBill&&existingCycleBill.month!==nm&&!isPrivateCls){ existingCycleBill.month=nm; touchedThisPair=true; }
        // Matched by earliest-paid-first, not by month label — see the matching comment in
        // checkAttendanceBilling() for why; keep this in sync with that function.
        const prepaidPool=DB.payments.filter(p=>p.studentId===studentId&&p.classId===classId&&p.kind===payKind&&p.status==='Paid'&&p.billCycle==null&&!isSingleOrTrialLabel(p)&&!isInitialCyclePayment(p,studentId,classId)).sort((a,b)=>(a.date||'').localeCompare(b.date||''));
        const prepaid=prepaidPool[0];
        if(prepaid){ prepaid.billCycle=cyc; touchedThisPair=true; claimsFixed++; continue; }
        const pid=await claimPaymentId();
        if(pid==null) return; // toast already shown by claimPaymentId(); anything fixed so far in this run is left as-is, uncommitted — rerun the repair once back online
        if(isPrivateCls){
          DB.payments.push({id:pid,kind:'private',studentId,privateName:null,teacherId:cls.teacherId,classId,placeId:cls.placeId,
            room:cls.room,rentStart:cls.start,rentEnd:cls.end,teacherEarn:privateTeacherEarnFor(cls),
            month:'Private Class',amount:rate,status:'Unpaid',date:'',method:'',notes:'Auto-billed — 4 attendances completed (backfilled by Fix Advance Billing)',earnedDate:dateOfCompletion,billCycle:cyc});
        }else{
          DB.payments.push({id:pid,kind:'class',studentId,classId,month:nm,amount:rate,status:'Unpaid',date:'',method:'',notes:'Auto-billed — 4 attendances completed (backfilled by Fix Advance Billing)',earnedDate:dateOfCompletion,billCycle:cyc});
        }
        touchedThisPair=true; billsCreated++;
      }
      if(touchedThisPair) studentsFixed++;
    }
    if(studentsFixed===0){ toast(tr('msg.billingFixNone')); return; }
    if(!await commitSave()) return; // commitSave() already shows its own toast on failure — nothing is lost, just not yet saved
    toast(tr('msg.billingFixDone').replace('{n}',studentsFixed).replace('{b}',billsCreated).replace('{c}',claimsFixed).replace('{r}',billsRemoved));
    renderAccounts();
  }catch(e){ toast(tr('msg.billingFixFail'),false); }
  });
}
async function repairClassDifficulty(){
  if(!session||session.role!=='admin') return;
  toast(tr('msg.difficultyFixing'));
  try{
    const r=await fetchWithTimeout(CLOUD_URL,{method:'POST',headers:authHeaders(),
      body:JSON.stringify({action:'backfill-class-difficulty'})});
    let j={}; try{ j=await r.json(); }catch(e){}
    if(!r.ok||j.error){
      if(r.status===401||r.status===403) handleAuthExpiry(r.status);
      else toast((j.error||tr('msg.difficultyFixFail')),false);
      return;
    }
    const n=Number(j.updated)||0;
    await cloudRefresh();
    toast(n>0?tr('msg.difficultyFixDone').replace('{n}',n):tr('msg.difficultyFixNone'));
  }catch(e){ toast(tr('msg.difficultyFixFail'),false); }
}

// Reserves brand-new id(s) from the server BEFORE anything is created locally — e.g. ['students',
// 'student_login_id'] when adding a student. Two branch counters used to each compute their own
// "next id" from whatever was already in their browser, so adding a student at the same moment on
// two counters could hand out the SAME id, and whichever save landed second silently overwrote the
// other's new student. The server now hands out each id one at a time from a real counter in
// Postgres (see claim_next_id() / supabase_atomic_ids.sql), so two simultaneous claims are
// guaranteed two different numbers — this is the fix for that collision.
// Returns e.g. {students:1234, student_login_id:600007} on success, or null (with lastCloudError
// set) if the server couldn't be reached — callers should treat that the same as any other failed
// save and leave the form open rather than falling back to a locally-guessed id.
async function claimServerIds(names){
  const timeouts=[CLOUD_TIMEOUT_MS,6000];
  // Tell the server the lowest id it may safely hand out for each name. This guards against the class
  // of bug that used to trip the "payments id claim looked wrong" guard in claimPaymentId(): if a
  // browser's own nid[name] ever runs ahead of Postgres's claim_next_id() counter (e.g. a device that
  // missed a schema update, or any future code path that mints an id locally again), sending nid[name]
  // as a floor lets the server catch its counter up instead of handing back a stale/colliding id.
  // Harmless no-op for any name whose counter is already ahead.
  const mins={}; names.forEach(n=>{ mins[n]=nid[n]||0; });
  for(let i=0;i<timeouts.length;i++){
    try{
      const ctrl=new AbortController();
      const timer=setTimeout(()=>ctrl.abort(),timeouts[i]);
      const r=await fetch(CLOUD_URL,{method:'POST',headers:authHeaders(),signal:ctrl.signal,
        body:JSON.stringify({action:'claim-ids',names,mins})});
      clearTimeout(timer);
      if(!r.ok){
        try{ lastCloudError=(await r.text()||'').slice(0,220); }catch(e){}
        if(r.status===401||r.status===403){ handleAuthExpiry(r.status); return null; }
        if(i<timeouts.length-1) continue;
        setConnectionState(false); return null;
      }
      const j=await r.json().catch(()=>null);
      if(!j||!j.ok||!j.ids){ lastCloudError=(j&&j.error)||'Could not reserve a new id'; if(i<timeouts.length-1) continue; setConnectionState(false); return null; }
      setConnectionState(true);
      return j.ids;
    }catch(e){
      lastCloudError=e&&e.name==='AbortError'?'Request timed out — network too slow':String(e&&e.message||e);
      if(i<timeouts.length-1) continue;
      setConnectionState(false); return null;
    }
  }
  setConnectionState(false); return null;
}
// Claims ONE real, server-issued payment id and sanity-checks it — the single choke point every
// payment-creating flow should call instead of nid.payments++. Centralizing this (rather than each
// flow copying its own claim+guard) is what keeps the drift between the local nid.payments counter
// and Postgres's claim_next_id() counter from reopening: every payment id, from every flow, now
// advances the SAME server counter via the same p_min floor. Returns the new id, or null (with a
// toast already shown — either a connection failure or the "payments id claim looked wrong" guard)
// if the claim failed or looked unsafe. Callers should bail out on null exactly like they already do
// for a failed commitSave().
async function claimPaymentId(){
  const cp=await claimServerIds(['payments']);
  if(!cp){ toast(lastCloudError||tr('msg.saveNeedsConnection'),false); return null; }
  // Same defensive check as before: a claimed id can never be lower than one already in this browser's
  // own copy of the table, nor collide with one it already has — either would mean something's
  // misconfigured server-side, so refuse rather than risk a silent overwrite.
  if(typeof cp.payments!=='number'||cp.payments<nid.payments||DB.payments.some(p=>p.id===cp.payments)){
    toast('⚠️ Could not safely create a new payment id — please tell an admin before retrying (payments id claim looked wrong).',false);
    return null;
  }
  return cp.payments;
}
// Same fix as claimPaymentId() above, for the attendance table. Attendance was the one place still
// minting ids from the plain local nid.attendance++ counter — and, unlike payments, attendance rows
// get created constantly, from every branch counter, all day, so it was also by far the most exposed
// to the exact collision this pattern was already found and fixed for elsewhere: two devices computing
// the same "next id" from their own stale in-memory copy, one save's upsert silently overwriting the
// other's row under a shared id. A record created this way could then look like a completely unrelated
// delete "came back" a save or two later — merge sees a row with that id on the cloud (really a
// different device's colliding write) and, having no way to know it isn't the one that got deleted,
// restores it. Every DB.attendance.push({id:nid.attendance++,...}) call site now goes through this.
async function claimAttendanceId(){
  const ca=await claimServerIds(['attendance']);
  if(!ca){ toast(lastCloudError||tr('msg.saveNeedsConnection'),false); return null; }
  if(typeof ca.attendance!=='number'||ca.attendance<nid.attendance||DB.attendance.some(a=>a.id===ca.attendance)){
    toast('⚠️ Could not safely create a new attendance id — please tell an admin before retrying (attendance id claim looked wrong).',false);
    return null;
  }
  return ca.attendance;
}
// Patches ONE student's record directly in the shared database (via update_student_fields on
// the server) instead of pushing the whole DB like cloudSave() does. This is what lets many
// students save their own profile at the same moment without one save silently overwriting
// another student's — each patch only ever touches its own record.
async function updateStudentRecord(id,patch){
  const timeouts=[CLOUD_TIMEOUT_MS,6000];
  for(let i=0;i<timeouts.length;i++){
    try{
      const ctrl=new AbortController();
      const timer=setTimeout(()=>ctrl.abort(),timeouts[i]);
      const r=await fetch(CLOUD_URL,{method:'POST',headers:authHeaders(),signal:ctrl.signal,
        body:JSON.stringify({action:'update-student',id:String(id),patch})});
      clearTimeout(timer);
      if(!r.ok){
        try{ lastCloudError=(await r.text()||'').slice(0,220); }catch(e){}
        if(r.status===401||r.status===403){ handleAuthExpiry(r.status); return false; } // the session, not the network
        if(i<timeouts.length-1) continue;
        setConnectionState(false); return false;
      }
      const j=await r.json().catch(()=>null);
      if(j&&j.error){
        lastCloudError=String(j.error);
        if(i<timeouts.length-1) continue;
        setConnectionState(false); return false;
      }
      setConnectionState(true);
      return !!(j&&j.ok);
    }catch(e){
      lastCloudError=e&&e.name==='AbortError'?'Request timed out — network too slow':String(e&&e.message||e);
      if(i<timeouts.length-1) continue;
      setConnectionState(false); return false;
    }
  }
  setConnectionState(false); return false;
}

// ── Connection gate: used by the important "Save" actions (add/edit student, record payment, add/edit
// class) to BLOCK the action outright — showing an error and leaving the form open — instead of
// silently succeeding locally only while the shared database never receives the change. Not used for
// high-frequency taps like marking attendance, since a network round-trip on every single tap would
// make the app painfully slow; those still save locally instantly and sync in the background instead.
async function requireConnection(){
  // navigator.onLine is NOT used to short-circuit here — it's a browser heuristic, not a real
  // connectivity check, and iOS Safari in particular can leave it stuck reporting false after an
  // earlier WiFi blip even once the network is genuinely fine again, with no reload to reset it.
  // The only thing that actually matters is whether we can reach the cloud function, so that's the
  // only thing allowed to decide "offline" below.
  // The cloud function goes cold after an idle spell and its first reply can genuinely take several
  // seconds on a phone connection — one slow answer is not proof of being offline. Give it real room
  // and retry once (the retry usually hits a now-warm function) before declaring the counter offline.
  const timeouts=[10000,6000];
  for(let i=0;i<timeouts.length;i++){
    try{
      const ctrl=new AbortController();
      const timer=setTimeout(()=>ctrl.abort(),timeouts[i]);
      // Cheap reachability check: hit ?health (a few hundred bytes) instead of a plain GET, which
      // returns the ENTIRE database — hundreds of KB once the logo/poster/photos are inlined — just to
      // answer "are we online?". This gate runs before every important Save, so downloading the whole
      // DB here was a big part of what made saving feel slow.
      const r=await fetch(CLOUD_URL+'?health=1',{method:'GET',signal:ctrl.signal});
      clearTimeout(timer);
      if(r.ok){
        // Reachable — but also confirm the server reports the database is actually configured, so a
        // misconfigured deploy still blocks the save (as the old full GET did via its 500) instead of
        // passing here and then failing later at the POST.
        let j=null; try{ j=await r.json(); }catch(e){}
        if(j&&j.hasUrl&&j.hasKey){ setConnectionState(true); return true; }
        if(j&&(!j.hasUrl||!j.hasKey)) lastCloudError='Server reachable, but database keys are missing — set SUPABASE_URL and SUPABASE_KEY in Netlify, then redeploy';
      }
    }catch(e){ /* timed out or failed — fall through and try once more */ }
  }
  toast(tr('msg.offlineBlocked'),false); setConnectionState(false); return false;
}

// ── Connection banner: makes it obvious when changes are only saved on THIS device and haven't
// reached the shared cloud database yet, instead of failing silently. ──
let hasShownOfflineBanner=false;
// A single slow or dropped request on a phone connection is NOT proof of being offline — the cloud
// function waking from cold, a tunnel, a lift, one bad packet all cause it, and the very next request
// usually succeeds. So we don't flip the banner red on the first failure: a success clears the streak
// instantly, and it takes several failures IN A ROW before we actually declare offline. This is what
// stops the red banner flickering up when the connection is really fine, just briefly slow.
let offlineStreak=0;
const OFFLINE_STREAK_LIMIT=3; // consecutive failed cloud calls before the banner is allowed to show
function setConnectionState(isOnline){
  if(isOnline){
    offlineStreak=0;
    applyConnectionState(true);
    return;
  }
  // a failure: count it, but only actually show "offline" once we've missed several in a row
  offlineStreak++;
  if(offlineStreak>=OFFLINE_STREAK_LIMIT) applyConnectionState(false);
  // below the limit: leave the banner exactly as it was (usually hidden) — this blip is ignored
}
function applyConnectionState(isOnline){
  const wasActive=cloudActive;
  cloudActive=isOnline;
  const bar=document.getElementById('offline-banner');
  if(bar){ bar.style.display=isOnline?'none':'block';
    const t=document.getElementById('offline-banner-text');
    // lastCloudError already holds the REAL reason (a timeout, or the server's actual HTTP status/
    // message) — showing only the generic "check your connection" line here hid that distinction
    // completely, so a genuine server-side problem (e.g. Supabase misconfigured, request too large)
    // looked identical to a dead WiFi connection and was undiagnosable from this banner alone.
    if(t) t.textContent=tr('msg.offlineBanner')+(lastCloudError?' ('+lastCloudError.slice(0,160)+')':'');
  }
  if(wasActive&&!isOnline){ hasShownOfflineBanner=true; toast(tr('msg.offlineWarning'),false); } // only announce on the transition to offline, not every failed retry
  else if(!wasActive&&isOnline&&hasShownOfflineBanner){ hasShownOfflineBanner=false; toast(tr('msg.backOnline')); }
}

// ── boot: push any changes made while offline FIRST (so a normal cloud pull can never silently
// discard them), then load the shared Airtable database, else fall back to this browser's storage ──
// Fire-and-forget, outside boot()'s own await chain on purpose — this is a courtesy check, not
// something that should ever delay first paint or the real data load below.
fetchAppVersionTag().then(t=>{ if(t) appVersionTag=t; });
(async function boot(){
  loadDB(); // always establish a safe local baseline in memory first — never starts from nothing
  // Recover the signed proof from the last session BEFORE the pull below, so a returning member of
  // staff fetches the real database rather than the signed-out landing-page slice and gets bounced
  // back to the sign-in screen on every reload. The session itself is still validated further down;
  // this only decides which version of the data the pull is allowed to return.
  try{
    if(!/[?&]u=/.test(location.search)){
      const pre=JSON.parse(localStorage.getItem(SESSION_KEY)||'null');
      if(pre&&pre.token) sessionToken=pre.token;
    }
  }catch(e){}
  // The intro page waits on the Supabase pull below before it can render, so cover the wait instead
  // of showing the raw default placeholder text underneath. immediate=true skips the usual 250ms
  // delay — on first boot that flash of un-loaded default copy is worse than a spinner appearing fast.
  showBusy(tr('msg.busyLoading'),true);
  try{
  let ok=false;
  const hadPending=(()=>{ try{ return localStorage.getItem(PENDING_SYNC_KEY)==='1'; }catch(e){ return false; } })();
  if(hadPending){
    // there are changes from a previous (possibly offline) session that may never have reached the
    // cloud — try to push them now, BEFORE pulling anything, so cloudLoad() can't overwrite them
    const pushed=await cloudSave().catch(()=>false);
    if(pushed){ try{ ok=await cloudLoad(); }catch(e){ ok=false; } }
    else{ ok=false; } // still offline — keep the local baseline, don't risk pulling stale/partial data (cloudSave() already updated the banner)
  }else{
    try{ ok=await cloudLoad(); }catch(e){ ok=false; }
  }
  if(!ok && !hadPending) loadDB();  // standalone fallback (localStorage) — re-confirms the baseline if the cloud pull failed
  pruneOrphans();                   // clean up any records left by previously-deleted students
  migrateCreditUses();              // drop legacy credit-use payment rows (credit use is not a payment)
  ensureIntro();
  ensureStudentExtras();
  ensureRewards();
  ensureStyles();
  // Restore a still-valid session (see persistSession() above) rather than always dropping back to the
  // sign-in screen on every reload. A QR login link takes priority if one is present in the URL — that's
  // a deliberate, more specific action than whatever session happened to be sitting in storage.
  let restoredSession=false;
  try{
    const hasLoginLink=/[?&]u=/.test(location.search);
    const raw=hasLoginLink?null:localStorage.getItem(SESSION_KEY);
    if(raw){
      const saved=JSON.parse(raw);
      if(saved&&saved.ts&&(Date.now()-saved.ts)<IDLE_LOGOUT_MS){
        // If the pull came back public-only, the saved token was rejected (expired, or signed with a
        // different secret). Don't restore — the app would open on empty lists and look like the data
        // had vanished. Drop to the sign-in screen instead, which is the honest thing to show.
        const acc=dbIsPublicOnly?null:(DB.accounts||[]).find(a=>a.role===saved.role&&a.user===saved.user);
        if(acc){
          session=acc;
          sessionToken=saved.token||'';   // carry the signed proof across a reload
          franchiseScope=saved.franchiseScope||null;
          idleLast=saved.ts; // keep the real remaining idle budget — a reload must not grant a fresh 5 minutes
          restoredSession=true;
        }
      }
    }
  }catch(e){}
  // ROLE-LOCKED ENTRY PAGES (admin.html / counter.html / teacher.html / student.html):
  // window.FIXED_ROLE is set by those pages before this script runs. A session restored for a
  // DIFFERENT role (e.g. someone left signed in as counter, then opened teacher.html on the same
  // device) must not silently enter the wrong role's app — drop it and fall through to this page's
  // own login instead. index.html (the public multi-role page) never sets FIXED_ROLE, so its
  // behaviour here is byte-for-byte unchanged from before.
  if(restoredSession && window.FIXED_ROLE && session && session.role!==window.FIXED_ROLE){
    session=null; sessionToken=''; franchiseScope=null; clearPersistedSession(); restoredSession=false;
  }
  if(restoredSession) enterApp();
  else if(window.FIXED_ROLE){ clearPersistedSession(); chooseRole(window.FIXED_ROLE); }
  else{ clearPersistedSession(); renderSiteScreen(); }
  } finally { hideBusy(); }  // finally: a throw mid-boot must never strand the overlay over a dead app
  setInterval(()=>{ try{ saveDB(); }catch(e){} try{ cloudSave(); }catch(e){} }, 4000); // autosave to cloud + browser — this is also what recovers the connection automatically once it's back
  // cloudSave() above only ever PULLS when it also has something local to PUSH — an idle device just
  // sitting on the branch picker, the public site page, or a page it hasn't touched in a while never
  // triggers that, so it can silently keep showing whatever it loaded at its own last boot (a class
  // count, a student list) long after that's gone stale elsewhere. This pulls on its own regardless,
  // and re-renders whatever's currently on screen so it doesn't need a manual refresh to catch up.
  setInterval(async ()=>{
    if(document.querySelector('.mbg.open')) return; // never overwrite DB out from under an open form
    // Full-page editors (the intro editor especially) keep unsaved text only in their inputs until Save
    // reads them. Re-rendering rebuilds the page from the cloud copy and wipes that text, so a long edit —
    // the Closing paragraph at the very bottom of the intro editor most of all — can vanish before Save is
    // pressed. Skip entirely while the intro editor is open, or while any editable field is focused on any
    // page, so a background pull can never clear an in-progress edit (open modals are already guarded above).
    if(session&&currentPageId==='intro') return;
    const ae=document.activeElement;
    if(ae&&(ae.tagName==='INPUT'||ae.tagName==='TEXTAREA'||ae.tagName==='SELECT'||ae.isContentEditable)) return;
    // Don't pull-and-clobber while this device still has edits that haven't been pushed yet — e.g. a
    // record just deleted, waiting on its save. Overwriting DB from the cloud here would bring that
    // record back before its save removed it. Let the pending save go first; refresh on a later tick.
    try{ if(JSON.stringify({db:DB,nid})!==lastCloudPush) return; }catch(e){}
    const ok=await cloudLoad().catch(()=>false);
    if(!ok) return;
    if(session&&currentPageId) showPage(currentPageId);
    else if(document.getElementById('branch-screen').style.display==='flex') renderFranchisePicker();
    else if(document.getElementById('site-screen').style.display!=='none') renderSiteScreen();
  }, 45000);
  // Keep the cloud function warm. After a couple of idle minutes it goes "cold" and its next reply can
  // take several seconds — so the FIRST save after a quiet spell felt slow even on good WiFi. A tiny
  // ?health ping every 2.5 min (a few hundred bytes, no DB download) keeps it warm so real saves stay
  // fast. Only while the tab is actually visible and signed in — no pinging a backgrounded tab.
  setInterval(()=>{
    try{
      if(document.visibilityState!=='visible'||!session) return;
      fetch(CLOUD_URL+'?health=1',{method:'GET'}).catch(()=>{});
    }catch(e){}
  }, 150000);
  // Stale-tab check — every 3 min, tab visible or not (unlike the health ping above, a backgrounded
  // front-desk tab is exactly the device most likely to have been open across a deploy, so this one
  // deliberately does NOT skip on visibility). Advisory only: never force a reload out from under
  // someone mid-entry — see update-banner's onclick for the actual reload trigger, chosen by staff.
  setInterval(async ()=>{
    if(updateAvailable) return; // already showing — nothing left to detect
    const t=await fetchAppVersionTag();
    if(t && appVersionTag && t!==appVersionTag) showUpdateBanner();
  }, 180000);
  applyLoginLink();   // a student arriving from the welcome QR skips straight to a filled-in sign-in
  window.addEventListener('online',()=>{ cloudSave(); }); // the moment the OS reports a connection, try immediately instead of waiting up to 4s
  // The browser's 'offline' event is an unreliable heuristic (iOS Safari especially can fire it on a
  // brief blip and stay stuck), so we do NOT flip the banner from it directly — that was a big source
  // of false "no connection" banners. The 4s autosave loop already probes the real cloud and will show
  // the banner if calls genuinely keep failing. Here we just nudge that probe to run now.
  window.addEventListener('offline',()=>{ try{ cloudSave(); }catch(e){} });
  try{ window.addEventListener('beforeunload', function(){ try{ saveDB(); }catch(e){} }); }catch(e){}
})();

/* ===== google translate loader ===== */
// Google Translate — only booted on the public intro page, and only once.
function googleTranslateElementInit(){
  try{
    new google.translate.TranslateElement({
      pageLanguage:'en',
      includedLanguages:'en,zh-CN,zh-TW,ms,ta,id,th,vi,ja,ko,ar,hi,es,fr,de,pt,ru',
      layout:google.translate.TranslateElement.InlineLayout.SIMPLE,
      autoDisplay:false
    },'google_translate_element');
  }catch(e){ const w=document.getElementById('gt-wrap'); if(w) w.style.display='none'; }
}
window.__gtLoaded=false;
function loadGoogleTranslate(){
  if(window.__gtLoaded) return; window.__gtLoaded=true;
  const sc=document.createElement('script');
  sc.src='https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit';
  sc.async=true;
  sc.onerror=()=>{ const w=document.getElementById('gt-wrap'); if(w) w.style.display='none'; }; // offline / blocked — just hide it
  document.head.appendChild(sc);
}

/* ===== service worker registration ===== */
// Keeps a copy of the app on this device so a reload always lands in the app, even when the network
// is having a moment. See sw.js — it's network-first, so deploys still appear on the next reload.
if('serviceWorker' in navigator){
  window.addEventListener('load',()=>{ navigator.serviceWorker.register('/sw.js').catch(()=>{}); });
}

/* ===== fx-layer (emoji->SVG icons + animation hydrate) ===== */
(function(){'use strict';
var MAP={"\u26a0\ufe0f":'<path d="M10.3 3.9 1.8 18a2 2 0 0 0 1.7 3h17a2 2 0 0 0 1.7-3L13.7 3.9a2 2 0 0 0-3.4 0z"/><path d="M12 9v4M12 17h.01"/>',
"\u26a0":'<path d="M10.3 3.9 1.8 18a2 2 0 0 0 1.7 3h17a2 2 0 0 0 1.7-3L13.7 3.9a2 2 0 0 0-3.4 0z"/><path d="M12 9v4M12 17h.01"/>',
"\ud83d\udcc5":'<rect x="3" y="4" width="18" height="18" rx="2"/><path d="M16 2v4M8 2v4M3 10h18"/>',
"\ud83d\udc64":'<path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/>',
"\ud83d\udc69\u200d\ud83c\udfeb":'<path d="M2 3h20"/><path d="M21 3v11a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V3"/><path d="m7 21 5-4 5 4"/>',
"\ud83d\udcb3":'<rect x="1" y="4" width="22" height="16" rx="2"/><path d="M1 10h22"/>',
"\ud83d\udd0d":'<circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35"/>',
"\ud83d\udca1":'<path d="M9 18h6M10 22h4"/><path d="M15.1 14c.2-1 .7-1.7 1.4-2.5A4.6 4.6 0 0 0 18 8 6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.8 1.2 1.5 1.4 2.5"/>',
"\u2705":'<circle cx="12" cy="12" r="10"/><path d="m8 12 3 3 5-6"/>',
"\u2713":'<path d="M20 6 9 17l-5-5"/>',
"\u2715":'<path d="M18 6 6 18M6 6l12 12"/>',
"\u2717":'<path d="M18 6 6 18M6 6l12 12"/>',
"\u274c":'<path d="M18 6 6 18M6 6l12 12"/>',
"\u2795":'<path d="M12 5v14M5 12h14"/>',
"\u2796":'<path d="M5 12h14"/>',
"\ud83c\udf81":'<rect x="3" y="8" width="18" height="4" rx="1"/><path d="M12 8v13M19 12v7a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2v-7"/><path d="M7.5 8a2.5 2.5 0 0 1 0-5C11 3 12 8 12 8M16.5 8a2.5 2.5 0 0 0 0-5C13 3 12 8 12 8"/>',
"\ud83c\udf88":'<rect x="3" y="8" width="18" height="4" rx="1"/><path d="M12 8v13M19 12v7a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2v-7"/><path d="M7.5 8a2.5 2.5 0 0 1 0-5C11 3 12 8 12 8M16.5 8a2.5 2.5 0 0 0 0-5C13 3 12 8 12 8"/>',
"\ud83c\udfab":'<path d="M3 7v3a2 2 0 1 1 0 4v3a1 1 0 0 0 1 1h16a1 1 0 0 0 1-1v-3a2 2 0 1 1 0-4V7a1 1 0 0 0-1-1H4a1 1 0 0 0-1 1z"/><path d="M13 5v2M13 11v2M13 17v2"/>',
"\ud83c\udf9f\ufe0f":'<path d="M3 7v3a2 2 0 1 1 0 4v3a1 1 0 0 0 1 1h16a1 1 0 0 0 1-1v-3a2 2 0 1 1 0-4V7a1 1 0 0 0-1-1H4a1 1 0 0 0-1 1z"/><path d="M13 5v2M13 11v2M13 17v2"/>',
"\ud83c\udf9f":'<path d="M3 7v3a2 2 0 1 1 0 4v3a1 1 0 0 0 1 1h16a1 1 0 0 0 1-1v-3a2 2 0 1 1 0-4V7a1 1 0 0 0-1-1H4a1 1 0 0 0-1 1z"/><path d="M13 5v2M13 11v2M13 17v2"/>',
"\ud83d\udcdd":'<path d="M17 3a2.83 2.83 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5z"/>',
"\u270f\ufe0f":'<path d="M17 3a2.83 2.83 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5z"/>',
"\u270f":'<path d="M17 3a2.83 2.83 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5z"/>',
"\u270e":'<path d="M17 3a2.83 2.83 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5z"/>',
"\ud83d\udd01":'<path d="M17 2l4 4-4 4"/><path d="M3 11V9a4 4 0 0 1 4-4h14"/><path d="M7 22l-4-4 4-4"/><path d="M21 13v2a4 4 0 0 1-4 4H3"/>',
"\ud83d\udd04":'<path d="M17 2l4 4-4 4"/><path d="M3 11V9a4 4 0 0 1 4-4h14"/><path d="M7 22l-4-4 4-4"/><path d="M21 13v2a4 4 0 0 1-4 4H3"/>',
"\u267b\ufe0f":'<path d="M17 2l4 4-4 4"/><path d="M3 11V9a4 4 0 0 1 4-4h14"/><path d="M7 22l-4-4 4-4"/><path d="M21 13v2a4 4 0 0 1-4 4H3"/>',
"\u267b":'<path d="M17 2l4 4-4 4"/><path d="M3 11V9a4 4 0 0 1 4-4h14"/><path d="M7 22l-4-4 4-4"/><path d="M21 13v2a4 4 0 0 1-4 4H3"/>',
"\ud83c\udf89":'<path d="M4 21 8 9l8 8z"/><path d="M14 5 15 3M17 8l2-1M15.5 6.5 19 3M20 12h.01M22 16h.01"/>',
"\ud83d\udccd":'<path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/>',
"\ud83c\udf93":'<path d="M22 10 12 5 2 10l10 5z"/><path d="M6 12v5c3 3 9 3 12 0v-5"/>',
"\ud83d\udc83":'<path d="M9 18V5l12-2v13"/><circle cx="6" cy="18" r="3"/><circle cx="18" cy="16" r="3"/>',
"\ud83c\udfb5":'<path d="M9 18V5l12-2v13"/><circle cx="6" cy="18" r="3"/><circle cx="18" cy="16" r="3"/>',
"\ud83d\uddd1\ufe0f":'<path d="M3 6h18M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2m3 0v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6"/><path d="M10 11v6M14 11v6"/>',
"\ud83d\uddd1":'<path d="M3 6h18M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2m3 0v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6"/><path d="M10 11v6M14 11v6"/>',
"\ud83d\udcf8":'<path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z"/><circle cx="12" cy="13" r="4"/>',
"\ud83d\udcd5":'<path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/>',
"\ud83d\udcda":'<path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/>',
"\ud83d\udcbe":'<path d="M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v11a2 2 0 0 1-2 2z"/><path d="M17 21v-8H7v8M7 3v5h8"/>',
"\ud83d\udc55":'<path d="M20.4 3.5 16 2a4 4 0 0 1-8 0L3.6 3.5a2 2 0 0 0-1.34 2.23l.58 3.47a1 1 0 0 0 .99.84H6v10a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V10h2.15a1 1 0 0 0 .99-.84l.58-3.47A2 2 0 0 0 20.4 3.5z"/>',
"\ud83c\udfac":'<polygon points="23 7 16 12 23 17 23 7"/><rect x="1" y="5" width="15" height="14" rx="2"/>',
"\ud83d\udcfd\ufe0f":'<polygon points="23 7 16 12 23 17 23 7"/><rect x="1" y="5" width="15" height="14" rx="2"/>',
"\ud83d\udcfd":'<polygon points="23 7 16 12 23 17 23 7"/><rect x="1" y="5" width="15" height="14" rx="2"/>',
"\ud83d\udcc1":'<path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"/>',
"\ud83d\uddc4\ufe0f":'<path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"/>',
"\ud83d\uddc4":'<path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"/>',
"\ud83d\udcdc":'<path d="M8 21h12a2 2 0 0 0 2-2v-2H10v2a2 2 0 1 1-4 0V5a2 2 0 1 0-4 0v3h4"/><path d="M19 17V5a2 2 0 0 0-2-2H4"/>',
"\ud83d\uddbc\ufe0f":'<rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="8.5" cy="8.5" r="1.5"/><path d="m21 15-5-5L5 21"/>',
"\ud83d\uddbc":'<rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="8.5" cy="8.5" r="1.5"/><path d="m21 15-5-5L5 21"/>',
"\ud83e\uddfe":'<path d="M4 2v20l2-1 2 1 2-1 2 1 2-1 2 1 2-1 2 1V2l-2 1-2-1-2 1-2-1-2 1-2-1z"/><path d="M8 7h8M8 11h8M8 15h5"/>',
"\ud83d\udee1\ufe0f":'<rect x="3" y="11" width="18" height="11" rx="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/>',
"\ud83d\udee1":'<rect x="3" y="11" width="18" height="11" rx="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/>',
"\ud83d\udd12":'<rect x="3" y="11" width="18" height="11" rx="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/>',
"\ud83d\udd10":'<rect x="3" y="11" width="18" height="11" rx="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/>',
"\ud83d\udda8\ufe0f":'<path d="M6 9V2h12v7"/><path d="M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2"/><rect x="6" y="14" width="12" height="8"/>',
"\ud83d\udda8":'<path d="M6 9V2h12v7"/><path d="M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2"/><rect x="6" y="14" width="12" height="8"/>',
"\ud83d\udcb0":'<path d="M21 12V7H5a2 2 0 0 1 0-4h14v4"/><path d="M3 5v14a2 2 0 0 0 2 2h16v-5"/><path d="M18 12a2 2 0 0 0 0 4h4v-4z"/>',
"\ud83c\udfe6":'<path d="M21 12V7H5a2 2 0 0 1 0-4h14v4"/><path d="M3 5v14a2 2 0 0 0 2 2h16v-5"/><path d="M18 12a2 2 0 0 0 0 4h4v-4z"/>',
"\ud83d\udcc8":'<path d="M23 6 13.5 15.5 8.5 10.5 1 18"/><path d="M17 6h6v6"/>',
"\ud83e\uddee":'<rect x="4" y="2" width="16" height="20" rx="2"/><path d="M8 6h8M8 18h8"/><circle cx="8" cy="10" r=".6"/><circle cx="12" cy="10" r=".6"/><circle cx="16" cy="10" r=".6"/><circle cx="8" cy="14" r=".6"/><circle cx="12" cy="14" r=".6"/><circle cx="16" cy="14" r=".6"/>',
"\ud83c\udf82":'<path d="M20 21v-8a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v8"/><path d="M4 16s.5-1 2-1 2.5 2 4 2 2.5-2 4-2 2.5 2 4 2 2-1 2-1"/><path d="M2 21h20"/><path d="M7 8v2M12 8v2M17 8v2"/>',
"\ud83d\udecd\ufe0f":'<path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"/><path d="M3 6h18"/><path d="M16 10a4 4 0 0 1-8 0"/>',
"\ud83d\udecd":'<path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"/><path d="M3 6h18"/><path d="M16 10a4 4 0 0 1-8 0"/>',
"\ud83d\udc5c":'<path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"/><path d="M3 6h18"/><path d="M16 10a4 4 0 0 1-8 0"/>',
"\ud83d\udd5b":'<circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/>',
"\ud83d\udd67":'<circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/>',
"\ud83d\udd50":'<circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/>',
"\ud83d\udd52":'<circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/>',
"\ud83c\udfeb":'<path d="M14 22v-4a2 2 0 0 0-4 0v4"/><path d="m18 10 4 2v8a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2v-8l4-2"/><path d="M18 5v17M6 5v17"/><path d="m12 2 6 3H6z"/>',
"\ud83d\udd11":'<circle cx="7.5" cy="15.5" r="5.5"/><path d="m21 2-9.6 9.6M15.5 7.5l3 3L22 7l-3-3"/>',
"\ud83e\udeaa":'<rect x="2" y="4" width="20" height="16" rx="2"/><circle cx="8" cy="10" r="2"/><path d="M14 8h4M14 12h4M5 16h6"/>',
"\ud83d\udcc7":'<rect x="2" y="4" width="20" height="16" rx="2"/><circle cx="8" cy="10" r="2"/><path d="M14 8h4M14 12h4M5 16h6"/>',
"\ud83c\udfe0":'<path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><path d="M9 22V12h6v10"/>',
"\ud83c\udfad":'<path d="M12 20c-3.3 0-6-2.7-6-6V8a6 6 0 0 1 12 0v6c0 3.3-2.7 6-6 6z"/><path d="M9 11h.01M15 11h.01M9 15c1 1 5 1 6 0"/>',
"\u2601\ufe0f":'<path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z"/>',
"\u2601":'<path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z"/>',
"\ud83c\udf10":'<circle cx="12" cy="12" r="10"/><path d="M2 12h20"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>',
"\ud83d\udccb":'<path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"/><rect x="8" y="2" width="8" height="4" rx="1"/>',
"\ud83d\udcde":'<path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.8 19.8 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.09 4.18 2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13 1 .35 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.35 1.81.57 2.81.7A2 2 0 0 1 22 16.92z"/>',
"\ud83d\udcac":'<path d="M21 11.5a8.4 8.4 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.4 8.4 0 0 1-3.8-.9L3 21l1.9-5.7a8.4 8.4 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.4 8.4 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8z"/>',
"\u2709\ufe0f":'<rect x="2" y="4" width="20" height="16" rx="2"/><path d="m22 6-10 7L2 6"/>',
"\u2709":'<rect x="2" y="4" width="20" height="16" rx="2"/><path d="m22 6-10 7L2 6"/>',
"\ud83d\udce5":'<rect x="2" y="4" width="20" height="16" rx="2"/><path d="m22 6-10 7L2 6"/>',
"\ud83d\udc4d":'<path d="M7 10v11H4a1 1 0 0 1-1-1v-9a1 1 0 0 1 1-1z"/><path d="M7 10l4-8a2 2 0 0 1 2 2v4h5.5a2 2 0 0 1 2 2.3l-1.3 7a2 2 0 0 1-2 1.7H7"/>',
"\ud83d\udc76":'<path d="M9 12h.01M15 12h.01M10 16c.5.3 1.2.5 2 .5s1.5-.2 2-.5"/><path d="M8 6a4 4 0 0 1 8 0"/><circle cx="12" cy="13" r="9"/>',
"\ud83d\udca7":'<path d="M12 2.7 17.66 8.36a8 8 0 1 1-11.31 0z"/>',
"\ud83e\udd64":'<path d="M6 3h12l-1.4 17a1 1 0 0 1-1 .9H8.4a1 1 0 0 1-1-.9z"/><path d="M5 8h14M10 3l-.5 18M14 3l.5 18"/>',
"\u2728":'<path d="M12 3l1.9 5.8L20 10l-6.1 1.2L12 17l-1.9-5.8L4 10l6.1-1.2z"/><path d="M19 15l.7 2.1L22 18l-2.3.9L19 21l-.7-2.1L16 18z"/>',
"\ud83c\udf97\ufe0f":'<path d="M12 3l1.9 5.8L20 10l-6.1 1.2L12 17l-1.9-5.8L4 10l6.1-1.2z"/><path d="M19 15l.7 2.1L22 18l-2.3.9L19 21l-.7-2.1L16 18z"/>',
"\ud83c\udf97":'<path d="M12 3l1.9 5.8L20 10l-6.1 1.2L12 17l-1.9-5.8L4 10l6.1-1.2z"/><path d="M19 15l.7 2.1L22 18l-2.3.9L19 21l-.7-2.1L16 18z"/>',
"\ud83c\udfc6":'<path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6M18 9h1.5a2.5 2.5 0 0 0 0-5H18M4 22h16M10 14.7V17c0 .6-.5 1-1 1.2C7.9 18.8 7 20.2 7 22M14 14.7V17c0 .6.5 1 1 1.2 1.2.6 2 2 2 4M18 2H6v7a6 6 0 0 0 12 0z"/>',
"\ud83c\udfc5":'<circle cx="12" cy="15" r="6"/><path d="M12 15v.01M8.2 9.3 6 3h5l1.5 4.5M15.8 9.3 18 3h-5l-1.5 4.5"/>',
"\ud83d\udcf1":'<rect x="5" y="2" width="14" height="20" rx="2"/><path d="M12 18h.01"/>',
"\ud83d\udd17":'<path d="M10 13a5 5 0 0 0 7.5.5l3-3a5 5 0 0 0-7-7l-1.7 1.7"/><path d="M14 11a5 5 0 0 0-7.5-.5l-3 3a5 5 0 0 0 7 7l1.7-1.7"/>',
"\ud83c\udfaf":'<circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="6"/><circle cx="12" cy="12" r="2"/>',
"\ud83d\udc41\ufe0f":'<path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/>',
"\ud83d\udc41":'<path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/>',
"\u2b07\ufe0f":'<path d="M12 5v14M19 12l-7 7-7-7"/>',
"\u2b07":'<path d="M12 5v14M19 12l-7 7-7-7"/>',
"\u2b06\ufe0f":'<path d="M12 19V5M5 12l7-7 7 7"/>',
"\u2b06":'<path d="M12 19V5M5 12l7-7 7 7"/>',
"\u2b50":'<polygon points="12 2 15.1 8.3 22 9.3 17 14.1 18.2 21 12 17.8 5.8 21 7 14.1 2 9.3 8.9 8.3" fill="currentColor" stroke="none"/>',
"\u2605":'<polygon points="12 2 15.1 8.3 22 9.3 17 14.1 18.2 21 12 17.8 5.8 21 7 14.1 2 9.3 8.9 8.3" fill="currentColor" stroke="none"/>',
"\ud83c\udfe2":'<path d="M6 22V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v18z"/><path d="M6 12H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h2M18 9h2a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2h-2"/><path d="M10 6h4M10 10h4M10 14h4M10 18h4"/>'};
function wrapSvg(inner){return '<svg class="ico-svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">'+inner+'</svg>';}
var keys=Object.keys(MAP).sort(function(a,b){return b.length-a.length;});
function esc(s){return s.replace(/[.*+?^${}()|[\]\\]/g,'\\$&');}
var pat='('+keys.map(esc).join('|')+')';
var reSplit=new RegExp(pat,'g'),reTest=new RegExp(pat);
var SKIP={SCRIPT:1,STYLE:1,TEXTAREA:1,INPUT:1,SELECT:1,OPTION:1,NOSCRIPT:1,CODE:1,PRE:1};
function inSkip(node){var p=node;while(p&&p.nodeType===1){if(SKIP[p.nodeName])return true;if(p.classList){if(p.classList.contains('ico'))return true;if(p.classList.contains('gt-wrap')||p.classList.contains('skiptranslate'))return true;}if(p.id==='fx-aura'||p.id==='google_translate_element')return true;if(typeof p.className==='string'&&p.className.indexOf('goog')>-1)return true;p=p.parentNode;}return false;}
function processText(node){if(!node||node.nodeType!==3)return;var t=node.nodeValue;if(!t||!reTest.test(t))return;if(inSkip(node.parentNode))return;reSplit.lastIndex=0;var frag=document.createDocumentFragment(),last=0,m;while((m=reSplit.exec(t))){if(m.index>last)frag.appendChild(document.createTextNode(t.slice(last,m.index)));var span=document.createElement('span');span.className='ico';span.setAttribute('aria-hidden','true');span.innerHTML=wrapSvg(MAP[m[0]]);frag.appendChild(span);last=m.index+m[0].length;}if(last<t.length)frag.appendChild(document.createTextNode(t.slice(last)));if(node.parentNode)node.parentNode.replaceChild(frag,node);}
function walk(root){if(!root)return;if(root.nodeType===3){processText(root);return;}if(root.nodeType!==1)return;if(SKIP[root.nodeName]||inSkip(root))return;var tw=document.createTreeWalker(root,NodeFilter.SHOW_TEXT,null),nodes=[],n;while((n=tw.nextNode())){if(reTest.test(n.nodeValue)&&!inSkip(n.parentNode))nodes.push(n);}for(var i=0;i<nodes.length;i++)processText(nodes[i]);}
function hydrate(){
walk(document.body);
new MutationObserver(function(muts){for(var i=0;i<muts.length;i++){var a=muts[i].addedNodes;for(var j=0;j<a.length;j++){var nd=a[j];if(nd.nodeType===3)processText(nd);else if(nd.nodeType===1)walk(nd);}}}).observe(document.body,{childList:true,subtree:true});
var reduceMotion=window.matchMedia&&window.matchMedia('(prefers-reduced-motion: reduce)').matches;
var hasAnime=typeof anime!=='undefined';
if(hasAnime&&!reduceMotion){
  anime({targets:'#fx-aura i.a',translateX:['0vw','6vw'],translateY:['0vh','4vh'],scale:[1,1.12],duration:9000,direction:'alternate',loop:true,easing:'easeInOutSine'});
  anime({targets:'#fx-aura i.b',translateX:['0vw','-5vw'],translateY:['0vh','-3vh'],scale:[1.05,.92],duration:11500,direction:'alternate',loop:true,easing:'easeInOutSine'});
  anime({targets:'#fx-aura .cyber-scan',top:['-4%','104%'],opacity:[0,1,1,0],duration:4200,easing:'linear',loop:true});
  anime({targets:'#fx-aura .cyber-node',opacity:[0,1,0],scale:[.6,1.3,.6],delay:anime.stagger(260),duration:2600,loop:true,easing:'easeInOutSine'});
}
document.addEventListener('pointermove',function(e){var c=e.target&&e.target.closest&&e.target.closest('.scard');if(!c)return;var r=c.getBoundingClientRect();c.style.setProperty('--mx',(e.clientX-r.left)+'px');c.style.setProperty('--my',(e.clientY-r.top)+'px');},{passive:true});
document.addEventListener('pointerdown',function(e){var b=e.target&&e.target.closest&&e.target.closest('.login-btn,.role-big,.ntab');if(!b)return;var r=b.getBoundingClientRect(),d=Math.max(r.width,r.height),s=document.createElement('span');s.className='fx-ripple';s.style.width=s.style.height=d+'px';s.style.left=(e.clientX-r.left-d/2)+'px';s.style.top=(e.clientY-r.top-d/2)+'px';b.appendChild(s);function rm(){s.parentNode&&s.parentNode.removeChild(s);}if(!hasAnime||reduceMotion){setTimeout(rm,500);return;}anime({targets:s,scale:[0,1],opacity:[.32,0],duration:560,easing:'easeOutQuad',complete:rm});},{passive:true});
function watchClass(el,cls,cb){if(!el)return;var has=el.classList.contains(cls);new MutationObserver(function(){var now=el.classList.contains(cls);if(now&&!has)cb(el);has=now;}).observe(el,{attributes:true,attributeFilter:['class']});}
function revealPage(pg){if(!hasAnime||reduceMotion||!pg.children.length)return;anime({targets:pg.children,translateY:['12px','0px'],opacity:[0,1],duration:420,delay:anime.stagger(50),easing:'easeOutCubic'});}
var studentPage=document.getElementById('page-students');watchClass(studentPage,'active',revealPage);
function fxScopeOn(){var ss=document.getElementById('site-screen');var landing=ss&&ss.style.display!=='none';var student=(typeof currentPageId!=='undefined')&&currentPageId==='students';return !!(landing||student);}
function revealModal(mbg){if(!hasAnime||reduceMotion||!fxScopeOn())return;anime({targets:mbg,opacity:[0,1],duration:180,easing:'linear'});if(mbg.id==='m-teacher-social')return;var modal=mbg.querySelector('.modal');if(modal)anime({targets:modal,opacity:[0,1],translateY:['16px','0px'],scale:[.96,1],duration:300,easing:'easeOutCubic'});}
var mbgs=document.querySelectorAll('.mbg');for(var mI=0;mI<mbgs.length;mI++){watchClass(mbgs[mI],'open',revealModal);}
function revealBackdrop(el){if(!hasAnime||reduceMotion)return;anime({targets:el,opacity:[0,1],duration:180,easing:'linear'});}
var backdrops=document.querySelectorAll('.drawer-backdrop');for(var bI=0;bI<backdrops.length;bI++){watchClass(backdrops[bI],'open',revealBackdrop);}
watchClass(document.getElementById('app'),'visible',function(el){if(!hasAnime||reduceMotion)return;anime({targets:el,opacity:[0,1],duration:450,easing:'easeOutCubic'});});
function syncAura(){var aura=document.getElementById('fx-aura');if(aura)aura.style.display=fxScopeOn()?'':'none';}
syncAura();
var ssEl=document.getElementById('site-screen');if(ssEl)new MutationObserver(syncAura).observe(ssEl,{attributes:true,attributeFilter:['style']});
var allPages=document.querySelectorAll('.page');for(var ap=0;ap<allPages.length;ap++){new MutationObserver(syncAura).observe(allPages[ap],{attributes:true,attributeFilter:['class']});}
}
if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',hydrate);else hydrate();
})();
