// ============================================================
// i18n — Auto-translation based on browser language
// ============================================================

const translations = {
  en: {
    // Header
    "site.title": "Sleep Cycle Optimizer",
    "site.subtitle": "Find the perfect bedtime to wake up refreshed",
    // Mode tabs
    "tab.bedtime": "I need to wake up at...",
    "tab.sleepnow": "I want to sleep now",
    // Calculator
    "calc.heading.bedtime": "What time do you need to wake up?",
    "calc.heading.sleepnow": "Going to bed now?",
    "calc.btn.bedtime": "Calculate Bedtime",
    "calc.btn.sleepnow": "Calculate Wake Times",
    "calc.label.hour": "Hour",
    "calc.label.min": "Min",
    "calc.label.ampm": "AM/PM",
    // Settings
    "settings.toggle": "Settings",
    "settings.latency": "Time to fall asleep:",
    "settings.min": "min",
    // Results
    "results.heading.bedtime": "Your Optimal Bedtimes",
    "results.heading.sleepnow": "Your Optimal Wake Times",
    "results.info.bedtime": "To wake up at <strong>{time}</strong>, go to sleep at one of these times:",
    "results.info.sleepnow": "If you go to sleep now (<strong>{time}</strong>), set your alarm for:",
    "results.note": "* Includes ~{min} minutes to fall asleep. Recommended options give you 5-6 full sleep cycles for optimal rest.",
    "results.share": "Share Results",
    "results.recalc": "Calculate Again",
    "results.copied": "Copied!",
    // Timeline
    "timeline.cycles": "cycles",
    "timeline.hours": "hours of sleep",
    "timeline.recommended": "Recommended",
    // Sleep quality
    "quality.poor": "Poor",
    "quality.fair": "Fair",
    "quality.good": "Good",
    "quality.great": "Great",
    // Info section
    "info.heading": "How Sleep Cycles Work",
    "info.p1": "Each sleep cycle lasts approximately <strong>90 minutes</strong> and includes stages of light sleep, deep sleep, and REM (Rapid Eye Movement) sleep. Waking up between cycles\u2014rather than in the middle of one\u2014helps you feel more alert and refreshed.",
    "info.p2": "Most adults need <strong>5 to 6 complete cycles</strong> (7.5\u20139 hours) per night. This calculator factors in an average of <strong>15 minutes</strong> of sleep latency (the time it takes to fall asleep) to give you the most accurate bedtime recommendations.",
    // Explore section
    "explore.heading": "Explore More Sleep Tools",
    "explore.nap.title": "Nap Calculator",
    "explore.nap.desc": "Find the perfect nap length for maximum energy",
    "explore.age.title": "Sleep By Age",
    "explore.age.desc": "How much sleep you need at every age",
    "explore.tips.title": "Sleep Tips",
    "explore.tips.desc": "Science-backed tips to fall asleep faster",
    "explore.howto.title": "How to Use",
    "explore.howto.desc": "Get the most out of this calculator",
    // Bedtime table
    "table.heading": "Bedtime Chart for Common Wake-Up Times",
    "table.intro": "Quick reference: optimal bedtimes for popular wake-up times (based on 5 sleep cycles / 7.5 hours + 15 min to fall asleep).",
    "table.wakeup": "Wake Up",
    "table.6cycles": "6 Cycles (9h)",
    "table.5cycles": "5 Cycles (7.5h)",
    "table.4cycles": "4 Cycles (6h)",
    "table.note": "Green = recommended (5 cycles). Use the calculator above for custom times and adjustable sleep latency.",
    // FAQ
    "faq.heading": "Frequently Asked Questions",
    "faq.q1": "How many hours of sleep do I need?",
    "faq.a1": "Most adults need 7 to 9 hours of sleep per night, which is 5 to 6 complete 90-minute sleep cycles. Individual needs vary, but consistently getting fewer than 6 hours is associated with health risks.",
    "faq.q2": "What is a sleep cycle?",
    "faq.a2": "A sleep cycle is a roughly 90-minute period that includes stages of light sleep (NREM 1-2), deep sleep (NREM 3), and REM sleep. You typically go through 4-6 cycles per night. Waking up between cycles helps you feel more refreshed.",
    "faq.q3": "Why do I feel tired after 8 hours of sleep?",
    "faq.a3": "Feeling tired after 8 hours often means you woke up during a deep sleep phase in the middle of a cycle. Using a sleep cycle calculator to align your wake time with the end of a cycle can help you wake up feeling more alert.",
    "faq.q4": "What is sleep latency?",
    "faq.a4": "Sleep latency is the time it takes to fall asleep after lying down. The average is about 15 minutes. This calculator accounts for sleep latency so the bedtimes you see include that buffer. You can adjust this in the settings.",
    "faq.q5": "Is it better to get 6 hours of sleep or 7.5 hours?",
    "faq.a5": "7.5 hours (5 complete sleep cycles) is generally better than 6 hours (4 cycles). Five cycles give your body enough time for adequate deep sleep and REM sleep, which are critical for memory, immune function, and emotional regulation.",
    "faq.q6": "Should I take a nap if I didn't sleep well?",
    "faq.a6": "A short 20-minute power nap in the early afternoon (1-3 PM) can help compensate for a poor night's sleep without disrupting your next bedtime. Avoid napping after 3 PM or for longer than 30 minutes.",
    "faq.q7": "What time should I go to bed if I wake up at 6 AM?",
    "faq.a7": "For a 6:00 AM wake-up, the optimal bedtimes are 8:45 PM (6 cycles, 9h), 10:15 PM (5 cycles, 7.5h), 11:45 PM (4 cycles, 6h), or 1:15 AM (3 cycles, 4.5h). We recommend 10:15 PM or 8:45 PM for the best rest.",
    "faq.q8": "How can I fall asleep faster?",
    "faq.a8": "Try the 4-7-8 breathing technique: breathe in for 4 seconds, hold for 7, exhale for 8. Also keep your room cool (60-67\u00b0F / 15-19\u00b0C), avoid screens 30 minutes before bed, and maintain a consistent sleep schedule.",
    // Footer
    "footer.about": "About",
    "footer.howto": "How to Use",
    "footer.tips": "Sleep Tips",
    "footer.nap": "Nap Calculator",
    "footer.age": "Sleep By Age",
    "footer.privacy": "Privacy Policy",
    "footer.terms": "Terms of Service",
    "footer.copyright": "\u00a9 2026 Sleep Cycle Optimizer. All rights reserved.",
    "footer.feedback": "Have suggestions?",
    "footer.feedback.link": "Send us feedback",
    "footer.today": "Today:",
    "footer.total": "Total:",
    // Feedback FAB
    "feedback.fab": "Feedback",
    // Cookie banner
    "cookie.text": "We use cookies to improve your experience and collect anonymous usage data. By continuing, you agree to our use of cookies.",
    "cookie.accept": "Accept",
    "cookie.decline": "Decline",
    // Noscript
    "noscript.heading": "JavaScript Required",
    "noscript.text": "This sleep cycle calculator requires JavaScript to function. Please enable JavaScript in your browser settings.",
    // Share text
    "share.calculated": "Calculated with Sleep Cycle Optimizer",
  },

  ko: {
    "site.title": "\uc218\uba74 \uc8fc\uae30 \ucd5c\uc801\ud654\uae30",
    "site.subtitle": "\uc0c1\ucf8c\ud55c \uae30\uc0c1\uc744 \uc704\ud55c \ucd5c\uc801\uc758 \ucde8\uce68 \uc2dc\uac04\uc744 \ucc3e\uc544\ubcf4\uc138\uc694",
    "tab.bedtime": "\uae30\uc0c1 \uc2dc\uac04 \uc124\uc815...",
    "tab.sleepnow": "\uc9c0\uae08 \uc790\uace0 \uc2f6\uc5b4\uc694",
    "calc.heading.bedtime": "\uba87 \uc2dc\uc5d0 \uc77c\uc5b4\ub098\uc57c \ud558\ub098\uc694?",
    "calc.heading.sleepnow": "\uc9c0\uae08 \uc7a0\uc790\ub9ac\uc5d0 \ub4dc\uc2dc\ub098\uc694?",
    "calc.btn.bedtime": "\ucde8\uce68 \uc2dc\uac04 \uacc4\uc0b0",
    "calc.btn.sleepnow": "\uae30\uc0c1 \uc2dc\uac04 \uacc4\uc0b0",
    "calc.label.hour": "\uc2dc",
    "calc.label.min": "\ubd84",
    "calc.label.ampm": "\uc624\uc804/\uc624\ud6c4",
    "settings.toggle": "\uc124\uc815",
    "settings.latency": "\uc7a0\ub4e4\uae30\uae4c\uc9c0 \uac78\ub9ac\ub294 \uc2dc\uac04:",
    "settings.min": "\ubd84",
    "results.heading.bedtime": "\ucd5c\uc801\uc758 \ucde8\uce68 \uc2dc\uac04",
    "results.heading.sleepnow": "\ucd5c\uc801\uc758 \uae30\uc0c1 \uc2dc\uac04",
    "results.info.bedtime": "<strong>{time}</strong>\uc5d0 \uc77c\uc5b4\ub098\ub824\uba74, \ub2e4\uc74c \uc2dc\uac04\uc5d0 \uc7a0\uc790\ub9ac\uc5d0 \ub4dc\uc138\uc694:",
    "results.info.sleepnow": "\uc9c0\uae08 \uc7a0\uc790\ub9ac\uc5d0 \ub4e4\uba74 (<strong>{time}</strong>), \ub2e4\uc74c \uc2dc\uac04\uc5d0 \uc54c\ub78c\uc744 \ub9de\ucd94\uc138\uc694:",
    "results.note": "* \uc7a0\ub4e4\uae30\uae4c\uc9c0 \uc57d {min}\ubd84 \ud3ec\ud568. \ucd94\ucc9c \uc635\uc158\uc740 \ucd5c\uc801\uc758 \ud734\uc2dd\uc744 \uc704\ud55c 5-6\ud68c \uc218\uba74 \uc8fc\uae30\uc785\ub2c8\ub2e4.",
    "results.share": "\uacb0\uacfc \uacf5\uc720",
    "results.recalc": "\ub2e4\uc2dc \uacc4\uc0b0",
    "results.copied": "\ubcf5\uc0ac\ub428!",
    "timeline.cycles": "\uc8fc\uae30",
    "timeline.hours": "\uc2dc\uac04 \uc218\uba74",
    "timeline.recommended": "\ucd94\ucc9c",
    "quality.poor": "\ubd80\uc871",
    "quality.fair": "\ubcf4\ud1b5",
    "quality.good": "\uc88b\uc74c",
    "quality.great": "\uc6b0\uc218",
    "info.heading": "\uc218\uba74 \uc8fc\uae30\ub780?",
    "info.p1": "\uac01 \uc218\uba74 \uc8fc\uae30\ub294 \uc57d <strong>90\ubd84</strong>\uc774\uba70, \uc5ec\uc740 \uc7a0, \uae4a\uc740 \uc7a0, REM(\ube60\ub978 \uc548\uad6c \uc6b4\ub3d9) \uc218\uba74 \ub2e8\uacc4\ub97c \ud3ec\ud568\ud569\ub2c8\ub2e4. \uc8fc\uae30 \uc0ac\uc774\uc5d0 \uae68\uc5b4\ub098\uba74 \ub354 \uc0c1\ucf8c\ud558\uace0 \uac1c\uc6b4\ud558\uac8c \ub290\uaef4\uc9d1\ub2c8\ub2e4.",
    "info.p2": "\ub300\ubd80\ubd84\uc758 \uc131\uc778\uc740 \ud558\ub8fb\ubc24\uc5d0 <strong>5~6\ud68c \uc644\uc804\ud55c \uc8fc\uae30</strong>(7.5~9\uc2dc\uac04)\uac00 \ud544\uc694\ud569\ub2c8\ub2e4. \uc774 \uacc4\uc0b0\uae30\ub294 \ud3c9\uade0 <strong>15\ubd84</strong>\uc758 \uc218\uba74 \uc9c0\uc5f0 \uc2dc\uac04\uc744 \uace0\ub824\ud558\uc5ec \uac00\uc7a5 \uc815\ud655\ud55c \ucde8\uce68 \uc2dc\uac04\uc744 \ucd94\ucc9c\ud569\ub2c8\ub2e4.",
    "explore.heading": "\ub354 \ub9ce\uc740 \uc218\uba74 \ub3c4\uad6c",
    "explore.nap.title": "\ub0ae\uc7a0 \uacc4\uc0b0\uae30",
    "explore.nap.desc": "\ucd5c\ub300 \uc5d0\ub108\uc9c0\ub97c \uc704\ud55c \uc644\ubcbd\ud55c \ub0ae\uc7a0 \uae38\uc774",
    "explore.age.title": "\ub098\uc774\ubcc4 \uc218\uba74",
    "explore.age.desc": "\ub098\uc774\uc5d0 \ub530\ub77c \ud544\uc694\ud55c \uc218\uba74 \uc2dc\uac04",
    "explore.tips.title": "\uc218\uba74 \ud301",
    "explore.tips.desc": "\uacfc\ud559\uc801\uc73c\ub85c \uc785\uc99d\ub41c \ube60\ub978 \uc785\uba74 \ud301",
    "explore.howto.title": "\uc0ac\uc6a9\ubc95",
    "explore.howto.desc": "\uacc4\uc0b0\uae30\ub97c \ucd5c\ub300\ud55c \ud65c\uc6a9\ud558\uc138\uc694",
    "table.heading": "\uc77c\ubc18\uc801\uc778 \uae30\uc0c1 \uc2dc\uac04\ubcc4 \ucde8\uce68 \uc2dc\uac04\ud45c",
    "table.intro": "\ube60\ub978 \ucc38\uace0: \uc778\uae30 \uae30\uc0c1 \uc2dc\uac04\ubcc4 \ucd5c\uc801 \ucde8\uce68 \uc2dc\uac04 (5\ud68c \uc8fc\uae30 / 7.5\uc2dc\uac04 + 15\ubd84 \uae30\uc900).",
    "table.wakeup": "\uae30\uc0c1",
    "table.6cycles": "6\ud68c\uae30 (9\uc2dc\uac04)",
    "table.5cycles": "5\ud68c\uae30 (7.5\uc2dc\uac04)",
    "table.4cycles": "4\ud68c\uae30 (6\uc2dc\uac04)",
    "table.note": "\ucd08\ub85d\uc0c9 = \ucd94\ucc9c (5\ud68c\uae30). \uc704 \uacc4\uc0b0\uae30\ub97c \uc0ac\uc6a9\ud558\uc5ec \ub9de\ucda4 \uc2dc\uac04 \ubc0f \uc218\uba74 \uc9c0\uc5f0 \uc2dc\uac04\uc744 \uc870\uc815\ud558\uc138\uc694.",
    "faq.heading": "\uc790\uc8fc \ubb3b\ub294 \uc9c8\ubb38",
    "faq.q1": "\uba87 \uc2dc\uac04 \uc790\uc57c \ud558\ub098\uc694?",
    "faq.a1": "\ub300\ubd80\ubd84\uc758 \uc131\uc778\uc740 \ud558\ub8fb\ubc24 7~9\uc2dc\uac04\uc758 \uc218\uba74\uc774 \ud544\uc694\ud569\ub2c8\ub2e4. \uc774\ub294 90\ubd84 \uc218\uba74 \uc8fc\uae30 5~6\ud68c\uc5d0 \ud574\ub2f9\ud569\ub2c8\ub2e4.",
    "faq.q2": "\uc218\uba74 \uc8fc\uae30\ub780 \ubb34\uc5c7\uc778\uac00\uc694?",
    "faq.a2": "\uc218\uba74 \uc8fc\uae30\ub294 \uc5ec\uc740 \uc7a0(NREM 1-2), \uae4a\uc740 \uc7a0(NREM 3), REM \uc218\uba74\uc744 \ud3ec\ud568\ud558\ub294 \uc57d 90\ubd84\uc758 \uae30\uac04\uc785\ub2c8\ub2e4. \uc8fc\uae30 \uc0ac\uc774\uc5d0 \uae68\uc5b4\ub098\uba74 \ub354 \uc0c1\ucf8c\ud569\ub2c8\ub2e4.",
    "faq.q3": "8\uc2dc\uac04 \uc790\ub3c4 \uc65c \ud53c\uacf4\ud55c\uac00\uc694?",
    "faq.a3": "8\uc2dc\uac04 \ud6c4\uc5d0\ub3c4 \ud53c\uacf4\ud568\uc744 \ub290\ub07c\ub294 \uac83\uc740 \uae4a\uc740 \uc7a0 \ub2e8\uacc4 \uc911\uac04\uc5d0 \uae68\uc5b4\ub0ac\uae30 \ub54c\ubb38\uc785\ub2c8\ub2e4. \uc218\uba74 \uc8fc\uae30 \uacc4\uc0b0\uae30\ub97c \uc0ac\uc6a9\ud558\uc5ec \uc8fc\uae30 \ub05d\uc5d0 \uae68\uc5b4\ub098\uba74 \ub354 \uac1c\uc6b4\ud569\ub2c8\ub2e4.",
    "faq.q4": "\uc218\uba74 \uc9c0\uc5f0 \uc2dc\uac04\uc774\ub780?",
    "faq.a4": "\uc218\uba74 \uc9c0\uc5f0 \uc2dc\uac04\uc740 \ub204\uc6b4 \ud6c4 \uc7a0\ub4e4\uae30\uae4c\uc9c0 \uac78\ub9ac\ub294 \uc2dc\uac04\uc785\ub2c8\ub2e4. \ud3c9\uade0 \uc57d 15\ubd84\uc774\uba70, \uc774 \uacc4\uc0b0\uae30\ub294 \uc774\ub97c \uace0\ub824\ud569\ub2c8\ub2e4. \uc124\uc815\uc5d0\uc11c \uc870\uc815\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4.",
    "faq.q5": "6\uc2dc\uac04 vs 7.5\uc2dc\uac04, \uc5b4\ub290 \uac83\uc774 \ub354 \ub0ab\ub098\uc694?",
    "faq.a5": "7.5\uc2dc\uac04(5\ud68c \uc8fc\uae30)\uc774 6\uc2dc\uac04(4\ud68c \uc8fc\uae30)\ubcf4\ub2e4 \uc77c\ubc18\uc801\uc73c\ub85c \ub354 \ub0ab\uc2b5\ub2c8\ub2e4. 5\ud68c \uc8fc\uae30\ub294 \uae30\uc5b5, \uba74\uc5ed, \uac10\uc815 \uc870\uc808\uc5d0 \ud544\uc218\uc801\uc778 \uae4a\uc740 \uc7a0\uacfc REM \uc218\uba74\uc744 \ucda9\ubd84\ud788 \uc81c\uacf5\ud569\ub2c8\ub2e4.",
    "faq.q6": "\uc7a0\uc744 \ubabb \uc790\uba74 \ub0ae\uc7a0\uc744 \uc790\uc57c \ud558\ub098\uc694?",
    "faq.a6": "\uc624\ud6c4 1-3\uc2dc \uc0ac\uc774\uc5d0 20\ubd84 \uc815\ub3c4\uc758 \uc9e7\uc740 \ub0ae\uc7a0\uc740 \ub2e4\uc74c \ucde8\uce68\uc5d0 \uc601\ud5a5\uc744 \uc8fc\uc9c0 \uc54a\uace0 \ubcf4\ucda9\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4. \uc624\ud6c4 3\uc2dc \uc774\ud6c4\ub098 30\ubd84 \uc774\uc0c1\uc758 \ub0ae\uc7a0\uc740 \ud53c\ud558\uc138\uc694.",
    "faq.q7": "\uc544\uce68 6\uc2dc\uc5d0 \uc77c\uc5b4\ub098\ub824\uba74 \uba87 \uc2dc\uc5d0 \uc790\uc57c \ud558\ub098\uc694?",
    "faq.a7": "6:00 AM \uae30\uc0c1 \uc2dc, \ucd5c\uc801 \ucde8\uce68 \uc2dc\uac04\uc740 8:45 PM(6\ud68c\uae30, 9\uc2dc\uac04), 10:15 PM(5\ud68c\uae30, 7.5\uc2dc\uac04), 11:45 PM(4\ud68c\uae30, 6\uc2dc\uac04), \ub610\ub294 1:15 AM(3\ud68c\uae30, 4.5\uc2dc\uac04)\uc785\ub2c8\ub2e4.",
    "faq.q8": "\ub354 \ube68\ub9ac \uc7a0\ub4dc\ub294 \ubc29\ubc95\uc740?",
    "faq.a8": "4-7-8 \ud638\ud761\ubc95\uc744 \uc2dc\ub3c4\ud558\uc138\uc694: 4\ucd08 \ub4e4\uc774\uc26c\uace0, 7\ucd08 \ucc38\uace0, 8\ucd08 \ub0b4\uc27c\uc138\uc694. \ubc29\uc744 \uc2dc\uc6d0\ud558\uac8c(15-19\u00b0C) \uc720\uc9c0\ud558\uace0, \uc7a0\uc790\ub9ac \uc804 30\ubd84 \uc804 \ud654\uba74\uc744 \ud53c\ud558\uc138\uc694.",
    "footer.copyright": "\u00a9 2026 Sleep Cycle Optimizer. All rights reserved.",
    "footer.feedback": "\uac1c\uc120 \uc81c\uc548\uc774 \uc788\uc73c\uc2e0\uac00\uc694?",
    "footer.feedback.link": "\ud53c\ub4dc\ubc31 \ubcf4\ub0b4\uae30",
    "footer.about": "\uc18c\uac1c",
    "footer.howto": "\uc0ac\uc6a9\ubc95",
    "footer.tips": "\uc218\uba74 \ud301",
    "footer.nap": "\ub0ae\uc7a0 \uacc4\uc0b0\uae30",
    "footer.age": "\ub098\uc774\ubcc4 \uc218\uba74",
    "footer.privacy": "\uac1c\uc778\uc815\ubcf4 \ucc98\ub9ac\ubc29\uce68",
    "footer.terms": "\uc774\uc6a9\uc57d\uad00",
    "footer.today": "\uc624\ub298:",
    "footer.total": "\uc804\uccb4:",
    "feedback.fab": "\ud53c\ub4dc\ubc31",
    "cookie.text": "\uc6d0\ud65c\ud55c \uacbd\ud5d8\uacfc \uc775\uba85 \uc0ac\uc6a9 \ub370\uc774\ud130 \uc218\uc9d1\uc744 \uc704\ud574 \ucfe0\ud0a4\ub97c \uc0ac\uc6a9\ud569\ub2c8\ub2e4.",
    "cookie.accept": "\ub3d9\uc758",
    "cookie.decline": "\uac70\ubd80",
    "noscript.heading": "JavaScript \ud544\uc694",
    "noscript.text": "\uc774 \uc218\uba74 \uc8fc\uae30 \uacc4\uc0b0\uae30\ub294 JavaScript\uac00 \ud544\uc694\ud569\ub2c8\ub2e4. \ube0c\ub77c\uc6b0\uc800 \uc124\uc815\uc5d0\uc11c JavaScript\ub97c \ud65c\uc131\ud654\ud558\uc138\uc694.",
    "share.calculated": "Sleep Cycle Optimizer\ub85c \uacc4\uc0b0\ub428",
  },

  ja: {
    "site.title": "\u7761\u7720\u30b5\u30a4\u30af\u30eb\u30aa\u30d7\u30c6\u30a3\u30de\u30a4\u30b6\u30fc",
    "site.subtitle": "\u3059\u3063\u304d\u308a\u76ee\u899a\u3081\u308b\u305f\u3081\u306e\u6700\u9069\u306a\u5c31\u5bdd\u6642\u9593\u3092\u898b\u3064\u3051\u307e\u3057\u3087\u3046",
    "tab.bedtime": "\u8d77\u5e8a\u6642\u9593\u3092\u8a2d\u5b9a...",
    "tab.sleepnow": "\u4eca\u3059\u3050\u5bdd\u305f\u3044",
    "calc.heading.bedtime": "\u4f55\u6642\u306b\u8d77\u304d\u308b\u5fc5\u8981\u304c\u3042\u308a\u307e\u3059\u304b\uff1f",
    "calc.heading.sleepnow": "\u4eca\u304b\u3089\u5bdd\u307e\u3059\u304b\uff1f",
    "calc.btn.bedtime": "\u5c31\u5bdd\u6642\u9593\u3092\u8a08\u7b97",
    "calc.btn.sleepnow": "\u8d77\u5e8a\u6642\u9593\u3092\u8a08\u7b97",
    "calc.label.hour": "\u6642",
    "calc.label.min": "\u5206",
    "calc.label.ampm": "AM/PM",
    "settings.toggle": "\u8a2d\u5b9a",
    "settings.latency": "\u5bdd\u4ed8\u304f\u307e\u3067\u306e\u6642\u9593:",
    "settings.min": "\u5206",
    "results.heading.bedtime": "\u6700\u9069\u306a\u5c31\u5bdd\u6642\u9593",
    "results.heading.sleepnow": "\u6700\u9069\u306a\u8d77\u5e8a\u6642\u9593",
    "results.info.bedtime": "<strong>{time}</strong>\u306b\u8d77\u304d\u308b\u306b\u306f\u3001\u6b21\u306e\u6642\u9593\u306b\u5bdd\u307e\u3057\u3087\u3046:",
    "results.info.sleepnow": "\u4eca\u5bdd\u308b\u3068(<strong>{time}</strong>)\u3001\u6b21\u306e\u6642\u9593\u306b\u30a2\u30e9\u30fc\u30e0\u3092\u8a2d\u5b9a:",
    "results.note": "* \u5bdd\u4ed8\u304f\u307e\u3067\u7d04{min}\u5206\u3092\u542b\u3080\u3002\u63a8\u5968\u30aa\u30d7\u30b7\u30e7\u30f3\u306f\u6700\u9069\u306a\u4f11\u606f\u306e\u305f\u3081\u306e5-6\u56de\u306e\u7761\u7720\u30b5\u30a4\u30af\u30eb\u3067\u3059\u3002",
    "results.share": "\u7d50\u679c\u3092\u5171\u6709",
    "results.recalc": "\u518d\u8a08\u7b97",
    "results.copied": "\u30b3\u30d4\u30fc\u3057\u307e\u3057\u305f!",
    "timeline.cycles": "\u30b5\u30a4\u30af\u30eb",
    "timeline.hours": "\u6642\u9593\u306e\u7761\u7720",
    "timeline.recommended": "\u304a\u3059\u3059\u3081",
    "quality.poor": "\u4e0d\u8db3",
    "quality.fair": "\u666e\u901a",
    "quality.good": "\u826f\u597d",
    "quality.great": "\u512a\u79c0",
    "info.heading": "\u7761\u7720\u30b5\u30a4\u30af\u30eb\u306e\u4ed5\u7d44\u307f",
    "info.p1": "\u5404\u7761\u7720\u30b5\u30a4\u30af\u30eb\u306f\u7d04<strong>90\u5206</strong>\u3067\u3001\u6d45\u3044\u7761\u7720\u3001\u6df1\u3044\u7761\u7720\u3001REM\uff08\u6025\u901f\u773c\u7403\u904b\u52d5\uff09\u7761\u7720\u306e\u6bb5\u968e\u3092\u542b\u307f\u307e\u3059\u3002\u30b5\u30a4\u30af\u30eb\u306e\u9593\u306b\u76ee\u899a\u3081\u308b\u3068\u3001\u3088\u308a\u3059\u3063\u304d\u308a\u3068\u611f\u3058\u307e\u3059\u3002",
    "info.p2": "\u307b\u3068\u3093\u3069\u306e\u6210\u4eba\u306f\u4e00\u6669\u306b<strong>5\uff5e6\u56de\u306e\u5b8c\u5168\u306a\u30b5\u30a4\u30af\u30eb</strong>\uff087.5\uff5e9\u6642\u9593\uff09\u304c\u5fc5\u8981\u3067\u3059\u3002\u3053\u306e\u8a08\u7b97\u6a5f\u306f\u5e73\u5747<strong>15\u5206</strong>\u306e\u5165\u7720\u6f5c\u6642\u3092\u8003\u616e\u3057\u3066\u3044\u307e\u3059\u3002",
    "explore.heading": "\u305d\u306e\u4ed6\u306e\u7761\u7720\u30c4\u30fc\u30eb",
    "explore.nap.title": "\u4eee\u7720\u8a08\u7b97\u6a5f",
    "explore.nap.desc": "\u6700\u5927\u306e\u30a8\u30cd\u30eb\u30ae\u30fc\u306e\u305f\u3081\u306e\u5b8c\u74a7\u306a\u4eee\u7720\u6642\u9593",
    "explore.age.title": "\u5e74\u9f62\u5225\u7761\u7720",
    "explore.age.desc": "\u5e74\u9f62\u306b\u5fdc\u3058\u305f\u5fc5\u8981\u7761\u7720\u6642\u9593",
    "explore.tips.title": "\u7761\u7720\u306e\u30b3\u30c4",
    "explore.tips.desc": "\u79d1\u5b66\u7684\u306b\u8a3c\u660e\u3055\u308c\u305f\u5feb\u7720\u306e\u30b3\u30c4",
    "explore.howto.title": "\u4f7f\u3044\u65b9",
    "explore.howto.desc": "\u8a08\u7b97\u6a5f\u3092\u6700\u5927\u9650\u306b\u6d3b\u7528",
    "table.heading": "\u4e00\u822c\u7684\u306a\u8d77\u5e8a\u6642\u9593\u5225\u5c31\u5bdd\u6642\u9593\u8868",
    "table.intro": "\u30af\u30a4\u30c3\u30af\u30ea\u30d5\u30a1\u30ec\u30f3\u30b9: \u4eba\u6c17\u306e\u8d77\u5e8a\u6642\u9593\u306b\u5bfe\u3059\u308b\u6700\u9069\u306a\u5c31\u5bdd\u6642\u9593\u3002",
    "table.wakeup": "\u8d77\u5e8a",
    "table.6cycles": "6\u30b5\u30a4\u30af\u30eb (9\u6642\u9593)",
    "table.5cycles": "5\u30b5\u30a4\u30af\u30eb (7.5\u6642\u9593)",
    "table.4cycles": "4\u30b5\u30a4\u30af\u30eb (6\u6642\u9593)",
    "table.note": "\u7dd1 = \u63a8\u5968\uff085\u30b5\u30a4\u30af\u30eb\uff09\u3002\u4e0a\u306e\u8a08\u7b97\u6a5f\u3067\u30ab\u30b9\u30bf\u30e0\u6642\u9593\u3092\u8a2d\u5b9a\u3067\u304d\u307e\u3059\u3002",
    "faq.heading": "\u3088\u304f\u3042\u308b\u8cea\u554f",
    "faq.q1": "\u4f55\u6642\u9593\u5bdd\u308c\u3070\u3044\u3044\u3067\u3059\u304b\uff1f",
    "faq.a1": "\u307b\u3068\u3093\u3069\u306e\u6210\u4eba\u306f\u4e00\u665a7\uff5e9\u6642\u9593\u306e\u7761\u7720\u304c\u5fc5\u8981\u3067\u3059\u3002\u3053\u308c\u306f90\u5206\u306e\u7761\u7720\u30b5\u30a4\u30af\u30eb5\uff5e6\u56de\u306b\u76f8\u5f53\u3057\u307e\u3059\u3002",
    "faq.q2": "\u7761\u7720\u30b5\u30a4\u30af\u30eb\u3068\u306f\uff1f",
    "faq.a2": "\u7761\u7720\u30b5\u30a4\u30af\u30eb\u306f\u3001\u6d45\u3044\u7761\u7720\u3001\u6df1\u3044\u7761\u7720\u3001REM\u7761\u7720\u3092\u542b\u3080\u7d0490\u5206\u306e\u671f\u9593\u3067\u3059\u3002\u30b5\u30a4\u30af\u30eb\u9593\u306b\u76ee\u899a\u3081\u308b\u3068\u3088\u308a\u3059\u3063\u304d\u308a\u3057\u307e\u3059\u3002",
    "faq.q3": "8\u6642\u9593\u5bdd\u3066\u3082\u306a\u305c\u75b2\u308c\u308b\u306e\uff1f",
    "faq.a3": "8\u6642\u9593\u5f8c\u3067\u3082\u75b2\u308c\u3092\u611f\u3058\u308b\u306e\u306f\u3001\u6df1\u3044\u7761\u7720\u6bb5\u968e\u306e\u9014\u4e2d\u3067\u76ee\u899a\u3081\u305f\u53ef\u80fd\u6027\u304c\u3042\u308a\u307e\u3059\u3002\u7761\u7720\u30b5\u30a4\u30af\u30eb\u306e\u7d42\u308f\u308a\u306b\u5408\u308f\u305b\u308b\u3068\u3088\u308a\u30b9\u30c3\u30ad\u30ea\u76ee\u899a\u3081\u3089\u308c\u307e\u3059\u3002",
    "faq.q4": "\u5165\u7720\u6f5c\u6642\u3068\u306f\uff1f",
    "faq.a4": "\u5165\u7720\u6f5c\u6642\u306f\u6a2a\u306b\u306a\u3063\u3066\u304b\u3089\u5bdd\u4ed8\u304f\u307e\u3067\u306e\u6642\u9593\u3067\u3059\u3002\u5e73\u5747\u7d0415\u5206\u3067\u3001\u3053\u306e\u8a08\u7b97\u6a5f\u306f\u3053\u308c\u3092\u8003\u616e\u3057\u3066\u3044\u307e\u3059\u3002",
    "faq.q5": "6\u6642\u9593\u30688.5\u6642\u9593\u3001\u3069\u3061\u3089\u304c\u826f\u3044\uff1f",
    "faq.a5": "7.5\u6642\u9593\uff085\u30b5\u30a4\u30af\u30eb\uff09\u304c6\u6642\u9593\uff084\u30b5\u30a4\u30af\u30eb\uff09\u3088\u308a\u4e00\u822c\u7684\u306b\u826f\u3044\u3067\u3059\u3002\u8a18\u61b6\u3001\u514d\u75ab\u3001\u611f\u60c5\u8abf\u7bc0\u306b\u5fc5\u8981\u306a\u6df1\u3044\u7761\u7720\u3068REM\u7761\u7720\u3092\u5341\u5206\u306b\u5f97\u3089\u308c\u307e\u3059\u3002",
    "faq.q6": "\u7761\u7720\u4e0d\u8db3\u306e\u6642\u306f\u4eee\u7720\u3059\u3079\u304d\uff1f",
    "faq.a6": "\u5348\u5f8c1-3\u6642\u306b20\u5206\u7a0b\u5ea6\u306e\u77ed\u3044\u4eee\u7720\u306f\u3001\u6b21\u306e\u5c31\u5bdd\u306b\u5f71\u97ff\u3092\u4e0e\u3048\u305a\u306b\u88dc\u5145\u3067\u304d\u307e\u3059\u3002\u5348\u5f8c3\u6642\u4ee5\u964d\u308430\u5206\u4ee5\u4e0a\u306e\u4eee\u7720\u306f\u907f\u3051\u307e\u3057\u3087\u3046\u3002",
    "faq.q7": "\u671d6\u6642\u306b\u8d77\u304d\u308b\u306b\u306f\u4f55\u6642\u306b\u5bdd\u308c\u3070\u3044\u3044\uff1f",
    "faq.a7": "6:00 AM\u8d77\u5e8a\u306e\u5834\u5408\u30018:45 PM(6\u30b5\u30a4\u30af\u30eb)\u300110:15 PM(5\u30b5\u30a4\u30af\u30eb)\u300111:45 PM(4\u30b5\u30a4\u30af\u30eb)\u3001\u307e\u305f\u306f1:15 AM(3\u30b5\u30a4\u30af\u30eb)\u304c\u6700\u9069\u3067\u3059\u3002",
    "faq.q8": "\u65e9\u304f\u5bdd\u4ed8\u304f\u65b9\u6cd5\u306f\uff1f",
    "faq.a8": "4-7-8\u547c\u5438\u6cd5\u3092\u8a66\u3057\u3066\u307f\u3066\u304f\u3060\u3055\u3044\u30024\u79d2\u5438\u3063\u3066\u30017\u79d2\u6b62\u3081\u30018\u79d2\u5410\u304f\u3002\u90e8\u5c4b\u3092\u6dbc\u3057\u304f\u4fdd\u3061(15-19\u00b0C)\u3001\u5bdd\u308b30\u5206\u524d\u306b\u753b\u9762\u3092\u907f\u3051\u307e\u3057\u3087\u3046\u3002",
    "footer.copyright": "\u00a9 2026 Sleep Cycle Optimizer. All rights reserved.",
    "footer.feedback": "\u3054\u63d0\u6848\u306f\u3042\u308a\u307e\u3059\u304b\uff1f",
    "footer.feedback.link": "\u30d5\u30a3\u30fc\u30c9\u30d0\u30c3\u30af\u3092\u9001\u308b",
    "footer.about": "\u7d39\u4ecb",
    "footer.howto": "\u4f7f\u3044\u65b9",
    "footer.tips": "\u7761\u7720\u306e\u30b3\u30c4",
    "footer.nap": "\u4eee\u7720\u8a08\u7b97\u6a5f",
    "footer.age": "\u5e74\u9f62\u5225\u7761\u7720",
    "footer.privacy": "\u30d7\u30e9\u30a4\u30d0\u30b7\u30fc\u30dd\u30ea\u30b7\u30fc",
    "footer.terms": "\u5229\u7528\u898f\u7d04",
    "footer.today": "\u4eca\u65e5:",
    "footer.total": "\u5408\u8a08:",
    "feedback.fab": "\u30d5\u30a3\u30fc\u30c9\u30d0\u30c3\u30af",
    "cookie.text": "\u7d4c\u9a13\u306e\u5411\u4e0a\u3068\u533f\u540d\u306e\u4f7f\u7528\u30c7\u30fc\u30bf\u53ce\u96c6\u306e\u305f\u3081\u306bCookie\u3092\u4f7f\u7528\u3057\u3066\u3044\u307e\u3059\u3002",
    "cookie.accept": "\u540c\u610f",
    "cookie.decline": "\u62d2\u5426",
    "noscript.heading": "JavaScript\u304c\u5fc5\u8981",
    "noscript.text": "\u3053\u306e\u7761\u7720\u30b5\u30a4\u30af\u30eb\u8a08\u7b97\u6a5f\u306b\u306fJavaScript\u304c\u5fc5\u8981\u3067\u3059\u3002",
    "share.calculated": "Sleep Cycle Optimizer\u3067\u8a08\u7b97",
  },

  zh: {
    "site.title": "\u7761\u7720\u5468\u671f\u4f18\u5316\u5668",
    "site.subtitle": "\u627e\u5230\u6700\u4f73\u5c31\u5bdd\u65f6\u95f4\uff0c\u795e\u6e05\u6c14\u723d\u5730\u9192\u6765",
    "tab.bedtime": "\u6211\u9700\u8981\u5728...\u8d77\u5e8a",
    "tab.sleepnow": "\u6211\u73b0\u5728\u60f3\u7761\u89c9",
    "calc.heading.bedtime": "\u4f60\u9700\u8981\u51e0\u70b9\u8d77\u5e8a\uff1f",
    "calc.heading.sleepnow": "\u73b0\u5728\u51c6\u5907\u7761\u89c9\uff1f",
    "calc.btn.bedtime": "\u8ba1\u7b97\u5c31\u5bdd\u65f6\u95f4",
    "calc.btn.sleepnow": "\u8ba1\u7b97\u8d77\u5e8a\u65f6\u95f4",
    "calc.label.hour": "\u65f6",
    "calc.label.min": "\u5206",
    "calc.label.ampm": "\u4e0a\u5348/\u4e0b\u5348",
    "settings.toggle": "\u8bbe\u7f6e",
    "settings.latency": "\u5165\u7761\u6240\u9700\u65f6\u95f4:",
    "settings.min": "\u5206\u949f",
    "results.heading.bedtime": "\u6700\u4f73\u5c31\u5bdd\u65f6\u95f4",
    "results.heading.sleepnow": "\u6700\u4f73\u8d77\u5e8a\u65f6\u95f4",
    "results.info.bedtime": "\u8981\u5728<strong>{time}</strong>\u8d77\u5e8a\uff0c\u8bf7\u5728\u4ee5\u4e0b\u65f6\u95f4\u5165\u7761:",
    "results.info.sleepnow": "\u5982\u679c\u73b0\u5728\u7761\u89c9(<strong>{time}</strong>)\uff0c\u8bf7\u8bbe\u7f6e\u95f9\u949f:",
    "results.note": "* \u5305\u542b\u7ea6{min}\u5206\u949f\u5165\u7761\u65f6\u95f4\u3002\u63a8\u8350\u9009\u9879\u63d0\u4f9b5-6\u4e2a\u5b8c\u6574\u7761\u7720\u5468\u671f\u3002",
    "results.share": "\u5206\u4eab\u7ed3\u679c",
    "results.recalc": "\u91cd\u65b0\u8ba1\u7b97",
    "results.copied": "\u5df2\u590d\u5236!",
    "timeline.cycles": "\u5468\u671f",
    "timeline.hours": "\u5c0f\u65f6\u7761\u7720",
    "timeline.recommended": "\u63a8\u8350",
    "quality.poor": "\u4e0d\u8db3",
    "quality.fair": "\u4e00\u822c",
    "quality.good": "\u826f\u597d",
    "quality.great": "\u4f18\u79c0",
    "info.heading": "\u7761\u7720\u5468\u671f\u5982\u4f55\u8fd0\u4f5c",
    "info.p1": "\u6bcf\u4e2a\u7761\u7720\u5468\u671f\u6301\u7eed\u7ea6<strong>90\u5206\u949f</strong>\uff0c\u5305\u62ec\u6d45\u7761\u7720\u3001\u6df1\u7761\u7720\u548cREM\uff08\u5feb\u901f\u773c\u7403\u8fd0\u52a8\uff09\u7761\u7720\u9636\u6bb5\u3002\u5728\u5468\u671f\u4e4b\u95f4\u9192\u6765\u4f1a\u8ba9\u4f60\u611f\u89c9\u66f4\u6e05\u9192\u3002",
    "info.p2": "\u5927\u591a\u6570\u6210\u4eba\u6bcf\u665a\u9700\u8981<strong>5\u52306\u4e2a\u5b8c\u6574\u5468\u671f</strong>\uff087.5-9\u5c0f\u65f6\uff09\u3002\u672c\u8ba1\u7b97\u5668\u8003\u8651\u4e86\u5e73\u5747<strong>15\u5206\u949f</strong>\u7684\u5165\u7761\u65f6\u95f4\u3002",
    "explore.heading": "\u66f4\u591a\u7761\u7720\u5de5\u5177",
    "explore.nap.title": "\u5c0f\u7761\u8ba1\u7b97\u5668",
    "explore.nap.desc": "\u627e\u5230\u6700\u4f73\u5c0f\u7761\u65f6\u957f",
    "explore.age.title": "\u6309\u5e74\u9f84\u7761\u7720",
    "explore.age.desc": "\u4e0d\u540c\u5e74\u9f84\u9700\u8981\u591a\u5c11\u7761\u7720",
    "explore.tips.title": "\u7761\u7720\u5c0f\u8d34\u58eb",
    "explore.tips.desc": "\u79d1\u5b66\u9a8c\u8bc1\u7684\u5feb\u901f\u5165\u7761\u6280\u5de7",
    "explore.howto.title": "\u4f7f\u7528\u6307\u5357",
    "explore.howto.desc": "\u5145\u5206\u5229\u7528\u8ba1\u7b97\u5668",
    "table.heading": "\u5e38\u89c1\u8d77\u5e8a\u65f6\u95f4\u7684\u5c31\u5bdd\u65f6\u95f4\u8868",
    "table.intro": "\u5feb\u901f\u53c2\u8003: \u70ed\u95e8\u8d77\u5e8a\u65f6\u95f4\u7684\u6700\u4f73\u5c31\u5bdd\u65f6\u95f4\u3002",
    "table.wakeup": "\u8d77\u5e8a",
    "table.6cycles": "6\u5468\u671f (9\u5c0f\u65f6)",
    "table.5cycles": "5\u5468\u671f (7.5\u5c0f\u65f6)",
    "table.4cycles": "4\u5468\u671f (6\u5c0f\u65f6)",
    "table.note": "\u7eff\u8272 = \u63a8\u8350\uff085\u5468\u671f\uff09\u3002\u4f7f\u7528\u4e0a\u65b9\u8ba1\u7b97\u5668\u81ea\u5b9a\u4e49\u65f6\u95f4\u3002",
    "faq.heading": "\u5e38\u89c1\u95ee\u9898",
    "faq.q1": "\u6211\u9700\u8981\u7761\u591a\u5c11\u5c0f\u65f6\uff1f",
    "faq.a1": "\u5927\u591a\u6570\u6210\u4eba\u6bcf\u665a\u9700\u89817-9\u5c0f\u65f6\u7761\u7720\uff0c\u53575-6\u4e2a\u5b8c\u6574\u768490\u5206\u949f\u7761\u7720\u5468\u671f\u3002",
    "faq.q2": "\u4ec0\u4e48\u662f\u7761\u7720\u5468\u671f\uff1f",
    "faq.a2": "\u7761\u7720\u5468\u671f\u662f\u7ea690\u5206\u949f\u7684\u671f\u95f4\uff0c\u5305\u62ec\u6d45\u7761\u7720\u3001\u6df1\u7761\u7720\u548cREM\u7761\u7720\u3002\u5728\u5468\u671f\u4e4b\u95f4\u9192\u6765\u4f1a\u8ba9\u4f60\u66f4\u6e05\u9192\u3002",
    "faq.q3": "\u4e3a\u4ec0\u4e48\u77618\u5c0f\u65f6\u8fd8\u662f\u89c9\u5f97\u7d2f\uff1f",
    "faq.a3": "\u77618\u5c0f\u65f6\u540e\u4ecd\u611f\u89c9\u7d2f\uff0c\u53ef\u80fd\u662f\u56e0\u4e3a\u4f60\u5728\u6df1\u7761\u7720\u9636\u6bb5\u4e2d\u95f4\u9192\u6765\u4e86\u3002\u4f7f\u7528\u7761\u7720\u5468\u671f\u8ba1\u7b97\u5668\u5bf9\u9f50\u5468\u671f\u7ed3\u675f\u65f6\u95f4\u53ef\u4ee5\u5e2e\u52a9\u4f60\u66f4\u6e05\u9192\u5730\u9192\u6765\u3002",
    "faq.q4": "\u4ec0\u4e48\u662f\u5165\u7761\u6f5c\u4f0f\u671f\uff1f",
    "faq.a4": "\u5165\u7761\u6f5c\u4f0f\u671f\u662f\u8eba\u4e0b\u540e\u5165\u7761\u6240\u9700\u7684\u65f6\u95f4\u3002\u5e73\u5747\u7ea615\u5206\u949f\u3002\u672c\u8ba1\u7b97\u5668\u5df2\u8003\u8651\u6b64\u56e0\u7d20\u3002",
    "faq.q5": "\u77616\u5c0f\u65f6\u8fd8\u662f7.5\u5c0f\u65f6\u66f4\u597d\uff1f",
    "faq.a5": "7.5\u5c0f\u65f6\uff085\u4e2a\u5468\u671f\uff09\u901a\u5e38\u6bd46\u5c0f\u65f6\uff084\u4e2a\u5468\u671f\uff09\u66f4\u597d\u3002\u8bb0\u5fc6\u3001\u514d\u75ab\u548c\u60c5\u7eea\u8c03\u8282\u90fd\u9700\u8981\u5145\u8db3\u7684\u6df1\u7761\u7720\u548cREM\u7761\u7720\u3002",
    "faq.q6": "\u7761\u4e0d\u597d\u5e94\u8be5\u5c0f\u7761\u5417\uff1f",
    "faq.a6": "\u4e0b\u53481-3\u70b9\u77ed\u775220\u5206\u949f\u53ef\u4ee5\u5e2e\u52a9\u8865\u5145\uff0c\u4e0d\u4f1a\u5f71\u54cd\u665a\u4e0a\u7761\u7720\u3002\u907f\u514d\u4e0b\u53483\u70b9\u540e\u62163\u5206\u949f\u4ee5\u4e0a\u7684\u5c0f\u7761\u3002",
    "faq.q7": "\u65e96\u70b9\u8d77\u5e8a\u5e94\u8be5\u51e0\u70b9\u7761\uff1f",
    "faq.a7": "\u65e96:00\u8d77\u5e8a\u65f6\uff0c\u6700\u4f73\u5c31\u5bdd\u65f6\u95f4\u4e3a8:45 PM(6\u5468\u671f)\u300110:15 PM(5\u5468\u671f)\u300111:45 PM(4\u5468\u671f)\u62161:15 AM(3\u5468\u671f)\u3002",
    "faq.q8": "\u5982\u4f55\u66f4\u5feb\u5165\u7761\uff1f",
    "faq.a8": "\u5c1d\u8bd54-7-8\u547c\u5438\u6cd5: \u54384\u79d2\u3001\u5c4f\u4f4f7\u79d2\u3001\u547c8\u79d2\u3002\u4fdd\u6301\u623f\u95f4\u51c9\u723d(15-19\u00b0C)\uff0c\u7761\u524d30\u5206\u949f\u907f\u514d\u770b\u5c4f\u5e55\u3002",
    "footer.copyright": "\u00a9 2026 Sleep Cycle Optimizer. All rights reserved.",
    "footer.feedback": "\u6709\u5efa\u8bae\u5417\uff1f",
    "footer.feedback.link": "\u53d1\u9001\u53cd\u9988",
    "footer.about": "\u5173\u4e8e",
    "footer.howto": "\u4f7f\u7528\u6307\u5357",
    "footer.tips": "\u7761\u7720\u5c0f\u8d34\u58eb",
    "footer.nap": "\u5c0f\u7761\u8ba1\u7b97\u5668",
    "footer.age": "\u6309\u5e74\u9f84\u7761\u7720",
    "footer.privacy": "\u9690\u79c1\u653f\u7b56",
    "footer.terms": "\u670d\u52a1\u6761\u6b3e",
    "footer.today": "\u4eca\u65e5:",
    "footer.total": "\u603b\u8ba1:",
    "feedback.fab": "\u53cd\u9988",
    "cookie.text": "\u6211\u4eec\u4f7f\u7528Cookie\u6765\u6539\u5584\u4f53\u9a8c\u548c\u6536\u96c6\u533f\u540d\u4f7f\u7528\u6570\u636e\u3002",
    "cookie.accept": "\u540c\u610f",
    "cookie.decline": "\u62d2\u7edd",
    "noscript.heading": "\u9700\u8981JavaScript",
    "noscript.text": "\u6b64\u7761\u7720\u5468\u671f\u8ba1\u7b97\u5668\u9700\u8981JavaScript\u3002",
    "share.calculated": "\u7531Sleep Cycle Optimizer\u8ba1\u7b97",
  },

  es: {
    "site.title": "Optimizador de Ciclos de Sue\u00f1o",
    "site.subtitle": "Encuentra la hora perfecta para dormir y despierta renovado",
    "tab.bedtime": "Necesito despertar a las...",
    "tab.sleepnow": "Quiero dormir ahora",
    "calc.heading.bedtime": "\u00bfA qu\u00e9 hora necesitas despertar?",
    "calc.heading.sleepnow": "\u00bfTe vas a dormir ahora?",
    "calc.btn.bedtime": "Calcular Hora de Dormir",
    "calc.btn.sleepnow": "Calcular Hora de Despertar",
    "calc.label.hour": "Hora",
    "calc.label.min": "Min",
    "calc.label.ampm": "AM/PM",
    "settings.toggle": "Ajustes",
    "settings.latency": "Tiempo para quedarse dormido:",
    "settings.min": "min",
    "results.heading.bedtime": "Tus Horas \u00d3ptimas para Dormir",
    "results.heading.sleepnow": "Tus Horas \u00d3ptimas para Despertar",
    "results.info.bedtime": "Para despertar a las <strong>{time}</strong>, du\u00e9rmete a una de estas horas:",
    "results.info.sleepnow": "Si te duermes ahora (<strong>{time}</strong>), pon la alarma a las:",
    "results.note": "* Incluye ~{min} minutos para quedarse dormido. Las opciones recomendadas ofrecen 5-6 ciclos completos.",
    "results.share": "Compartir Resultados",
    "results.recalc": "Calcular de Nuevo",
    "results.copied": "\u00a1Copiado!",
    "timeline.cycles": "ciclos",
    "timeline.hours": "horas de sue\u00f1o",
    "timeline.recommended": "Recomendado",
    "quality.poor": "Pobre",
    "quality.fair": "Regular",
    "quality.good": "Bueno",
    "quality.great": "Excelente",
    "info.heading": "C\u00f3mo Funcionan los Ciclos de Sue\u00f1o",
    "info.p1": "Cada ciclo de sue\u00f1o dura aproximadamente <strong>90 minutos</strong> e incluye etapas de sue\u00f1o ligero, sue\u00f1o profundo y sue\u00f1o REM. Despertar entre ciclos te ayuda a sentirte m\u00e1s alerta y renovado.",
    "info.p2": "La mayor\u00eda de adultos necesitan <strong>5 a 6 ciclos completos</strong> (7.5\u20139 horas) por noche. Esta calculadora incluye un promedio de <strong>15 minutos</strong> de latencia del sue\u00f1o.",
    "explore.heading": "M\u00e1s Herramientas de Sue\u00f1o",
    "explore.nap.title": "Calculadora de Siesta",
    "explore.nap.desc": "Encuentra la duraci\u00f3n perfecta de siesta",
    "explore.age.title": "Sue\u00f1o por Edad",
    "explore.age.desc": "Cu\u00e1nto sue\u00f1o necesitas seg\u00fan tu edad",
    "explore.tips.title": "Consejos de Sue\u00f1o",
    "explore.tips.desc": "Consejos cient\u00edficos para dormir m\u00e1s r\u00e1pido",
    "explore.howto.title": "C\u00f3mo Usar",
    "explore.howto.desc": "Saca el m\u00e1ximo provecho de la calculadora",
    "table.heading": "Tabla de Horas de Dormir para Horas Comunes de Despertar",
    "table.intro": "Referencia r\u00e1pida: horas \u00f3ptimas para dormir seg\u00fan horas populares de despertar.",
    "table.wakeup": "Despertar",
    "table.6cycles": "6 Ciclos (9h)",
    "table.5cycles": "5 Ciclos (7.5h)",
    "table.4cycles": "4 Ciclos (6h)",
    "table.note": "Verde = recomendado (5 ciclos). Usa la calculadora para tiempos personalizados.",
    "faq.heading": "Preguntas Frecuentes",
    "faq.q1": "\u00bfCu\u00e1ntas horas de sue\u00f1o necesito?",
    "faq.a1": "La mayor\u00eda de adultos necesitan de 7 a 9 horas de sue\u00f1o por noche, lo que equivale a 5-6 ciclos completos de 90 minutos.",
    "faq.q2": "\u00bfQu\u00e9 es un ciclo de sue\u00f1o?",
    "faq.a2": "Un ciclo de sue\u00f1o es un per\u00edodo de aproximadamente 90 minutos que incluye sue\u00f1o ligero, profundo y REM. Despertar entre ciclos te ayuda a sentirte m\u00e1s renovado.",
    "faq.q3": "\u00bfPor qu\u00e9 me siento cansado despu\u00e9s de 8 horas de sue\u00f1o?",
    "faq.a3": "Sentirse cansado despu\u00e9s de 8 horas suele significar que despertaste durante una fase de sue\u00f1o profundo. Alinear tu despertar con el final de un ciclo puede ayudarte.",
    "faq.q4": "\u00bfQu\u00e9 es la latencia del sue\u00f1o?",
    "faq.a4": "La latencia del sue\u00f1o es el tiempo que tardas en quedarte dormido. El promedio es de unos 15 minutos. Esta calculadora lo considera.",
    "faq.q5": "\u00bfEs mejor dormir 6 horas o 7.5 horas?",
    "faq.a5": "7.5 horas (5 ciclos) es generalmente mejor que 6 horas (4 ciclos). Cinco ciclos proporcionan suficiente sue\u00f1o profundo y REM para la memoria, inmunidad y regulaci\u00f3n emocional.",
    "faq.q6": "\u00bfDebo tomar una siesta si no dorm\u00ed bien?",
    "faq.a6": "Una siesta corta de 20 minutos por la tarde (1-3 PM) puede ayudar sin afectar tu pr\u00f3ximo sue\u00f1o nocturno. Evita siestas despu\u00e9s de las 3 PM.",
    "faq.q7": "\u00bfA qu\u00e9 hora debo acostarme si me despierto a las 6 AM?",
    "faq.a7": "Para despertar a las 6:00 AM: 8:45 PM (6 ciclos), 10:15 PM (5 ciclos), 11:45 PM (4 ciclos) o 1:15 AM (3 ciclos).",
    "faq.q8": "\u00bfC\u00f3mo puedo dormirme m\u00e1s r\u00e1pido?",
    "faq.a8": "Prueba la t\u00e9cnica de respiraci\u00f3n 4-7-8: inhala 4 segundos, mant\u00e9n 7, exhala 8. Mant\u00e9n tu habitaci\u00f3n fresca (15-19\u00b0C) y evita pantallas 30 minutos antes de dormir.",
    "footer.copyright": "\u00a9 2026 Sleep Cycle Optimizer. Todos los derechos reservados.",
    "footer.feedback": "\u00bfTienes sugerencias?",
    "footer.feedback.link": "Env\u00edanos tu opini\u00f3n",
    "footer.about": "Acerca de",
    "footer.howto": "C\u00f3mo Usar",
    "footer.tips": "Consejos",
    "footer.nap": "Calculadora de Siesta",
    "footer.age": "Sue\u00f1o por Edad",
    "footer.privacy": "Pol\u00edtica de Privacidad",
    "footer.terms": "T\u00e9rminos de Servicio",
    "footer.today": "Hoy:",
    "footer.total": "Total:",
    "feedback.fab": "Opini\u00f3n",
    "cookie.text": "Usamos cookies para mejorar tu experiencia y recopilar datos de uso an\u00f3nimos.",
    "cookie.accept": "Aceptar",
    "cookie.decline": "Rechazar",
    "noscript.heading": "JavaScript Requerido",
    "noscript.text": "Esta calculadora de ciclos de sue\u00f1o requiere JavaScript.",
    "share.calculated": "Calculado con Sleep Cycle Optimizer",
  },

  de: {
    "site.title": "Schlafzyklus-Optimierer",
    "site.subtitle": "Finde die perfekte Schlafenszeit f\u00fcr erholsames Aufwachen",
    "tab.bedtime": "Ich muss aufwachen um...",
    "tab.sleepnow": "Ich m\u00f6chte jetzt schlafen",
    "calc.heading.bedtime": "Wann musst du aufwachen?",
    "calc.heading.sleepnow": "Gehst du jetzt ins Bett?",
    "calc.btn.bedtime": "Schlafenszeit berechnen",
    "calc.btn.sleepnow": "Aufwachzeit berechnen",
    "calc.label.hour": "Std",
    "calc.label.min": "Min",
    "calc.label.ampm": "AM/PM",
    "settings.toggle": "Einstellungen",
    "settings.latency": "Zeit zum Einschlafen:",
    "settings.min": "Min",
    "results.heading.bedtime": "Deine optimalen Schlafenszeiten",
    "results.heading.sleepnow": "Deine optimalen Aufwachzeiten",
    "results.info.bedtime": "Um um <strong>{time}</strong> aufzuwachen, gehe zu einer dieser Zeiten schlafen:",
    "results.info.sleepnow": "Wenn du jetzt schl\u00e4fst (<strong>{time}</strong>), stelle deinen Wecker auf:",
    "results.note": "* Enth\u00e4lt ~{min} Minuten zum Einschlafen. Empfohlene Optionen bieten 5-6 vollst\u00e4ndige Schlafzyklen.",
    "results.share": "Ergebnisse teilen",
    "results.recalc": "Neu berechnen",
    "results.copied": "Kopiert!",
    "timeline.cycles": "Zyklen",
    "timeline.hours": "Stunden Schlaf",
    "timeline.recommended": "Empfohlen",
    "quality.poor": "Schlecht",
    "quality.fair": "M\u00e4\u00dfig",
    "quality.good": "Gut",
    "quality.great": "Sehr gut",
    "info.heading": "Wie Schlafzyklen funktionieren",
    "info.p1": "Jeder Schlafzyklus dauert etwa <strong>90 Minuten</strong> und umfasst Phasen des leichten Schlafs, Tiefschlafs und REM-Schlafs. Zwischen den Zyklen aufzuwachen hilft dir, dich wacher zu f\u00fchlen.",
    "info.p2": "Die meisten Erwachsenen ben\u00f6tigen <strong>5 bis 6 vollst\u00e4ndige Zyklen</strong> (7,5\u20139 Stunden) pro Nacht. Dieser Rechner ber\u00fccksichtigt durchschnittlich <strong>15 Minuten</strong> Einschlafzeit.",
    "explore.heading": "Weitere Schlaf-Tools",
    "explore.nap.title": "Nickerchen-Rechner",
    "explore.nap.desc": "Finde die perfekte Nickerchenl\u00e4nge",
    "explore.age.title": "Schlaf nach Alter",
    "explore.age.desc": "Wie viel Schlaf du in jedem Alter brauchst",
    "explore.tips.title": "Schlaftipps",
    "explore.tips.desc": "Wissenschaftlich belegte Einschlaftipps",
    "explore.howto.title": "Anleitung",
    "explore.howto.desc": "Hole das Beste aus dem Rechner heraus",
    "table.heading": "Schlafenszeit-Tabelle f\u00fcr g\u00e4ngige Aufwachzeiten",
    "table.intro": "Schnellreferenz: Optimale Schlafenszeiten f\u00fcr beliebte Aufwachzeiten.",
    "table.wakeup": "Aufwachen",
    "table.6cycles": "6 Zyklen (9h)",
    "table.5cycles": "5 Zyklen (7,5h)",
    "table.4cycles": "4 Zyklen (6h)",
    "table.note": "Gr\u00fcn = empfohlen (5 Zyklen). Nutze den Rechner oben f\u00fcr individuelle Zeiten.",
    "faq.heading": "H\u00e4ufig gestellte Fragen",
    "faq.q1": "Wie viele Stunden Schlaf brauche ich?",
    "faq.a1": "Die meisten Erwachsenen ben\u00f6tigen 7-9 Stunden Schlaf pro Nacht, das sind 5-6 vollst\u00e4ndige 90-Minuten-Schlafzyklen.",
    "faq.q2": "Was ist ein Schlafzyklus?",
    "faq.a2": "Ein Schlafzyklus ist ein etwa 90-min\u00fctiger Zeitraum mit Leichtschlaf, Tiefschlaf und REM-Schlaf. Zwischen Zyklen aufzuwachen f\u00fchlt sich erholsamer an.",
    "faq.q3": "Warum bin ich nach 8 Stunden Schlaf m\u00fcde?",
    "faq.a3": "M\u00fcdigkeit nach 8 Stunden bedeutet oft, dass du mitten in einer Tiefschlafphase aufgewacht bist. Ein Schlafzyklus-Rechner kann helfen.",
    "faq.q4": "Was ist Einschlaflatenz?",
    "faq.a4": "Einschlaflatenz ist die Zeit vom Hinlegen bis zum Einschlafen. Der Durchschnitt liegt bei ca. 15 Minuten. Dieser Rechner ber\u00fccksichtigt das.",
    "faq.q5": "Sind 6 oder 7,5 Stunden Schlaf besser?",
    "faq.a5": "7,5 Stunden (5 Zyklen) sind generell besser als 6 Stunden (4 Zyklen) f\u00fcr Ged\u00e4chtnis, Immunsystem und emotionale Regulation.",
    "faq.q6": "Sollte ich ein Nickerchen machen wenn ich schlecht geschlafen habe?",
    "faq.a6": "Ein kurzes 20-Minuten-Nickerchen am fr\u00fchen Nachmittag (13-15 Uhr) kann helfen. Vermeide Nickerchen nach 15 Uhr oder l\u00e4nger als 30 Minuten.",
    "faq.q7": "Wann sollte ich ins Bett gehen wenn ich um 6 Uhr aufstehe?",
    "faq.a7": "F\u00fcr 6:00 Uhr: 20:45 (6 Zyklen), 22:15 (5 Zyklen), 23:45 (4 Zyklen) oder 01:15 (3 Zyklen).",
    "faq.q8": "Wie kann ich schneller einschlafen?",
    "faq.a8": "Probiere die 4-7-8 Atemtechnik: 4 Sek. einatmen, 7 Sek. halten, 8 Sek. ausatmen. Halte dein Zimmer k\u00fchl (15-19\u00b0C) und vermeide Bildschirme 30 Min. vor dem Schlafen.",
    "footer.copyright": "\u00a9 2026 Sleep Cycle Optimizer. Alle Rechte vorbehalten.",
    "footer.feedback": "Verbesserungsvorschl\u00e4ge?",
    "footer.feedback.link": "Feedback senden",
    "footer.about": "\u00dcber uns",
    "footer.howto": "Anleitung",
    "footer.tips": "Schlaftipps",
    "footer.nap": "Nickerchen-Rechner",
    "footer.age": "Schlaf nach Alter",
    "footer.privacy": "Datenschutz",
    "footer.terms": "Nutzungsbedingungen",
    "footer.today": "Heute:",
    "footer.total": "Gesamt:",
    "feedback.fab": "Feedback",
    "cookie.text": "Wir verwenden Cookies zur Verbesserung deiner Erfahrung und zur Erfassung anonymer Nutzungsdaten.",
    "cookie.accept": "Akzeptieren",
    "cookie.decline": "Ablehnen",
    "noscript.heading": "JavaScript erforderlich",
    "noscript.text": "Dieser Schlafzyklus-Rechner ben\u00f6tigt JavaScript.",
    "share.calculated": "Berechnet mit Sleep Cycle Optimizer",
  },

  fr: {
    "site.title": "Optimiseur de Cycles de Sommeil",
    "site.subtitle": "Trouvez l'heure id\u00e9ale pour vous coucher et r\u00e9veillez-vous en forme",
    "tab.bedtime": "Je dois me r\u00e9veiller \u00e0...",
    "tab.sleepnow": "Je veux dormir maintenant",
    "calc.heading.bedtime": "\u00c0 quelle heure devez-vous vous r\u00e9veiller ?",
    "calc.heading.sleepnow": "Vous allez dormir maintenant ?",
    "calc.btn.bedtime": "Calculer l'heure du coucher",
    "calc.btn.sleepnow": "Calculer l'heure du r\u00e9veil",
    "calc.label.hour": "Heure",
    "calc.label.min": "Min",
    "calc.label.ampm": "AM/PM",
    "settings.toggle": "Param\u00e8tres",
    "settings.latency": "Temps pour s'endormir :",
    "settings.min": "min",
    "results.heading.bedtime": "Vos heures de coucher optimales",
    "results.heading.sleepnow": "Vos heures de r\u00e9veil optimales",
    "results.info.bedtime": "Pour vous r\u00e9veiller \u00e0 <strong>{time}</strong>, couchez-vous \u00e0 une de ces heures :",
    "results.info.sleepnow": "Si vous dormez maintenant (<strong>{time}</strong>), r\u00e9glez votre alarme \u00e0 :",
    "results.note": "* Inclut ~{min} minutes pour s'endormir. Les options recommand\u00e9es offrent 5-6 cycles complets.",
    "results.share": "Partager les r\u00e9sultats",
    "results.recalc": "Recalculer",
    "results.copied": "Copi\u00e9 !",
    "timeline.cycles": "cycles",
    "timeline.hours": "heures de sommeil",
    "timeline.recommended": "Recommand\u00e9",
    "quality.poor": "Insuffisant",
    "quality.fair": "Moyen",
    "quality.good": "Bon",
    "quality.great": "Excellent",
    "info.heading": "Comment fonctionnent les cycles de sommeil",
    "info.p1": "Chaque cycle de sommeil dure environ <strong>90 minutes</strong> et comprend des phases de sommeil l\u00e9ger, profond et REM. Se r\u00e9veiller entre les cycles aide \u00e0 se sentir plus alerte.",
    "info.p2": "La plupart des adultes ont besoin de <strong>5 \u00e0 6 cycles complets</strong> (7,5\u20139 heures) par nuit. Ce calculateur tient compte d'une moyenne de <strong>15 minutes</strong> d'endormissement.",
    "explore.heading": "Plus d'outils de sommeil",
    "explore.nap.title": "Calculateur de sieste",
    "explore.nap.desc": "Trouvez la dur\u00e9e de sieste parfaite",
    "explore.age.title": "Sommeil par \u00e2ge",
    "explore.age.desc": "Combien de sommeil \u00e0 chaque \u00e2ge",
    "explore.tips.title": "Conseils sommeil",
    "explore.tips.desc": "Astuces scientifiques pour s'endormir plus vite",
    "explore.howto.title": "Mode d'emploi",
    "explore.howto.desc": "Tirez le meilleur parti du calculateur",
    "table.heading": "Tableau des heures de coucher",
    "table.intro": "R\u00e9f\u00e9rence rapide : heures de coucher optimales pour les heures de r\u00e9veil courantes.",
    "table.wakeup": "R\u00e9veil",
    "table.6cycles": "6 Cycles (9h)",
    "table.5cycles": "5 Cycles (7,5h)",
    "table.4cycles": "4 Cycles (6h)",
    "table.note": "Vert = recommand\u00e9 (5 cycles). Utilisez le calculateur pour des horaires personnalis\u00e9s.",
    "faq.heading": "Questions Fr\u00e9quentes",
    "faq.q1": "Combien d'heures de sommeil ai-je besoin ?",
    "faq.a1": "La plupart des adultes ont besoin de 7 \u00e0 9 heures de sommeil par nuit, soit 5-6 cycles complets de 90 minutes.",
    "faq.q2": "Qu'est-ce qu'un cycle de sommeil ?",
    "faq.a2": "Un cycle de sommeil est une p\u00e9riode d'environ 90 minutes comprenant sommeil l\u00e9ger, profond et REM. Se r\u00e9veiller entre les cycles aide \u00e0 se sentir plus repos\u00e9.",
    "faq.q3": "Pourquoi suis-je fatigu\u00e9 apr\u00e8s 8 heures de sommeil ?",
    "faq.a3": "Cela signifie souvent que vous vous \u00eates r\u00e9veill\u00e9 pendant une phase de sommeil profond. Aligner votre r\u00e9veil avec la fin d'un cycle peut aider.",
    "faq.q4": "Qu'est-ce que la latence d'endormissement ?",
    "faq.a4": "C'est le temps n\u00e9cessaire pour s'endormir apr\u00e8s s'\u00eatre couch\u00e9. La moyenne est d'environ 15 minutes.",
    "faq.q5": "Vaut-il mieux dormir 6 ou 7,5 heures ?",
    "faq.a5": "7,5 heures (5 cycles) est g\u00e9n\u00e9ralement mieux que 6 heures (4 cycles) pour la m\u00e9moire, l'immunit\u00e9 et la r\u00e9gulation \u00e9motionnelle.",
    "faq.q6": "Dois-je faire une sieste si j'ai mal dormi ?",
    "faq.a6": "Une courte sieste de 20 minutes l'apr\u00e8s-midi (13-15h) peut aider sans perturber votre sommeil nocturne.",
    "faq.q7": "Quelle heure me coucher si je me r\u00e9veille \u00e0 6h ?",
    "faq.a7": "Pour 6h00 : 20h45 (6 cycles), 22h15 (5 cycles), 23h45 (4 cycles) ou 1h15 (3 cycles).",
    "faq.q8": "Comment m'endormir plus vite ?",
    "faq.a8": "Essayez la technique 4-7-8 : inspirez 4 sec, retenez 7, expirez 8. Gardez votre chambre fra\u00eeche (15-19\u00b0C) et \u00e9vitez les \u00e9crans 30 min avant de dormir.",
    "footer.copyright": "\u00a9 2026 Sleep Cycle Optimizer. Tous droits r\u00e9serv\u00e9s.",
    "footer.feedback": "Des suggestions ?",
    "footer.feedback.link": "Envoyer un avis",
    "footer.about": "\u00c0 propos",
    "footer.howto": "Mode d'emploi",
    "footer.tips": "Conseils",
    "footer.nap": "Calculateur de sieste",
    "footer.age": "Sommeil par \u00e2ge",
    "footer.privacy": "Confidentialit\u00e9",
    "footer.terms": "Conditions d'utilisation",
    "footer.today": "Aujourd'hui :",
    "footer.total": "Total :",
    "feedback.fab": "Avis",
    "cookie.text": "Nous utilisons des cookies pour am\u00e9liorer votre exp\u00e9rience et collecter des donn\u00e9es d'utilisation anonymes.",
    "cookie.accept": "Accepter",
    "cookie.decline": "Refuser",
    "noscript.heading": "JavaScript requis",
    "noscript.text": "Ce calculateur de cycles de sommeil n\u00e9cessite JavaScript.",
    "share.calculated": "Calcul\u00e9 avec Sleep Cycle Optimizer",
  },

  pt: {
    "site.title": "Otimizador de Ciclos de Sono",
    "site.subtitle": "Encontre o hor\u00e1rio perfeito para dormir e acorde revigorado",
    "tab.bedtime": "Preciso acordar \u00e0s...",
    "tab.sleepnow": "Quero dormir agora",
    "calc.heading.bedtime": "A que horas voc\u00ea precisa acordar?",
    "calc.heading.sleepnow": "Vai dormir agora?",
    "calc.btn.bedtime": "Calcular Hor\u00e1rio de Dormir",
    "calc.btn.sleepnow": "Calcular Hor\u00e1rio de Acordar",
    "calc.label.hour": "Hora",
    "calc.label.min": "Min",
    "calc.label.ampm": "AM/PM",
    "settings.toggle": "Configura\u00e7\u00f5es",
    "settings.latency": "Tempo para adormecer:",
    "settings.min": "min",
    "results.heading.bedtime": "Seus Hor\u00e1rios Ideais para Dormir",
    "results.heading.sleepnow": "Seus Hor\u00e1rios Ideais para Acordar",
    "results.info.bedtime": "Para acordar \u00e0s <strong>{time}</strong>, durma em um destes hor\u00e1rios:",
    "results.info.sleepnow": "Se dormir agora (<strong>{time}</strong>), coloque o alarme para:",
    "results.note": "* Inclui ~{min} minutos para adormecer. Op\u00e7\u00f5es recomendadas oferecem 5-6 ciclos completos.",
    "results.share": "Compartilhar Resultados",
    "results.recalc": "Recalcular",
    "results.copied": "Copiado!",
    "timeline.cycles": "ciclos",
    "timeline.hours": "horas de sono",
    "timeline.recommended": "Recomendado",
    "quality.poor": "Ruim",
    "quality.fair": "Regular",
    "quality.good": "Bom",
    "quality.great": "Excelente",
    "info.heading": "Como Funcionam os Ciclos de Sono",
    "info.p1": "Cada ciclo de sono dura aproximadamente <strong>90 minutos</strong> e inclui est\u00e1gios de sono leve, sono profundo e sono REM. Acordar entre os ciclos ajuda a se sentir mais alerta.",
    "info.p2": "A maioria dos adultos precisa de <strong>5 a 6 ciclos completos</strong> (7,5\u20139 horas) por noite. Esta calculadora considera uma m\u00e9dia de <strong>15 minutos</strong> de lat\u00eancia do sono.",
    "explore.heading": "Mais Ferramentas de Sono",
    "explore.nap.title": "Calculadora de Cochilo",
    "explore.nap.desc": "Encontre a dura\u00e7\u00e3o perfeita do cochilo",
    "explore.age.title": "Sono por Idade",
    "explore.age.desc": "Quanto sono voc\u00ea precisa em cada idade",
    "explore.tips.title": "Dicas de Sono",
    "explore.tips.desc": "Dicas cient\u00edficas para dormir mais r\u00e1pido",
    "explore.howto.title": "Como Usar",
    "explore.howto.desc": "Aproveite ao m\u00e1ximo a calculadora",
    "faq.heading": "Perguntas Frequentes",
    "faq.q1": "Quantas horas de sono eu preciso?",
    "faq.a1": "A maioria dos adultos precisa de 7 a 9 horas de sono por noite, ou 5-6 ciclos completos de 90 minutos.",
    "faq.q2": "O que \u00e9 um ciclo de sono?",
    "faq.a2": "Um ciclo de sono \u00e9 um per\u00edodo de aproximadamente 90 minutos com sono leve, profundo e REM.",
    "faq.q3": "Por que me sinto cansado depois de 8 horas de sono?",
    "faq.a3": "Isso geralmente significa que voc\u00ea acordou durante uma fase de sono profundo.",
    "faq.q4": "O que \u00e9 lat\u00eancia do sono?",
    "faq.a4": "\u00c9 o tempo que leva para adormecer ap\u00f3s deitar. A m\u00e9dia \u00e9 de cerca de 15 minutos.",
    "faq.q5": "\u00c9 melhor dormir 6 ou 7,5 horas?",
    "faq.a5": "7,5 horas (5 ciclos) \u00e9 geralmente melhor que 6 horas (4 ciclos).",
    "faq.q6": "Devo tirar um cochilo se dormi mal?",
    "faq.a6": "Um cochilo curto de 20 minutos \u00e0 tarde (13-15h) pode ajudar sem afetar o sono noturno.",
    "faq.q7": "Que horas devo dormir se acordo \u00e0s 6h?",
    "faq.a7": "Para 6:00: 20:45 (6 ciclos), 22:15 (5 ciclos), 23:45 (4 ciclos) ou 01:15 (3 ciclos).",
    "faq.q8": "Como posso adormecer mais r\u00e1pido?",
    "faq.a8": "Experimente a t\u00e9cnica 4-7-8: inspire 4s, segure 7s, expire 8s. Mantenha o quarto fresco (15-19\u00b0C).",
    "footer.copyright": "\u00a9 2026 Sleep Cycle Optimizer. Todos os direitos reservados.",
    "footer.feedback": "Tem sugest\u00f5es?",
    "footer.feedback.link": "Envie seu feedback",
    "footer.about": "Sobre",
    "footer.howto": "Como Usar",
    "footer.tips": "Dicas",
    "footer.nap": "Calculadora de Cochilo",
    "footer.age": "Sono por Idade",
    "footer.privacy": "Privacidade",
    "footer.terms": "Termos de Servi\u00e7o",
    "footer.today": "Hoje:",
    "footer.total": "Total:",
    "feedback.fab": "Feedback",
    "cookie.text": "Usamos cookies para melhorar sua experi\u00eancia e coletar dados de uso an\u00f4nimos.",
    "cookie.accept": "Aceitar",
    "cookie.decline": "Recusar",
    "share.calculated": "Calculado com Sleep Cycle Optimizer",
  },

  hi: {
    "site.title": "\u0928\u0940\u0902\u0926 \u091a\u0915\u094d\u0930 \u0911\u092a\u094d\u091f\u093f\u092e\u093e\u0907\u091c\u093c\u0930",
    "site.subtitle": "\u0924\u0930\u094b\u0924\u093e\u091c\u093c\u093e \u092e\u0939\u0938\u0942\u0938 \u0915\u0930\u0928\u0947 \u0915\u0947 \u0932\u093f\u090f \u0938\u092c\u0938\u0947 \u0905\u091a\u094d\u091b\u093e \u0938\u094b\u0928\u0947 \u0915\u093e \u0938\u092e\u092f \u0916\u094b\u091c\u0947\u0902",
    "tab.bedtime": "\u092e\u0941\u091d\u0947 \u091c\u093e\u0917\u0928\u093e \u0939\u0948...",
    "tab.sleepnow": "\u092e\u0948\u0902 \u0905\u092d\u0940 \u0938\u094b\u0928\u093e \u091a\u093e\u0939\u0924\u093e \u0939\u0942\u0901",
    "calc.heading.bedtime": "\u0906\u092a\u0915\u094b \u0915\u093f\u0924\u0928\u0947 \u092c\u091c\u0947 \u091c\u093e\u0917\u0928\u093e \u0939\u0948?",
    "calc.heading.sleepnow": "\u0905\u092d\u0940 \u0938\u094b\u0928\u0947 \u091c\u093e \u0930\u0939\u0947 \u0939\u0948\u0902?",
    "calc.btn.bedtime": "\u0938\u094b\u0928\u0947 \u0915\u093e \u0938\u092e\u092f \u0917\u0923\u0928\u093e \u0915\u0930\u0947\u0902",
    "calc.btn.sleepnow": "\u091c\u093e\u0917\u0928\u0947 \u0915\u093e \u0938\u092e\u092f \u0917\u0923\u0928\u093e \u0915\u0930\u0947\u0902",
    "calc.label.hour": "\u0918\u0902\u091f\u093e",
    "calc.label.min": "\u092e\u093f\u0928\u091f",
    "calc.label.ampm": "AM/PM",
    "settings.toggle": "\u0938\u0947\u091f\u093f\u0902\u0917\u094d\u0938",
    "settings.latency": "\u0928\u0940\u0902\u0926 \u0906\u0928\u0947 \u092e\u0947\u0902 \u0938\u092e\u092f:",
    "settings.min": "\u092e\u093f\u0928\u091f",
    "results.heading.bedtime": "\u0906\u092a\u0915\u0947 \u0938\u0930\u094d\u0935\u094b\u0924\u094d\u0924\u092e \u0938\u094b\u0928\u0947 \u0915\u0947 \u0938\u092e\u092f",
    "results.heading.sleepnow": "\u0906\u092a\u0915\u0947 \u0938\u0930\u094d\u0935\u094b\u0924\u094d\u0924\u092e \u091c\u093e\u0917\u0928\u0947 \u0915\u0947 \u0938\u092e\u092f",
    "results.share": "\u092a\u0930\u093f\u0923\u093e\u092e \u0938\u093e\u091d\u093e \u0915\u0930\u0947\u0902",
    "results.recalc": "\u092b\u093f\u0930 \u0938\u0947 \u0917\u0923\u0928\u093e \u0915\u0930\u0947\u0902",
    "timeline.cycles": "\u091a\u0915\u094d\u0930",
    "timeline.hours": "\u0918\u0902\u091f\u0947 \u0928\u0940\u0902\u0926",
    "timeline.recommended": "\u0905\u0928\u0941\u0936\u0902\u0938\u093f\u0924",
    "info.heading": "\u0928\u0940\u0902\u0926 \u091a\u0915\u094d\u0930 \u0915\u0948\u0938\u0947 \u0915\u093e\u092e \u0915\u0930\u0924\u0947 \u0939\u0948\u0902",
    "faq.heading": "\u0905\u0915\u094d\u0938\u0930 \u092a\u0942\u091b\u0947 \u091c\u093e\u0928\u0947 \u0935\u093e\u0932\u0947 \u0938\u0935\u093e\u0932",
    "footer.feedback": "\u0938\u0941\u091d\u093e\u0935 \u0939\u0948\u0902?",
    "footer.feedback.link": "\u092b\u0940\u0921\u092c\u0948\u0915 \u092d\u0947\u091c\u0947\u0902",
    "feedback.fab": "\u092b\u0940\u0921\u092c\u0948\u0915",
    "cookie.accept": "\u0938\u094d\u0935\u0940\u0915\u093e\u0930",
    "cookie.decline": "\u0905\u0938\u094d\u0935\u0940\u0915\u093e\u0930",
  },

  ru: {
    "site.title": "\u041e\u043f\u0442\u0438\u043c\u0438\u0437\u0430\u0442\u043e\u0440 \u0446\u0438\u043a\u043b\u043e\u0432 \u0441\u043d\u0430",
    "site.subtitle": "\u041d\u0430\u0439\u0434\u0438\u0442\u0435 \u0438\u0434\u0435\u0430\u043b\u044c\u043d\u043e\u0435 \u0432\u0440\u0435\u043c\u044f \u0434\u043b\u044f \u0441\u043d\u0430 \u0438 \u043f\u0440\u043e\u0441\u044b\u043f\u0430\u0439\u0442\u0435\u0441\u044c \u0431\u043e\u0434\u0440\u044b\u043c",
    "tab.bedtime": "\u041c\u043d\u0435 \u043d\u0443\u0436\u043d\u043e \u043f\u0440\u043e\u0441\u043d\u0443\u0442\u044c\u0441\u044f \u0432...",
    "tab.sleepnow": "\u0425\u043e\u0447\u0443 \u0441\u043f\u0430\u0442\u044c \u0441\u0435\u0439\u0447\u0430\u0441",
    "calc.heading.bedtime": "\u0412\u043e \u0441\u043a\u043e\u043b\u044c\u043a\u043e \u0432\u0430\u043c \u043d\u0443\u0436\u043d\u043e \u043f\u0440\u043e\u0441\u043d\u0443\u0442\u044c\u0441\u044f?",
    "calc.heading.sleepnow": "\u041b\u043e\u0436\u0438\u0442\u0435\u0441\u044c \u0441\u043f\u0430\u0442\u044c \u0441\u0435\u0439\u0447\u0430\u0441?",
    "calc.btn.bedtime": "\u0420\u0430\u0441\u0441\u0447\u0438\u0442\u0430\u0442\u044c \u0432\u0440\u0435\u043c\u044f \u0441\u043d\u0430",
    "calc.btn.sleepnow": "\u0420\u0430\u0441\u0441\u0447\u0438\u0442\u0430\u0442\u044c \u0432\u0440\u0435\u043c\u044f \u043f\u043e\u0434\u044a\u0451\u043c\u0430",
    "calc.label.hour": "\u0427\u0430\u0441",
    "calc.label.min": "\u041c\u0438\u043d",
    "calc.label.ampm": "AM/PM",
    "settings.toggle": "\u041d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0438",
    "settings.latency": "\u0412\u0440\u0435\u043c\u044f \u0437\u0430\u0441\u044b\u043f\u0430\u043d\u0438\u044f:",
    "settings.min": "\u043c\u0438\u043d",
    "results.heading.bedtime": "\u041e\u043f\u0442\u0438\u043c\u0430\u043b\u044c\u043d\u043e\u0435 \u0432\u0440\u0435\u043c\u044f \u0441\u043d\u0430",
    "results.heading.sleepnow": "\u041e\u043f\u0442\u0438\u043c\u0430\u043b\u044c\u043d\u043e\u0435 \u0432\u0440\u0435\u043c\u044f \u043f\u043e\u0434\u044a\u0451\u043c\u0430",
    "results.share": "\u041f\u043e\u0434\u0435\u043b\u0438\u0442\u044c\u0441\u044f",
    "results.recalc": "\u041f\u0435\u0440\u0435\u0441\u0447\u0438\u0442\u0430\u0442\u044c",
    "timeline.cycles": "\u0446\u0438\u043a\u043b\u043e\u0432",
    "timeline.hours": "\u0447\u0430\u0441\u043e\u0432 \u0441\u043d\u0430",
    "timeline.recommended": "\u0420\u0435\u043a\u043e\u043c\u0435\u043d\u0434\u0443\u0435\u0442\u0441\u044f",
    "info.heading": "\u041a\u0430\u043a \u0440\u0430\u0431\u043e\u0442\u0430\u044e\u0442 \u0446\u0438\u043a\u043b\u044b \u0441\u043d\u0430",
    "faq.heading": "\u0427\u0430\u0441\u0442\u044b\u0435 \u0432\u043e\u043f\u0440\u043e\u0441\u044b",
    "footer.feedback": "\u0415\u0441\u0442\u044c \u043f\u0440\u0435\u0434\u043b\u043e\u0436\u0435\u043d\u0438\u044f?",
    "footer.feedback.link": "\u041e\u0442\u043f\u0440\u0430\u0432\u0438\u0442\u044c \u043e\u0442\u0437\u044b\u0432",
    "feedback.fab": "\u041e\u0442\u0437\u044b\u0432",
    "cookie.accept": "\u041f\u0440\u0438\u043d\u044f\u0442\u044c",
    "cookie.decline": "\u041e\u0442\u043a\u043b\u043e\u043d\u0438\u0442\u044c",
  },

  it: {
    "site.title": "Ottimizzatore Cicli del Sonno",
    "site.subtitle": "Trova l'ora perfetta per dormire e svegliati riposato",
    "tab.bedtime": "Devo svegliarmi alle...",
    "tab.sleepnow": "Voglio dormire adesso",
    "calc.heading.bedtime": "A che ora devi svegliarti?",
    "calc.heading.sleepnow": "Vai a dormire adesso?",
    "calc.btn.bedtime": "Calcola Ora di Andare a Letto",
    "calc.btn.sleepnow": "Calcola Ora della Sveglia",
    "calc.label.hour": "Ora",
    "calc.label.min": "Min",
    "calc.label.ampm": "AM/PM",
    "settings.toggle": "Impostazioni",
    "settings.latency": "Tempo per addormentarsi:",
    "settings.min": "min",
    "results.heading.bedtime": "I Tuoi Orari Ottimali per Dormire",
    "results.heading.sleepnow": "I Tuoi Orari Ottimali per Svegliarti",
    "results.share": "Condividi Risultati",
    "results.recalc": "Ricalcola",
    "timeline.cycles": "cicli",
    "timeline.hours": "ore di sonno",
    "timeline.recommended": "Consigliato",
    "info.heading": "Come Funzionano i Cicli del Sonno",
    "faq.heading": "Domande Frequenti",
    "footer.feedback": "Hai suggerimenti?",
    "footer.feedback.link": "Invia feedback",
    "feedback.fab": "Feedback",
    "cookie.accept": "Accetta",
    "cookie.decline": "Rifiuta",
  },

  ar: {
    "site.title": "\u0645\u064f\u062d\u0633\u0651\u0646 \u062f\u0648\u0631\u0627\u062a \u0627\u0644\u0646\u0648\u0645",
    "site.subtitle": "\u0627\u0639\u062b\u0631 \u0639\u0644\u0649 \u0627\u0644\u0648\u0642\u062a \u0627\u0644\u0645\u062b\u0627\u0644\u064a \u0644\u0644\u0646\u0648\u0645 \u0648\u0627\u0633\u062a\u064a\u0642\u0638 \u0628\u0646\u0634\u0627\u0637",
    "tab.bedtime": "\u0623\u062d\u062a\u0627\u062c \u0627\u0644\u0627\u0633\u062a\u064a\u0642\u0627\u0638 \u0641\u064a...",
    "tab.sleepnow": "\u0623\u0631\u064a\u062f \u0627\u0644\u0646\u0648\u0645 \u0627\u0644\u0622\u0646",
    "calc.heading.bedtime": "\u0645\u062a\u0649 \u062a\u062d\u062a\u0627\u062c \u0644\u0644\u0627\u0633\u062a\u064a\u0642\u0627\u0638\u061f",
    "calc.heading.sleepnow": "\u0647\u0644 \u0633\u062a\u0646\u0627\u0645 \u0627\u0644\u0622\u0646\u061f",
    "calc.btn.bedtime": "\u0627\u062d\u0633\u0628 \u0648\u0642\u062a \u0627\u0644\u0646\u0648\u0645",
    "calc.btn.sleepnow": "\u0627\u062d\u0633\u0628 \u0648\u0642\u062a \u0627\u0644\u0627\u0633\u062a\u064a\u0642\u0627\u0638",
    "calc.label.hour": "\u0633\u0627\u0639\u0629",
    "calc.label.min": "\u062f\u0642\u064a\u0642\u0629",
    "calc.label.ampm": "AM/PM",
    "settings.toggle": "\u0627\u0644\u0625\u0639\u062f\u0627\u062f\u0627\u062a",
    "results.share": "\u0645\u0634\u0627\u0631\u0643\u0629 \u0627\u0644\u0646\u062a\u0627\u0626\u062c",
    "results.recalc": "\u0625\u0639\u0627\u062f\u0629 \u0627\u0644\u062d\u0633\u0627\u0628",
    "timeline.cycles": "\u062f\u0648\u0631\u0627\u062a",
    "timeline.hours": "\u0633\u0627\u0639\u0627\u062a \u0646\u0648\u0645",
    "timeline.recommended": "\u0645\u0648\u0635\u0649 \u0628\u0647",
    "info.heading": "\u0643\u064a\u0641 \u062a\u0639\u0645\u0644 \u062f\u0648\u0631\u0627\u062a \u0627\u0644\u0646\u0648\u0645",
    "faq.heading": "\u0627\u0644\u0623\u0633\u0626\u0644\u0629 \u0627\u0644\u0634\u0627\u0626\u0639\u0629",
    "footer.feedback": "\u0644\u062f\u064a\u0643 \u0627\u0642\u062a\u0631\u0627\u062d\u0627\u062a\u061f",
    "footer.feedback.link": "\u0623\u0631\u0633\u0644 \u0645\u0644\u0627\u062d\u0638\u0627\u062a\u0643",
    "feedback.fab": "\u0645\u0644\u0627\u062d\u0638\u0627\u062a",
    "cookie.accept": "\u0642\u0628\u0648\u0644",
    "cookie.decline": "\u0631\u0641\u0636",
  },
};

