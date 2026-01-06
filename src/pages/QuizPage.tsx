import React, { useState } from "react";
import { motion } from "framer-motion";

interface QuizQuestion {
  questionNumber: number;
  question: string;
  imageUrl?: string | null;
  answerOptions: {
    text: string;
    rationale: string; // nêu rõ vì sao đúng/sai
    isCorrect: boolean;
  }[];
  hint: string;
  source: string;
}

const questions: QuizQuestion[] = [
  {
    questionNumber: 1,
    question:
      "Theo C.Mác và Ph.Ăngghen, sự chuyển biến của các hình thái kinh tế – xã hội từ thấp đến cao diễn ra theo cơ sở nào?",
    imageUrl: null,
    answerOptions: [
      {
        text: "Mong muốn chủ quan của giai cấp thống trị",
        rationale:
          "Sai. Chủ nghĩa duy vật lịch sử bác bỏ quan điểm cho rằng lịch sử chỉ do ý chí của giai cấp thống trị quyết định.",
        isCorrect: false,
      },
      {
        text: "Quy luật khách quan của lịch sử – tự nhiên",
        rationale:
          "Đúng. Mác – Ăngghen khẳng định sự thay thế các hình thái kinh tế – xã hội diễn ra theo các quy luật khách quan của lịch sử – tự nhiên.",
        isCorrect: true,
      },
      {
        text: "Quyết định của Nhà nước",
        rationale:
          "Sai. Nhà nước là bộ phận của kiến trúc thượng tầng, chịu sự quy định của cơ sở kinh tế chứ không phải nguyên nhân quyết định cuối cùng.",
        isCorrect: false,
      },
      {
        text: "Sự lựa chọn của từng quốc gia",
        rationale:
          "Sai. Mỗi quốc gia có con đường riêng, nhưng vẫn vận động trong khuôn khổ các quy luật khách quan chung của lịch sử.",
        isCorrect: false,
      },
    ],
    hint: "Từ khóa: 'lịch sử – tự nhiên', 'quy luật khách quan'.",
    source: "Giáo trình MLN131 – Chương 2: Học thuyết hình thái KT–XH",
  },
  {
    questionNumber: 2,
    question:
      "Quy luật cơ bản nhất quyết định sự thay thế các hình thái kinh tế – xã hội là:",
    imageUrl: null,
    answerOptions: [
      {
        text: "Quy luật cạnh tranh tự do",
        rationale:
          "Sai. Đây là quy luật vận động trong kinh tế thị trường, không phải quy luật cơ bản chi phối sự thay thế các hình thái KT–XH.",
        isCorrect: false,
      },
      {
        text: "Quy luật giá trị và giá trị thặng dư",
        rationale:
          "Sai. Đây là các quy luật kinh tế của sản xuất hàng hóa và CNTB, không phải quy luật cơ bản nhất của mọi hình thái KT–XH.",
        isCorrect: false,
      },
      {
        text: "Quy luật quan hệ sản xuất phải phù hợp với trình độ của lực lượng sản xuất",
        rationale:
          "Đúng. Đây là quy luật 'xương sống' giải thích vì sao các hình thái KT–XH liên tiếp thay thế nhau từ thấp đến cao.",
        isCorrect: true,
      },
      {
        text: "Quy luật cung – cầu",
        rationale:
          "Sai. Cung – cầu chủ yếu điều tiết giá cả trên thị trường, không phải quy luật cơ bản cho sự thay thế hình thái KT–XH.",
        isCorrect: false,
      },
    ],
    hint: "Gợi ý: quy luật 'xương sống' của học thuyết hình thái KT–XH.",
    source: "Giáo trình MLN131 – Chương 2: Quy luật vận động xã hội",
  },
  {
    questionNumber: 3,
    question:
      "Theo Lênin, trong những nước chưa trải qua CNTB phát triển cao như Nga trước Cách mạng Tháng Mười, thời kỳ quá độ lên CNXH có đặc điểm gì?",
    imageUrl: null,
    answerOptions: [
      {
        text: "Ngắn, vì đã có nền sản xuất hiện đại",
        rationale:
          "Sai. Ở các nước kém phát triển, xuất phát điểm thấp nên thời kỳ quá độ không thể ngắn.",
        isCorrect: false,
      },
      {
        text: "Không cần thiết",
        rationale:
          "Sai. Lênin khẳng định giữa CNTB và CNXH bắt buộc phải có một thời kỳ quá độ nhất định.",
        isCorrect: false,
      },
      {
        text: "Rất dài và phức tạp, “như những cơn đau đẻ kéo dài”",
        rationale:
          "Đúng. Lênin ví thời kỳ quá độ ở những nước kém phát triển là những 'cơn đau đẻ kéo dài' – lâu dài, quanh co, phức tạp.",
        isCorrect: true,
      },
      {
        text: "Không liên quan đến nhiệm vụ của giai cấp công nhân",
        rationale:
          "Sai. Giai cấp công nhân và Đảng Cộng sản giữ vai trò lãnh đạo trong toàn bộ thời kỳ quá độ.",
        isCorrect: false,
      },
    ],
    hint: "Nhớ hình ảnh Lênin dùng: “những cơn đau đẻ kéo dài”.",
    source: "Giáo trình MLN131 – Chương 3: Thời kỳ quá độ lên CNXH",
  },
  {
    questionNumber: 4,
    question:
      "Tính tất yếu ra đời của chủ nghĩa xã hội bắt nguồn chủ yếu từ yếu tố nào trong lòng xã hội tư bản?",
    imageUrl: null,
    answerOptions: [
      {
        text: "Sự thất bại của chủ nghĩa phong kiến",
        rationale:
          "Sai. Phong kiến đã bị tư bản chủ nghĩa thay thế từ trước; đây không phải căn nguyên trực tiếp làm ra đời CNXH.",
        isCorrect: false,
      },
      {
        text: "Mâu thuẫn giữa lực lượng sản xuất tiên tiến và quan hệ sản xuất tư bản lỗi thời",
        rationale:
          "Đúng. Khi LLSX xã hội hóa cao mâu thuẫn gay gắt với chế độ chiếm hữu tư nhân TBCN, đòi hỏi một hình thái KT–XH mới – CNXH.",
        isCorrect: true,
      },
      {
        text: "Công nghệ thông tin phát triển nhanh",
        rationale:
          "Sai. Công nghệ là biểu hiện của LLSX phát triển, nhưng bản thân nó không tự sinh ra CNXH nếu QHSX không thay đổi.",
        isCorrect: false,
      },
      {
        text: "Thương mại quốc tế mở rộng",
        rationale:
          "Sai. Thương mại chỉ làm sâu sắc thêm các mâu thuẫn, còn căn nguyên trực tiếp vẫn là mâu thuẫn LLSX – QHSX.",
        isCorrect: false,
      },
    ],
    hint: "Gợi ý: mâu thuẫn cơ bản trong lòng CNTB.",
    source: "Giáo trình MLN131 – Chương 3: Tính tất yếu ra đời CNXH",
  },
  {
    questionNumber: 5,
    question:
      "Nhận định nào sau đây đúng với thực tiễn hiện nay liên quan đến quá độ lên CNXH?",
    imageUrl: null,
    answerOptions: [
      {
        text: "Nhiều nước tư bản phát triển cao đã quá độ thành công lên CNXH",
        rationale:
          "Sai. Thực tiễn thế giới cho thấy chưa có nước tư bản phát triển cao nào quá độ thành công lên CNXH.",
        isCorrect: false,
      },
      {
        text: "Chỉ có các nước phong kiến lạc hậu mới quá độ được lên CNXH",
        rationale:
          "Sai. Mác – Lênin không giới hạn CNXH cho một loại hình xuất phát; đây là diễn biến lịch sử cụ thể, không phải quy luật bắt buộc.",
        isCorrect: false,
      },
      {
        text: "Chưa có nước tư bản phát triển cao nào cách mạng xã hội chủ nghĩa nổ ra và giành thắng lợi",
        rationale:
          "Đúng. Đây là thực tế lịch sử đến nay: các nước xây dựng CNXH đều xuất phát từ trình độ phát triển chưa phải tư bản chủ nghĩa cao.",
        isCorrect: true,
      },
      {
        text: "Quá độ lên CNXH chỉ xảy ra thông qua đấu tranh hòa bình",
        rationale:
          "Sai. Mác – Lênin khẳng định cách mạng xã hội chủ nghĩa nói chung phải gắn với đấu tranh giai cấp, có thể mang nhiều hình thức.",
        isCorrect: false,
      },
    ],
    hint: "Tập trung vào cụm: 'chưa có nước tư bản phát triển cao...'.",
    source: "Giáo trình MLN131 – Chương 3: Thời kỳ quá độ và thực tiễn thế giới",
  },
  {
    questionNumber: 6,
    question:
      "Theo học thuyết hình thái kinh tế – xã hội, yếu tố giữ vai trò quyết định cuối cùng đối với sự vận động và phát triển của xã hội là:",
    imageUrl: null,
    answerOptions: [
      {
        text: "Chính trị",
        rationale:
          "Sai. Chính trị rất quan trọng nhưng thuộc kiến trúc thượng tầng, chịu sự quy định của cơ sở kinh tế.",
        isCorrect: false,
      },
      {
        text: "Văn hóa",
        rationale:
          "Sai. Văn hóa là một bộ phận của ý thức xã hội, không giữ vai trò quyết định cuối cùng.",
        isCorrect: false,
      },
      {
        text: "Kinh tế",
        rationale:
          "Đúng. Mác nhấn mạnh trong phân tích cuối cùng, sự phát triển của lực lượng sản xuất và quan hệ sản xuất (kinh tế) quyết định sự vận động của toàn bộ đời sống xã hội.",
        isCorrect: true,
      },
      {
        text: "Tâm lý xã hội",
        rationale:
          "Sai. Tâm lý xã hội là hình thái ý thức xã hội, bị tác động sâu sắc bởi tồn tại xã hội.",
        isCorrect: false,
      },
    ],
    hint: "Từ khóa: cơ sở hạ tầng – kiến trúc thượng tầng.",
    source: "Giáo trình MLN131 – Chương 2: Cơ sở hạ tầng & kiến trúc thượng tầng",
  },
  {
    questionNumber: 7,
    question:
      "Theo Mác, nguyên nhân sâu xa khiến hình thái KT–XH tư bản chủ nghĩa không thể đứng yên là:",
    imageUrl: null,
    answerOptions: [
      {
        text: "Sự cạnh tranh quốc tế gay gắt",
        rationale:
          "Sai. Cạnh tranh làm bộc lộ mâu thuẫn nhưng không phải căn nguyên sâu xa nhất.",
        isCorrect: false,
      },
      {
        text: "Mâu thuẫn nội tại giữa lực lượng sản xuất và quan hệ sản xuất tư bản",
        rationale:
          "Đúng. Đây là mâu thuẫn cơ bản trong lòng CNTB, tất yếu dẫn tới sự thay thế bằng hình thái KT–XH cao hơn.",
        isCorrect: true,
      },
      {
        text: "Chiến tranh giữa các nước tư bản",
        rationale:
          "Sai. Chiến tranh là kết quả của các mâu thuẫn kinh tế – chính trị, không phải căn nguyên sâu xa nhất của sự thay thế hình thái KT–XH.",
        isCorrect: false,
      },
      {
        text: "Sự ra đời của các ngành công nghiệp mới",
        rationale:
          "Sai. Ngành mới chỉ là biểu hiện của LLSX phát triển; vấn đề là nó xung đột với QHSX cũ.",
        isCorrect: false,
      },
    ],
    hint: "Nhìn vào mối quan hệ giữa LLSX và QHSX trong CNTB.",
    source: "Giáo trình MLN131 – Chương 2: Mâu thuẫn cơ bản của CNTB",
  },
  {
    questionNumber: 8,
    question:
      "Khẳng định nào sau đây đúng với quan điểm duy vật lịch sử?",
    imageUrl: null,
    answerOptions: [
      {
        text: "Ý thức xã hội quyết định tồn tại xã hội",
        rationale:
          "Sai. Đây là quan điểm duy tâm lịch sử, đặt ý thức lên trước tồn tại xã hội.",
        isCorrect: false,
      },
      {
        text: "Tồn tại xã hội quyết định ý thức xã hội",
        rationale:
          "Đúng. Mác khẳng định tồn tại xã hội (đời sống vật chất) quyết định ý thức xã hội, dù ý thức có tính độc lập tương đối.",
        isCorrect: true,
      },
      {
        text: "Con người có thể chủ động thay đổi mọi quy luật xã hội",
        rationale:
          "Sai. Con người có thể nhận thức và vận dụng quy luật, nhưng không thể xóa bỏ hay tạo ra quy luật tùy ý.",
        isCorrect: false,
      },
      {
        text: "Ý thức có thể vượt trước và thay đổi quy luật kinh tế",
        rationale:
          "Sai. Ý thức có thể đi trước, dự báo, nhưng không thể thay đổi bản thân quy luật khách quan.",
        isCorrect: false,
      },
    ],
    hint: "Nhớ cặp khái niệm: tồn tại xã hội ↔ ý thức xã hội.",
    source: "Giáo trình MLN131 – Chương 2: Chủ nghĩa duy vật lịch sử",
  },
  {
    questionNumber: 9,
    question:
      "Theo nội dung bài học, sự thay thế phong kiến → tư bản → xã hội chủ nghĩa diễn ra chủ yếu do:",
    imageUrl: null,
    answerOptions: [
      {
        text: "Quyết định của nhà nước phong kiến",
        rationale:
          "Sai. Nhà nước phong kiến thường chống lại sự ra đời của phương thức sản xuất mới.",
        isCorrect: false,
      },
      {
        text: "Tư tưởng cách mạng của quần chúng",
        rationale:
          "Sai. Tư tưởng cách mạng rất quan trọng nhưng nó bắt nguồn từ những mâu thuẫn kinh tế – xã hội khách quan.",
        isCorrect: false,
      },
      {
        text: "Mâu thuẫn trong chính phương thức sản xuất cũ",
        rationale:
          "Đúng. Khi mâu thuẫn giữa LLSX phát triển và QHSX lỗi thời trong phương thức sản xuất cũ trở nên gay gắt sẽ dẫn đến cách mạng xã hội và sự thay thế hình thái KT–XH.",
        isCorrect: true,
      },
      {
        text: "Sự giúp đỡ từ các nước khác",
        rationale:
          "Sai. Yếu tố quốc tế có tác động, nhưng căn nguyên quyết định vẫn nằm trong mâu thuẫn nội tại của mỗi xã hội.",
        isCorrect: false,
      },
    ],
    hint: "Tập trung vào 'mâu thuẫn nội tại' của mỗi hình thái KT–XH.",
    source: "Giáo trình MLN131 – Chương 2: Sự thay thế các hình thái KT–XH",
  },
  {
    questionNumber: 10,
    question:
      "Theo Lênin, thời kỳ quá độ từ CNTB lên CNXH ở các nước kém phát triển có đặc điểm:",
    imageUrl: null,
    answerOptions: [
      {
        text: "Không có đối kháng giai cấp",
        rationale:
          "Sai. Trong thời kỳ quá độ vẫn tồn tại đấu tranh giai cấp với nhiều hình thức khác nhau.",
        isCorrect: false,
      },
      {
        text: "Rất ngắn vì kinh tế đã sẵn sàng",
        rationale:
          "Sai. Xuất phát điểm thấp khiến thời kỳ quá độ ở các nước này càng lâu dài và phức tạp.",
        isCorrect: false,
      },
      {
        text: "“Những cơn đau đẻ kéo dài” – phức tạp và lâu dài",
        rationale:
          "Đúng. Lênin dùng hình ảnh này để nhấn mạnh tính quanh co, kéo dài, nặng nề về kinh tế – xã hội của thời kỳ quá độ.",
        isCorrect: true,
      },
      {
        text: "Không cần công nghiệp hóa",
        rationale:
          "Sai. Ngược lại, công nghiệp hóa là nhiệm vụ trung tâm của thời kỳ quá độ ở các nước kém phát triển.",
        isCorrect: false,
      },
    ],
    hint: "Liên hệ lại hình ảnh ví von trong bài giảng của Lênin.",
    source: "Giáo trình MLN131 – Chương 3: Đặc điểm thời kỳ quá độ",
  },
  {
    questionNumber: 11,
    question:
      "Lý do khiến thời kỳ quá độ ở Việt Nam kéo dài hơn so với mô hình dự báo của Mác – Ăngghen là:",
    imageUrl: null,
    answerOptions: [
      {
        text: "Việt Nam là nước tư bản phát triển cao",
        rationale:
          "Sai. Việt Nam quá độ lên CNXH từ một xuất phát điểm thấp, không phải TBCN phát triển cao.",
        isCorrect: false,
      },
      {
        text: "Việt Nam chuyển lên từ nền kinh tế nông nghiệp lạc hậu, thuộc địa – phong kiến",
        rationale:
          "Đúng. Xuất phát điểm thấp, bị chiến tranh tàn phá khiến nhiệm vụ thời kỳ quá độ nặng nề, nên kéo dài là tất yếu khách quan.",
        isCorrect: true,
      },
      {
        text: "Việt Nam có tài nguyên nghèo nàn",
        rationale:
          "Sai. Điều kiện tài nguyên có ảnh hưởng nhưng không phải lý do lý luận chính giải thích tính kéo dài của thời kỳ quá độ.",
        isCorrect: false,
      },
      {
        text: "Giai cấp công nhân quá đông",
        rationale:
          "Sai. Trước Cách mạng, giai cấp công nhân Việt Nam còn non trẻ, số lượng không lớn.",
        isCorrect: false,
      },
    ],
    hint: "Gợi ý: xuất phát điểm kinh tế – xã hội của Việt Nam trước 1945.",
    source:
      "Giáo trình MLN131 – Chương 3: Đặc điểm thời kỳ quá độ lên CNXH ở Việt Nam",
  },
  {
    questionNumber: 12,
    question:
      "Lực lượng đóng vai trò động lực và lãnh đạo trong cách mạng xã hội chủ nghĩa là:",
    imageUrl: null,
    answerOptions: [
      {
        text: "Giai cấp nông dân",
        rationale:
          "Sai. Nông dân là lực lượng cách mạng quan trọng nhưng không giữ vai trò lãnh đạo.",
        isCorrect: false,
      },
      {
        text: "Trí thức",
        rationale:
          "Sai. Trí thức có vai trò to lớn về khoa học – văn hóa, song không phải lực lượng lãnh đạo về mặt giai cấp.",
        isCorrect: false,
      },
      {
        text: "Giai cấp công nhân và Đảng Cộng sản",
        rationale:
          "Đúng. Giai cấp công nhân với đội tiên phong là Đảng Cộng sản giữ vai trò lãnh đạo cách mạng xã hội chủ nghĩa.",
        isCorrect: true,
      },
      {
        text: "Toàn bộ giai cấp tư sản tiến bộ",
        rationale:
          "Sai. Giai cấp tư sản về cơ bản đối lập lợi ích với CNXH, không thể là lực lượng lãnh đạo cách mạng XHCN.",
        isCorrect: false,
      },
    ],
    hint: "Nhớ luận điểm: giai cấp công nhân – lực lượng lãnh đạo cách mạng XHCN.",
    source: "Giáo trình MLN131 – Chương 3: Giai cấp công nhân & CNXH",
  },
  {
    questionNumber: 13,
    question:
      "Trong hình thái kinh tế – xã hội, “cơ sở hạ tầng” bao gồm:",
    imageUrl: null,
    answerOptions: [
      {
        text: "Toàn bộ thiết chế chính trị",
        rationale:
          "Sai. Thiết chế chính trị thuộc về kiến trúc thượng tầng, không phải cơ sở hạ tầng.",
        isCorrect: false,
      },
      {
        text: "Hệ thống pháp luật",
        rationale:
          "Sai. Pháp luật là bộ phận của kiến trúc thượng tầng.",
        isCorrect: false,
      },
      {
        text: "Quan hệ sản xuất",
        rationale:
          "Đúng. Cơ sở hạ tầng gồm toàn bộ các quan hệ sản xuất tạo thành cơ cấu kinh tế của xã hội.",
        isCorrect: true,
      },
      {
        text: "Tư tưởng, tôn giáo",
        rationale:
          "Sai. Tư tưởng, tôn giáo là hình thái ý thức xã hội, thuộc kiến trúc thượng tầng.",
        isCorrect: false,
      },
    ],
    hint: "Tách bạch: cái gì thuộc 'quan hệ sản xuất' – cái gì thuộc 'thiết chế chính trị'.",
    source:
      "Giáo trình MLN131 – Chương 2: Cơ sở hạ tầng & kiến trúc thượng tầng",
  },
  {
    questionNumber: 14,
    question:
      "Nhận định nào sau đây thể hiện đúng bản chất của hình thái KT–XH cộng sản chủ nghĩa?",
    imageUrl: null,
    answerOptions: [
      {
        text: "Xóa bỏ hoàn toàn sản xuất hàng hóa",
        rationale:
          "Sai. Ở giai đoạn đầu (CNXH) vẫn còn tồn tại nhiều yếu tố sản xuất hàng hóa.",
        isCorrect: false,
      },
      {
        text: "Xã hội không còn giai cấp và không còn bóc lột",
        rationale:
          "Đúng. Ở giai đoạn cao của CSCN, chế độ tư hữu tư bản bị xóa bỏ, không còn giai cấp đối kháng và tình trạng người bóc lột người.",
        isCorrect: true,
      },
      {
        text: "Nhà nước trở nên toàn trị, kiểm soát toàn bộ kinh tế",
        rationale:
          "Sai. Trái lại, ở giai đoạn cao, nhà nước dần tiêu vong khi những cơ sở tồn tại của nó không còn.",
        isCorrect: false,
      },
      {
        text: "Không cần phát triển lực lượng sản xuất",
        rationale:
          "Sai. Lực lượng sản xuất phải phát triển rất cao mới tạo điều kiện vật chất cho CSCN.",
        isCorrect: false,
      },
    ],
    hint: "Đọc kỹ đặc trưng 'không còn giai cấp, không còn bóc lột'.",
    source: "Giáo trình MLN131 – Chương 3: Đặc trưng hình thái KT–XH CSCN",
  },
  {
    questionNumber: 15,
    question:
      "Khi C.Mác nói “sự phát triển của xã hội loài người là một quá trình lịch sử – tự nhiên”, ông muốn nhấn mạnh rằng:",
    imageUrl: null,
    answerOptions: [
      {
        text: "Con người không thể tác động vào xã hội",
        rationale:
          "Sai. Con người có thể tác động vào xã hội nhưng phải dựa trên việc hiểu và vận dụng các quy luật khách quan.",
        isCorrect: false,
      },
      {
        text: "Sự phát triển hoàn toàn ngẫu nhiên",
        rationale:
          "Sai. 'Lịch sử – tự nhiên' nghĩa là có quy luật khách quan, không phải ngẫu nhiên.",
        isCorrect: false,
      },
      {
        text: "Sự vận động xã hội tuân theo quy luật khách quan",
        rationale:
          "Đúng. Mác muốn khẳng định lịch sử có tính quy luật khách quan, giống như tự nhiên, chứ không do ý chí chủ quan chi phối.",
        isCorrect: true,
      },
      {
        text: "Mọi chuyển biến xã hội đều dựa trên đạo đức",
        rationale:
          "Sai. Đạo đức là một hình thái ý thức; căn nguyên sâu xa của biến đổi xã hội nằm ở kinh tế và các quy luật khách quan.",
        isCorrect: false,
      },
    ],
    hint: "Từ khóa: 'quy luật khách quan', không phải 'ngẫu nhiên' hay 'ý chí'.",
    source:
      "Giáo trình MLN131 – Chương 2: Quan niệm duy vật về lịch sử xã hội loài người",
  },
];

