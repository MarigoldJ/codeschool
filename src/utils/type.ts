export interface TypeCamp {
  // 기본 속성
  _id: string;

  // 분류
  isHot: boolean;
  isSpecialDiscount: boolean;
  recruitStatus: "모집전" | "모집중" | "모집완료";
  category: string[];

  // 수강 정보
  classTitle: string;
  classSkill?: string[];
  classStart: string;
  classPeriod: string;
  classWhere: string;
  classStudentCapacity: number;

  // 수강 정보 상세 이미지
  classThumbnail: string;
  classDetail: string[];

  // FAQ
  classFAQ: FAQ[];
}

export interface FAQ {
  title: string;
  comment: string;
}