// Supported languages list (for language picker)
const SUPPORTED_LANGUAGES = {
  en: "English",
  ko: "\ud55c\uad6d\uc5b4",
  ja: "\u65e5\u672c\u8a9e",
  zh: "\u4e2d\u6587",
  es: "Espa\u00f1ol",
  de: "Deutsch",
  fr: "Fran\u00e7ais",
  pt: "Portugu\u00eas",
  it: "Italiano",
  ru: "\u0420\u0443\u0441\u0441\u043a\u0438\u0439",
  ar: "\u0627\u0644\u0639\u0631\u0628\u064a\u0629",
  hi: "\u0939\u093f\u0928\u094d\u0926\u0940",
};

let currentLang = "en";

function detectLanguage() {
  // Check URL param first (?lang=ko)
  const urlParams = new URLSearchParams(window.location.search);
  const urlLang = urlParams.get("lang");
  if (urlLang && translations[urlLang]) return urlLang;

  // Check saved preference
  const saved = localStorage.getItem("lang");
  if (saved && translations[saved]) return saved;

  // Detect from browser
  const browserLang = navigator.language || navigator.userLanguage || "en";
  const short = browserLang.split("-")[0].toLowerCase();

  // Map zh-TW, zh-HK to zh
  if (short === "zh") return "zh";
  if (translations[short]) return short;

  return "en";
}

