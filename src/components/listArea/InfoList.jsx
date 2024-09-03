function InfoList({ list }) {
  return (
    <div className="info">
      {list.length > 0 ? (
        list.map((info) => (
          <div key={info.phone}>
            <span>{info.name}</span>
            <span>{info.phone}</span>
            <span>{info.group}</span>

            <div className="btnCon">
              <button>세부사항</button>
              <button>삭제</button>
            </div>
          </div>
        ))
      ) : (
        <div>데이터가 없습니다.</div>
      )}
    </div>
  );
}

export default InfoList;
