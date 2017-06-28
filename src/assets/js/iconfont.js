;(function(window) {

  var svgSprite = '<svg>' +
    '' +
    '<symbol id="icon-miaoxiansheng" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M590.269246 637.963876c-45.42847 45.231157-28.252595 104.664781-12.827669 129.772622l21.755358-10.730389c-0.971157-2.530636-23.145065-62.235436 26.966247-84.331687 18.034464-7.948019 22.021428-22.184255 19.965522-31.960922-2.339374-11.089569-12.0182-18.540262-24.083475-18.540262C614.781504 622.172215 603.381406 624.908536 590.269246 637.963876z"  ></path>' +
    '' +
    '<path d="M207.006953 608.522334c-8.202135 0-17.118567 2.758834-26.510857 8.197706-55.460352 32.143071-54.012314 94.003977-45.494988 122.221646l23.77954-4.796236c-0.285514-2.698458-6.186139-66.176189 47.569314-74.706469 20.145631-3.187599 28.329346-17.151635 27.415496-28.774347C232.90994 619.659999 223.43169 608.522334 207.006953 608.522334z"  ></path>' +
    '' +
    '<path d="M949.255676 273.206382c-0.379662 0.062422-88.380438 15.249309-161.207007-26.119891-16.976322-9.642614-33.66713-21.88545-49.806353-33.722032-31.441348-23.061228-63.944931-46.912449-100.582841-52.973492-7.193114-1.189082-16.843287-2.559289-27.681567-2.559289-36.284855 0-64.716536 15.201214-84.778252 45.24139-16.842263-20.345374-33.457344-43.297109-49.520839-68.431555l-3.586835-5.624091-6.671206 0c-4.242801 0-4.890581 0.475837-15.911017 8.697079C302.328761 255.679194 276.055321 405.79105 254.939556 526.409175c-3.131445 17.912975-6.138042 35.098379-9.411733 51.355645-6.375459-3.657296-12.865533-6.468318-19.411891-8.402367-5.291733-1.546216-10.773809-2.612501-16.282492-3.168156-27.292695-2.740414-55.56371 6.512321-78.001641 25.260314-20.459799 17.093307-45.828599 50.087768-50.491997 110.197798-3.084371 39.695071 11.32437 78.384231 40.536866 108.943224 28.538109 29.826306 68.381145 48.681746 112.269476 53.102429 43.828977 4.423753 86.613115-6.142907 120.480822-29.679973 34.723225-24.112164 56.543054-59.149145 61.463312-98.66616 7.403924-59.777455-10.887401-97.189529-27.530111-118.058836-18.250391-22.86987-44.26697-37.552268-71.387742-40.286542-5.585434-0.563842-11.161658-0.605797-16.59359-0.144286-4.302156 0.370437-8.670829 1.099031-13.075319 2.178619 2.863328-14.72026 5.537337-29.91124 8.315727-45.691645 16.739929-95.104031 35.408869-201.162556 110.986198-295.101041-7.480675 26.78504-11.162681 51.79362-11.162681 75.534324-0.074704 44.979424 13.883764 85.35397 41.498813 120.004141 32.601825 40.940434 79.020896 68.902276 119.957891 93.569072 5.007242 3.016707 9.961271 6.000668 14.883575 8.997931 23.349734 14.106276 42.896707 27.093055 57.362756 40.259936-4.179354-0.154519-8.392478-0.031722-12.618906 0.39295-27.092118 2.731204-53.116885 17.413602-71.400022 40.292682-16.632477 20.863167-34.903335 58.275241-27.509644 118.052696 4.901838 39.507806 26.720643 74.549903 61.442845 98.667184 28.881954 20.058848 63.824176 30.664394 101.031067 30.664394 6.45528 0 13.011871-0.333598 19.56744-0.99363 43.7993-4.41045 83.633126-23.264866 112.171235-53.096289 29.194075-30.553876 43.60077-69.239967 40.536866-108.938108-4.661351-60.09468-30.040384-93.099375-50.509394-110.194728-22.409277-18.756179-50.681316-28.000728-77.993454-25.263383-5.499473 0.555655-10.982572 1.62194-16.291702 3.174296-7.602453 2.238994-15.128155 5.665023-22.475795 10.227945-10.001181-17.271362-25.663524-33.493835-48.273378-50.160423-17.673222-12.980639-37.187448-24.742521-57.8468-37.193087-25.408711-15.304568-51.670894-31.135114-74.280747-49.433876-46.78236-38.024012-67.686292-77.816297-67.791697-129.015376 0-32.272008 8.811027-69.663616 26.25502-111.369483 13.064062 17.874089 26.558954 34.399461 40.297403 49.352011-12.864509 47.88152-4.928445 95.891977 22.194374 132.697231 22.657951 30.768771 69.123073 67.447135 161.790316 67.447135 14.833431 0 30.543872-0.971118 46.721982-2.888793 122.410856-14.505365 222.643712-150.877289 226.849673-156.676365l17.592378-24.269753L949.255676 273.206382zM304.013192 616.638175c2.969756-0.26606 6.052081-0.228197 9.164082 0.090051 16.481022 1.655709 32.583404 10.93812 44.183055 25.477254 11.856511 14.854313 24.806982 42.215474 19.10591 88.233554-3.48143 28.089755-19.33514 53.230342-44.609792 70.792323-26.073887 18.10638-58.845587 26.276457-93.807253 22.728654-34.353797-3.459798-65.355105-18.005073-87.299782-40.955784-21.286664-22.265096-31.801566-50.060139-29.612625-78.264505 3.596045-46.235021 21.732844-70.465888 36.330905-82.665745 12.636303-10.591219 27.862699-16.429181 42.839399-16.429181 1.84612 0 3.693263 0.090051 5.521986 0.276293 3.121212 0.313132 6.166696 0.899486 9.002393 1.731434 10.828047 3.192715 20.201915 10.69969 26.157801 16.429181l15.69202 15.115256 18.403893-11.6749C282.069538 623.091144 292.755339 617.59906 304.013192 616.638175zM658.802871 627.526153l18.403893 11.666714 15.719651-15.112186c5.947699-5.729491 15.310311-13.228279 26.110727-16.413831 2.890958-0.847298 5.929279-1.432629 9.042304-1.746784 16.679551-1.654686 34.15015 4.263094 48.375713 16.156982 14.579641 12.198833 32.715416 36.43891 36.304298 82.656535 2.179732 28.222785-8.32596 56.020898-29.604438 78.268598-21.93342 22.950711-52.925518 37.495986-87.39393 40.96397-34.350727 3.462868-67.656615-4.629437-93.720268-22.744004-25.285909-17.558911-41.118128-42.700521-44.581138-70.78516-5.709259-46.017056 7.230978-73.382311 19.097723-88.240717 11.578161-14.530948 27.681567-23.813359 44.162588-25.470091 1.722295-0.170892 3.43538-0.260943 5.138231-0.260943 1.361053 0 2.712896 0.057305 4.064739 0.178055C641.179792 617.60827 651.83694 623.087051 658.802871 627.526153zM729.391378 404.850631c-14.760773 1.7519-28.986336 2.63706-42.288838 2.63706-65.812541 0-100.714853-21.524223-118.413658-39.584554-20.137444-20.534685-29.939073-49.461505-27.806415-80.149435 79.704492 68.641333 169.059157 90.274026 262.220677 63.329351 11.646725-3.378957 10.597793-13.255908 10.427917-14.369266-0.761371-5.4225-5.311177-10.895141-13.741519-10.895141-0.952737 0-2.065117 0.067538-3.245037 0.229221-90.696274 12.314467-168.727593-16.670681-240.999507-89.431845 16.034842-30.220279 37.203821-34.311457 54.231311-34.311457 6.202513 0 13.151047 0.650823 21.229357 1.988284 26.729853 4.420683 53.793318 24.25031 82.569867 45.335535 16.232348 11.92868 34.638287 25.449625 53.98366 36.439934 31.754492 18.041912 79.504939 28.617781 125.658963 28.015054C851.899452 351.758436 787.68538 397.952524 729.391378 404.850631z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-announcement" viewBox="0 0 1263 1024">' +
    '' +
    '<path d="M787.125503 817.953862C782.346836 834.982603 778.857651 851.447873 773.14709 867.105862 737.274582 965.518222 639.626159 1028.063492 535.243175 1020.050286 425.415111 1011.619894 337.259005 930.068317 320.241101 820.819979 318.539852 809.897312 318.035979 798.72 317.840931 787.64563 317.434582 764.424127 333.867344 746.967365 355.842709 746.582688 378.311111 746.187175 395.37236 763.248423 396.027937 786.59454 397.615407 843.315471 421.925926 887.856762 469.647577 918.316698 567.973249 981.07327 699.549122 915.006307 709.025185 798.82836 709.55073 792.35928 705.985693 791.828317 701.862603 790.511746 637.448127 770.015492 573.044487 749.470476 508.619175 728.985058 410.445206 697.761185 312.244148 666.618582 214.108106 635.264677 208.473397 633.465905 204.816254 633.66637 199.858794 637.903238 162.176677 670.048169 119.472085 677.730878 74.269799 657.733079 29.430519 637.89782 5.439661 601.581037 4.431915 552.331513 3.337481 498.985989 3.375407 445.586286 4.426497 392.240762 5.396317 343.007492 29.192127 306.625693 74.053079 286.72 119.233693 266.673439 161.922032 274.253206 199.723344 306.208508 204.604952 310.337016 208.272931 310.992593 214.037672 309.155894 490.718138 220.945608 767.447365 132.881608 1044.122413 44.644233 1048.527238 43.240974 1052.91581 40.526561 1056.285799 37.340783 1092.998095 2.562709 1135.664762-8.018624 1182.77418 10.174984 1229.867344 28.363175 1254.600466 64.723302 1257.937947 115.289397 1258.116741 117.987556 1258.089651 120.701968 1258.089651 123.410963 1258.095069 355.837291 1258.127577 588.263619 1258.073397 820.689947 1258.062561 876.907005 1226.139767 922.212233 1174.625524 937.187556 1130.793989 949.925249 1091.838646 939.755683 1058.100825 908.862307 1053.332995 904.495407 1047.324444 900.670307 1041.212952 898.703577 959.108741 872.247534 876.890751 846.165333 794.694434 820.012698 792.142561 819.210836 789.536508 818.609439 787.125503 817.953862L787.125503 817.953862ZM1022.11454 134.496169C1018.972106 135.379302 1016.431069 136.018624 1013.944212 136.809651 758.106751 218.177016 502.274709 299.571471 246.393905 380.797968 241.008423 382.504635 239.502222 384.828952 239.523894 390.404063 239.77854 444.031323 239.919407 497.664 239.45346 551.285841 239.383026 559.401989 242.064931 562.224762 249.330455 564.532825 480.483556 637.859894 711.57164 711.414519 942.665143 784.925799 968.904466 793.274921 995.154624 801.586116 1022.109122 810.141122 1022.11454 584.67691 1022.11454 360.030815 1022.11454 134.496169L1022.11454 134.496169ZM1179.669672 472.779175 1179.669672 246.86527C1179.669672 204.339471 1179.826794 161.808254 1179.599238 119.282455 1179.474624 95.968847 1159.655619 78.176169 1136.965079 80.365037 1116.447153 82.342603 1101.498921 99.252148 1101.498921 120.85909 1101.466413 355.170878 1101.477249 589.482667 1101.482667 823.794455 1101.482667 825.148952 1101.455577 826.508868 1101.547683 827.857947 1102.837164 847.080974 1118.999026 862.955683 1138.140783 863.822561 1162.364614 864.916995 1179.642582 847.725714 1179.648 822.21782 1179.691344 705.736466 1179.669672 589.260529 1179.669672 472.779175L1179.669672 472.779175ZM160.415831 472.768339C160.415831 446.507344 160.453757 420.251767 160.404995 393.990772 160.361651 372.004571 143.907217 355.046265 122.419471 354.721185 100.910053 354.390688 82.72728 370.872212 82.570159 392.349122 82.174646 445.678392 82.147556 499.013079 82.602667 552.336931 82.78146 573.44 100.942561 589.834836 121.980614 589.596444 143.647153 589.347217 160.339979 572.535196 160.399577 550.733206 160.470011 524.748529 160.415831 498.758434 160.415831 472.768339L160.415831 472.768339Z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-vacation" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M141.762936 349.075963C127.441028 356.239266 113.537174 363.416661 99.436037 370.185394 76.020257 381.425908 52.919193 380.561615 31.142752 366.281982 11.583413 353.458495 1.197798 334.824514 0.732771 311.319486-2.188917 164.234569 109.309651 31.274275 254.529761 8.361101 339.02855-4.969688 416.284183 12.569835 485.996037 62.365358 490.928147 65.888294 495.616 69.937321 499.730789 74.380917 503.676477 78.636624 506.724991 83.719046 509.970789 88.167339 531.568734 56.74745 564.379009 40.692257 597.978422 26.94811 775.741064-45.746495 973.391853 59.227596 1013.309064 247.526165 1017.654018 268.024954 1019.30745 289.41622 1019.471853 310.412917 1019.866422 359.583706 968.487927 391.891376 923.685578 371.43956 910.894972 365.600881 898.484844 358.921394 885.89622 352.645872 883.62745 351.513835 881.307009 350.489835 878.103486 348.991413 879.460991 358.991853 880.841982 368.113908 881.917651 377.273541 886.690055 417.904734 883.124844 457.86422 871.785688 497.128514 856.886018 548.72778 800.406312 565.816367 759.455706 531.18356 732.920954 508.744807 706.390899 486.301358 679.85145 463.867303 678.648954 462.848 677.376 461.913248 674.632807 459.752514 676.276844 463.261358 677.05189 465.097982 677.977248 466.85945 718.25145 543.805064 741.235083 625.574752 746.679193 712.285945 752.461505 804.389578 738.21945 893.214532 704.37578 979.084917 694.671266 1003.712587 667.713761 1023.553761 639.408147 1023.492697 438.389431 1023.06055 237.366018 1023.210862 36.342606 1023.145101 17.35633 1023.140404 2.715009 1010.871193 0.883083 993.712147-1.056881 975.533798 9.845431 959.91545 27.483596 956.124771 31.55611 955.251083 35.877578 955.335633 40.086312 955.335633 142.71178 955.298055 245.337248 955.302752 347.958018 955.302752L356.638532 955.302752C357.127046 951.014165 357.371303 947.317431 357.991339 943.686459 360.17556 930.872367 366.206826 919.955963 374.163963 909.786422 433.330495 834.18422 467.136587 748.59567 474.614606 652.804697 480.85255 572.890422 468.014972 496.156183 435.528807 422.789872 434.199486 419.78833 432.870165 416.782092 431.677064 413.728881 430.568514 410.89644 429.638459 407.998239 428.351413 404.339083 426.261138 406.194495 424.344661 407.786862 422.550312 409.510752 373.06011 456.971743 323.537028 504.40455 274.10789 551.931303 235.186495 589.354275 179.979743 577.972844 159.429284 527.928367 136.736881 472.669945 130.898202 415.527927 141.410642 356.718385 141.701872 355.102532 141.941431 353.472587 142.101138 351.837945 142.166899 351.203817 141.950826 350.522716 141.762936 349.075963L141.762936 349.075963ZM805.380697 481.063927C806.174532 478.837431 806.616073 477.78055 806.930789 476.686092 817.072147 441.076257 818.932257 404.926239 812.08367 368.644697 786.084404 230.907303 650.507743 145.948183 515.147156 182.093505 511.971817 182.943706 508.17644 182.840367 504.972917 182.008954 456.32822 169.42033 408.322349 171.120734 360.955303 188.068404 252.129468 226.999193 186.212991 342.429358 208.585982 455.712881 211.91633 472.580697 217.661064 488.974092 222.701211 507.058495 319.633615 414.085872 414.818642 322.790165 510.19156 231.315963 608.622385 314.593468 706.639853 397.523376 805.380697 481.063927L805.380697 481.063927ZM951.577835 309.539229C952.578349 225.322275 903.990018 134.60433 811.65622 92.770642 725.222165 53.609688 628.801761 73.624661 572.171743 119.836183 698.457248 182.981284 824.554862 246.027743 951.577835 309.539229L951.577835 309.539229ZM448.728073 119.591927C377.832514 65.305835 274.361541 54.272 189.045431 102.766385 100.196991 153.266495 66.602275 245.172844 69.270312 309.29967 195.757798 246.065321 321.888294 183.004771 448.728073 119.591927L448.728073 119.591927ZM425.786716 954.790752C427.346202 955.072587 427.806532 955.222899 428.266862 955.227596 497.485505 955.251083 566.704147 955.232294 635.922789 955.349725 639.666495 955.354422 641.319927 953.964037 642.419083 950.59611 648.605358 931.684991 655.970642 913.088587 660.977908 893.876844 667.281615 869.714202 671.706422 845.058349 677.206899 819.364404L667.05145 819.364404C615.193835 819.359706 563.340917 819.448954 511.483303 819.209394 506.551193 819.185908 504.179083 820.238092 502.201541 824.996404 483.680294 869.634349 459.484771 910.998312 429.760587 949.125872 428.515817 950.727633 427.416661 952.45622 425.786716 954.790752L425.786716 954.790752ZM662.39178 613.531009C652.875156 614.291963 644.359046 615.480367 635.828844 615.56022 607.903706 615.809174 579.973872 615.654165 552.048734 615.654165L544.143266 615.654165C544.096294 662.001908 538.295193 706.64455 527.322422 750.869138L680.081615 750.869138C679.992367 703.81211 674.073835 658.00455 662.39178 613.531009L662.39178 613.531009ZM639.53967 547.116624C639.412844 545.909431 639.497394 545.181358 639.253138 544.589505 614.080587 483.384367 578.743193 428.708404 533.635523 380.326752 532.625615 379.241688 530.718532 377.794936 529.699229 378.09556 518.148697 381.496367 506.687413 385.21189 494.930202 388.922716 496.593028 392.750972 497.804917 395.53644 499.021505 398.317211 518.923743 443.946275 532.301505 491.426055 538.94811 540.747156 539.680881 546.186569 541.343706 547.727266 546.693872 547.684991 575.57255 547.445431 604.455927 547.581651 633.339303 547.553468 635.349725 547.548771 637.369541 547.27633 639.53967 547.116624L639.53967 547.116624Z"  ></path>' +
    '' +
    '<path d="M918.006606 1023.187376C895.938936 1023.187376 873.871266 1023.243743 851.803596 1023.168587 831.262532 1023.098128 816.217248 1008.87956 816.029358 989.522202 815.841468 970.254092 830.929028 955.438972 851.310385 955.377908 895.680587 955.246385 940.050789 955.246385 984.420991 955.373211 1004.929174 955.429578 1019.828844 969.96756 1019.786569 989.381284 1019.744294 1008.804404 1004.764771 1023.098128 984.214312 1023.168587 962.141945 1023.243743 940.074275 1023.187376 918.006606 1023.187376L918.006606 1023.187376Z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-vrbofangqi" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M85.376 256h597.248c23.594667 0 42.709333 18.986667 42.709333 42.752v447.829333C725.333333 770.197333 706.346667 789.333333 682.624 789.333333H85.376A42.624 42.624 0 0 1 42.666667 746.581333V298.752C42.666667 275.136 61.653333 256 85.376 256z m597.269333 490.666667V298.666667H85.333333v448h597.333334z m-159.296-204.437334l91.52 128.426667a21.333333 21.333333 0 1 1-34.773333 24.746667l-106.666667-149.333334h-74.88v141.44a21.333333 21.333333 0 0 1-38.826666 12.16l-227.84-324.693333a21.376 21.376 0 0 1 34.986666-24.533333l189.013334 269.866666v-256a21.333333 21.333333 0 0 1 21.333333-21.333333h118.613333a106.666667 106.666667 0 0 1 104.96 87.04c1.173333 2.901333 1.770667 6.016 1.706667 9.173333v10.24a23.04 23.04 0 0 1-1.706667 9.173334 106.666667 106.666667 0 0 1-77.44 83.626666z m-124.8-38.826666l97.493334 0.213333a64 64 0 0 0 64-58.88 64 64 0 0 0-64-58.88h-97.493334v117.546667z m398.890667-11.648l169.237333-177.706667c8.106667-8.490667 14.656-6.016 14.656 5.930667V725.333333c0 11.776-6.613333 14.357333-14.656 5.909334L797.44 553.6a45.269333 45.269333 0 0 1 0-61.824z" fill="#3D3D3D" ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-vrbofangqi1" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M797.44 553.578667a45.269333 45.269333 0 0 1 0-61.824l169.237333-177.706667c8.106667-8.490667 14.656-6.016 14.656 5.930667V725.333333c0 11.776-6.613333 14.357333-14.656 5.909334L797.44 553.6zM42.666667 298.752C42.666667 275.136 61.653333 256 85.376 256h597.248c23.594667 0 42.709333 18.986667 42.709333 42.752v447.829333C725.333333 770.197333 706.346667 789.333333 682.624 789.333333H85.376A42.624 42.624 0 0 1 42.666667 746.581333V298.752z m480.682666 243.477333a106.666667 106.666667 0 0 0 77.44-83.626666 23.04 23.04 0 0 0 1.706667-9.173334v-10.24a23.04 23.04 0 0 0-1.706667-9.173333 106.666667 106.666667 0 0 0-104.96-87.04h-118.613333a21.333333 21.333333 0 0 0-21.333333 21.333333v256l-189.013334-269.866666a21.376 21.376 0 0 0-34.986666 24.533333l227.84 324.693333a21.333333 21.333333 0 0 0 38.826666-12.16v-141.44h74.88l106.666667 149.333334a21.333333 21.333333 0 1 0 34.773333-24.746667l-91.52-128.426667z m-124.8-38.826666v-117.546667h97.493334a64 64 0 0 1 64 58.88 64 64 0 0 1-64 58.88l-97.493334-0.213333z" fill="#3D3D3D" ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-haoping-yuankuang" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M512 64C264.8 64 64 264.8 64 512s200.8 448 448 448 448-200.8 448-448S759.2 64 512 64zM340.8 695.2c0 4.8-4 9.6-8.8 10.4l-64 2.4c-6.4 0.8-12.8-4-12.8-10.4v-240c0-6.4 5.6-11.2 12-10.4l64 2.4c4.8 0.8 8.8 5.6 8.8 10.4v235.2zM720 677.6s-14.4 49.6-32 49.6c0 0-224-21.6-284-21.6-10.4 0-19.2-8.8-19.2-19.2V458.4c0-7.2 3.2-13.6 9.6-16.8 52.8-32 145.6-112 145.6-180 0-3.2-4-44 27.2-44 0 0 78.4 18.4 29.6 212h136.8s31.2-3.2 31.2 32.8c0 0 1.6 44-44.8 215.2z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-chaping-yuankuang" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M512 64C264.8 64 64 264.8 64 512s200.8 448 448 448 448-200.8 448-448S759.2 64 512 64zM340.8 525.6c0 4.8-4 9.6-8.8 10.4l-64 2.4c-5.6 0.8-12-4-12-10.4V288c0-6.4 5.6-11.2 12.8-10.4l64 2.4c4.8 0.8 8.8 5.6 8.8 10.4v235.2z m424-2.4c0 35.2-31.2 32.8-31.2 32.8H596C644.8 749.6 566.4 768 566.4 768c-30.4 0-27.2-40.8-27.2-44C539.2 656 446.4 576 393.6 544c-5.6-3.2-9.6-9.6-9.6-16.8V299.2c0-10.4 8.8-19.2 19.2-19.2 60 0 284-21.6 284-21.6 17.6 0 32 49.6 32 49.6 47.2 171.2 45.6 215.2 45.6 215.2z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-chaping" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M320 189.6v343.2c0 10.4 5.6 20 14.4 25.6 80 48 220.8 168.8 220.8 271.2 0 4.8-5.6 66.4 40.8 66.4 0 0 118.4-28 44.8-320h208s48 4 48-48.8c0 0 2.4-66.4-68-324.8 0 0-21.6-74.4-48.8-74.4 0 0-340 32-430.4 32-16.8 0-29.6 12.8-29.6 29.6zM146.4 155.2l96 4c8 1.6 13.6 8 13.6 16v355.2c0 8-5.6 14.4-13.6 16l-96 3.2c-9.6 1.6-18.4-5.6-18.4-16V171.2c0-10.4 8.8-17.6 18.4-16z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-haoping" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M320 834.4V491.2c0-10.4 5.6-20 14.4-25.6 79.2-48 220-168.8 220-271.2 0-4.8-5.6-66.4 40.8-66.4 0 0 118.4 28 44.8 320h208s47.2-4 47.2 48.8c0 0 2.4 66.4-67.2 324.8 0 0-21.6 74.4-48.8 74.4 0 0-340-32-431.2-32-15.2 0-28-13.6-28-29.6z m-173.6 34.4l96-4c8-1.6 13.6-8 13.6-16V494.4c0-8-5.6-14.4-13.6-16l-96-3.2c-9.6-1.6-18.4 5.6-18.4 16v361.6c-0.8 10.4 8 17.6 18.4 16z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-yiban" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M512 128c52 0 102.4 10.4 149.6 30.4 45.6 19.2 86.4 47.2 122.4 82.4s63.2 76 82.4 122.4c20 47.2 30.4 97.6 30.4 149.6s-10.4 102.4-30.4 149.6c-19.2 45.6-47.2 86.4-82.4 122.4s-76.8 63.2-122.4 82.4c-47.2 20-97.6 30.4-149.6 30.4s-102.4-10.4-149.6-30.4c-45.6-19.2-86.4-47.2-122.4-82.4s-63.2-76.8-82.4-122.4C138.4 614.4 128 564 128 512s10.4-102.4 30.4-149.6C177.6 316.8 204.8 276 240 240s76-63.2 122.4-82.4C409.6 138.4 460 128 512 128m0-64C264.8 64 64 264.8 64 512s200.8 448 448 448 448-200.8 448-448S759.2 64 512 64zM288 384c0 35.2 28.8 64 64 64s64-28.8 64-64-28.8-64-64-64-64 28-64 64z m320 0c0 35.2 28.8 64 64 64s64-28.8 64-64-28.8-64-64-64-64 28.8-64 64z m96 288c0-17.6-14.4-32-32-32H352c-17.6 0-32 14.4-32 32s14.4 32 32 32h320c17.6 0 32-14.4 32-32z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-manyi" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M512 128c52 0 102.4 10.4 149.6 30.4 45.6 19.2 86.4 47.2 122.4 82.4s63.2 76 82.4 122.4c20 47.2 30.4 97.6 30.4 149.6s-10.4 102.4-30.4 149.6c-19.2 45.6-47.2 86.4-82.4 122.4s-76.8 63.2-122.4 82.4c-47.2 20-97.6 30.4-149.6 30.4s-102.4-10.4-149.6-30.4c-45.6-19.2-86.4-47.2-122.4-82.4s-63.2-76.8-82.4-122.4C138.4 614.4 128 564 128 512s10.4-102.4 30.4-149.6C177.6 316.8 204.8 276 240 240s76-63.2 122.4-82.4C409.6 138.4 460 128 512 128m0-64C264.8 64 64 264.8 64 512s200.8 448 448 448 448-200.8 448-448S759.2 64 512 64zM288 384c0 35.2 28.8 64 64 64s64-28.8 64-64-28.8-64-64-64-64 28.8-64 64z m320 0.8c0 35.2 28.8 64 64 64s64-28.8 64-64-28.8-64-64-64-64 28-64 64zM512 768c46.4 0 92-15.2 132-44.8 37.6-28 68.8-67.2 91.2-114.4 8-16 0.8-35.2-15.2-42.4-16-8-35.2-0.8-42.4 15.2-17.6 37.6-43.2 68.8-72 90.4-28 20.8-60.8 32-93.6 32s-64.8-11.2-93.6-32.8c-28.8-21.6-53.6-52.8-72-90.4-8-16-27.2-22.4-42.4-15.2-16 8-22.4 26.4-15.2 42.4 22.4 47.2 54.4 86.4 91.2 114.4 40 30.4 85.6 45.6 132 45.6z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-bumanyi" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M512 128c52 0 102.4 10.4 149.6 30.4 45.6 19.2 86.4 47.2 122.4 82.4s63.2 76 82.4 122.4c20 47.2 30.4 97.6 30.4 149.6s-10.4 102.4-30.4 149.6c-19.2 45.6-47.2 86.4-82.4 122.4s-76.8 63.2-122.4 82.4c-47.2 20-97.6 30.4-149.6 30.4s-102.4-10.4-149.6-30.4c-45.6-19.2-86.4-47.2-122.4-82.4s-63.2-76.8-82.4-122.4C138.4 614.4 128 564 128 512s10.4-102.4 30.4-149.6C177.6 316.8 204.8 276 240 240s76-63.2 122.4-82.4C409.6 138.4 460 128 512 128m0-64C264.8 64 64 264.8 64 512s200.8 448 448 448 448-200.8 448-448S759.2 64 512 64z"  ></path>' +
    '' +
    '<path d="M288 384c0 35.2 28.8 64 64 64s64-28.8 64-64-28.8-64-64-64-64 28.8-64 64zM608 384c0 35.2 28.8 64 64 64s64-28.8 64-64-28.8-64-64-64-64 28.8-64 64zM513.6 512.8c-46.4 0-92 15.2-132 44.8C344 585.6 312 624.8 289.6 672c-8 16-0.8 35.2 15.2 42.4 16 7.2 35.2 0.8 42.4-15.2 17.6-37.6 42.4-68.8 72-90.4C448 587.2 480 576 512.8 576s64.8 11.2 93.6 32.8c28.8 21.6 53.6 52.8 72 90.4 7.2 16 26.4 22.4 42.4 15.2 16-7.2 22.4-26.4 15.2-42.4-22.4-47.2-54.4-86.4-91.2-114.4-39.2-29.6-84.8-44.8-131.2-44.8z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-ditu" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M357.6 832l-255.2 56c-20 4.8-39.2-10.4-39.2-31.2V569.6c0-15.2 10.4-28 24.8-31.2L243.2 504l53.6 53.6L139.2 592c-7.2 1.6-12.8 8-12.8 16v188c0 10.4 9.6 17.6 19.2 16l192.8-42.4 12.8-3.2 12.8 2.4 306.4 60.8 210.4-47.2c7.2-1.6 12.8-8 12.8-16V580c0-10.4-9.6-17.6-19.2-16L688 606.4l-12 2.4L760 524.8l160.8-36c20-4.8 39.2 10.4 39.2 31.2v286.4c0 15.2-10.4 28-24.8 31.2L672.8 896M512 128c-115.2 0-206.4 101.6-190.4 220 5.6 41.6 26.4 80 56 109.6l0.8 0.8L512 591.2l133.6-132.8 0.8-0.8c29.6-29.6 49.6-68 56-109.6C719.2 229.6 627.2 128 512 128m0-64c141.6 0 256 114.4 256 256 0 70.4-28 133.6-74.4 180L512 681.6 330.4 500C284.8 453.6 256 390.4 256 320 256 178.4 371.2 64 512 64z m64.8 193.6c0-35.2-28.8-64-64-64s-64 28.8-64 64 28.8 64 64 64 64-28 64-64z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-dianpu" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M832 474.4c37.6-12.8 64-48.8 64-90.4 0-5.6-30.4-241.6-30.4-241.6-0.8-8-8-14.4-16-14.4H174.4c-8 0-15.2 6.4-16 14.4 0 0-30.4 236.8-30.4 241.6 0 41.6 26.4 77.6 64 90.4V880c0 8.8 7.2 16 16 16h608c8.8 0 16-7.2 16-16V474.4zM720.8 192l21.6 192h-32l-21.6-192h32zM592 192l7.2 192h-32L560 192h32z m-160 0h32l-7.2 192h-32l7.2-192z m-128.8 0h32l-21.6 192h-32l21.6-192zM608 832H416V672h192v160z m160-288H256v-69.6c15.2-5.6 29.6-15.2 40-27.2 17.6 20 43.2 32.8 72 32.8s54.4-12.8 72-32.8c17.6 20 43.2 32.8 72 32.8s54.4-12.8 72-32.8c17.6 20 43.2 32.8 72 32.8s54.4-12.8 72-32.8c10.4 12 24.8 21.6 40 27.2V544z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-dianpu-xianxing" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M865.6 142.4c-0.8-8-8-14.4-16-14.4H174.4c-8 0-15.2 6.4-16 14.4 0 0-30.4 236.8-30.4 241.6 0 41.6 26.4 77.6 64 90.4V880c0 8.8 7.2 16 16 16h608c8.8 0 16-7.2 16-16V474.4c37.6-12.8 64-48.8 64-90.4 0-5.6-30.4-241.6-30.4-241.6zM424 385.6c-12.8 3.2-24 9.6-32 19.2-3.2 4-11.2 11.2-24 11.2s-20-7.2-24-11.2c-8-8.8-18.4-16-30.4-19.2L335.2 192H432l-8 193.6zM560 192l8 193.6a66.4 66.4 0 0 0-32 19.2c-3.2 4-11.2 11.2-24 11.2s-20-7.2-24-11.2c-8-9.6-19.2-16-32-19.2l8-192.8 96-0.8z m40 193.6L592 192h96.8l21.6 193.6c-12 3.2-22.4 9.6-30.4 19.2-3.2 4-11.2 11.2-24 11.2s-20-7.2-24-11.2a66.4 66.4 0 0 0-32-19.2z m-352 19.2c-4 4-11.2 11.2-24 11.2-16.8 0-30.4-12.8-32-29.6 2.4-19.2 14.4-115.2 24-194.4h87.2l-21.6 192.8c-12.8 3.2-24.8 10.4-33.6 20zM576 832H448V704h128v128z m192 0H640V640H384v192H256V474.4c15.2-5.6 29.6-15.2 40-27.2 17.6 20 43.2 32.8 72 32.8s54.4-12.8 72-32.8c17.6 20 43.2 32.8 72 32.8s54.4-12.8 72-32.8c17.6 20 43.2 32.8 72 32.8s54.4-12.8 72-32.8c10.4 12 24.8 21.6 40 27.2V832z m32-416c-12.8 0-20-7.2-24-11.2a68.96 68.96 0 0 0-33.6-20L720.8 192H808c10.4 78.4 22.4 175.2 24 194.4-0.8 16.8-15.2 29.6-32 29.6z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-kuaidiyuan" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M895.2 767.2V864c0 17.6-14.4 32-32 32h-160V720c0-8.8-7.2-16-16-16h-352c-8.8 0-16 7.2-16 16v176H160.8c-17.6 0-32-14.4-32-32V768c0-128 256-192 383.2-192s383.2 64 383.2 191.2z m-384 128.8h128v-32h-128v32z m64-64h64v-32h-64v32z m-288-544c0 124 100 224 224 224s224-100 224-224-100-224-224-224c-101.6 0-187.2 67.2-214.4 160H191.2v32h98.4c-1.6 10.4-2.4 20.8-2.4 32z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-kuaidiyuan-xianxing" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M512.8 576c-128 0-383.2 64-383.2 192v96c0 17.6 14.4 32 32 32h191.2V736h320v160h192c17.6 0 32-14.4 32-32V767.2C896 640 640.8 576 512.8 576z m319.2 256H704V720c0-8.8-7.2-16-16-16H336c-8.8 0-16 7.2-16 16v112H192.8v-64.8c0-26.4 40-58.4 103.2-84 75.2-29.6 162.4-43.2 216-43.2 53.6 0 140.8 13.6 216 43.2 64 25.6 103.2 57.6 103.2 84l0.8 64.8z m-256-32h64v32h-64v-32z m-64 64h128v32H512v-32zM512 64c-101.6 0-187.2 67.2-214.4 160H192v32h98.4c-1.6 10.4-2.4 20.8-2.4 32 0 124 100 224 224 224s224-100 224-224S636 64 512 64z m0 64c63.2 0 116.8 36.8 143.2 89.6C622.4 204.8 574.4 192 512 192c-60 0-108 11.2-142.4 23.2C396 164 449.6 128 512 128z m0 320c-88 0-160-72-160-160 0-11.2 0.8-21.6 3.2-32 30.4-13.6 84-32 156.8-32 78.4 0 132 21.6 156.8 34.4 1.6 9.6 3.2 19.2 3.2 29.6 0 88-72 160-160 160z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '</svg>'
  var script = function() {
    var scripts = document.getElementsByTagName('script')
    return scripts[scripts.length - 1]
  }()
  var shouldInjectCss = script.getAttribute("data-injectcss")

  /**
   * document ready
   */
  var ready = function(fn) {
    if (document.addEventListener) {
      if (~["complete", "loaded", "interactive"].indexOf(document.readyState)) {
        setTimeout(fn, 0)
      } else {
        var loadFn = function() {
          document.removeEventListener("DOMContentLoaded", loadFn, false)
          fn()
        }
        document.addEventListener("DOMContentLoaded", loadFn, false)
      }
    } else if (document.attachEvent) {
      IEContentLoaded(window, fn)
    }

    function IEContentLoaded(w, fn) {
      var d = w.document,
        done = false,
        // only fire once
        init = function() {
          if (!done) {
            done = true
            fn()
          }
        }
        // polling for no errors
      var polling = function() {
        try {
          // throws errors until after ondocumentready
          d.documentElement.doScroll('left')
        } catch (e) {
          setTimeout(polling, 50)
          return
        }
        // no errors, fire

        init()
      };

      polling()
        // trying to always fire before onload
      d.onreadystatechange = function() {
        if (d.readyState == 'complete') {
          d.onreadystatechange = null
          init()
        }
      }
    }
  }

  /**
   * Insert el before target
   *
   * @param {Element} el
   * @param {Element} target
   */

  var before = function(el, target) {
    target.parentNode.insertBefore(el, target)
  }

  /**
   * Prepend el to target
   *
   * @param {Element} el
   * @param {Element} target
   */

  var prepend = function(el, target) {
    if (target.firstChild) {
      before(el, target.firstChild)
    } else {
      target.appendChild(el)
    }
  }

  function appendSvg() {
    var div, svg

    div = document.createElement('div')
    div.innerHTML = svgSprite
    svgSprite = null
    svg = div.getElementsByTagName('svg')[0]
    if (svg) {
      svg.setAttribute('aria-hidden', 'true')
      svg.style.position = 'absolute'
      svg.style.width = 0
      svg.style.height = 0
      svg.style.overflow = 'hidden'
      prepend(svg, document.body)
    }
  }

  if (shouldInjectCss && !window.__iconfont__svg__cssinject__) {
    window.__iconfont__svg__cssinject__ = true
    try {
      document.write("<style>.svgfont {display: inline-block;width: 1em;height: 1em;fill: currentColor;vertical-align: -0.1em;font-size:16px;}</style>");
    } catch (e) {
      console && console.log(e)
    }
  }

  ready(appendSvg)


})(window)