function t(key, params) {
  const lang = translations[currentLang] || translations.en;
  let text = lang[key] || translations.en[key] || key;
  if (params) {
    Object.keys(params).forEach((k) => {
      text = text.replace(`{${k}}`, params[k]);
    });
  }
  return text;
}

function applyTranslations() {
  // Translate all elements with data-i18n attribute
  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const key = el.getAttribute("data-i18n");
    const text = t(key);
    if (text !== key) {
      if (el.tagName === "INPUT" || el.tagName === "TEXTAREA") {
        el.placeholder = text;
      } else if (el.hasAttribute("data-i18n-html")) {
        el.innerHTML = text;
      } else {
        el.textContent = text;
      }
    }
  });

  // Translate aria-labels
  document.querySelectorAll("[data-i18n-aria]").forEach((el) => {
    const key = el.getAttribute("data-i18n-aria");
    el.setAttribute("aria-label", t(key));
  });

  // Update html lang attribute
  document.documentElement.lang = currentLang;

  // RTL support for Arabic
  if (currentLang === "ar") {
    document.documentElement.dir = "rtl";
  } else {
    document.documentElement.dir = "ltr";
  }

  // Update the language picker display
  const langDisplay = document.getElementById("lang-current");
  if (langDisplay) {
    langDisplay.textContent = SUPPORTED_LANGUAGES[currentLang] || "English";
  }
}

