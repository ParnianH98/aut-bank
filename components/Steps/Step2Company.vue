<template>
  <div>
    <div class="w-100 pt-1">
      <v-row>
        <v-col cols="12" lg="3" md="6" sm="12">
          <v-text-field
            label="نام شرکت"
            outlined
            :value="name"
            @input="updateValue('name', $event)"
          />
        </v-col>
        <v-col cols="12" lg="3" md="6" sm="12">
          <v-text-field label="نام اختصاری" outlined />
        </v-col>
        <v-col cols="12" lg="3" md="6" sm="12">
          <v-text-field
            label="شماره ثبت"
            outlined
            :value="number"
            @input="updateValue('number', $event)"
          />
        </v-col>
        <v-col cols="12" lg="3" md="6" sm="12">
          <v-text-field label="نوع شرکت" outlined />
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="12" lg="3" md="6" sm="12">
          <v-text-field label="ملیت" outlined />
        </v-col>
        <v-col cols="12" lg="3" md="6" sm="12">
          <v-text-field label="محل ‌ثبت" outlined />
        </v-col>
        <v-col cols="12" lg="3" md="6" sm="12">
          <v-text-field label="نوع فعالیت" outlined />
        </v-col>
        <v-col cols="12" lg="3" md="6" sm="12">
          <v-text-field label="شناسه ملی" outlined />
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="12" lg="3" md="6" sm="12">
          <v-text-field label="تاریخ ‌ثبت" outlined />
        </v-col>
        <v-col cols="12" lg="3" md="6" sm="12">
          <v-text-field label="کد اقتصادی" outlined />
        </v-col>
        <v-col cols="12" lg="3" md="6" sm="12">
          <v-text-field label="سرمایه ثبت‌شده" outlined />
        </v-col>
        <v-col cols="12" lg="3" md="6" sm="12">
          <v-text-field label="آدرس پست الکترونیکی" outlined />
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="12">
          <v-textarea
            outlined
            label="آدرس شرکت"
            placeholder="تهران - فرمانیه - خیابان ..."
          />
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="12" lg="4" md="4" sm="12">
          <v-text-field label="تلفن" outlined />
        </v-col>
        <v-col cols="12" lg="4" md="4" sm="12">
          <v-text-field label="نمابر" outlined />
        </v-col>
        <v-col cols="12" lg="4" md="4" sm="12">
          <v-text-field label="کد پستی" outlined />
        </v-col>
      </v-row>
      <v-row justify="center">
        <v-dialog v-model="dialog" width="600px">
          <template v-slot:activator="{ on, attrs }">
            <v-btn color="primary" dark v-bind="attrs" v-on="on">
              مطالعه قوانین حساب
            </v-btn>
          </template>
          <v-card>
            <v-card-title>
              <span>
                شرایط عمومی افتتاح حساب قرض الحسنه پس انداز و سرمایه گذاری کوتاه
                مدت
              </span>
            </v-card-title>
            <v-card-text>
              شرایط عمومی افتتاح حساب قرض الحسنه پس انداز و سرمایه گذاری کوتاه
              مدت
              <br />
              ۱- در مواقعی که صاحب حساب بیش از یک نفر باشد، حق برداشت منفقاََ
              خواهد بود. مگر اینکه صاحبان حساب، نحوه برداشت را هر یک به تنهایی
              یا به هر نحوه دیگر در کارت/فرم افتتاح حساب مشخص نمایند. تبصره۱:
              هریک از صاحبان حساب مکلفند در موقع افتتاح حساب ، قدرالسهم خویش را
              در فرم افتتاح حساب قید نمایند. تبصره۲: حسابهای مشترک با تقاضای
              کتبی هر یک و یا هر تعداد از صاحبان حساب مسدود می شود و پس از مسدود
              شدن مانده حساب و وجوه در راه طبق قدرالسهم های تعیین شده پرداخت
              خواهد شد. تبصره ۳: هرگاه یک از صاحبان امضا بخواهد برای استفاده از
              تمام موجودی حساب به شخص دیگری وکالت دهد، قبولیان از طرف بانک منوط
              به این است که بقیه صاحبان امضا کتباً به بانک اطلاع داده باشند که
              شخص مذکور حق برداشت کل / قسمتی از حساب، به وکالت از طرف دیگری را
              دارد.
              <br />
              ۲- اشخاص حقوقی بدین وسیله اعلام می‌دارند ؛ مدارک معتبر فعلی شرکت
              همان قرآنی هستند که بهش روبه تسلیم شده و متعهدند هر نوع تغییری که
              در اساسنامه و یا تصمیمات هیئت مدیره در رابطه با سمت، اختیارات، مدت
              ماموریت مدیران، صاحبان امضا و یا مکان شرکت به عمل آید، بلافاصله
              بانک را مطلع سازند.
              <br />
              ۳- دارنده / دارندگان حساب در صورت مفقودی / سرقت دفترچه حساب باید
              بلافاصله مراتب را با تکمیل تعهد نامه مطابق فرم بانک به یکی از شعب
              بانک اعلام تا بانک حسب درخواست مشتری و پس از دریافت هزینه مقرر طبق
              تعرفه بانک نسبت به صدور دفترچه المثنی اقدام نماید. در این مورد
              دارنده / دارندگان حساب تعهد خواهند نمود، چنانچه سوء استفاده
              احتمالی نسبت به مانده حساب با استفاده از دفترچه مفقود شده صورت
              گرفته باشد، هیچ گونه مسئولیتی متوجه بانک نبوده و مشتری متعهد
              میگردد به محض پیدا شدن دفترچه مذکور آن را به بانک تسلیم نماید.
              <br />
              ۴- بانک از هر کس برای صاحب حساب در هر یک از شعب خود وجه دریافت می
              نماید؛ ولی پرداخت آن فقط به صاحب حساب و یا قائم مقام قانونی وی در
              هر شعبه با اخذ کارمزد طبق تعرفه (در شعبه غیر افتتاح کننده) صورت می
              پذیرد.
              <br />
              ۵- بانک برای وصول من و مطالبات مستقیم و غیر مستقیم و خسارات ناشی
              از معاملات بانکی مبتنی بر عقود اسلامی از صاحب حساب هر یک از صاحبان
              حساب مشترک اعم از اینکه خود صاحب حساب و یا هر یک از صاحبان حساب
              مشترک بدهکار بوده و یا ضمانت شخصی ثالثی را در اسناد تجاری و یا
              عقود و قراردادها یا هر نوع اسناد تعهدآور دیگر به نفع بانک نموده
              باشد، حق و اختیار دارد با رعایت مقررات قانونی، از اسناد و اوراق
              بهادار، اعم از موجودی های ارزی، ریالی و سپرده سرمایه گذاری های
              بلند مدت حتی اگر سررسید آنها نرسیده باشد و سپرده کوتاه مدت و قرض
              الحسنه پس انداز و یا در مورد حساب قرض الحسنه جاری (پس از به اطلاع
              مشتری) و غیره، هر نوع مال و طلب صاحب حساب / صاحبان حساب مشترک نزد
              خود یا بانک صادرات ایران (مناطق / استان) تحت هر عنوان که باشد را
              بدون انجام هیچگونه تشریفات قضایی، پایاپای یا برداشت نماید و بنا به
              نظر و تشخیص خود، بابت هر طلب و خسارتی که بخواهد محسوب دارد و در
              صورت عدم تکافو، بقیه طلب خود را از وی مطالبه و دریافت دارد و صاحب
              حساب / صاحبان حساب مشترک حق هرگونه اعتراض را تحت هر عنوان که باشد
              از خود سلب و اسقاط نمود / نمودند.
              <br />
              ۶- اختیار بانک در برداشت از حساب ها و نیز از اموال مشتریان بابت
              وصول مطالبات مستقیم و غیر مستقیم خود به شرح بند ۵، در خصوص حساب
              های مشترک و در فرضی که هر یک از صاحبان حساب دارای بدهی به بانک
              باشند نیز وجود دارد و صاحبان حساب مشترک نیز با امضای ذیل این برگه
              رضایت خود را نسبت به اختیار بانک در برداشت از موجودی حساب مشترک
              بابت دین هر یک از شرکاء حساب و به میزان قدرت السهم شرکاء مدیون
              اعلام و حق هرگونه ایراد و اعتراض را از خود سلب و اسقاط نمودند.
              <br />
              ۷- اگر بانک تحت عنوان اشتباهاً یا من غیر حق، وجوه / ارقامی را به
              حساب مشتری منظور یا در محاسبه آن هر نوع اشتباهی نماید در هر موقع
              مجاز و مختار است راسا و مستقلاً بدون انجام هیچ گونه تشریفات اداری
              و قضایی در رفع اشتباه و برگشت و تامین و انتقال وجه واریز شده، از
              حساب مشتری و در صورت عدم کفایت موجودی حساب از سایر حساب های وی
              اقدام نماید و تشخیص بانک نسبت به این امر معتبر بوده و صاحب یا
              صاحبان حساب حق هرگونه اعتراض و ادعایی را به عمل بانک از هر جهت از
              خود سلب و اسقاط نمودند.
              <br />
              ۸- بانک استرداد اصل سپرده های قرض الحسنه پس‌انداز / کوتاه‌مدت را
              تعهد و تضمین می‌نماید.
              <br />
              ۹- اینجانب / این شرکت، اصالتاً، وصیتا، وکالتا ضمن تایید اطلاعات
              ارائه شده، اعلام می‌نمایم: اطلاعات ارائه شده به بانک بر اساس آخرین
              تغییرات بوده و ضمن متعهد می‌شوم هر گونه تغییر در کد و نشانی پستی /
              ثبتی و... را در اسرع وقت به مراجع قانونی ذیربط (ثبت احوال و یا
              اسناد و املاک) اطلاع داده و مستندات تغییرات را به این بانک شعبه
              ارائه نمایم و طبق قانون مبارزه با پولشویی مصوب ۸۶/۱۱/۰۲ مجلس شورای
              اسلامی، متعهد می شوم از هرگونه اقدامی که منجر به پولشویی گردد؛
              خودداری نموده و به اشخاص ثالث (به استثنا وکیل یا نماینده قانونی به
              نفع صاحب حساب) اجازه استفاده از حساب ها، خدمات بانکی و ابزارهای
              بانکداری الکترونیکی خود را ندهم و ضمن مطالعه و قبول شرایط عمومی و
              اختصاصی حساب، در صورت کشف عملی از سوی اینجانب توسط بانک که از
              مصادیق قانون مذکور می باشد، بانک حکمت و اختیار دارد، نسبت به
              انسداد حساب های اینجانب اقدام و ضرر و زیان وارده از این عمل را از
              محل منابع حساب های بانکی هم ضبط و وصول نماید
            </v-card-text>
            <v-card-title>
              شرایط اختصاصی افتتاح حساب قرض الحسنه پس انداز اشخاص حقیقی و حقوقی
            </v-card-title>
            <v-card-text>
              بانک به منظور تشویق دارندگان حساب های قرض الحسنه پس انداز طبق ماده
              ۶ قانون عملیات بانکی بدون ربا، بدون تعهد و یا قرار قبلی با صاحب
              حساب عنداللزوم یک و یا تمام امتیازات و جوایز زیر را بر اساس ضوابطی
              که به تصویب شورای پول و اعتبار رسیده است به دارندگان سپرده های قرض
              الحسنه اعطا می‌نماید ( شرایط شرکت در قرعه کشی و دریافت جایزه،
              مفتوح بودن حساب و دارا بودن حداقل موجودی تعیین شده از سوی بانک
              مرکزی جمهوری اسلامی ایران برای شرکت در قرعه کشی به مدت سه ماه
              متوالی (۹۰ روز) در هر دوره می باشد) الف) اعطای جوایز غیر ثابت نقدی
              و یا غیر نقدی ب) تخفیف یا معافیت از پرداخت کارمزد خدمات بانکی ج)
              دادن حق تقدم برای استفاده از تسهیلات اعطایی بانک تبصره: اشخاصی که
              دارای چندین حساب قرض‌الحسنه پس‌انداز باشند و برنده چند جایزه شوند
              فقط بزرگترین جایزه به آن‌ها قابل اعطا خواهد بود.
            </v-card-text>

            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn color="error darken-1" text @click="dialog = false">
                رد
              </v-btn>
              <v-btn color="green darken-1" text @click="dialog = false">
                موافقم
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-dialog>
      </v-row>
      <v-row>
        <v-col>
          <v-radio-group
            label="حساب :"
            :value="accountType"
            @change="updateValue('accountType', $event)"
            :row="!$vuetify.breakpoint.mobile"
          >
            <v-radio
              v-for="(type, index) in accountTypes"
              :key="index"
              color="info"
              :label="type.title"
              :value="type.value"
            />
          </v-radio-group>
        </v-col>
      </v-row>
      <v-row>
        <v-col>
          <v-radio-group
            label="هدف‌از افتتاح :"
            :value="goalType"
            @change="updateValue('goalType', $event)"
            :row="!$vuetify.breakpoint.mobile"
          >
            <v-radio
              v-for="(type, index) in goalTypes"
              :key="index"
              color="info"
              :label="type.title"
              :value="type.value"
            />
          </v-radio-group>
        </v-col>
      </v-row>
      مدارک افتتاح کننده حساب
      <v-row>
        <v-col cols="12" lg="4" md="4" sm="12">
          <v-file-input show-size label="عکس 3*4" outlined />
        </v-col>
        <v-col cols="12" lg="4" md="4" sm="12">
          <v-file-input
            show-size
            label="تصویر شناسنامه"
            outlined
            multiple
            hint="صفحه اول و دوم شناسنامه"
          />
        </v-col>
        <v-col cols="12" lg="4" md="4" sm="12">
          <v-file-input show-size label="تصویر کارت ملی" outlined />
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="12" lg="4" md="4" sm="12">
          لطفا تصویر کارت ملی و شناسنامه را در کنار چهره خودتان به صورت کاملا
          خوانا و واضح ، دقیقا مانند تصویر نمونه ، ارسال نمایید . هم چنین توجه
          داشته باشید هنگام تهیه تصویر ، شناسنامه و اطلاعات کارت ملی به صورت
          برعکس و آینه ای ثبت نشود.
          <v-file-input class="mt-3" show-size label="عکس" outlined />
        </v-col>
        <v-col cols="12" lg="8" md="8" sm="12">
          <v-img src="/auth_img.jpg" />
        </v-col>
      </v-row>
      مشخصات شرکاء
      <v-row>
        <v-col cols="12" lg="3" sm="12">
          <v-text-field
            label="نام و نام‌خانوادگی"
            outlined
            v-model="participant.fullName"
          />
        </v-col>
        <v-col cols="12" lg="3" sm="12">
          <v-text-field
            label="کدملی"
            outlined
            type="number"
            v-model="participant.nationalCode"
            hint="بدون خط تیره"
          />
        </v-col>
        <v-col cols="12" lg="3" sm="12">
          <v-text-field
            label="قدرالسهم"
            outlined
            type="number"
            v-model="participant.shares"
            hint="درصد"
          />
        </v-col>
        <v-col cols="12" lg="3" sm="12">
          <v-btn
            color="success"
            outlined
            x-large
            class="v-picker--full-width"
            @click="addParticipant"
          >
            افزودن
          </v-btn>
        </v-col>
      </v-row>
      <v-chip
        v-for="(person, index) in persons"
        :key="index"
        class="mx-2 mb-4"
        close
        outlined
        color="primary"
        @click:close="persons.splice(index, 1)"
      >
        {{ person.fullName || "-" }} با کدملی
        {{ person.nationalCode || "-" }} صاحب {{ person.shares || "-" }} از سهام
        شرکت
      </v-chip>
    </div>
    <div class="text-center">
      <v-dialog v-model="dialog2" persistent max-width="290">
        <v-card>
          <v-card-title>
            ارسال اطلاعات
          </v-card-title>
          <v-card-text>
            آیا از صحت اطلاعات وارد شده اطمینان دارید ؟
          </v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn color="error darken-1" text @click="dialog2 = false">
              خیر
            </v-btn>
            <v-btn
              color="green darken-1"
              text
              @click="
                dialog2 = false;
                $emit('next');
              "
            >
              بله
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
    </div>
    <div class="step-footer">
      <v-btn color="error" outlined @click="$emit('prev')">
        مرحله قبل
      </v-btn>
      <v-btn color="primary" outlined @click="dialog2 = true">
        مرحله بعد
      </v-btn>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    accountTypes: {
      type: Array,
      default: () => []
    },
    goalTypes: {
      type: Array,
      default: () => []
    },
    accountType: {
      type: Number,
      default: -1
    },
    accountType: {
      type: Number,
      default: 1
    },
    goalType: {
      type: Number,
      default: 1
    },
    name: {
      type: String,
      default: ""
    },
    number: {
      type: String,
      default: ""
    }
  },
  data: () => ({
    dialog: false,
    dialog2: false,

    persons: [],
    participant: {
      fullName: "",
      nationalCode: null,
      shares: null
    }
  }),
  methods: {
    handleClick(userType) {
      this.$emit("update:type", userType);
      this.$emit("update:participants", [
        ...this.participants,
        Object.assign({}, this.participant)
      ]);
      this.$emit("next");
    },
    addParticipant() {
      this.persons.push(Object.assign({}, this.participant));
      this.resetForm();
    },
    updateValue(field, value) {
      this.$emit(`update:${field}`, value);
    },
    resetForm() {
      this.participant.fullName = "";
      this.participant.nationalCode = null;
      this.participant.shares = null;
    }
  }
};
</script>
<style lang="scss" scoped>
.step-footer {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
</style>