const Quiz: React.FC = () => {
  const [current, setCurrent] = useState(0);
  const [selected, setSelected] = useState<null | number>(null);
  const [showFeedback, setShowFeedback] = useState(false);
  const [score, setScore] = useState(0);
  const [answers, setAnswers] = useState<(number | null)[]>(
    Array(questions.length).fill(null)
  );
  const [showHint, setShowHint] = useState(false);

  const handleAnswer = (idx: number) => {
    if (answers[current] !== null) return;
    setSelected(idx);
    setShowFeedback(true);
    setAnswers((prev) => {
      const arr = [...prev];
      arr[current] = idx;
      return arr;
    });
    if (questions[current].answerOptions[idx].isCorrect) setScore((s) => s + 1);
  };

  const handleNext = () => {
    setSelected(null);
    setShowFeedback(false);
    setShowHint(false);
    setCurrent((c) => Math.min(c + 1, questions.length));
  };

  const handlePrev = () => {
    setSelected(null);
    setShowFeedback(false);
    setShowHint(false);
    setCurrent((c) => Math.max(c - 1, 0));
  };

  const resetQuiz = () => {
    setCurrent(0);
    setScore(0);
    setSelected(null);
    setShowFeedback(false);
    setShowHint(false);
    setAnswers(Array(questions.length).fill(null));
  };

  const isAnswered = answers[current] !== null;
  const isCorrectAnswer =
    answers[current] !== null &&
    questions[current]?.answerOptions[answers[current] as number]?.isCorrect;

  const findCorrectAnswerIndex = (q: QuizQuestion) =>
    q.answerOptions.findIndex((opt) => opt.isCorrect);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-slate-900 py-10 px-2">
      <motion.div
        className="w-full max-w-2xl bg-slate-800/90 rounded-2xl shadow-xl p-6 md:p-10"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
      >
        <h2 className="text-3xl md:text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-orange-300 to-orange-500 mb-8 text-center drop-shadow">
          Quiz ôn tập – Chủ Nghĩa Xã Hội Khoa Học
        </h2>

        {current < questions.length ? (
          <>
            <div className="text-lg font-medium mb-6 text-slate-100 text-center">
              Câu {current + 1}/{questions.length}:<br />
              <span className="font-semibold">
                {questions[current].question}
              </span>
            </div>

            <div className="flex flex-col gap-3 mb-6">
              {questions[current].answerOptions.map((opt, idx) => {
                const isSelected = selected === idx || answers[current] === idx;
                const isCorrect = opt.isCorrect;
                const showResult = showFeedback || isAnswered;
                let btnClass = "";
                if (showResult) {
                  if (isSelected && isCorrect)
                    btnClass = "bg-green-500 text-white border-green-600";
                  else if (isSelected && !isCorrect)
                    btnClass = "bg-red-500 text-white border-red-600";
                  else if (isCorrect)
                    btnClass = "bg-green-900/40 border-green-400 text-green-300";
                  else btnClass = "bg-slate-700 border-slate-600 text-slate-300";
                } else {
                  btnClass = isSelected
                    ? "bg-orange-500 border-orange-400 text-white"
                    : "bg-slate-700 border-slate-600 text-slate-200 hover:bg-slate-600";
                }
                return (
                  <motion.button
                    key={idx}
                    whileTap={{ scale: 0.97 }}
                    className={`w-full px-4 py-3 rounded-lg text-lg font-medium border-2 shadow transition-all text-left ${btnClass}`}
                    disabled={showResult}
                    onClick={() => handleAnswer(idx)}
                  >
                    {String.fromCharCode(65 + idx)}. {opt.text}
                  </motion.button>
                );
              })}
            </div>

            {(showFeedback || isAnswered) && (
              <motion.div
                className="text-left mb-4"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.4 }}
              >
                {(() => {
                  const chosenIdx = answers[current] as number | null;
                  const correctIdx = findCorrectAnswerIndex(questions[current]);
                  const opts = questions[current].answerOptions;

                  if (chosenIdx === null) return null;

                  return (
                    <div className="space-y-4">
                      <div
                        className={`text-lg font-semibold ${
                          isCorrectAnswer ? "text-green-600" : "text-red-600"
                        }`}
                      >
                        {isCorrectAnswer ? "Chính xác!" : "Chưa đúng!"}
                      </div>

                      {!isCorrectAnswer && (
                        <div className="bg-red-900/30 border-l-4 border-red-400 p-3 rounded">
                          <div className="font-semibold text-red-300 mb-1">
                            Vì sao bạn chọn sai:
                          </div>
                          <div className="text-slate-200">
                            {opts[chosenIdx].rationale}
                          </div>
                        </div>
                      )}

                      <div className="bg-green-900/30 border-l-4 border-green-500 p-3 rounded">
                        <div className="font-semibold text-green-300 mb-1">
                          Đáp án đúng:&nbsp;
                          {String.fromCharCode(65 + correctIdx)}.{" "}
                          {opts[correctIdx].text}
                        </div>
                        <div className="text-slate-200">
                          {opts[correctIdx].rationale}
                        </div>
                      </div>

                      <div className="bg-slate-900/60 border border-slate-700 p-3 rounded">
                        <div className="font-semibold text-slate-200 mb-2">
                          Vì sao các phương án khác sai:
                        </div>
                        <ul className="list-disc pl-5 space-y-2 text-slate-300">
                          {opts.map((op, i) => {
                            if (i === correctIdx) return null;
                            if (!op.rationale) return null;
                            if (!isCorrectAnswer && i === chosenIdx) return null;
                            return (
                              <li key={i}>
                                <span className="font-medium">
                                  {String.fromCharCode(65 + i)}. {op.text}:
                                </span>{" "}
                                {op.rationale}
                              </li>
                            );
                          })}
                        </ul>
                      </div>
                    </div>
                  );
                })()}
              </motion.div>
            )}

            <div className="flex justify-between items-center mt-6">
              <button
                className="px-5 py-2 bg-slate-700 text-slate-200 rounded-lg hover:bg-slate-600 transition disabled:opacity-50"
                onClick={handlePrev}
                disabled={current === 0}
              >
                Câu trước
              </button>
              <button
                className="px-5 py-2 bg-yellow-500 text-yellow-900 rounded-lg hover:bg-yellow-600 transition disabled:opacity-50"
                onClick={() => setShowHint(!showHint)}
              >
                Gợi ý
              </button>
              <button
                className="px-5 py-2 bg-orange-500 text-white rounded-lg hover:bg-orange-600 transition disabled:opacity-50"
                onClick={handleNext}
                disabled={!isAnswered}
              >
                Câu tiếp
              </button>
            </div>

            <motion.div
              className="mt-4 p-4 text-center bg-yellow-900/30 text-yellow-200 border-l-4 border-yellow-400 rounded-lg"
              initial={{ opacity: 0, height: 0 }}
              animate={{
                opacity: showHint ? 1 : 0,
                height: showHint ? "auto" : 0,
              }}
              transition={{ duration: 0.3 }}
            >
              <div className="font-semibold mb-2">Gợi ý:</div>
              <div className="text-sm italic">{questions[current].hint}</div>
            </motion.div>
          </>
        ) : (
          <motion.div
            className="text-center"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            <div className="text-2xl font-bold text-orange-400 mb-2">
              Hoàn thành!
            </div>
            <div className="text-lg mb-4 text-slate-100">
              Bạn đúng <span className="text-green-400 font-bold">{score}</span>
              /{questions.length} câu.
            </div>

            {answers.some(
              (ans, idx) =>
                idx < questions.length &&
                ans !== null &&
                !questions[idx]?.answerOptions[ans]?.isCorrect
            ) && (
              <div className="mt-6 text-left max-w-xl mx-auto">
                <div className="font-semibold text-red-400 mb-2">
                  Các câu bạn trả lời sai, hãy lưu ý:
                </div>
                <ul className="space-y-4">
                  {questions.map((q, idx) =>
                    answers[idx] !== null &&
                    !q.answerOptions[answers[idx] as number].isCorrect ? (
                      <li
                        key={idx}
                        className="bg-red-900/30 border-l-4 border-red-400 p-4 rounded"
                      >
                        <div className="font-medium text-slate-100 mb-1">
                          Câu {idx + 1}: {q.question}
                        </div>
                        <div className="text-slate-200 mb-1">
                          <span className="font-semibold">Đáp án đúng:</span>{" "}
                          {String.fromCharCode(
                            65 + findCorrectAnswerIndex(q)
                          )}
                          .{" "}
                          {
                            q.answerOptions[
                              findCorrectAnswerIndex(q)
                            ].text
                          }
                        </div>
                        <div className="text-slate-300 text-sm italic">
                          {"Giải thích: " +
                            q.answerOptions[
                              findCorrectAnswerIndex(q)
                            ].rationale.substring(5)}
                        </div>
                      </li>
                    ) : null
                  )}
                </ul>
              </div>
            )}

            <button
              className="mt-8 px-6 py-3 bg-orange-500 text-white rounded-lg hover:bg-orange-600 transition"
              onClick={resetQuiz}
            >
              Làm lại Quiz
            </button>
          </motion.div>
        )}
      </motion.div>
    </div>
  );
};

export default Quiz;
