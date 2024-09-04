function Detail({ detailData, closeBtn }) {
  return (
    <div className="backdrop">
      <div className="modal">
        <button className="closeBtn" onClick={closeBtn}>
          닫기
        </button>
        <h1>연락처 상세 정보</h1>
        <div>
          <p>
            <strong>이름:</strong> {detailData.이름}
          </p>
          <p>
            <strong>전화번호:</strong> {detailData.전화번호}
          </p>
          <p>
            <strong>그룹:</strong> {detailData.그룹}
          </p>
          <p>
            <strong>메모:</strong> {detailData.정보}
          </p>
        </div>
      </div>
    </div>
  );
}

export default Detail;
