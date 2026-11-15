/** Complete human-authored UI, demonstration batch, and anatomy translations.
 * No external translation APIs or runtime network calls are required.
 * IMPORTANT: The three source batches are demonstration records from the supplied website,
 * not independently validated against a live production database.
 */
window.SIFARM_LOCALIZED = {
  en: {
    batches: {
      "912610261847": [
        "Fine Robusta Đắk Lắk — Selectively Harvested Ripe Cherries (Natural / Honey)",
        "Specialty Coffee from Circular Agriculture",
        "Si Farm partner growing region • Quảng Phú Commune, Đắk Lắk Province (approximately 650 m elevation)",
        "2026 harvest season • Selective ripe-cherry picking in October 2026",
        "Si Farm vermicompost-based circular agriculture • No residual agricultural chemicals reported",
        "Over 95% ripe cherries • Temperature-controlled fermentation • Raised-bed drying to 11.2% moisture",
        "Full-bodied with lasting sweetness • Dark chocolate, roasted chestnut and natural brown-sugar notes",
        "Strict checks for moisture and mycotoxins before sealed packaging",
        "Batch 912610261847 offers the naturally sweet finish of ripe-picked Robusta grown with vermicompost soil care, without added flavorings intended to simulate body."
      ],
      "912611121854": [
        "Freeze-Dried Coffee with Natural Aroma Recovery Technology",
        "Advanced Coffee Extraction Preserving Original Aromas",
        "Si Cafe & Si Farm processing facility • Tiến Thành Hamlet, Quảng Phú, Đắk Lắk",
        "Production batch and release check dated November 12, 2026",
        "100% selected coffee beans traceable to Đắk Lắk growing areas • No synthetic flavorings",
        "Optimized-temperature extraction • Natural aroma recovery • Freeze-drying at -40°C",
        "Dissolves instantly in cold or hot water • Fresh-roast aroma and balanced flavor",
        "100% pure coffee extract • No fillers or preservatives",
        "Batch 912611121854 combines instant-coffee convenience with the aroma of genuine roasted coffee through low-temperature freeze-drying."
      ],
      "912611151860": [
        "Natural Non-Alkalized Cocoa Powder",
        "Si Farm Circular Agriculture — Đắk Lắk",
        "Si Farm circularly cultivated cocoa gardens • Đắk Lắk",
        "Naturally fermented, finely ground production batch released in November 2026",
        "Circular model: cocoa husks nourish vermicompost, returning organic nutrients to the soil",
        "Natural wooden-box fermentation • Low-temperature roasting • Natural cocoa-butter pressing • No alkalization",
        "Natural reddish-brown color • Rich authentic cocoa flavor with gentle ripe-fruit acidity",
        "Preservation of naturally occurring cocoa polyphenols and flavanols",
        "Unlike heavily alkalized industrial cocoa, batch 912611151860 retains the cocoa's natural pH and characteristic antioxidant compounds."
      ]
    },
    anatomy: [
      ["Group 1 (first 2 digits — e.g. 91): Ecosystem and Ingredient Category", "The first two digits identify a raw-material category managed in the Si Cafe & Si Farm quality system, such as roasted coffee, freeze-dried coffee or natural cocoa.", "Customer benefit: Makes it easier to distinguish product lines and avoid category mix-ups."],
      ["Group 2 (next 2 digits — e.g. 26): Crop Year and Production Cycle", "The next two digits denote the production year or harvest season; 26, for example, indicates the 2026 cycle.", "Customer benefit: Helps identify the relevant crop season rather than relying on generic freshness claims."],
      ["Group 3 (middle 4 digits — e.g. 1026 or 1112): Batch Time Marker", "These digits encode a month/day or inspection-time reference associated with production at the Quảng Phú facility in Đắk Lắk.", "Customer benefit: Supports comparison with dates printed on the package."],
      ["Group 4 (last 4 digits — e.g. 1847): Unique Batch Identifier", "This identifier distinguishes an individual roasting, processing or grinding batch. Its temperature, moisture and sensory records are held separately in the system.", "Customer benefit: Helps the technical team locate the right batch when you provide feedback or wish to order a similar flavor profile."]
    ],
    ui: {
      statusVerified: "DEMONSTRATION ONLY • NOT VERIFIED PRODUCTION DATA", statusDecoded: "ILLUSTRATIVE FORMAT DECODE • NOT VERIFIED DATA",
      codeLabel: "12-DIGIT TRACEABILITY CODE", region: ["Ingredient Origin", "Đắk Lắk, Vietnam"], farming: ["Farming Approach", "Circular Farming & Vermicompost"],
      chemicals: ["Added Ingredients / Alkalization", "0% Added Flavorings / Alkalization"], trace: ["Traceability Level", "Batch-Level Identification"],
      timeline: [["Stage 01 • Soil", "Growing Region & Microclimate"], ["Stage 02 • Soil Care", "Sustainable Cultivation"], ["Stage 03 • Harvest", "Harvest / Release Date"], ["Stage 04 • Processing", "Technical Controls"], ["Stage 05 • Sensory", "Authentic Flavor Profile"], ["Stage 06 • Safety", "Quality Assurance"]],
      benefitIntro: "Example of the value a batch record could provide:", copy: "Copy demonstration record link", copied: "Demonstration link copied ✓", invalidTitle: "Batch code format:",
      invalid: "A Si Cafe & Si Farm batch code must contain exactly 12 digits (for example, 912610261847). Please check the printed code or select a sample batch above.",
      fallback: {
        productName: "Production Batch #{{batchId}} — Si Cafe & Si Farm", category: "Category {{ecosystem}} • Production cycle 20{{yearCode}}",
        originRegion: "Si Farm partner farms and facility • Quảng Phú Commune, Đắk Lắk Province", harvestDate: "Decoded date marker: {{date}}/20{{yearCode}}",
        cultivationMethod: "Si Farm circular cultivation • Farm records held under the Batch ID", processingSpec: "Processing batch #{{batchId}} • Controlled temperature and moisture, sealed release",
        sensoryProfile: "Detailed sensory information, if available, is retained in the internal technical records at the Đắk Lắk facility",
        safetyStandard: "Si Farm food-safety control and six-stage traceability procedures",
        customerValueSummary: "Code {{code}} matches the 12-digit structure, but this does not verify that the batch exists. To request the specific laboratory record for batch #{{batchId}}, contact the Đắk Lắk technical team at (0262) 372 9000."
      }
    }
  },
  "zh-CN": {
    batches: {
      "912610261847": ["多乐精品罗布斯塔咖啡 — 精选成熟果采收批次（Natural / Honey）", "循环农业种植的精品咖啡", "Si Farm 合作种植区 • 越南 Đắk Lắk 省 Quảng Phú 社（海拔约650米）", "2026年产季 • 2026年10月精选成熟果", "Si Farm 蚯蚓堆肥循环种植 • 记录显示无农药残留", "成熟果比例超过95% • 控温发酵 • 高架通风晾晒至含水率11.2%", "口感浓郁、回甘持久 • 黑巧克力、烤栗子与天然红糖香气", "密封包装前严格控制水分与霉菌毒素", "912610261847批次采用蚯蚓堆肥养护土壤的成熟果罗布斯塔咖啡，不使用旨在制造虚假醇厚感的添加香精，保留自然回甘。"],
      "912611121854": ["采用天然香气回收技术的冻干咖啡", "保留原始香气的深度咖啡萃取产品", "Si Cafe & Si Farm 加工厂 • Đắk Lắk 省 Quảng Phú 社 Tiến Thành 村", "生产及出厂检查日期：2026年11月12日", "100%精选咖啡豆，可追溯至 Đắk Lắk 种植区 • 不添加合成香料", "优化温度萃取 • 天然香气回收 • -40°C冻干", "冷水或热水均可即溶 • 保留新鲜烘焙香气与平衡口感", "100%纯咖啡萃取物 • 无填充剂和防腐剂", "912611121854批次利用低温冻干技术，在提供速溶便利性的同时，保留真实烘焙咖啡的香气。"],
      "912611151860": ["天然非碱化可可粉", "Si Farm Đắk Lắk 循环农业产品", "Si Farm 循环种植可可园 • Đắk Lắk", "2026年11月自然发酵、精磨并出厂的批次", "循环经济模式：利用可可果壳培育蚯蚓堆肥，把有机养分回归土壤", "木箱自然发酵 • 低温烘焙 • 天然压榨可可脂 • 不经碱化", "天然红棕色 • 浓郁纯正可可味，带有柔和熟果酸感", "保留可可中天然存在的多酚及黄烷醇", "与经过强碱化处理的工业可可不同，912611151860批次保留天然pH值以及可可特征性抗氧化成分。"]
    },
    anatomy: [
      ["第1组（前2位，例如91）：生态体系与原料类别", "前两位用于区分Si Cafe & Si Farm质量体系内的原料类型，例如烘焙咖啡、冻干咖啡或天然可可。", "消费者权益：方便区分产品系列，降低原料类别混淆的风险。"],
      ["第2组（接下来2位，例如26）：采收年份与生产周期", "这两位表示产季或生产年份，例如26对应2026年周期。", "消费者权益：帮助识别对应产季，而非仅依赖笼统的新鲜度宣传。"],
      ["第3组（中间4位，例如1026或1112）：批次时间标记", "表示与 Đắk Lắk 省 Quảng Phú 工厂生产或检验相关的月日、时间信息。", "消费者权益：便于与包装标注日期进行对照。"],
      ["第4组（末尾4位，例如1847）：唯一批次编号", "用于区分具体的烘焙、加工或研磨批次，各批次的温度、湿度和感官记录分别保存。", "消费者权益：反馈问题或再次选购相近风味时，技术团队可以定位相应批次。"]
    ],
    ui: {
      statusVerified: "仅供演示 • 非真实验证数据", statusDecoded: "编码结构演示 • 未经真实数据核实", codeLabel: "12位溯源代码",
      region: ["原料产地", "越南 Đắk Lắk"], farming: ["种植模式", "循环农业与蚯蚓堆肥"], chemicals: ["添加香精／碱化", "0%添加香精／碱化"], trace: ["溯源层级", "批次级识别"],
      timeline: [["环节01 • 土壤", "种植区域与微气候"], ["环节02 • 土壤养护", "可持续种植"], ["环节03 • 产季", "采收／出厂日期"], ["环节04 • 加工", "技术参数控制"], ["环节05 • 感官", "真实风味特征"], ["环节06 • 安全", "品质保障"]],
      benefitIntro: "示例：批次档案可提供的参考价值：", copy: "复制演示档案链接", copied: "已复制演示链接 ✓", invalidTitle: "批次码格式提示：",
      invalid: "Si Cafe & Si Farm 批次码必须为12位数字（例如912610261847）。请核对包装上的编号，或选择上方示例批次。",
      fallback: { productName: "生产批次 #{{batchId}} — Si Cafe & Si Farm", category: "类别码 {{ecosystem}} • 20{{yearCode}} 年生产周期", originRegion: "Si Farm 合作种植区与工厂 • Đắk Lắk 省 Quảng Phú 社", harvestDate: "解读出的日期标记：{{date}}/20{{yearCode}}", cultivationMethod: "Si Farm 循环种植 • 农场记录按批次编号保存", processingSpec: "加工批次 #{{batchId}} • 控制温湿度并密封出厂", sensoryProfile: "如有该批次的详细感官资料，保存于 Đắk Lắk 工厂内部技术档案", safetyStandard: "Si Farm 食品安全管理和六环节追溯流程", customerValueSummary: "代码 {{code}} 符合12位编码结构，但这不代表已确认该批次真实存在。如需批次 #{{batchId}} 的实验室记录，请联系 Đắk Lắk 技术团队：(0262) 372 9000。" }
    }
  },
  ko: {
    batches: {
      "912610261847": ["닥락 파인 로부스타 — 엄선된 완숙 체리 수확 로트 (Natural / Honey)", "순환농업으로 재배한 스페셜티 커피", "Si Farm 협력 재배지 • 베트남 닥락성 Quảng Phú (해발 약 650m)", "2026년 수확기 • 2026년 10월 완숙 체리 선별 수확", "Si Farm 지렁이 퇴비 순환농업 • 농약 잔류 없음으로 기록", "완숙 체리 95% 초과 • 온도 제어 발효 • 고상 건조로 수분 함량 11.2%", "풍부한 바디와 긴 단맛의 여운 • 다크초콜릿, 구운 밤, 천연 흑설탕 향", "밀봉 포장 전 수분과 곰팡이독소를 엄격하게 관리", "912610261847 로트는 지렁이 퇴비로 가꾼 토양에서 완숙 수확한 로부스타로, 바디감을 인위적으로 높이는 향료 없이 자연스러운 단맛의 여운을 전달합니다."],
      "912611121854": ["천연 향 회수 기술을 적용한 동결건조 커피", "본연의 향을 보존하는 고도 커피 추출 제품", "Si Cafe & Si Farm 가공 공장 • 닥락성 Quảng Phú의 Tiến Thành마을", "2026년 11월 12일 생산 및 출고 검사 로트", "닥락 재배지 이력 추적이 가능한 엄선 커피 원두 100% • 합성 향료 없음", "최적 온도 추출 • 천연 향 회수 • -40°C 동결건조", "찬물과 뜨거운 물에 즉시 용해 • 신선한 로스팅 향과 균형 잡힌 맛", "순수 커피 추출물 100% • 증량제 및 보존료 없음", "912611121854 로트는 저온 동결건조 기술로 간편한 인스턴트 커피의 장점과 실제 로스팅 커피의 향을 함께 제공합니다."],
      "912611151860": ["천연 비알칼리화 카카오 분말", "Si Farm 닥락 순환농업 농산물", "Si Farm 순환농업 카카오 재배지 • 닥락", "2026년 11월 자연 발효·미세 분쇄 후 출고된 로트", "카카오 껍질로 지렁이 퇴비를 만들어 유기 영양분을 다시 토양으로 돌려주는 순환 모델", "나무 상자 자연 발효 • 저온 로스팅 • 천연 카카오버터 압착 • 알칼리 처리 없음", "천연 적갈색 • 깊은 카카오 맛과 잘 익은 과일의 은은한 산미", "카카오의 천연 폴리페놀 및 플라바놀 보존", "강한 알칼리 처리를 거친 산업용 카카오와 달리 912611151860 로트는 본래의 pH와 카카오 특유의 항산화 성분을 유지합니다."]
    },
    anatomy: [
      ["그룹 1 (첫 2자리, 예: 91): 생태계 및 원료 분류", "첫 두 자리는 Si Cafe & Si Farm의 품질 관리 체계에서 볶은 커피, 동결건조 커피, 천연 카카오 등 원료 유형을 구분합니다.", "고객 혜택: 제품군을 구별해 원료 분류 혼동을 줄이는 데 도움이 됩니다."],
      ["그룹 2 (다음 2자리, 예: 26): 수확 연도 및 생산 주기", "생산 연도나 수확 시즌을 나타내며, 예를 들어 26은 2026년 주기를 의미합니다.", "고객 혜택: 막연한 신선도 주장보다 해당 수확기를 파악할 수 있습니다."],
      ["그룹 3 (가운데 4자리, 예: 1026 또는 1112): 로트 시간 정보", "닥락 Quảng Phú 공장에서의 생산 또는 검사와 관련된 월일 및 시기 정보를 나타냅니다.", "고객 혜택: 포장에 표시된 날짜와 비교하는 데 도움이 됩니다."],
      ["그룹 4 (마지막 4자리, 예: 1847): 고유 배치 식별번호", "각 로스팅·가공·분쇄 로트를 구분하며 온도, 수분, 관능 평가 자료가 별도로 저장됩니다.", "고객 혜택: 문제를 문의하거나 비슷한 풍미로 재구매할 때 기술팀이 해당 로트를 찾을 수 있습니다."]
    ],
    ui: {
      statusVerified: "예시용 자료 • 실제 검증 데이터 아님", statusDecoded: "12자리 코드 구조 예시 • 실제 검증 아님", codeLabel: "12자리 이력 추적 코드",
      region: ["원료 산지", "베트남 닥락"], farming: ["재배 방식", "순환농업 및 지렁이 퇴비"], chemicals: ["첨가 향료/알칼리 처리", "0% 첨가 향료/알칼리 처리"], trace: ["추적 수준", "로트별 식별"],
      timeline: [["단계 01 • 토양", "재배 지역 및 미기후"], ["단계 02 • 토양 관리", "지속가능한 재배"], ["단계 03 • 수확", "수확/출고 시점"], ["단계 04 • 가공", "기술 조건 관리"], ["단계 05 • 관능", "본연의 풍미"], ["단계 06 • 안전", "품질 보증"]],
      benefitIntro: "로트 기록에서 얻을 수 있는 정보의 예시:", copy: "예시 기록 링크 복사", copied: "예시 링크 복사 완료 ✓", invalidTitle: "로트 번호 형식 안내:",
      invalid: "Si Cafe & Si Farm의 로트 번호는 정확히 12자리 숫자여야 합니다(예: 912610261847). 포장의 번호를 확인하거나 위의 예시를 선택하세요.",
      fallback: { productName: "생산 로트 #{{batchId}} — Si Cafe & Si Farm", category: "원료 구분 {{ecosystem}} • 20{{yearCode}}년 생산 주기", originRegion: "Si Farm 협력 재배지 및 시설 • 닥락성 Quảng Phú", harvestDate: "분석된 날짜 정보: {{date}}/20{{yearCode}}", cultivationMethod: "Si Farm 순환농업 • 재배 이력은 로트 ID로 관리", processingSpec: "가공 로트 #{{batchId}} • 온습도 관리 및 밀봉 출고", sensoryProfile: "상세 관능 정보가 있는 경우 닥락 공장 내부 기술 기록에 보관됩니다", safetyStandard: "Si Farm 식품안전 관리 및 6단계 이력 추적 절차", customerValueSummary: "코드 {{code}}는 12자리 구조에 맞지만 실제 생산 로트가 존재한다는 검증은 아닙니다. 로트 #{{batchId}}의 실험실 기록이 필요하면 닥락 기술팀 (0262) 372 9000으로 문의하세요." }
    }
  },
  ja: {
    batches: {
      "912610261847": ["ダクラク産ファインロブスタ — 完熟チェリー選別収穫ロット（Natural / Honey）", "循環農業で栽培したスペシャルティコーヒー", "Si Farm提携栽培地 • ダクラク省Quảng Phú地区（標高約650m）", "2026年の収穫期 • 2026年10月に完熟チェリーを選別収穫", "Si Farmのミミズ堆肥を使った循環農業 • 農薬残留なしとの記録", "完熟チェリー95％超 • 温度管理発酵 • 高床乾燥で水分量11.2％", "しっかりしたコクと長い甘い余韻 • ダークチョコレート、ローストナッツ、黒糖の香り", "密封包装前に水分とカビ毒を厳格に管理", "ロット912610261847はミミズ堆肥で育てた土壌で完熟収穫したロブスタです。人工的にコクを演出する香料を加えず、自然な甘い余韻を楽しめます。"],
      "912611121854": ["天然香気回収技術を用いたフリーズドライコーヒー", "本来の香りを保つ高度なコーヒー抽出製品", "Si Cafe & Si Farm加工工場 • ダクラク省Quảng Phú地区Tiến Thành村", "2026年11月12日製造・出荷検査ロット", "ダクラクの栽培地を追跡できる厳選コーヒー豆100％ • 合成香料不使用", "最適温度での抽出 • 天然香気回収 • -40℃でフリーズドライ", "水でもお湯でもすぐ溶ける • 焙煎したての香りと調和の取れた味", "純粋なコーヒー抽出物100％ • 増量剤・保存料不使用", "ロット912611121854は低温フリーズドライ技術によって、インスタントの便利さと本格的な焙煎コーヒーの香りを両立します。"],
      "912611151860": ["天然・非アルカリ処理カカオパウダー", "Si Farmダクラクの循環農業製品", "Si Farmの循環型カカオ農園 • ダクラク", "2026年11月に自然発酵・微粉砕して出荷したロット", "カカオの殻をミミズ堆肥に活用し、有機栄養分を土壌に戻す循環モデル", "木箱での自然発酵 • 低温焙煎 • 天然カカオバター圧搾 • アルカリ処理なし", "自然な赤褐色 • 豊かなカカオの味と熟した果実を思わせる穏やかな酸味", "カカオ由来の天然ポリフェノールとフラバノールを保持", "強くアルカリ処理した工業用カカオと異なり、ロット912611151860は本来のpHとカカオに特徴的な抗酸化成分を保っています。"]
    },
    anatomy: [
      ["グループ1（先頭2桁、例：91）：事業体系と原料区分", "最初の2桁は、焙煎コーヒー、フリーズドライコーヒー、天然カカオなど、Si Cafe & Si Farm品質管理体系の原料種別を区別します。", "お客様のメリット：製品ラインの混同を防ぎ、原料の種類を確認しやすくします。"],
      ["グループ2（次の2桁、例：26）：収穫年と生産サイクル", "収穫シーズンまたは製造年を示します。例えば26は2026年のサイクルに対応します。", "お客様のメリット：漠然とした『新鮮』という表現ではなく、収穫期の確認に役立ちます。"],
      ["グループ3（中央4桁、例：1026または1112）：ロットの時期情報", "ダクラク省Quảng Phúの工場での生産や検査に関連する月日・時期を表します。", "お客様のメリット：パッケージに印刷された日付と照合する手がかりになります。"],
      ["グループ4（末尾4桁、例：1847）：固有ロット識別番号", "個々の焙煎・加工・粉砕ロットを識別し、温度、水分、官能評価の記録を別々に保存します。", "お客様のメリット：お問い合わせや似た味わいでの再注文時に、技術担当者が対象ロットを特定できます。"]
    ],
    ui: {
      statusVerified: "表示例のみ・実際に検証されたデータではありません", statusDecoded: "12桁のコード構造の表示例・実データの検証ではありません", codeLabel: "12桁の追跡コード",
      region: ["原料の産地", "ベトナム・ダクラク"], farming: ["栽培方式", "循環農業とミミズ堆肥"], chemicals: ["添加香料／アルカリ処理", "0％ 添加香料／アルカリ処理"], trace: ["追跡の単位", "ロット単位で識別"],
      timeline: [["工程01 • 土壌", "栽培地域と微気候"], ["工程02 • 土づくり", "持続可能な栽培"], ["工程03 • 収穫", "収穫／出荷時期"], ["工程04 • 加工", "技術条件の管理"], ["工程05 • 官能", "本来の風味特性"], ["工程06 • 安全", "品質管理"]],
      benefitIntro: "ロット情報から得られる内容の例：", copy: "サンプル記録のリンクをコピー", copied: "サンプルのリンクをコピーしました ✓", invalidTitle: "ロット番号の形式：",
      invalid: "Si Cafe & Si Farmのロット番号は正確に12桁の数字です（例：912610261847）。包装の番号を確認するか、上のサンプルを選択してください。",
      fallback: { productName: "製造ロット #{{batchId}} — Si Cafe & Si Farm", category: "原料区分 {{ecosystem}} • 20{{yearCode}}年生産サイクル", originRegion: "Si Farm提携農場・工場 • ダクラク省Quảng Phú地区", harvestDate: "解析された日付情報：{{date}}/20{{yearCode}}", cultivationMethod: "Si Farm循環農業 • 栽培記録をロットIDで管理", processingSpec: "加工ロット #{{batchId}} • 温度・水分管理と密封出荷", sensoryProfile: "詳細な官能情報がある場合は、ダクラク工場の社内技術記録に保存されています", safetyStandard: "Si Farmの食品安全管理と6工程の追跡手順", customerValueSummary: "コード {{code}} は12桁の形式に一致しますが、実在する製造ロットとして確認されたわけではありません。ロット #{{batchId}} の検査記録については、ダクラク技術担当 (0262) 372 9000 へお問い合わせください。" }
    }
  }
};