function setLanguage(lang) {
  if (!translations[lang]) lang = "en";
  currentLang = lang;
  localStorage.setItem("lang", lang);
  applyTranslations();

  // Update URL without reload
  const url = new URL(window.location);
  if (lang === "en") {
    url.searchParams.delete("lang");
  } else {
    url.searchParams.set("lang", lang);
  }
  window.history.replaceState({}, "", url);
}

function createLanguagePicker() {
  const picker = document.createElement("div");
  picker.className = "lang-picker";
  picker.innerHTML = `
    <button class="lang-picker__btn" id="lang-btn" aria-label="Change language" title="Change language">
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>
      <span id="lang-current">${SUPPORTED_LANGUAGES[currentLang]}</span>
    </button>
    <div class="lang-picker__dropdown" id="lang-dropdown" hidden>
      ${Object.entries(SUPPORTED_LANGUAGES)
        .map(
          ([code, name]) =>
            `<button class="lang-picker__option${code === currentLang ? " lang-picker__option--active" : ""}" data-lang="${code}">${name}</button>`
        )
        .join("")}
    </div>
  `;

  // Insert before theme toggle (in header topbar)
  const topbar = document.querySelector(".app__topbar");
  if (topbar) {
    topbar.insertBefore(picker, topbar.firstChild);
  }

  // Toggle dropdown
  const btn = picker.querySelector("#lang-btn");
  const dropdown = picker.querySelector("#lang-dropdown");

  btn.addEventListener("click", (e) => {
    e.stopPropagation();
    dropdown.hidden = !dropdown.hidden;
  });

  // Language selection
  dropdown.addEventListener("click", (e) => {
    const option = e.target.closest("[data-lang]");
    if (!option) return;
    setLanguage(option.dataset.lang);
    dropdown.hidden = true;

    // Update active state
    dropdown.querySelectorAll(".lang-picker__option").forEach((opt) => {
      opt.classList.toggle("lang-picker__option--active", opt.dataset.lang === currentLang);
    });
  });

  // Close on outside click
  document.addEventListener("click", () => {
    dropdown.hidden = true;
  });
}

// Initialize i18n
function initI18n() {
  currentLang = detectLanguage();
  createLanguagePicker();
  applyTranslations();
}

// Expose globally
window.I18n = { t, currentLang: () => currentLang, setLanguage, initI18n, translations, SUPPORTED_LANGUAGES };

// Auto-init when DOM is ready
if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", initI18n);
} else {
  initI18n();
}
