function InfoList({ list, updateList, detailModal }) {
  console.log(list);

  const deleteHandler = (index) => {
    console.log("삭제 클릭");
    const updatedList = list.filter((_, idx) => idx !== index);
    updateList(updatedList);
  };
  return (
    <div className="info">
      {list.length > 0 ? (
        list.map((info, index) => (
          <div key={info.전화번호}>
            <span>{info.이름}</span>
            <span>{info.전화번호}</span>
            <span>{info.그룹}</span>

            <div className="btnCon">
              <button type="button" onClick={() => detailModal(index)}>
                세부사항
              </button>
              <button type="button" onClick={() => deleteHandler(index)}>
                삭제
              </button>
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
